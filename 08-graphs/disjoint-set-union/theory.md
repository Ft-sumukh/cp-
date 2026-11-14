# Disjoint Set Union — Theoretical Foundations & Ackermann Complexity

## 1. Union by Size Complexity Guarantee
Without path compression, Union by Size alone bounds tree height:
### Theorem
A tree with root $r$ of size $S$ has height $h \le \lfloor \log_2 S \rfloor$.

### Proof (by induction on $S$)
- **Base Case**: $S = 1$, $h = 0 \le \log_2 1 = 0$.
- **Inductive Step**: Suppose true for all trees of size $< S$. When merging tree $T_1$ (size $S_1$) and $T_2$ (size $S_2$) with $S_1 \ge S_2$:
  The root of $T_2$ is made a child of $T_1$'s root.
  The new height $h_{\text{new}} = \max(h(T_1), h(T_2) + 1)$.
  Since $S_1 \ge S_2$, $S = S_1 + S_2 \ge 2 S_2 \implies S_2 \le S / 2$.
  Therefore:
  $$h(T_2) + 1 \le \lfloor \log_2 S_2 \rfloor + 1 \le \lfloor \log_2(S/2) \rfloor + 1 = \lfloor \log_2 S \rfloor$$
  Since $h(T_1) \le \lfloor \log_2 S_1 \rfloor \le \lfloor \log_2 S \rfloor$, the new height is bounded by $\lfloor \log_2 S \rfloor$. $\blacksquare$

---

## 2. Path Compression & The Inverse Ackermann Function $\alpha(N)$
Tarjan (1975) demonstrated that interleaving Path Compression with Union by Rank/Size produces an amortized cost per operation bounded by:
$$O(\alpha(N))$$
where $\alpha(N)$ is the functional inverse of Ackermann's function $A(k, k)$.
Because $A(4, 4) \gg 10^{80}$ (vastly exceeding the number of atoms in the observable universe), for any practical $N$ in competitive programming:
$$\alpha(N) \le 4$$
yielding virtually constant amortized time.
