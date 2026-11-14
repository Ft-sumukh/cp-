# Dijkstra's Algorithm — Advanced Variations

## 1. Multi-State Augmented Graphs
When problem constraints introduce auxiliary state variables (e.g. remaining fuel, tickets, special discount coupons):
- Instead of state `dist[u]`, expand the state space:
  $$\text{dist}[u][k] = \text{shortest distance to reach vertex } u \text{ having used } k \text{ coupons}$$
- Transitions:
  1. Standard travel: $(u, k) \xrightarrow{w} (v, k)$ with cost $w$.
  2. Coupon travel: $(u, k) \xrightarrow{\lfloor w / 2 \rfloor} (v, k + 1)$ with cost $\lfloor w / 2 \rfloor$ (if $k < K$).
Complexity: $O((V \cdot K + E \cdot K) \log(V \cdot K))$.

---

## 2. 0-1 BFS Optimization (Special Case)
When edge weights are strictly restricted to $0$ or $1$:
- Using a priority queue takes $O((V + E) \log V)$.
- By replacing `std::priority_queue` with a double-ended queue `std::deque`:
  - If an edge relaxation has weight $0$, push to **front** of deque.
  - If an edge relaxation has weight $1$, push to **back** of deque.
- Guarantees the deque remains strictly sorted at all times!
- Runs in optimal linear time **$O(V + E)$**.
