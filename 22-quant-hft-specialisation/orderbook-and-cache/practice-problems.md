# Limit Order Book & Low Latency — Practice Problems Progression

## Curated Systems & Algorithmic Practice Sets

- **BEST PRACTICE SET**: [Project Euler & CSES Systems Engineering](https://projecteuler.net/)

---

## 1. Beginner Tier (Cache & Array Traversal Optimization)

1. **[Matrix Transposition Benchmarking](https://github.com/)**
   - **Platform**: Local Linux / VMware Benchmark
   - **Key Concepts Tested**: Row-major vs column-major matrix iteration, measuring cache miss impact with `perf stat`.
   - **Recommended Order**: 1

2. **[Static Range Minimum Queries](https://cses.fi/problemset/task/1647)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 1400
   - **Key Concepts Tested**: Sparse table: flat contiguous 2D vector for $O(1)$ cache-resident lookups.
   - **Recommended Order**: 2

---

## 2. Intermediate Tier (Simulations & Matching Engine Logic)

1. **[Design In-Memory File System](https://leetcode.com/problems/design-in-memory-file-system/)**
   - **Platform**: LeetCode (Hard)
   - **Key Concepts Tested**: Hierarchical structure without memory leaks.
   - **Recommended Order**: 3

2. **[Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/)**
   - **Platform**: LeetCode (Medium/Hard)
   - **Key Concepts Tested**: Streaming price feeds tracking current, minimum, and maximum prices in logarithmic time.
   - **Recommended Order**: 4

---

## 3. Advanced Tier (High-Frequency Quant Developer Puzzles)

1. **[Design Limit Order Book with FIFO Matcher](https://github.com/)**
   - **Platform**: Personal Quant Repository
   - **Key Concepts Tested**: Bid/Ask price ladder matching crossed orders under price-time priority (FIFO).
   - **Recommended Order**: 5

2. **[Lock-Free SPSC Ring Buffer](https://github.com/)**
   - **Platform**: Personal Systems Project
   - **Key Concepts Tested**: `std::atomic` with memory order acquire/release semantics.
   - **Recommended Order**: 6
