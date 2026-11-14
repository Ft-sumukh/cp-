# Longest Increasing Subsequence — Advanced Variations

## 1. Strictly Increasing vs. Non-Decreasing
- **Strictly Increasing**: ($a_i < a_j$ for $i < j$)
  - Use `std::lower_bound` on `tails`.
  - An element equal to a tail replaces it.
- **Non-Decreasing**: ($a_i \le a_j$ for $i < j$)
  - Use `std::upper_bound` on `tails`.
  - An element equal to a tail can be appended, expanding the subsequence.

---

## 2. Weighted LIS with Segment Tree / Fenwick Tree
If each element $i$ has a weight $W[i]$ and we want to maximize $\sum_{i \in \text{LIS}} W[i]$:
- Patience sorting fails because a smaller value might possess a tiny weight compared to a slightly larger value with huge weight.
- Solution: Coordinate compress array values into $[1, N]$.
- Maintain a Point-Update Range-Maximum Segment Tree over coordinate ranks.
- For each $A[i]$:
  $$\text{max\_prev\_weight} = \text{query}(1, \text{rank}(A[i]) - 1)$$
  $$\text{update}(\text{rank}(A[i]), \text{max\_prev\_weight} + W[i])$$
Runs in $O(N \log N)$ time and handles arbitrary positive weights.
