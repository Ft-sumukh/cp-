# Dijkstra's Algorithm — Practice Problems Progression

## Curated Practice Sets

- **BEST PRACTICE SET**: [CSES Graph Algorithms Section](https://cses.fi/problemset/)

---

## 1. Beginner Tier (Foundations & Direct Implementation)

1. **[Shortest Routes I](https://cses.fi/problemset/task/1671)**
   - **Platform**: CSES
   - **Difficulty / Rating**: CSES Graph Algorithms / Codeforces 1300
   - **Key Concepts Tested**: Standard Dijkstra with 64-bit edge weights on directed graphs.
   - **Recommended Order**: 1

2. **[Dijkstra?](https://codeforces.com/problemset/problem/20/C)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 1300
   - **Key Concepts Tested**: Shortest path computation and path reconstruction using parent pointers.
   - **Recommended Order**: 2

3. **[Network Delay Time](https://leetcode.com/problems/network-delay-time/)**
   - **Platform**: LeetCode
   - **Difficulty / Rating**: Codeforces 1200
   - **Key Concepts Tested**: Finding time for signal to reach all nodes ($\max_{v} \text{dist}[v]$).
   - **Recommended Order**: 3

---

## 2. Intermediate Tier (Multi-State & Graph Augmentation)

1. **[Flight Discount](https://cses.fi/problemset/task/1195)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 1600
   - **Key Concepts Tested**: Multi-state Dijkstra: state `(u, coupon_used)` where coupon can halve one edge weight.
   - **Recommended Order**: 4

2. **[Shortest Routes II](https://cses.fi/problemset/task/1672)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 1400
   - **Key Concepts Tested**: Contrast between $V \times \text{Dijkstra}$ vs Floyd-Warshall for all-pairs queries.
   - **Recommended Order**: 5

3. **[Flight Routes](https://cses.fi/problemset/task/1196)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 1600 - 1700
   - **Key Concepts Tested**: Finding the $K$ shortest paths from source to destination.
   - **Recommended Order**: 6

---

## 3. Advanced Tier (Grid Transformations & Potential Graphs)

1. **[Investigation](https://cses.fi/problemset/task/1202)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 1700
   - **Key Concepts Tested**: Dijkstra combined with DP DAG: count minimum-cost paths, min flights, max flights.
   - **Recommended Order**: 7

2. **[Leaving the Bar](https://codeforces.com/problemset/problem/997/C)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 2000
   - **Key Concepts Tested**: Shortest paths in vector state spaces.
   - **Recommended Order**: 8

3. **[Weights Assignment For Tree Edges](https://codeforces.com/problemset/problem/1611/D)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 1500 - 1600
   - **Key Concepts Tested**: Constructive weight assignment preserving shortest path tree order.
   - **Recommended Order**: 9
