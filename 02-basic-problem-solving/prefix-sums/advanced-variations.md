# Prefix Sums — Advanced Variations & Extensions

## 1. Modular Prefix Sums with Negative Invariants
When dealing with divisibility criteria ($\sum_{i=L}^R A[i] \equiv 0 \pmod K$), we compute:
$$P_i = (P_{i-1} + A_i) \pmod K$$
In C++, if $P_{i-1} + A_i < 0$, the standard `%` operator retains the negative sign. To guarantee canonical non-negative residues in $[0, K-1]$:
```cpp
P[i] = ((P[i-1] + A[i]) % K + K) % K;
```

---

## 2. 2D Difference Arrays & Prefix Reconstruction
To perform multiple range updates of the form "Add $V$ to all cells in subgrid $[r_1, c_1]$ to $[r_2, c_2]$":
```cpp
diff[r1][c1] += V;
diff[r1][c2 + 1] -= V;
diff[r2 + 1][c1] -= V;
diff[r2 + 1][c2 + 1] += V;
```
After all updates are accumulated in $O(1)$ each, a single 2D prefix sum pass over `diff` reconstructs the final grid values in $O(N \cdot M)$.

---

## 3. High-Frequency Trading & Market Microstructure
In electronic limit order books, cumulative depth at price level $P$ represents the total resting liquidity from the best bid down to $P$. Computing cumulative depth profiles over contiguous tick arrays uses prefix arrays to determine market impact cost for a market order of size $V$ in $O(1)$ or via binary search on the prefix sums in $O(\log(\text{ticks}))$.
