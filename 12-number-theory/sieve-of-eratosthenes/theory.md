# Sieve of Eratosthenes & Linear Sieve — Theory & Proof of Linear Complexity

## 1. Classical Sieve Asymptotics
The standard Sieve of Eratosthenes iterates over all primes $p \le N$ and crosses off multiples:
$$T(N) = \sum_{p \le N} \frac{N}{p} = N \sum_{p \le N} \frac{1}{p}$$
By Mertens' Second Theorem:
$$\sum_{p \le N} \frac{1}{p} = \ln(\ln N) + M + O\left(\frac{1}{\ln N}\right)$$
where $M \approx 0.261497$ is the Meissel-Mertens constant.
Thus:
$$T(N) = O(N \log \log N)$$

---

## 2. Linear Sieve Invariant & Proof of $O(N)$
In the classical sieve, composite numbers with multiple prime factors are visited redundantly (e.g. $12 = 2 \cdot 6 = 3 \cdot 4$ is visited by both 2 and 3).

### Linear Sieve Canonical Representation
Every integer $X > 1$ has a unique representation:
$$X = p \cdot i \quad \text{where } p = \text{spf}[X] \text{ and } p \le \text{spf}[i]$$

### Inner Loop Invariant
In Euler's sieve, we iterate through primes $p$ and set:
$$\text{spf}[p \cdot i] = p$$
The loop condition enforces:
$$\text{if } (i \pmod p == 0) \implies \text{break}$$

### Proof that each composite $X$ is visited exactly once:
1. **Existence**: Let $p = \text{spf}[X]$ and $i = X / p$. By definition of smallest prime factor, all prime factors of $i$ are $\ge p$. Thus $\text{spf}[i] \ge p$. When the outer loop reaches $i$, prime $p$ is examined before any prime $> p$. Since $p \le \text{spf}[i]$, the break condition is not triggered prior to reaching $p$, so $p \cdot i = X$ is marked.
2. **Uniqueness**: Suppose $X$ could also be marked as $q \cdot j$ with $q > p$. Then $q$ must divide $X$, but $p = \text{spf}[X] < q$, so $p$ must divide $j$. Then $\text{spf}[j] = p < q$. But the algorithm would have encountered $p$ and executed `break` when processing $j$ before ever reaching $q$. Contradiction!

Therefore, every composite number is visited **exactly once**, establishing strictly $O(N)$ time. $\blacksquare$
