# Longest Increasing Subsequence — Practice Problems Progression

## Curated Practice Sets

- **BEST PRACTICE SET**: [CSES Dynamic Programming Section](https://cses.fi/problemset/)

---

## 1. Beginner Tier (Foundations & Direct Application)

1. **[Increasing Subsequence](https://cses.fi/problemset/task/1145)**
   - **Platform**: CSES
   - **Difficulty / Rating**: CSES Dynamic Programming / Codeforces 1400
   - **Key Concepts Tested**: Standard $O(N \log N)$ LIS implementation where $N = 2 \times 10^5$.
   - **Recommended Order**: 1

2. **[Consecutive Subsequence](https://codeforces.com/problemset/problem/977/F)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 1600
   - **Key Concepts Tested**: Consecutive value condition ($A[i] = A[j] + 1$) solved via hash map DP with index reconstruction.
   - **Recommended Order**: 2

3. **[Tower of Hay](https://usaco.org/index.php?page=viewproblem2&cpid=105)**
   - **Platform**: USACO
   - **Difficulty / Rating**: 1400
   - **Key Concepts Tested**: Greedy stacking transformed into non-decreasing subsequence.
   - **Recommended Order**: 3

---

## 2. Intermediate Tier (2D Transformations & Sorting Reductions)

1. **[Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)**
   - **Platform**: LeetCode (Hard) / Codeforces 1700
   - **Key Concepts Tested**: 2D LIS: sort widths ascending, then sort matching heights descending to prevent invalid same-width nesting, followed by 1D LIS on heights.
   - **Recommended Order**: 4

2. **[Potions (Hard Version)](https://codeforces.com/problemset/problem/1526/C2)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 1600
   - **Key Concepts Tested**: Priority-queue greedy replacement equivalent to maintaining optimal prefixes.
   - **Recommended Order**: 5

3. **[Working out](https://codeforces.com/problemset/problem/429/B)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 1600
   - **Key Concepts Tested**: 2D grid DP intersecting at a single optimal meeting cell.
   - **Recommended Order**: 6

---

## 3. Advanced Tier (Weighting, Data Structures & Counting)

1. **[Prefix LIS](https://atcoder.jp/contests/abc237/tasks/abc237_f)**
   - **Platform**: AtCoder
   - **Difficulty / Rating**: 1900
   - **Key Concepts Tested**: Dynamic programming tracking first 3 elements of the `tails` array as state.
   - **Recommended Order**: 7

2. **[LIS or Reverse LIS?](https://codeforces.com/problemset/problem/1682/C)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 1400 - 1500
   - **Key Concepts Tested**: Constructive array frequency analysis to balance increasing and decreasing sequences.
   - **Recommended Order**: 8

3. **[Count of Subsequences with Given LIS](https://codeforces.com/problemset/problem/597/C)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 1900
   - **Key Concepts Tested**: Fenwick Tree / Segment Tree DP counting subsequences of exact length $K$.
   - **Recommended Order**: 9
