# Prefix Sums — Execution Trace & Dry Run

## Input Data
- Array: `A = [4, 7, -2, 6, 1]` (0-indexed)
- Length $N = 5$
- Queries:
  - $Q_1$: Range `[1, 3]` (elements $A[1], A[2], A[3] \to 7 + (-2) + 6 = 11$)
  - $Q_2$: Range `[0, 4]` (all elements $\to 4 + 7 - 2 + 6 + 1 = 16$)
  - $Q_3$: Range `[2, 2]` (single element $A[2] \to -2$)

---

## Preprocessing Step (Constructing Prefix Array `pref`)

| $i$ (Index) | $A[i-1]$ (Current Val) | Computation | `pref[i]` Value |
| :---: | :---: | :---: | :---: |
| 0 | - | Base identity | 0 |
| 1 | $A[0] = 4$ | $0 + 4$ | 4 |
| 2 | $A[1] = 7$ | $4 + 7$ | 11 |
| 3 | $A[2] = -2$ | $11 + (-2)$ | 9 |
| 4 | $A[3] = 6$ | $9 + 6$ | 15 |
| 5 | $A[4] = 1$ | $15 + 1$ | 16 |

---

## Answering Queries in $O(1)$

1. **Query $Q_1 = [1, 3]$**:
   $$\text{Formula: } pref[3 + 1] - pref[1] = pref[4] - pref[1]$$
   $$\text{Lookup: } 15 - 4 = 11 \quad \checkmark$$

2. **Query $Q_2 = [0, 4]$**:
   $$\text{Formula: } pref[4 + 1] - pref[0] = pref[5] - pref[0]$$
   $$\text{Lookup: } 16 - 0 = 16 \quad \checkmark$$

3. **Query $Q_3 = [2, 2]$**:
   $$\text{Formula: } pref[2 + 1] - pref[2] = pref[3] - pref[2]$$
   $$\text{Lookup: } 9 - 11 = -2 \quad \checkmark$$
