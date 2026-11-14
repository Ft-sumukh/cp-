# Dijkstra's Algorithm (Single-Source Shortest Paths)

---

## 1. Topic Overview
Dijkstra's algorithm computes the shortest path from a starting source vertex to all other vertices in a directed or undirected graph with non-negative edge weights. Using a binary min-heap (`std::priority_queue`), it runs in $O((V + E) \log V)$ time.

## 2. Prerequisites
- Graph representations (adjacency lists).
- Priority queues and binary min-heaps.
- Greedy choice property and triangle inequality ($d[v] \le d[u] + w(u, v)$).

## 3. What Problem Does It Solve?
Given a graph $G = (V, E)$ with non-negative edge weights $w(u, v) \ge 0$ and a source vertex $s$, determine the minimum total path weight from $s$ to every reachable vertex $v \in V$. Standard BFS only works for unweighted graphs; Dijkstra handles arbitrary non-negative weights efficiently.

## 4. Why Is It Important?
- Canonical shortest path algorithm in computer science and routing protocols (OSPF, IS-IS).
- Foundational component for 0-1 BFS, Johnson's algorithm, and Min-Cost Max-Flow potentials.

## 5. When Should I Use It?
- Finding shortest paths on weighted graphs where all weights are $\ge 0$.
- State graphs where transitions carry non-negative costs.
- Graph constraints: $V \le 2 \times 10^5, E \le 5 \times 10^5$.

## 6. How to Recognise It in a Problem Statement
- "Find the minimum travel time / toll between cities."
- "What is the shortest sequence of state transitions to achieve the target configuration?"
- Edge weights are strictly non-negative.

## 7. Intuition
Imagine water leaking outward from the source vertex through a network of pipes, where edge weight represents pipe length. The water reaches vertices in strictly increasing order of their true shortest distance. The moment water touches a new vertex, its shortest path is sealed for all eternity because no subsequent slower wave through longer pipes can arrive earlier.

## 8. Mathematical Explanation
Let $d[v]$ be the tentative distance from source $s$ to $v$.
Initially:
$$d[s] = 0, \quad d[v] = \infty \quad \forall v \ne s$$
At each step, extract vertex $u$ with minimum tentative distance from unvisited set:
$$u = \arg\min_{v \in \text{Unvisited}} d[v]$$
For every outgoing edge $(u, v)$ with weight $w$:
$$\text{If } d[u] + w < d[v] \implies d[v] \leftarrow d[u] + w \quad (\text{Edge Relaxation})$$

## 9. Step-by-Step Algorithm
1. Initialize distance array `dist` with $\infty$, set `dist[source] = 0`.
2. Push `{0, source}` into min-priority queue `pq`.
3. While `pq` is not empty:
   - Extract top element `{d, u}`.
   - If $d > \text{dist}[u]$, continue (stale/lazy deletion).
   - For each neighbor $v$ of $u$ with edge weight $w$:
     - If $\text{dist}[u] + w < \text{dist}[v]$:
       - $\text{dist}[v] = \text{dist}[u] + w$
       - `pq.push({dist[v], v})`
4. Return `dist` array.

## 10. Visual Explanation
```text
Priority Queue State Evolution:
pq: [(0, Source A)]
Pop A (dist=0). Relax edges to B (weight 4) and C (weight 2):
pq: [(2, C), (4, B)]
Pop C (dist=2). Relax edge C -> B (weight 1):
  New dist to B = 2 + 1 = 3 < 4 (Relaxed!)
pq: [(3, B), (4, B)]
Pop B (dist=3). Shortest path to B is 3!
Pop B (dist=4). Stale entry (4 > dist[B]), ignored!
```

## 11. Dry Run
Graph: $A \xrightarrow{4} B$, $A \xrightarrow{2} C$, $C \xrightarrow{1} B$, $B \xrightarrow{5} D$, $C \xrightarrow{8} D$. Source: $A$.
- `dist = [A:0, B:inf, C:inf, D:inf]`
- Pop $A(0)$: push $C(2)$ and $B(4)$.
- Pop $C(2)$: relaxes $B$ to $2 + 1 = 3$; relaxes $D$ to $2 + 8 = 10$. Push $B(3), D(10)$.
- Pop $B(3)$: relaxes $D$ to $3 + 5 = 8 < 10$. Push $D(8)$.
- Pop $B(4)$: $4 > \text{dist}[B] = 3 \implies$ Skip.
- Pop $D(8)$: processed.
- Pop $D(10)$: $10 > \text{dist}[D] = 8 \implies$ Skip.
Final shortest distances: $A=0, B=3, C=2, D=8$.

## 12. C++20 Implementation
See [`implementation.cpp`](implementation.cpp).

## 13. Detailed Explanation of C++ Syntax and STL Used
- `std::priority_queue<pll, std::vector<pll>, std::greater<pll>>`: Implements a min-heap over `{distance, node}` pairs.
- Lazy deletion check: `if (d > dist[u]) continue;` avoids complex Decrease-Key operations.

## 14. Time Complexity
- Each vertex is settled once; each edge relaxed at most once.
- With binary min-heap: $O((V + E) \log V)$ time.

## 15. Space Complexity
- Adjacency list: $O(V + E)$
- Distance array and priority queue: $O(V + E)$ in worst case.
- Total Auxiliary Space: $O(V + E)$.

## 16. Correctness Explanation or Proof
Proof by induction on the sequence of settled vertices.
Let $S$ be the set of settled vertices.
Inductive hypothesis: for all $u \in S$, $\text{dist}[u]$ is the exact shortest distance.
When vertex $v \notin S$ with minimum tentative distance is extracted, any alternative path from $s$ to $v$ must leave $S$ through some frontier edge $(x, y)$ with $x \in S, y \notin S$.
Since edge weights are non-negative:
$$\text{length}(\text{path}) \ge \text{dist}[x] + w(x, y) \ge \text{dist}[y] \ge \text{dist}[v]$$
No other unvisited path can be strictly shorter than $\text{dist}[v]$. Thus $\text{dist}[v]$ is optimal.

## 17. Common Mistakes
- **Negative Edge Weights**: Dijkstra **fails** on graphs with negative edge weights (infinite loops or incorrect greediness; use Bellman-Ford/SPFA instead).
- **Missing Stale Check**: Omitting `if (d > dist[u]) continue;` degrades performance on dense graphs to $O(E \log E)$.
- **Integer Overflow**: Path lengths sum up to $E \times \max(W) \approx 10^{14}$; must use `int64_t` for distances.

## 18. Edge Cases
- Disconnected graph: Unreachable vertices retain $\infty$.
- Zero weight edges ($w = 0$): Handled correctly as long as no negative cycles exist.
- Self-loops and multiple edges between same pair of nodes.

## 19. Related Algorithms
- **0-1 BFS**: When edge weights are strictly $\{0, 1\}$, use `std::deque` in $O(V + E)$.
- **Bellman-Ford**: Handles arbitrary negative edge weights in $O(V \cdot E)$.
- **A* Search**: Dijkstra augmented with an admissible heuristic function $h(v)$.

## 20. Advanced Variations
- Multi-state Dijkstra (e.g. tracking `dist[node][coupons_used]`).
- All-Pairs Shortest Path via Johnson's Algorithm ($V \times \text{Dijkstra}$).

## 21. Interview Relevance
Fundamental in Google, Amazon, and Uber interviews for map routing and path optimization.

## 22. Quant / HFT Relevance
Arbitrage cycle detection over transformed log exchange rates ($-\log(\text{rate})$).

## 23. Complete Resource Collection
Detailed in [`video-resources.md`](video-resources.md), [`github-resources.md`](github-resources.md), and [`web-resources.md`](web-resources.md).

## 24. Practice Problem Progression
Detailed in [`practice-problems.md`](practice-problems.md).
