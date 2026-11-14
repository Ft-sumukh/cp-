# Dijkstra's Algorithm — Theoretical Foundations & Invariant Proof

## 1. Non-Negative Edge Weight Axiom
Dijkstra's correctness depends on the non-negativity of weights:
$$\forall (u, v) \in E, \quad w(u, v) \ge 0$$
This property guarantees that extending any path can only increase (or maintain) its total length:
$$\text{dist}(s \to \dots \to u \to v) = \text{dist}(s \to \dots \to u) + w(u, v) \ge \text{dist}(s \to \dots \to u)$$

---

## 2. Invariant Proof by Induction
Let $S \subset V$ denote the set of settled vertices (vertices popped from the priority queue and finalized).
Let $\delta(s, v)$ denote the true shortest path distance from $s$ to $v$.

### Inductive Hypothesis
At any step, for all $u \in S$:
$$d[u] = \delta(s, u)$$

### Base Case
Initially, $S = \{s\}$ and $d[s] = \delta(s, s) = 0$. True.

### Inductive Step
Suppose the hypothesis holds for $|S| = k$.
The algorithm selects vertex $v^* \notin S$ with minimal tentative distance:
$$v^* = \arg\min_{v \notin S} d[v]$$
Suppose for contradiction that $d[v^*] > \delta(s, v^*)$.
Then there must exist a strictly shorter path $P$ from $s$ to $v^*$.
Since $s \in S$ and $v^* \notin S$, path $P$ must at some point cross from $S$ to $V \setminus S$.
Let $(x, y)$ be the first edge on $P$ where $x \in S$ and $y \notin S$.
Since $x \in S$, $x$ was relaxed earlier, so:
$$d[y] \le d[x] + w(x, y) = \delta(s, x) + w(x, y) = \delta(s, y)$$
Because weights on the remainder of path $P$ are non-negative:
$$\delta(s, y) \le \delta(s, v^*)$$
Therefore:
$$d[y] \le \delta(s, v^*) < d[v^*]$$
This contradicts the selection of $v^*$ as the unvisited vertex with minimal tentative distance $d[v^*] \le d[y]$!
Hence, $d[v^*] = \delta(s, v^*)$ is optimal. $\blacksquare$
