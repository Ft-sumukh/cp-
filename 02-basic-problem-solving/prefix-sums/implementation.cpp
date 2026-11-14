/**
 * Algorithm: 1D and 2D Prefix Sums
 * Language: C++20
 * Compiler: g++ 15.2.0 (Ubuntu)
 * Optimization: -std=c++20 -O2 -Wall -Wextra
 *
 * Time Complexity:
 *   - Precomputation: O(N) for 1D, O(N * M) for 2D
 *   - Query:          O(1)
 * Space Complexity:   O(N) for 1D, O(N * M) for 2D
 */

#include <iostream>
#include <vector>
#include <cstdint>

using i64 = int64_t;

// 1D Prefix Sum Class
class PrefixSum1D {
private:
    std::vector<i64> pref;

public:
    explicit PrefixSum1D(const std::vector<i64>& arr) {
        int n = static_cast<int>(arr.size());
        pref.assign(n + 1, 0);
        for (int i = 0; i < n; ++i) {
            pref[i + 1] = pref[i] + arr[i];
        }
    }

    // Returns sum in range [L, R] inclusive (0-indexed)
    [[nodiscard]] i64 query(int L, int R) const {
        if (L > R) return 0;
        return pref[R + 1] - pref[L];
    }
};

// 2D Prefix Sum Class
class PrefixSum2D {
private:
    std::vector<std::vector<i64>> pref;

public:
    explicit PrefixSum2D(const std::vector<std::vector<i64>>& grid) {
        if (grid.empty()) return;
        int n = static_cast<int>(grid.size());
        int m = static_cast<int>(grid[0].size());
        pref.assign(n + 1, std::vector<i64>(m + 1, 0));

        for (int r = 0; r < n; ++r) {
            for (int c = 0; c < m; ++c) {
                pref[r + 1][c + 1] = grid[r][c] 
                                   + pref[r][c + 1] 
                                   + pref[r + 1][c] 
                                   - pref[r][c];
            }
        }
    }

    // Query sum in subgrid [r1, c1] to [r2, c2] inclusive (0-indexed)
    [[nodiscard]] i64 query(int r1, int c1, int r2, int c2) const {
        if (r1 > r2 || c1 > c2) return 0;
        return pref[r2 + 1][c2 + 1] 
             - pref[r1][c2 + 1] 
             - pref[r2 + 1][c1] 
             + pref[r1][c1];
    }
};

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    // 1D Demonstration
    std::vector<i64> arr = {3, 1, 4, 1, 5, 9, 2};
    PrefixSum1D ps1(arr);
    // Query range [1, 4] -> arr[1] + arr[2] + arr[3] + arr[4] = 1 + 4 + 1 + 5 = 11
    std::cout << "1D Query [1, 4]: " << ps1.query(1, 4) << "\n";

    // 2D Demonstration
    std::vector<std::vector<i64>> grid = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    PrefixSum2D ps2(grid);
    // Query subgrid from (0, 0) to (1, 1) -> 1 + 2 + 4 + 5 = 12
    std::cout << "2D Query [(0, 0) to (1, 1)]: " << ps2.query(0, 0, 1, 1) << "\n";

    return 0;
}
