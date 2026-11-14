# Segment Tree — Practice Problems Progression

## Curated Practice Sets

- **BEST PRACTICE SET**: [CSES Range Queries Section](https://cses.fi/problemset/)

---

## 1. Beginner Tier (Foundations & Standard Direct Point Updates)

1. **[Dynamic Range Minimum Queries](https://cses.fi/problemset/task/1649)**
   - **Platform**: CSES
   - **Difficulty / Rating**: CSES Range Queries / Codeforces 1400
   - **Key Concepts Tested**: Standard point update, range minimum query with $\infty$ identity.
   - **Recommended Order**: 1

2. **[Dynamic Range Sum Queries](https://cses.fi/problemset/task/1648)**
   - **Platform**: CSES
   - **Difficulty / Rating**: Codeforces 1400
   - **Key Concepts Tested**: 64-bit sum queries with point updates.
   - **Recommended Order**: 2

3. **[Segment Tree for the Minimum](https://codeforces.com/edu/course/2/lesson/4/1/practice/contest/273169/problem/B)**
   - **Platform**: Codeforces EDU
   - **Difficulty / Rating**: 1300
   - **Key Concepts Tested**: Direct implementation on Codeforces EDU judging system.
   - **Recommended Order**: 3

---

## 2. Intermediate Tier (Composite States & Inversion Counting)

1. **[Hotel Queries](https://cses.fi/problemset/task/1143)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 1500 - 1600
   - **Key Concepts Tested**: Binary search on Segment Tree (walking down the tree to find first element $\ge X$ in $O(\log N)$).
   - **Recommended Order**: 4

2. **[List Removals](https://cses.fi/problemset/task/1749)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 1500
   - **Key Concepts Tested**: Using segment tree to find the $K$-th active element in $O(\log N)$.
   - **Recommended Order**: 5

3. **[Salary Queries](https://cses.fi/problemset/task/1144)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 1600
   - **Key Concepts Tested**: Coordinate compression + point update segment tree.
   - **Recommended Order**: 6

---

## 3. Advanced Tier (Multi-Dimensional & Tree Interfacing)

1. **[Subarray Sum Queries](https://cses.fi/problemset/task/1190)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 1800
   - **Key Concepts Tested**: Complex node state: `{total_sum, max_prefix, max_suffix, max_subarray}` merged in $O(1)$.
   - **Recommended Order**: 7

2. **[Distinct Values Queries](https://cses.fi/problemset/task/1734)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 1700 - 1800
   - **Key Concepts Tested**: Offline queries sorted by right endpoint with point updates tracking last occurrences.
   - **Recommended Order**: 8

3. **[Ant colony](https://codeforces.com/problemset/problem/474/F)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 1900
   - **Key Concepts Tested**: Segment Tree storing range GCD and frequency of the minimum element.
   - **Recommended Order**: 9
