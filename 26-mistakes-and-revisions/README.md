# Mistake Analysis, Error Taxonomy & Revision System

True growth in competitive programming stems from rigorous categorization and post-mortem analysis of failures.

---

## 1. Error Taxonomy

Every failed submission or contest mistake falls into one of these distinct categories:

### A. Mathematical & Algorithmic Failure
- **Flawed Greedy Choice**: Assumed local optimum implied global optimum without exchange proof.
- **Incorrect DP State Definition**: State lacked necessary dimensions to satisfy Markovian transition independence.
- **Non-Monotonic Binary Search**: Attempted binary search on a function that failed the monotonicity condition.

### B. Implementation & Structural Bugs
- **Integer Overflow**: Multiplied two 32-bit integers before assigning to a 64-bit integer (`i64 ans = a * b` instead of `i64 ans = (i64)a * b`).
- **Off-By-One Boundary**: Incorrect comparison operator in range endpoints (`<` vs `<=`) or 0-indexed vs 1-indexed shift.
- **Uninitialized State in Multi-Test-Case Rounds**: Forgot to clear adjacency lists, DP tables, or segment trees before test case $t > 1$.

### C. Performance & Complexity Errors
- **Time Limit Exceeded (TLE)**: Hidden $O(N^2)$ inside recursion, slow I/O (`std::endl` flushing), or hash collisions on `std::unordered_map`.
- **Memory Limit Exceeded (MLE)**: Oversized arrays ($10^7$ integers $\approx 40$ MB; $10^8$ integers exceeds standard 256 MB limits).
- **Stack Overflow**: Deep recursion ($> 10^5$ frames) on linear degenerate trees or graphs without increasing stack limits.

---

## 2. Mistake Ledger

| Date | Problem / Context | Error Category | Root Cause | Preventive Rule Formulated |
| :---: | :---: | :---: | :---: | :---: |
| - | - | - | - | - |
