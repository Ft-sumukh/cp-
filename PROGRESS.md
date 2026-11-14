# Competitive Programming Learning & Progress Tracker

Personal progress dashboard tracking topic mastery, practice volume, Codeforces rating milestones, and revision cycles.

---

## 1. Executive Dashboard

| Metric | Status / Count |
| :--- | :--- |
| **Current Learning Stage** | Stage 1 & Stage 2 (Foundations $\to$ Core Algorithms) |
| **Current Codeforces Rating** | Unrated / Baseline (Target: 1400 $\to$ 1600 $\to$ 1900+) |
| **Total Topics in Curriculum** | 23 Modules / 140+ Individual Subtopics |
| **Core Reference Modules Fully Completed (11-File Suites)** | **8 Complete Modules** |
| **Total Artifacts & Implementations Active** | **136 Files** |
| **Last Updated** | 2026-11-14 |

---

## 2. Milestone Progression

- [x] **Stage 1 (Beginner - CF 800 to 1200)**:
  - [x] Fast I/O (`00-cpp-foundations/fast-io`)
  - [x] Prefix Sums 1D & 2D (`02-basic-problem-solving/prefix-sums`)
  - [x] Sieve of Eratosthenes & Linear Sieve (`12-number-theory/sieve-of-eratosthenes`)
  - [x] Bitwise Manipulation & Lowbit (`14-bit-manipulation/bitwise-operations-and-tricks`)
- [x] **Stage 2 (Intermediate - CF 1200 to 1500)**:
  - [x] Binary Search on Answer (`03-searching-and-optimisation/binary-search-on-answer`)
  - [x] Disjoint Set Union (`08-graphs/disjoint-set-union`)
  - [x] Dijkstra's Algorithm (`08-graphs/dijkstra`)
  - [x] Longest Increasing Subsequence (`09-dynamic-programming/longest-increasing-subsequence`)
- [x] **Stage 3 (Advanced - CF 1500 to 1800)**:
  - [x] Segment Tree (`10-advanced-data-structures/segment-tree`)
- [x] **Stage 5 (Master & Quant Engineering)**:
  - [x] Low-Latency Limit Order Book & CPU Cache Alignment (`22-quant-hft-specialisation/orderbook-and-cache`)

---

## 3. Curriculum Module Status Table

| Module ID | Module Title | Subtopics Fully Built (11-File Suite) | Status |
| :---: | :--- | :---: | :---: |
| **00** | C++ Foundations & STL | `fast-io` (Complete 11-File Suite) | In Progress |
| **01** | Complexity Analysis | Syllabus & Bounds Guide | Active |
| **02** | Basic Problem-Solving | `prefix-sums` (Complete 11-File Suite) | In Progress |
| **03** | Searching & Optimisation | `binary-search-on-answer` (Complete 11-File Suite) | In Progress |
| **04** | Recursion & Backtracking | Syllabus & State Space Guide | Active |
| **05** | Sorting Algorithms | Syllabus & Invariants Guide | Active |
| **06** | Basic Data Structures | Syllabus & Stack/Queue Guide | Active |
| **07** | Trees | Syllabus & Tree Traversal Guide | Active |
| **08** | Graph Algorithms | `dijkstra`, `disjoint-set-union` (2 Complete Suites) | In Progress |
| **09** | Dynamic Programming | `longest-increasing-subsequence` (Complete 11-File Suite) | In Progress |
| **10** | Advanced Data Structures | `segment-tree` (Complete 11-File Suite) | In Progress |
| **11** | String Algorithms | Syllabus & Hashing Guide | Active |
| **12** | Number Theory | `sieve-of-eratosthenes` (Complete 11-File Suite) | In Progress |
| **13** | Combinatorics | Syllabus & Identities Guide | Active |
| **14** | Bit Manipulation | `bitwise-operations-and-tricks` (Complete 11-File Suite) | In Progress |
| **15** | Probability & Statistics | Syllabus & Expectation Guide | Active |
| **16** | Game Theory | Syllabus & Nim/Grundy Guide | Active |
| **17** | Computational Geometry | Syllabus & Vector Geometry Guide | Active |
| **18** | Advanced Graph Theory | Syllabus & Network Flow Guide | Active |
| **19** | Advanced Algorithmic Techniques | Syllabus & Sqrt/Mo Guide | Active |
| **20** | Advanced Mathematics | Syllabus & FFT/Matrix Guide | Active |
| **21** | Contest Engineering | Stress-Testing Harness & Gen | Complete Baseline |
| **22** | Quant & HFT Specialisation | `orderbook-and-cache` (Complete 11-File Suite) | In Progress |

---

## 4. Active Revision & Mistake Queue

| Date Added | Topic / Module | Invariant Checklist | Revision Status | Next Review |
| :---: | :--- | :--- | :---: | :---: |
| 2026-11-14 | `00-fast-io` | Never mix C stdio with `cin`/`cout` | Verified | 2026-11-28 |
| 2026-11-14 | `02-prefix-sums` | 1-based indexing prevents $L=0$ checks | Verified | 2026-11-28 |
| 2026-11-14 | `03-binary-search-on-answer` | Prevent midpoint overflow via $L + (R-L)/2$ | Verified | 2026-11-28 |
| 2026-11-14 | `08-dijkstra` | Non-negative weights & stale queue check | Verified | 2026-11-28 |
| 2026-11-14 | `08-disjoint-set-union` | Union by size + path compression | Verified | 2026-11-28 |
| 2026-11-14 | `09-longest-increasing-subsequence` | Patience sorting with `lower_bound` | Verified | 2026-11-28 |
| 2026-11-14 | `10-segment-tree` | Allocate $4N$ memory in recursive heap tree | Verified | 2026-11-28 |
| 2026-11-14 | `12-sieve-of-eratosthenes` | Euler's linear sieve with SPF break condition | Verified | 2026-11-28 |
| 2026-11-14 | `14-bitwise-operations-and-tricks` | Parenthesize bitwise operations `((mask >> i) & 1)` | Verified | 2026-11-28 |
| 2026-11-14 | `22-orderbook-and-cache` | Discretize price ticks, zero dynamic heap allocations | Verified | 2026-11-28 |
