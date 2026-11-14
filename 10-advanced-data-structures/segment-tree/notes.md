# Segment Tree — Personal Notes & Error Log

## 1. Key Invariant
A node covering $[L, R]$ has midpoint $M = L + (R - L) / 2$.
Its left child covers $[L, M]$ and right child covers $[M + 1, R]$. Never mix up `mid` and `mid + 1`.

## 2. Common Pitfalls Checklist
- [ ] **Array Bounds**: Did I allocate `tree(4 * n)`? Allocating `2 * n` in recursive versions causes memory faults.
- [ ] **Identity Element**: For Range Minimum Query, is `identity = 1e18` (or $\infty$)? If set to 0, RMQ will fail on positive arrays.
- [ ] **Point Update Backtracking**: Did I update `tree[node] = combine(left, right)` after the recursive calls in `update()`?

## 3. Revision Tracking
| Review Date | Review Focus | Solved Without Hints? | Confidence (1-5) | Next Review Date |
| :---: | :---: | :---: | :---: | :---: |
| 2026-11-14 | Initial implementation & proofs | Yes | 5/5 | 2026-11-28 |
