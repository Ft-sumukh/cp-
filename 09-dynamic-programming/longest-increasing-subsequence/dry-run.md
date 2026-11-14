# Longest Increasing Subsequence — Step-by-Step Execution Trace

## Input Data
- Array: $A = [10, 9, 2, 5, 3, 7, 101, 18]$
- Target: Length and reconstruction of LIS

---

## Trace Table

| Step $i$ | Element $A[i]$ | `std::lower_bound` Target | Insertion Index `idx` | `tails` Array State | Parent Link `parent[i]` |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 10 | 10 | 0 (New) | `[10]` | -1 |
| 1 | 9 | 9 | 0 (Replaces 10) | `[9]` | -1 |
| 2 | 2 | 2 | 0 (Replaces 9) | `[2]` | -1 |
| 3 | 5 | 5 | 1 (New) | `[2, 5]` | 2 ($A[2]=2$) |
| 4 | 3 | 3 | 1 (Replaces 5) | `[2, 3]` | 2 ($A[2]=2$) |
| 5 | 7 | 7 | 2 (New) | `[2, 3, 7]` | 4 ($A[4]=3$) |
| 6 | 101 | 101 | 3 (New) | `[2, 3, 7, 101]` | 5 ($A[5]=7$) |
| 7 | 18 | 18 | 3 (Replaces 101) | `[2, 3, 7, 18]` | 5 ($A[5]=7$) |

---

## Reconstruction Phase
- Last active tail index is $7$ ($A[7] = 18$).
- Predecessor trace:
  - $7 \to \text{parent}[7] = 5$ ($A[5] = 7$)
  - $5 \to \text{parent}[5] = 4$ ($A[4] = 3$)
  - $4 \to \text{parent}[4] = 2$ ($A[2] = 2$)
  - $2 \to \text{parent}[2] = -1$ (Stop)
- Reversed path: **$[2, 3, 7, 18]$**. Length = **4**.
