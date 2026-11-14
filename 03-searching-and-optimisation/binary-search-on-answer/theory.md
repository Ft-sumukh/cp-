# Binary Search on Answer — Theory & Monotonicity Proof

## 1. Reduction Theorem
Let $X$ denote the search space of candidate solutions, endowed with a total ordering $\le$.
Let the goal be to find:
$$x^* = \min \{ x \in X \mid P(x) = \text{True} \}$$
where $P: X \to \{0, 1\}$ is a decision predicate.

### Monotonicity Axiom
$P$ satisfies monotonicity if and only if:
$$\forall a, b \in X, \quad a \le b \land P(a) = \text{True} \implies P(b) = \text{True}$$

Under this axiom:
- The preimage $P^{-1}(\text{True})$ is an upper ray $[x^*, \infty) \cap X$.
- The preimage $P^{-1}(\text{False})$ is a lower ray $(-\infty, x^*) \cap X$.
- Thus, the transition point $x^*$ is unique and lies at the boundary of the two disjoint convex sets.

---

## 2. Invariant Maintenance during Interval Bisection
Let $[L_k, R_k]$ denote the active interval at iteration $k$.
We maintain the invariant:
$$x^* \in [L_k, R_k] \cup \{\text{best\_ans}\}$$

By setting $M_k = \lfloor (L_k + R_k) / 2 \rfloor$:
- If $P(M_k) = \text{True}$, then $x^* \le M_k$. The search continues on $[L_k, M_k - 1]$ with $\text{best\_ans} \leftarrow M_k$.
- If $P(M_k) = \text{False}$, then $x^* > M_k$. The search continues on $[M_k + 1, R_k]$.

At each iteration, the interval length shrinks strictly:
$$|R_{k+1} - L_{k+1}| \le \frac{1}{2} |R_k - L_k|$$
The algorithm terminates in $\lfloor \log_2(R_0 - L_0 + 1) \rfloor + 1$ iterations.
