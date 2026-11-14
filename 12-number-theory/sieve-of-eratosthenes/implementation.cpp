/**
 * Algorithm: Linear Sieve (Euler's Sieve) with Smallest Prime Factor (SPF)
 * Language: C++20
 * Optimization: -std=c++20 -O2 -Wall -Wextra
 *
 * Precomputes:
 *   1. All primes up to N in strictly O(N) time
 *   2. Smallest Prime Factor (SPF) for all numbers up to N
 * Supports:
 *   - Fast prime factorization of any X <= N in O(log X) time
 */

#include <iostream>
#include <vector>
#include <map>
#include <cstdint>

class LinearSieve {
private:
    int limit;
    std::vector<int> spf;
    std::vector<int> primes;

public:
    explicit LinearSieve(int n) : limit(n), spf(n + 1) {
        for (int i = 0; i <= n; ++i) spf[i] = i;

        for (int i = 2; i <= n; ++i) {
            if (spf[i] == i) {
                primes.push_back(i);
            }
            for (int p : primes) {
                if (p > spf[i] || static_cast<int64_t>(p) * i > n) {
                    break;
                }
                spf[p * i] = p;
            }
        }
    }

    // Check primality in O(1)
    [[nodiscard]] bool is_prime(int x) const {
        if (x <= 1 || x > limit) return false;
        return spf[x] == x;
    }

    // Get Smallest Prime Factor in O(1)
    [[nodiscard]] int get_spf(int x) const {
        return (x >= 2 && x <= limit) ? spf[x] : -1;
    }

    // Get all prime numbers up to limit
    [[nodiscard]] const std::vector<int>& get_primes() const {
        return primes;
    }

    // Factorize x in O(log x) time
    // Returns vector of pairs: {prime, exponent}
    [[nodiscard]] std::vector<std::pair<int, int>> factorize(int x) const {
        std::vector<std::pair<int, int>> factors;
        if (x <= 1) return factors;

        while (x > 1) {
            int p = spf[x];
            int count = 0;
            while (x % p == 0) {
                count++;
                x /= p;
            }
            factors.push_back({p, count});
        }
        return factors;
    }
};

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    int max_val = 100000;
    LinearSieve sieve(max_val);

    std::cout << "Total primes up to " << max_val << ": " << sieve.get_primes().size() << "\n";

    // Fast factorization demonstration for x = 60
    int target = 60;
    auto factors = sieve.factorize(target);
    std::cout << "Prime factorization of " << target << ": ";
    for (size_t i = 0; i < factors.size(); ++i) {
        std::cout << factors[i].first << "^" << factors[i].second;
        if (i + 1 < factors.size()) std::cout << " * ";
    }
    std::cout << "\n"; // Expected: 2^2 * 3^1 * 5^1

    return 0;
}
