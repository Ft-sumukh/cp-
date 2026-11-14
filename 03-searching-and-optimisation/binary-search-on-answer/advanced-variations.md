# Binary Search on Answer — Advanced Variations

## 1. Continuous / Floating-Point Binary Search
When searching over real numbers $x \in [L, R]$ (e.g. geometric distances or ratios):
- Instead of using `while (high - low > EPS)` which can get stuck in infinite precision loops near zero, use a **fixed iteration count**:
```cpp
for (int iter = 0; iter < 80; ++iter) {
    double mid = low + (high - low) / 2.0;
    if (check(mid)) {
        ans = mid;
        low = mid; // or high = mid
    } else {
        high = mid;
    }
}
```
80 iterations reduce the initial interval by a factor of $2^{80} \approx 1.2 \times 10^{24}$, achieving complete IEEE 754 double precision accuracy.

---

## 2. Fractional Programming (Dinkelbach's Algorithm Reduction)
Maximize the ratio:
$$\lambda = \frac{\sum_{i \in S} a_i}{\sum_{i \in S} b_i}$$
Binary search on the ratio $\lambda$:
$$\frac{\sum a_i}{\sum b_i} \ge \lambda \iff \sum (a_i - \lambda b_i) \ge 0$$
Assign each element a transformed weight $w_i = a_i - \lambda b_i$. The check function simply tests whether the maximum weight subset has sum $\ge 0$.
