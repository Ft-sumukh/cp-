# Prefix Sums — Visual Representation

## 1. 1D Array Geometric Cancellation

```text
Array indices:      0       1       2       3       4
                  +-------+-------+-------+-------+-------+
Elements A:       |   4   |   7   |  -2   |   6   |   1   |
                  +-------+-------+-------+-------+-------+
                          |<-------- Query [1, 3] ------->|

Prefix pref:  0       4      11       9      15      16
              |       |                       |
              +-------+                       |
              pref[1] = 4                     |
              |<----------------------------->|
                         pref[4] = 15

Result = pref[4] - pref[1] = 15 - 4 = 11.
```

---

## 2. 2D Subgrid Inclusion-Exclusion Diagram

```text
           0       c1-1        c2
        0  +---------+---------+
           |    A    |    B    |
           |         |         |
      r1-1 +---------+---------+
           |    C    |    D    |
           |         |  (QUERY)|
        r2 +---------+---------+

Target Query Region D sum:
Area(D) = Total(A + B + C + D) - (A + B) - (A + C) + A

where:
Total(A + B + C + D) = pref[r2][c2]
(A + B)              = pref[r1-1][c2]
(A + C)              = pref[r2][c1-1]
A (double-subtracted)= pref[r1-1][c1-1]
```
