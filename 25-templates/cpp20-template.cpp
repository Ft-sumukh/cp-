/**
 * C++20 Competitive Programming Baseline Template
 * Target: g++ 15.2.0 (Ubuntu)
 * Optimization: -std=c++20 -O2 -Wall -Wextra -Wshadow
 */

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <numeric>
#include <cmath>
#include <queue>
#include <stack>
#include <set>
#include <map>
#include <unordered_map>
#include <unordered_set>
#include <bitset>
#include <cstdint>
#include <limits>
#include <utility>
#include <ranges>

// Type aliases for brevity and consistency
using i64 = int64_t;
using u64 = uint64_t;
using i128 = __int128_t;
using f64 = double;
using pii = std::pair<int, int>;
using pll = std::pair<i64, i64>;

// Common constants
constexpr i64 INF64 = 1e18 + 7;
constexpr int INF32 = 1e9 + 7;
constexpr int MOD = 1e9 + 7; // or 998244353

// Local debug helper
#ifdef LOCAL
#define DEBUG(x) std::cerr << "[DEBUG] " << #x << " = " << (x) << "\n"
#else
#define DEBUG(x) ((void)0)
#endif

void solve() {
    // Problem solution logic
}

int main() {
    // Optimize standard I/O operations for competitive programming
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    int test_cases = 1;
    if (!(std::cin >> test_cases)) return 0;

    for (int tc = 1; tc <= test_cases; ++tc) {
        solve();
    }

    return 0;
}
