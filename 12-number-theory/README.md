# 12. Number Theory

This module covers primality testing, factorization, modular arithmetic, Diophantine equations, and arithmetic functions.

---

## Subtopics & Planned Modules

1. **`sieve-of-eratosthenes/`**: Standard sieve in $O(N \log \log N)$ and Linear Sieve (Euler's Sieve) in $O(N)$ with smallest prime factor (SPF).
2. **`prime-factorization-divisors/`**: Trial division in $O(\sqrt{N})$, divisor generation, Pollard's Rho algorithm for large integers.
3. **`euclidean-and-extended-gcd/`**: Greatest Common Divisor, Extended Euclidean algorithm, Bézout's identity coefficients.
4. **`modular-arithmetic/`**: Modular addition, multiplication, modular exponentiation via binary exponentiation in $O(\log B)$.
5. **`modular-inverse/`**: Fermat's Little Theorem ($A^{P-2} \pmod P$), Extended GCD inverse, linear inverse precomputation in $O(N)$.
6. **`linear-diophantine-equations/`**: Solvability of $Ax + By = C$ and parameterization of all integer solutions.
7. **`euler-totient-function/`**: $\phi(N)$ computation, Euler's Theorem ($A^{\phi(M)} \equiv 1 \pmod M$).
8. **`chinese-remainder-theorem/`**: Reconstructing $X$ from simultaneous congruences $X \equiv a_i \pmod{m_i}$.
9. **`lucas-theorem/`**: Computing $\binom{N}{K} \pmod P$ for large $N, K$ with small prime $P$.
10. **`mobius-inversion/`**: Möbius function $\mu(n)$, square-free integers, Dirichlet convolution, and arithmetic inversion.
