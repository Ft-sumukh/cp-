/**
 * Random Test Generator Boilerplate for Stress Testing
 * Language: C++20
 */

#include <iostream>
#include <random>
#include <chrono>
#include <vector>

// High-quality random number generator seeded with high-resolution clock
std::mt19937_64 rng(std::chrono::steady_clock::now().time_since_epoch().count());

// Helper to generate random integer in [L, R]
int64_t rand_int(int64_t L, int64_t R) {
    return std::uniform_int_distribution<int64_t>(L, R)(rng);
}

int main() {
    int n = rand_int(1, 10); // Small N to catch minimal counter-examples quickly
    std::cout << n << "\n";
    for (int i = 0; i < n; ++i) {
        std::cout << rand_int(1, 100) << (i + 1 == n ? "" : " ");
    }
    std::cout << "\n";
    return 0;
}
