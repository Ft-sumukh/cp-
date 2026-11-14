# Sieve of Eratosthenes & Linear Sieve (Euler's Sieve with SPF)

---

## 1. Topic Overview
The Sieve of Eratosthenes is an ancient, efficient algorithm for finding all prime numbers up to any given limit $N$. Its modern linear variation (Euler's Sieve) computes the Smallest Prime Factor (SPF) for every integer in $O(N)$ time, enabling instant $O(\log X)$ prime factorization for multiple queries.

## 2. Prerequisites
- Prime numbers definition and Fundamental Theorem of Arithmetic.
- Modulo arithmetic and divisibility properties.
- Harmonic series and asymptotic complexity ($O(N \log \log N)$ vs $O(N)$).

## 3. What Problem Does It Solve?
Given an integer $N$ (typically $N \le 10^7$), find all primes $\le N$, or answer $Q$ queries factoring numbers $X \le N$. Individual trial division takes $O(\sqrt{X})$, which for $Q = 10^5$ queries yields $O(Q \sqrt{X}) \approx 3 \times 10^8$ operations (TLE). Precomputing with an SPF sieve answers each query in $O(\log X)$, taking $O(N + Q \log X)$.

## 4. Why Is It Important?
- Core cornerstone of competitive number theory.
- Serves as the engine for computing multiplicative functions: Euler's totient $\phi(n)$, Möbius function $\mu(n)$, number of divisors $d(n)$, and sum of divisors $\sigma(n)$.

## 5. When Should I Use It?
- Generating all primes up to $10^7$.
- Factoring multiple queries where numbers are $\le 10^7$.
- Precomputing divisor counts or arithmetic functions.

## 6. How to Recognise It in a Problem Statement
- "Given $Q$ queries, find the number of distinct prime factors of $A_i$."
- "Find the sum of GCDs or coprimality conditions for elements $\le 10^6$."
- $N \le 10^7$.

## 7. Intuition
Imagine writing down all numbers from $2$ to $N$. You circle the first uncrossed number ($2$), which must be prime. You cross off all its multiples ($4, 6, 8, \dots$). Then circle the next uncrossed number ($3$), cross off its multiples ($9, 15, \dots$, starting at $3^2$). Any number that survives uncrossed is prime.

## 8. Mathematical Explanation
Every composite number $C \le N$ has at least one prime factor $p \le \sqrt{N}$.
Therefore, standard outer loop only needs to run up to $\sqrt{N}$.
Inner loop starts marking multiples from $p^2$, because any multiple $k \cdot p$ with $k < p$ has already been marked by a smaller prime factor of $k$.

### Complexity Summation:
$$\sum_{p \le N, p \text{ is prime}} \frac{N}{p} = N \sum \frac{1}{p} = O(N \log \log N)$$
(by Mertens' second theorem).

### Linear Sieve Invariant ($O(N)$):
Every composite number $C$ is crossed off **exactly once** by its **smallest prime factor (SPF)**:
$$C = p \cdot i \quad \text{where } p = \text{spf}[C] \le \text{spf}[i]$$
When $i \pmod p == 0$, the loop breaks immediately, ensuring each composite number is visited exactly once!

## 9. Step-by-Step Algorithm (Linear Sieve)
1. Allocate array `spf` of size $N+1$ initialized to `spf[i] = i`.
2. Allocate list `primes`.
3. For $i = 2$ to $N$:
   - If `spf[i] == i`, `primes.push_back(i)`.
   - For each prime $p$ in `primes`:
     - If $p > \text{spf}[i]$ or $p \cdot i > N$, break.
     - `spf[p * i] = p`.
4. To factor any number $X$: repeatedly divide by $\text{spf}[X]$ until $X = 1$.

## 10. Visual Explanation
```text
Linear Sieve SPF assignment for i = 6:
primes = [2, 3, 5]
p = 2: spf[2 * 6 = 12] = 2
Since 6 % 2 == 0, BREAK!
(If we had continued to p = 3, we would mark 18 = 3 * 6,
 but 18's smallest prime factor is 2, not 3.
 18 will be properly marked when i = 9: 2 * 9 = 18.
 This break guarantees strictly O(N) operations!)
```

## 11. Dry Run (Factoring $X = 60$ using SPF)
- $\text{spf}[60] = 2 \implies 60 / 2 = 30$. Factor: 2
- $\text{spf}[30] = 2 \implies 30 / 2 = 15$. Factor: 2
- $\text{spf}[15] = 3 \implies 15 / 3 = 5$. Factor: 3
- $\text{spf}[5] = 5 \implies 5 / 5 = 1$. Factor: 5
Prime factorization of $60 = 2^2 \times 3^1 \times 5^1$ in 4 lookups!

## 12. C++20 Implementation
See [`implementation.cpp`](implementation.cpp).

## 13. Detailed Explanation of C++ Syntax and STL Used
- `std::vector<int> spf`: Flat contiguous vector cache-aligned for rapid index lookups.
- Reserve capacity for `primes`: At most $\pi(N) \approx N / \ln N$ primes exist (e.g. 664,579 primes under $10^7$).

## 14. Time Complexity
- Sieve Precomputation: strictly $O(N)$ time.
- Query Factorization: $O(\log X)$ divisions.

## 15. Space Complexity
- Auxiliary Space: $O(N)$ space for `spf` array ($40$ MB for $N = 10^7$).

## 16. Correctness Explanation or Proof
Every integer $X > 1$ can be uniquely factored as $X = p_1^{a_1} \dots p_k^{a_k}$ with $p_1 < p_2 < \dots < p_k$. The unique smallest prime factor is $p_1$. The linear sieve algorithm matches $X$ uniquely as $p_1 \cdot (X / p_1)$. Since $p_1 \le \text{spf}[X / p_1]$, the loop never breaks prematurely, and every number is assigned its true SPF exactly once.

## 17. Common Mistakes
- Iterating past $\text{spf}[i]$ in linear sieve, causing redundant markings and degrading to $O(N \log \log N)$.
- Sieve array memory limit: allocating dynamic map instead of contiguous vector.
- Integer overflow on $p \cdot p$ when $p > 46340$ in standard sieve (must cast to `int64_t`).

## 18. Edge Cases
- $X = 0, 1$: Neither prime nor composite.
- $N = 2$: Smallest prime.
- Maximum prime under limit.

## 19. Related Algorithms
- **Segmented Sieve**: Finding primes in arbitrary range $[L, R]$ where $R \le 10^{12}$ and $R - L \le 10^6$.
- **Pollard's Rho**: Factorization of 64-bit integers ($N \le 10^{18}$) in $O(N^{1/4})$.

## 20. Advanced Variations
- Precomputing Euler's totient function $\phi(n)$ and Möbius function $\mu(n)$ in linear time inside the sieve.

## 21. Interview Relevance
Fundamental in coding assessments for fintech, cryptography, and quantitative developer rounds.

## 22. Quant / HFT Relevance
Cryptographic key validation and generating deterministic coprimality sequences for pseudorandom simulations.

## 23. Complete Resource Collection
Detailed in [`video-resources.md`](video-resources.md), [`github-resources.md`](github-resources.md), and [`web-resources.md`](web-resources.md).

## 24. Practice Problem Progression
Detailed in [`practice-problems.md`](practice-problems.md).
