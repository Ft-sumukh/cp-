# Disjoint Set Union (DSU / Union-Find)

---

## 1. Topic Overview
Disjoint Set Union (DSU), also known as Union-Find, maintains a collection of disjoint sets over elements $\{1, \dots, N\}$. It supports two nearly constant-time operations: finding the representative (canonical element) of a set, and uniting two disjoint sets into one.

## 2. Prerequisites
- Graph connectivity definitions (vertices, edges, components).
- Tree representations and parent pointer arrays.
- Amortized time complexity concepts.

## 3. What Problem Does It Solve?
Given $N$ elements and a sequence of dynamic edge additions or equivalence assertions, determine whether two elements belong to the same connected component, and merge components when a new edge is introduced, without needing to rerun full $O(V + E)$ BFS/DFS.

## 4. Why Is It Important?
- Core engine of **Kruskal's Minimum Spanning Tree** algorithm.
- Fundamental for cycle detection in undirected graphs.
- With optimizations (path compression + union by rank/size), operations run in $\alpha(N)$ time (Inverse Ackermann function), effectively $\le 4$ operations for all universe-sized inputs.

## 5. When Should I Use It?
- Dynamic connectivity problems where edges are added iteratively.
- Cycle detection in undirected graphs.
- Grouping elements into equivalence classes.

## 6. How to Recognise It in a Problem Statement
- "You are given $N$ nodes. At each query, connect $u$ and $v$ or check if they are in the same team."
- "Find the minimum cost to connect all cities into a single network."
- $N, Q \le 2 \times 10^5$.

## 7. Intuition
Think of social groups where each group has an elected leader. When two groups merge, one group's leader bows to the other, making one supreme leader. To check if two people know each other, they trace up their hierarchy: if they report to the same supreme leader, they belong to the same group.

## 8. Mathematical Explanation
Let $S = \{S_1, S_2, \dots, S_k\}$ partition $\{1, \dots, N\}$ such that $S_i \cap S_j = \emptyset$ and $\bigcup S_i = \{1, \dots, N\}$.
- `find(u)`: Returns the representative $r(u) \in S_i$ such that $u \in S_i$.
  With **Path Compression**:
  $$\text{parent}[u] \leftarrow \text{find}(\text{parent}[u])$$
  Flattens the tree so all visited nodes directly point to the root.
- `unite(u, v)`: Replaces $S_u$ and $S_v$ with $S_u \cup S_v$.
  With **Union by Size**:
  Attach the smaller tree to the root of the larger tree:
  $$\text{size}[r(v)] \le \text{size}[r(u)] \implies \text{parent}[r(v)] \leftarrow r(u), \quad \text{size}[r(u)] += \text{size}[r(v)]$$

## 9. Step-by-Step Algorithm
1. Initialize `parent[i] = i` and `size[i] = 1` for all $i \in [1, N]$.
2. `find(u)`:
   - If `parent[u] == u`, return $u$.
   - Else return `parent[u] = find(parent[u])`.
3. `unite(u, v)`:
   - $root_u = \text{find}(u)$, $root_v = \text{find}(v)$.
   - If $root_u == root_v$, return false (already in same component).
   - If $\text{size}[root_u] < \text{size}[root_v]$, swap($root_u, root_v$).
   - `parent[root_v] = root_u`
   - `size[root_u] += size[root_v]`
   - Return true.

## 10. Visual Explanation
```text
Before Path Compression:
        1
       /
      2
     /
    3
   /
  4

Calling find(4) compresses path directly to root 1:
        1
      / | \ \
     2  3  4 (all point to 1)
```

## 11. Dry Run
Elements $1, 2, 3, 4, 5$.
1. `unite(1, 2)`: Root 2 points to 1. Component $\{1, 2\}$ with size 2.
2. `unite(3, 4)`: Root 4 points to 3. Component $\{3, 4\}$ with size 2.
3. `unite(2, 4)`: Root of 2 is 1. Root of 4 is 3. Sizes equal (2). Root 3 points to 1. Component $\{1, 2, 3, 4\}$ with size 4.
4. `connected(2, 3)`: `find(2) = 1`, `find(3) = 1` $\implies$ True!

## 12. C++20 Implementation
See [`implementation.cpp`](implementation.cpp).

## 13. Detailed Explanation of C++ Syntax and STL Used
- `std::vector<int> parent, sz`: Dense flat arrays providing cache-friendly memory access.
- `std::swap`: Avoids branching by keeping $root_u$ as the dominant root.

## 14. Time Complexity
- With Path Compression + Union by Size: $O(\alpha(N))$ amortized per operation.
- For all practical universe sizes ($N < 10^{80}$), $\alpha(N) \le 4$, making operations effectively $O(1)$.

## 15. Space Complexity
- Auxiliary Space: $O(N)$ for parent and size tables.

## 16. Correctness Explanation or Proof
Union by size guarantees that the depth of any node never exceeds $\lfloor \log_2 N \rfloor$ without path compression. When combined with path compression, Tarjan (1975) proved the amortized complexity per operation is $\Theta(\alpha(N))$.

## 17. Common Mistakes
- Omitting path compression in `find()` (reducing performance to $O(N)$ on linear chain graphs).
- Uniting `u` and `v` directly instead of uniting their roots `find(u)` and `find(v)`.
- Forgetting to update component sizes during merge.

## 18. Edge Cases
- Self-edges `unite(u, u)`.
- Querying elements already in the same component.
- Graph with $N = 1$ node.

## 19. Related Algorithms
- **Kruskal's Algorithm**: Greedy minimum spanning tree using DSU to discard cycle-forming edges.
- **Rollback DSU**: DSU without path compression (maintains tree structure) using a history stack to revert merges in $O(\log N)$.

## 20. Advanced Variations
- DSU with Potential / Weights (bipartite checking, parity tracking).
- Dynamic Connectivity via Offline DSU with Rollbacks and Divide-and-Conquer over time.

## 21. Interview Relevance
Frequent in Big Tech interviews for graph problems ("Number of Connected Components", "Redundant Connection").

## 22. Quant / HFT Relevance
Used in real-time clustered risk modeling and arbitrage cycle detection across trading books.

## 23. Complete Resource Collection
Detailed in [`video-resources.md`](video-resources.md), [`github-resources.md`](github-resources.md), and [`web-resources.md`](web-resources.md).

## 24. Practice Problem Progression
Detailed in [`practice-problems.md`](practice-problems.md).
