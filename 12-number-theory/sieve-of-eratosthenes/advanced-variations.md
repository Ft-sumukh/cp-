# Sieve of Eratosthenes — Advanced Variations

## 1. Computing Multiplicative Functions in $O(N)$
Any multiplicative function $f(n)$ (where $\gcd(a, b) = 1 \implies f(ab) = f(a)f(b)$) can be computed during the linear sieve:

### Möbius Function $\mu(n)$
```cpp
mu[1] = 1;
for (int i = 2; i <= n; ++i) {
    if (spf[i] == i) {
        primes.push_back(i);
        mu[i] = -1; // Prime has 1 prime factor
    }
    for (int p : primes) {
        if (p > spf[i] || p * i > n) break;
        spf[p * i] = p;
        if (i % p == 0) {
            mu[p * i] = 0; // p^2 divides p * i (not square-free)
            break;
        } else {
            mu[p * i] = -mu[i]; // Multiplicative property
        }
    }
}
```

---

## 2. Segmented Sieve for Ranges $[L, R]$ where $R \le 10^{12}$
When $R$ is up to $10^{12}$ and $R - L \le 10^6$:
1. Sieve primes only up to $\sqrt{R} \le 10^6$.
2. Allocate boolean array `is_prime_range` of size $R - L + 1$.
3. For each small prime $p \le 10^6$, mark multiples of $p$ in $[L, R]$ starting at $\max(p^2, \lceil L / p \rceil \cdot p)$.
Runs in $O((R - L) \log \log R + \sqrt{R})$ time!
