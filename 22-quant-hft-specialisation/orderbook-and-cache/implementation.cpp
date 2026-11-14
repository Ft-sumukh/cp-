/**
 * Architecture: Low-Latency Level-2 Limit Order Book (L2 Price Ladder)
 * Language: C++20
 * Optimization: -std=c++20 -O2 -Wall -Wextra
 *
 * Design Invariants:
 *   1. Zero dynamic allocations in the hot path
 *   2. Flat cache-aligned memory layout (alignas(64))
 *   3. O(1) tick-based price lookups
 */

#include <iostream>
#include <vector>
#include <array>
#include <cstdint>
#include <limits>
#include <span>

using PriceTick = int32_t;
using Quantity = int32_t;

// Cache-line aligned Level-2 Order Book price ladder
class alignas(64) FlatL2OrderBook {
public:
    static constexpr size_t MAX_TICKS = 10000; // Covers 10,000 tick price range ($100 spread at $0.01)

private:
    PriceTick base_price_tick;
    alignas(64) std::array<Quantity, MAX_TICKS> bid_volume{};
    alignas(64) std::array<Quantity, MAX_TICKS> ask_volume{};

    PriceTick best_bid_tick = -1;
    PriceTick best_ask_tick = std::numeric_limits<PriceTick>::max();

public:
    explicit FlatL2OrderBook(PriceTick base_tick) : base_price_tick(base_tick) {}

    // Add or update resting volume at a given price tick
    void update_level(bool is_buy, PriceTick tick, Quantity new_volume) {
        size_t idx = static_cast<size_t>(tick - base_price_tick);
        if (idx >= MAX_TICKS) return; // Out of bounds safety guard

        if (is_buy) {
            bid_volume[idx] = new_volume;
            if (new_volume > 0) {
                if (best_bid_tick == -1 || tick > best_bid_tick) {
                    best_bid_tick = tick;
                }
            } else if (tick == best_bid_tick) {
                // Scan downwards for next non-empty bid level
                while (best_bid_tick >= base_price_tick && 
                       bid_volume[best_bid_tick - base_price_tick] == 0) {
                    best_bid_tick--;
                }
            }
        } else {
            ask_volume[idx] = new_volume;
            if (new_volume > 0) {
                if (tick < best_ask_tick) {
                    best_ask_tick = tick;
                }
            } else if (tick == best_ask_tick) {
                // Scan upwards for next non-empty ask level
                while (best_ask_tick < static_cast<PriceTick>(base_price_tick + MAX_TICKS) && 
                       ask_volume[best_ask_tick - base_price_tick] == 0) {
                    best_ask_tick++;
                }
            }
        }
    }

    [[nodiscard]] PriceTick get_best_bid() const { return best_bid_tick; }
    [[nodiscard]] PriceTick get_best_ask() const { return best_ask_tick; }

    [[nodiscard]] Quantity get_bid_depth(PriceTick tick) const {
        size_t idx = static_cast<size_t>(tick - base_price_tick);
        return (idx < MAX_TICKS) ? bid_volume[idx] : 0;
    }

    [[nodiscard]] Quantity get_ask_depth(PriceTick tick) const {
        size_t idx = static_cast<size_t>(tick - base_price_tick);
        return (idx < MAX_TICKS) ? ask_volume[idx] : 0;
    }
};

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    PriceTick base_tick = 10000; // Represents $100.00
    FlatL2OrderBook book(base_tick);

    // Incoming market updates:
    book.update_level(true, 10005, 500);  // Bid $100.05, 500 shares
    book.update_level(true, 10007, 300);  // Bid $100.07, 300 shares
    book.update_level(false, 10010, 1000); // Ask $100.10, 1000 shares

    std::cout << "Best Bid Tick: " << book.get_best_bid() << " (Qty: " << book.get_bid_depth(book.get_best_bid()) << ")\n";
    std::cout << "Best Ask Tick: " << book.get_best_ask() << " (Qty: " << book.get_ask_depth(book.get_best_ask()) << ")\n";
    std::cout << "Spread: " << (book.get_best_ask() - book.get_best_bid()) << " ticks\n";

    // Cancel best bid level
    book.update_level(true, 10007, 0);
    std::cout << "New Best Bid after cancel: " << book.get_best_bid() << "\n"; // Drops back to 10005!

    return 0;
}
