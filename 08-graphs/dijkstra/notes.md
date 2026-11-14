# Dijkstra's Algorithm — Personal Notes & Error Log

## 1. Key Invariant
Dijkstra **strictly requires** non-negative weights ($w \ge 0$). If a graph contains even a single negative edge without a negative cycle, Dijkstra can terminate prematurely with incorrect shortest distances. Use Bellman-Ford or SPFA if negative edges exist.

## 2. Common Pitfalls Checklist
- [ ] **Integer Overflow**: Edge weights $10^9$ with $10^5$ vertices sum to $10^{14}$. Always declare `dist` as `int64_t` / `long long` and initialize with `INF = 1e18` (not `INT_MAX`).
- [ ] **Stale Queue Entries**: Did I write `if (d > dist[u]) continue;`? Omitting this creates quadratic explosion in queue insertions on dense graphs.
- [ ] **Priority Queue Direction**: `std::priority_queue` defaults to max-heap! Always declare with `std::greater<std::pair<i64, int>>` to make it a min-heap.

## 3. Revision Tracking
| Review Date | Review Focus | Solved Without Hints? | Confidence (1-5) | Next Review Date |
| :---: | :---: | :---: | :---: | :---: |
| 2026-11-14 | Initial implementation & proofs | Yes | 5/5 | 2026-11-28 |
