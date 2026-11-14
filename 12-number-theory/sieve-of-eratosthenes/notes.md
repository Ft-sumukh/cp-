# Sieve of Eratosthenes — Personal Notes & Error Log

## 1. Key Invariant
In Euler's Linear Sieve:
```cpp
if (i % p == 0) break;
```
This single line is non-negotiable. Omitting it violates the invariant that each composite is visited solely by its smallest prime factor, increasing complexity from $O(N)$ back to $O(N \log \log N)$.

## 2. Common Pitfalls Checklist
- [ ] **Array Memory Overflow**: Sieve of size $10^7$ integers takes $40$ MB. Ensure global/heap allocation rather than stack allocation inside functions.
- [ ] **$p \cdot p$ Overflow**: In classical sieve `for (int j = p * p; ...)`, if $p > 46340$, `p * p` overflows 32-bit signed integer. Always use `1LL * p * p`.
- [ ] **Base Values $0$ and $1$**: Neither 0 nor 1 is prime. Ensure edge checks return false.

## 3. Revision Tracking
| Review Date | Review Focus | Solved Without Hints? | Confidence (1-5) | Next Review Date |
| :---: | :---: | :---: | :---: | :---: |
| 2026-11-14 | Initial implementation & proofs | Yes | 5/5 | 2026-11-28 |
