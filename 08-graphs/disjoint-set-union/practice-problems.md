# Disjoint Set Union — Practice Problems Progression

## Curated Practice Sets

- **BEST PRACTICE SET**: [Codeforces EDU DSU Course Steps 1 & 2](https://codeforces.com/edu/course/2)

---

## 1. Beginner Tier (Foundations & Standard Direct Connectivity)

1. **[Road Construction](https://cses.fi/problemset/task/1676)**
   - **Platform**: CSES
   - **Difficulty / Rating**: CSES Graph Algorithms / Codeforces 1200
   - **Key Concepts Tested**: Maintaining number of components and size of largest component after each edge addition.
   - **Recommended Order**: 1
   - **Editorial**: Track `num_components` and `max_size` inside `unite()`.

2. **[Road Reparation](https://cses.fi/problemset/task/1675)**
   - **Platform**: CSES
   - **Difficulty / Rating**: Codeforces 1300
   - **Key Concepts Tested**: Kruskal's Minimum Spanning Tree algorithm using DSU.
   - **Recommended Order**: 2

3. **[Moocast](https://usaco.org/index.php?page=viewproblem2&cpid=668)**
   - **Platform**: USACO 2016 December Contest, Silver / Gold
   - **Difficulty / Rating**: 1300
   - **Key Concepts Tested**: Binary search on Euclidean squared distance + DSU connectivity test.
   - **Recommended Order**: 3

---

## 2. Intermediate Tier (Weighted DSU & Parity Tracking)

1. **[News Distribution](https://codeforces.com/problemset/problem/1167/C)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 1200
   - **Key Concepts Tested**: Finding size of connected component for each query vertex.
   - **Recommended Order**: 4

2. **[Moocast Gold](https://usaco.org/index.php?page=viewproblem2&cpid=669)**
   - **Platform**: USACO 2016 December Contest, Gold
   - **Difficulty / Rating**: 1500
   - **Key Concepts Tested**: Kruskal's edge sorting to find minimum $X$ where all nodes form 1 component.
   - **Recommended Order**: 5

3. **[Cutting a Graph](https://codeforces.com/edu/course/2/lesson/7/1/practice/contest/289390/problem/D)**
   - **Platform**: Codeforces EDU
   - **Difficulty / Rating**: 1400
   - **Key Concepts Tested**: Reverse offline queries (turning edge deletions into edge additions).
   - **Recommended Order**: 6

---

## 3. Advanced Tier (Rollback DSU & Dynamic Connectivity)

1. **[Dynamic Connectivity Contest](https://codeforces.com/gym/100551/problem/A)**
   - **Platform**: Codeforces Gym
   - **Difficulty / Rating**: 1900
   - **Key Concepts Tested**: Offline DSU with rollbacks, segment tree over query time intervals.
   - **Recommended Order**: 7

2. **[Checkposts](https://codeforces.com/problemset/problem/427/C)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 1700
   - **Key Concepts Tested**: Strongly Connected Components vs undirected equivalence classes.
   - **Recommended Order**: 8

3. **[Tree and Queries](https://codeforces.com/problemset/problem/375/D)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 2000
   - **Key Concepts Tested**: Small-to-large merging (DSU on tree).
   - **Recommended Order**: 9
