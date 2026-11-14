# Bit Manipulation — Theoretical Foundations & Algebraic Properties

## 1. Algebraic Group Structure of $(\mathbb{F}_2^N, \oplus)$
The set of $N$-bit words endowed with the bitwise XOR operation $(\oplus)$ forms an Abelian group:
1. **Closure**: For all $a, b \in \{0, 1\}^N$, $a \oplus b \in \{0, 1\}^N$.
2. **Associativity**: $(a \oplus b) \oplus c = a \oplus (b \oplus c)$.
3. **Identity Element**: $0^N$ is the neutral element ($a \oplus 0 = a$).
4. **Inverse**: Every element is its own inverse ($a \oplus a = 0$).

Furthermore, $(\{0, 1\}^N, \oplus, \cdot)$ forms a vector space over the finite Galois field $\mathbb{F}_2$.
This algebraic foundation enables **Linear Basis** construction via Gaussian elimination to find maximum XOR subsets in $O(N \cdot B)$ time.

---

## 2. Proof of $O(3^N)$ Complexity for All Submasks Enumeration
Consider iterating over all masks $M \in [0, 2^N - 1]$ and then iterating over all submasks $S \subseteq M$.
A mask $M$ with $k$ set bits has exactly $2^k$ submasks.
The number of masks with $k$ bits is given by the binomial coefficient $\binom{N}{k}$.
The total number of inner loop iterations across all masks is:
$$T(N) = \sum_{k=0}^N \binom{N}{k} 2^k$$
By the Binomial Theorem:
$$(x + y)^N = \sum_{k=0}^N \binom{N}{k} x^{N-k} y^k$$
Setting $x = 1$ and $y = 2$:
$$T(N) = (1 + 2)^N = 3^N$$
For $N = 15$, $3^{15} \approx 1.4 \times 10^7$ operations, comfortably executing within $\sim 0.05$ seconds in C++.
