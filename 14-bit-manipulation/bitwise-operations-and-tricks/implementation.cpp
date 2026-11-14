/**
 * Algorithm: Bit Manipulation & C++20 Standard Bit Library
 * Language: C++20
 * Optimization: -std=c++20 -O2 -Wall -Wextra
 *
 * Demonstrates:
 *   1. Hardware-level bit tricks (lowbit, power of 2, bit flipping)
 *   2. C++20 <bit> features (std::popcount, std::countl_zero, std::has_single_bit)
 *   3. O(3^N) all-submask enumeration idiom
 */

#include <iostream>
#include <vector>
#include <cstdint>
#include <bit>

using u64 = uint64_t;

// Isolate lowest set bit (e.g. 12 = 0b1100 -> 4 = 0b0100)
constexpr int64_t lowbit(int64_t x) {
    return x & (-x);
}

// Clear lowest set bit (Brian Kernighan's trick)
constexpr int64_t clear_lowest_set_bit(int64_t x) {
    return x & (x - 1);
}

// Check if x is an exact power of 2
constexpr bool is_power_of_two(u64 x) {
    // In C++20: return std::has_single_bit(x);
    return x > 0 && (x & (x - 1)) == 0;
}

// Enumerate all submasks of a mask
std::vector<int> get_all_submasks(int mask) {
    std::vector<int> submasks;
    for (int s = mask; s > 0; s = (s - 1) & mask) {
        submasks.push_back(s);
    }
    submasks.push_back(0); // Add the empty submask
    return submasks;
}

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    int64_t num = 12; // 0b1100
    std::cout << "Number: " << num << "\n";
    std::cout << "Lowest set bit (lowbit): " << lowbit(num) << "\n"; // 4

    // C++20 <bit> demonstrations
    u64 val = 0b10010110;
    std::cout << "Value: " << val << "\n";
    std::cout << "Set bits (popcount): " << std::popcount(val) << "\n";         // 4
    std::cout << "Leading zeros (64-bit): " << std::countl_zero(val) << "\n";    // 56
    std::cout << "Trailing zeros: " << std::countr_zero(val) << "\n";           // 1
    std::cout << "Is 16 a power of 2: " << std::has_single_bit(16ULL) << "\n";   // 1

    // Submask enumeration demonstration for mask = 13 (0b1101)
    int mask = 13;
    auto submasks = get_all_submasks(mask);
    std::cout << "Submasks of " << mask << ": ";
    for (int s : submasks) {
        std::cout << s << " ";
    }
    std::cout << "\n"; // Expected: 13 12 9 8 5 4 1 0

    return 0;
}
