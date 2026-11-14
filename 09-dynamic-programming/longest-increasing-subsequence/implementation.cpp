/**
 * Algorithm: Longest Increasing Subsequence (LIS) in O(N log N)
 * Language: C++20
 * Optimization: -std=c++20 -O2 -Wall -Wextra
 *
 * Provides:
 *   1. Length of LIS
 *   2. Full reconstruction of the optimal subsequence
 */

#include <iostream>
#include <vector>
#include <algorithm>
#include <cstdint>

// Returns pair: {LIS length, actual reconstructed subsequence}
std::pair<int, std::vector<int>> get_lis(const std::vector<int>& arr) {
    int n = static_cast<int>(arr.size());
    if (n == 0) return {0, {}};

    std::vector<int> tails;         // Minimum tail value for each length
    std::vector<int> tail_indices; // Corresponding index in arr for reconstruction
    std::vector<int> parent(n, -1); // Predecessor array for reconstruction

    for (int i = 0; i < n; ++i) {
        int x = arr[i];
        // Use std::lower_bound for strictly increasing
        // Use std::upper_bound for non-decreasing
        auto it = std::lower_bound(tails.begin(), tails.end(), x);
        int idx = static_cast<int>(it - tails.begin());

        if (it == tails.end()) {
            tails.push_back(x);
            tail_indices.push_back(i);
        } else {
            *it = x;
            tail_indices[idx] = i;
        }

        // Link parent to the predecessor length's tail
        if (idx > 0) {
            parent[i] = tail_indices[idx - 1];
        }
    }

    int lis_len = static_cast<int>(tails.size());

    // Subsequence reconstruction
    std::vector<int> subsequence;
    int curr = tail_indices.back();
    while (curr != -1) {
        subsequence.push_back(arr[curr]);
        curr = parent[curr];
    }
    std::reverse(subsequence.begin(), subsequence.end());

    return {lis_len, subsequence};
}

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    std::vector<int> arr = {10, 9, 2, 5, 3, 7, 101, 18};
    auto [len, subseq] = get_lis(arr);

    std::cout << "LIS Length: " << len << "\n";
    std::cout << "Reconstructed Subsequence: ";
    for (int v : subseq) {
        std::cout << v << " ";
    }
    std::cout << "\n"; // Expected: 2 3 7 18 (or 2 5 7 18 / 2 3 7 101)

    return 0;
}
