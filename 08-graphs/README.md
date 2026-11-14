# 08. Graph Algorithms

This module covers graph representations, connectivity, shortest paths, spanning trees, and bipartite matching.

---

## Subtopics & Planned Modules

1. **`graph-representations/`**: Adjacency lists, edge lists, adjacency matrices, forward stars.
2. **`bfs-dfs-connected-components/`**: Breadth-First Search, Depth-First Search, flood fill, component labeling.
3. **`cycle-detection-topological-sort/`**: Directed vs undirected cycle detection, Kahn's algorithm, DFS top-sort.
4. **`bipartite-graphs/`**: 2-coloring via BFS/DFS, odd cycle theorem.
5. **`disjoint-set-union/`**: DSU with union-by-rank / size and path compression, rollback DSU.
6. **`minimum-spanning-tree/`**: Kruskal's algorithm (with DSU) and Prim's algorithm (with priority queue).
7. **`dijkstra/`**: Single-source shortest path on non-negative weighted graphs in $O((V + E) \log V)$.
8. **`0-1-bfs/`**: Shortest path on graphs with edge weights in $\{0, 1\}$ using `std::deque` in $O(V + E)$.
9. **`bellman-ford-spfa/`**: Shortest path with negative edge weights, negative cycle detection.
10. **`floyd-warshall/`**: All-pairs shortest path in $O(V^3)$, transitive closure.
11. **`bridges-and-articulation-points/`**: Tarjan's bridge-finding algorithm using discovery and low-link values.
12. **`strongly-connected-components/`**: Kosaraju's two-pass algorithm and Tarjan's SCC algorithm.
13. **`eulerian-paths/`**: Hierholzer's algorithm for Eulerian circuits and trails in $O(V + E)$.
14. **`2-sat/`**: Satisfiability of 2-CNF formulas via SCC on implication graphs.
