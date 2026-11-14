# Bit Manipulation — Practice Problems Progression

## Curated Practice Sets

- **BEST PRACTICE SET**: [CSES Introductory & Dynamic Programming](https://cses.fi/problemset/)

---

## 1. Beginner Tier (Foundations & XOR Properties)

1. **[Single Number](https://leetcode.com/problems/single-number/)**
   - **Platform**: LeetCode
   - **Difficulty / Rating**: Codeforces 800 - 900
   - **Key Concepts Tested**: XOR identity $A \oplus A = 0$, finding the unique unpaired number in $O(N)$ time and $O(1)$ space.
   - **Recommended Order**: 1

2. **[Apple Division](https://cses.fi/problemset/task/1623)**
   - **Platform**: CSES
   - **Difficulty / Rating**: Codeforces 1000 - 1100
   - **Key Concepts Tested**: Iterating all $2^N$ subsets using bitmasks $[0, 2^N - 1]$ where $N \le 20$.
   - **Recommended Order**: 2

3. **[Fedor and New Game](https://codeforces.com/problemset/problem/467/B)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 1100
   - **Key Concepts Tested**: `std::popcount(a ^ b) <= k` to check Hamming distance between player armies.
   - **Recommended Order**: 3

---

## 2. Intermediate Tier (Submask Enumeration & Bitmask DP)

1. **[Matching](https://atcoder.jp/contests/dp/tasks/dp_o)**
   - **Platform**: AtCoder Educational DP Contest
   - **Difficulty / Rating**: 1600
   - **Key Concepts Tested**: Bitmask DP over bipartite compatibility matrix ($O(N \cdot 2^N)$).
   - **Recommended Order**: 4

2. **[Elevator Rides](https://cses.fi/problemset/task/1653)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 1700
   - **Key Concepts Tested**: Bitmask DP tracking pair of values: `{number_of_rides, last_ride_weight}`.
   - **Recommended Order**: 5

3. **[Preparing Olympiad](https://codeforces.com/problemset/problem/550/B)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 1200 - 1300
   - **Key Concepts Tested**: Bitmask subset generation checking min/max/sum constraints.
   - **Recommended Order**: 6

---

## 3. Advanced Tier (SOS DP & XOR Linear Basis)

1. **[Compatible Numbers](https://codeforces.com/problemset/problem/165/E)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 1900
   - **Key Concepts Tested**: Fast Walsh-Hadamard / SOS DP to find pairs with $A[i] \& A[j] = 0$.
   - **Recommended Order**: 7

2. **[Special Segments of Permutation](https://codeforces.com/problemset/problem/1156/E)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 2000
   - **Key Concepts Tested**: Cartesian tree / small-to-large bitwise lookups.
   - **Recommended Order**: 8

3. **[Xor-MST](https://codeforces.com/problemset/problem/888/G)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 2100
   - **Key Concepts Tested**: Boruvka's MST with Binary Trie bitwise queries.
   - **Recommended Order**: 9
