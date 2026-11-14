# Binary Search on Answer — Execution Trace

## Problem Parameters
- Array: $A = [7, 2, 5, 10, 8]$
- Split parameter: $K = 2$
- Initial Bounds:
  - $L = \max(A) = 10$
  - $R = \sum A = 32$

---

## Trace Table

| Step | Current $L$ | Current $R$ | Midpoint $M$ | Greedy Subarrays Formed | Subarray Count | Feasible? ($C \le K$) | Action |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 10 | 32 | 21 | `[7, 2, 5]`, `[10, 8]` | 2 | True | `ans = 21`, $R \leftarrow 20$ |
| 2 | 10 | 20 | 15 | `[7, 2, 5]`, `[10]`, `[8]` | 3 | False | $L \leftarrow 16$ |
| 3 | 16 | 20 | 18 | `[7, 2, 5]`, `[10, 8]` | 2 | True | `ans = 18`, $R \leftarrow 17$ |
| 4 | 16 | 17 | 16 | `[7, 2, 5]`, `[10]`, `[8]` | 3 | False | $L \leftarrow 17$ |
| 5 | 17 | 17 | 17 | `[7, 2, 5]`, `[10]`, `[8]` | 3 | False | $L \leftarrow 18$ |

**Termination**: $L = 18 > R = 17$. Final optimal answer = **18**.
