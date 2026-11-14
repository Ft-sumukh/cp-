/**
 * Algorithm: Binary Search on Answer (Minimizing Maximum Subarray Sum)
 * Language: C++20
 * Compiler: g++ 15.2.0 (Ubuntu)
 * Optimization: -std=c++20 -O2 -Wall -Wextra
 *
 * Problem: Split array of N positive integers into at most K contiguous subarrays
 *          such that the maximum subarray sum is minimized.
 *
 * Time Complexity:  O(N * log(Sum - Max))
 * Space Complexity: O(1) auxiliary
 */

#include <iostream>
#include <vector>
#include <numeric>
#include <algorithm>
#include <cstdint>

using i64 = int64_t;

// Feasibility predicate: Can we partition 'arr' into at most 'k' subarrays
// such that no subarray sum exceeds 'max_allowed_sum'?
bool check(const std::vector<i64>& arr, int k, i64 max_allowed_sum) {
    int subarrays_count = 1;
    i64 current_sum = 0;

    for (i64 val : arr) {
        if (val > max_allowed_sum) {
            // A single element exceeds the maximum allowed sum -> impossible
            return false;
        }

        if (current_sum + val > max_allowed_sum) {
            // Greedily start a new subarray
            subarrays_count++;
            current_sum = val;
        } else {
            current_sum += val;
        }
    }

    return subarrays_count <= k;
}

i64 binary_search_min_max(const std::vector<i64>& arr, int k) {
    if (arr.empty()) return 0;

    // Lower bound: maximum single element (at least this large)
    i64 low = *std::max_element(arr.begin(), arr.end());

    // Upper bound: sum of all elements (worst case: k = 1)
    i64 high = std::accumulate(arr.begin(), arr.end(), static_cast<i64>(0));

    i64 optimal_answer = high;

    while (low <= high) {
        i64 mid = low + (high - low) / 2;

        if (check(arr, k, mid)) {
            optimal_answer = mid; // feasible, try smaller
            high = mid - 1;
        } else {
            low = mid + 1; // infeasible, must increase threshold
        }
    }

    return optimal_answer;
}

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    // Test case: arr = [7, 2, 5, 10, 8], k = 2
    // Optimal split: [7, 2, 5] (sum 14) and [10, 8] (sum 18) -> max is 18
    std::vector<i64> arr = {7, 2, 5, 10, 8};
    int k = 2;

    i64 result = binary_search_min_max(arr, k);
    std::cout << "Optimal Minimized Maximum Subarray Sum: " << result << "\n";

    return 0;
}
