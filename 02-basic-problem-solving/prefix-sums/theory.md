# Prefix Sums — Theoretical Foundations & Invariants

## 1. Formal Invariant
Let $A = (a_1, a_2, \dots, a_n)$ be an element of a monoid $(M, +, 0)$ with an inverse operation $-$.
The sequence of partial sums $P$ is uniquely determined by:
$$P_0 = 0$$
$$P_k = P_{k-1} + a_k \quad \forall k \in \{1, \dots, n\}$$

### Telescope Property
The range aggregation over $[L, R]$ simplifies via telescoping cancellation:
$$\sum_{i=L}^R a_i = \sum_{i=1}^R a_i - \sum_{i=1}^{L-1} a_i = P_R - P_{L-1}$$

---

## 2. Generalization to 2D Surfaces (Inclusion-Exclusion)

For a 2D discrete density function $f(x, y)$ over a grid:
$$F(x, y) = \sum_{i=1}^x \sum_{j=1}^y f(i, j)$$

The sum over a rectangular bounded subregion $R = [x_1, x_2] \times [y_1, y_2]$ is given by:
$$\text{Area}(R) = F(x_2, y_2) - F(x_1 - 1, y_2) - F(x_2, y_1 - 1) + F(x_1 - 1, y_1 - 1)$$

The final additive term $F(x_1 - 1, y_1 - 1)$ corrects for the doubly-subtracted intersection region at the top-left corner (standard Principle of Inclusion-Exclusion).

---

## 3. Generalization to Associative Abelian Groups
Prefix sums work over any algebraic structure with an identity and an inverse:
- **Sum under addition**: Inverse is subtraction.
- **XOR product**: Invertible since $x \oplus x = 0$; thus $\bigoplus_{i=L}^R a_i = \text{prefXOR}[R] \oplus \text{prefXOR}[L-1]$.
- **Modular addition**: $P_R - P_{L-1} \pmod M$ (handling negative numbers via `(diff % M + M) % M`).
