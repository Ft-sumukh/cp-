# Competitive Programming Mastery
### Complete C++20 Learning Ecosystem, Algorithm Library, Resource Hub and Problem-Solving Tracker

[![Language: C++20](https://img.shields.io/badge/Language-C%2B%2B20-blue.svg)](https://en.cppreference.com/w/cpp/20)
[![Compiler: G++ 15.2.0](https://img.shields.io/badge/Compiler-G%2B%2B%2015.2.0-red.svg)](https://gcc.gnu.org/)
[![Platform: Codeforces](https://img.shields.io/badge/Platform-Codeforces-yellow.svg)](https://codeforces.com/)
[![Curriculum: USACO Guide](https://img.shields.io/badge/Curriculum-USACO%20Guide-green.svg)](https://usaco.guide/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

An institutional-grade, rigorously structured Competitive Programming ecosystem engineered to take a Computer Science student from core algorithmic fundamentals to Codeforces Master rating and Quantitative Developer problem-solving proficiency.

---

## Technical Environment

- **Host System**: Windows with VMware Workstation
- **Guest / Dev Environment**: Ubuntu Linux
- **Primary Language**: C++ (Standard: **C++20**)
- **Target Compiler**: `g++ 15.2.0`
- **Text Editor**: Gedit / CLI
- **Standard Compilation Command**:
  ```bash
  g++ -std=c++20 -O2 -Wall -Wextra -Wshadow -Wconversion solution.cpp -o solution
  ```
- **Fast Execution**:
  ```bash
  ./solution < input.txt > output.txt
  ```

---

## Repository Directory Architecture

```text
competitive-programming-mastery/
├── README.md                          # Repository Portal & Master Index
├── ROADMAP.md                         # 5-Stage Progressive Learning Roadmap
├── PROGRESS.md                        # Live Progress Dashboard & Checklists
├── RESOURCES.md                       # Verification Protocol & Source Directory
├── CONTRIBUTING.md                    # C++20 & Formatting Guidelines
├── LICENSE                            # MIT License
│
├── 00-cpp-foundations/                # C++20, STL Containers, Lambdas, Fast I/O
├── 01-complexity-analysis/            # Asymptotics, Recurrences, Memory Limits
├── 02-basic-problem-solving/          # Prefix Sums, Two Pointers, Difference Arrays
├── 03-searching-and-optimisation/     # Binary Search on Answer, Ternary Search
├── 04-recursion-and-backtracking/     # Pruning, Branch & Bound, State Trees
├── 05-sorting/                        # Stability, Custom Comparators, Radix/Merge
├── 06-basic-data-structures/          # Monotonic Stacks, Deques, Circular Queues
├── 07-trees/                          # LCA, Binary Lifting, Tree DP, HLD, Centroid
├── 08-graphs/                         # BFS/DFS, Shortest Paths, MST, DSU, 2-SAT
├── 09-dynamic-programming/            # Knapsack, Interval, Digit, Bitmask, CHT
├── 10-advanced-data-structures/       # Segment Tree, Lazy, Treap, Persistent ST
├── 11-string-algorithms/              # Hashing, KMP, Z-Algorithm, Suffix Automaton
├── 12-number-theory/                  # Sieve, Modular Arithmetic, CRT, Mobius
├── 13-combinatorics/                  # Stars & Bars, Catalan, Lucas Theorem
├── 14-bit-manipulation/               # Bitmasks, SOS DP, Binary Tries
├── 15-probability-and-statistics/     # Linearity of Expectation, Random Walks
├── 16-game-theory/                    # Nim, Sprague-Grundy Theorem
├── 17-computational-geometry/         # Vectors, Convex Hull, Sweep Line
├── 18-advanced-graph-theory/          # Network Flow (Dinic), Hopcroft-Karp
├── 19-advanced-algorithmic-techniques/# Mo's Algorithm, Sqrt Decomposition, CDQ
├── 20-advanced-mathematics/           # Matrix Exponentiation, FFT, NTT
├── 21-contest-engineering/            # Stress Testing, Fast I/O, Stack Overflow
├── 22-quant-hft-specialisation/       # Low-Latency Concepts, Cache-Locality
│
├── 23-codeforces/                     # Categorized Solved Problems (800 - 2000+)
│   ├── 800/
│   ├── 900/
│   ├── 1000/
│   ├── 1100/
│   ├── 1200/
│   ├── 1300/
│   ├── 1400/
│   ├── 1500/
│   ├── 1600/
│   ├── 1700/
│   ├── 1800/
│   ├── 1900/
│   ├── 2000/
│   └── 2000-plus/
│
├── 24-contest-practice/               # Virtual Contest Logs & Post-Mortem Reviews
├── 25-templates/                      # Battle-Tested C++20 CP Templates & Boilerplates
├── 26-mistakes-and-revisions/         # Error Classification & Active Recall Logs
└── 27-personal-notes/                 # Ad-hoc Observations & Mathematical Proofs
```

---

## Complete Curriculum Topic Index

### [00. C++ Foundations and STL](00-cpp-foundations/)
- Variables, Data Types, and Type Limits
- Fast I/O and Buffer Management
- Sequences: `std::vector`, `std::deque`, `std::array`
- Node-based Containers: `std::set`, `std::multiset`, `std::map`, `std::unordered_map`
- Container Adaptors: `std::stack`, `std::queue`, `std::priority_queue`
- Modern C++20 Features: `std::ranges`, `std::views`, structured bindings, lambdas
- Custom Comparators & Strict Weak Ordering
- Standard Library Algorithms: `std::sort`, `std::lower_bound`, `std::upper_bound`
- Memory Safety, Recursion Limits, and Pointer/Reference Semantics

### [01. Complexity Analysis](01-complexity-analysis/)
- Asymptotic Notations: Big-$O$, Big-$\Theta$, Big-$\Omega$
- Operations-per-second constraints and contest time limits
- Recurrence Relations & The Master Theorem
- Space Complexity, Auxiliary Memory, and Cache Locality

### [02. Basic Problem-Solving](02-basic-problem-solving/)
- Simulation and Invariant Preservation
- Prefix Sums (1D and 2D) & Difference Arrays
- Two Pointers Technique and Sliding Window Invariants
- Coordinate Compression
- Basic Greedy Choice Property and Exchange Arguments

### [03. Searching and Optimisation](03-searching-and-optimisation/)
- Monotonic Predicate Invariants
- Binary Search on Discrete Spaces and Floating-Point Ranges
- Binary Search on Answer
- Ternary Search for Unimodal Functions
- Meet in the Middle

### [04. Recursion and Backtracking](04-recursion-and-backtracking/)
- Recursion Trees and Call Stack Mechanics
- Permutation, Subset, and Combination Generation
- Pruning and Branch-and-Bound Heuristics

### [05. Sorting Algorithms](05-sorting/)
- Comparison Sorts: Merge Sort, Quick Sort, Heap Sort
- Non-Comparison Sorts: Counting Sort, Radix Sort
- Stability Properties and In-Place Mechanics

### [06. Basic Data Structures](06-basic-data-structures/)
- Stacks, Queues, and Circular Buffers
- Monotonic Stack (Next Greater / Smaller Element)
- Monotonic Queue (Sliding Window Minimum / Maximum)
- Binary Heaps & Priority Queues

### [07. Trees](07-trees/)
- Tree Representations, DFS/BFS traversals, Depth & Subtree Sizes
- Tree Diameter and Centroid Determination
- Lowest Common Ancestor (Binary Lifting & Euler Tour + RMQ)
- Tree Dynamic Programming & Rerooting DP
- Heavy-Light Decomposition (HLD)
- Centroid Decomposition

### [08. Graph Algorithms](08-graphs/)
- Representations: Adjacency List, Adjacency Matrix, Edge List
- Breadth-First Search (BFS), Depth-First Search (DFS), 0-1 BFS
- Cycle Detection & Topological Sort (Kahn's Algorithm / DFS)
- Disjoint Set Union (DSU) with Path Compression & Union-by-Rank
- Minimum Spanning Trees (Kruskal's & Prim's)
- Single-Source Shortest Paths: Dijkstra, Bellman-Ford, SPFA
- All-Pairs Shortest Paths: Floyd-Warshall
- Connectivity: Bridges, Articulation Points, Strongly Connected Components (Tarjan / Kosaraju)

### [09. Dynamic Programming](09-dynamic-programming/)
- Core Paradigms: Memoization (Top-down) vs. Tabulation (Bottom-up)
- Classical Families: 0/1 Knapsack, Unbounded Knapsack, Subset Sum, LIS, LCS
- Grid DP & Counting Paths
- Interval DP
- Tree DP & Rerooting DP
- Bitmask DP & Submask Enumeration
- Digit DP
- Optimizations: Divide & Conquer, Convex Hull Trick (CHT), Knuth, SOS DP

### [10. Advanced Data Structures](10-advanced-data-structures/)
- Fenwick Tree (Binary Indexed Tree) - Point Update / Range Query
- Segment Tree (Recursive and Iterative)
- Segment Tree with Lazy Propagation
- Sparse Table (Range Minimum Query in $O(1)$)
- Treap (Cartesian Tree) & Implicit Treap
- Persistent Segment Tree
- Sqrt Decomposition & Mo's Algorithm
- DSU on Tree (Sack)
- Li Chao Tree

### [11. String Algorithms](11-string-algorithms/)
- Polynomial Rolling Hashing & Double Hashing
- Prefix Function & Knuth-Morris-Pratt (KMP)
- Z-Algorithm
- Manacher’s Algorithm (Palindromic Substrings in $O(N)$)
- Trie Data Structure & Binary Tries
- Aho-Corasick Automaton
- Suffix Automaton

### [12. Number Theory](12-number-theory/)
- Prime Sieve of Eratosthenes & Linear Sieve
- Euclidean & Extended Euclidean Algorithm (Bézout's identity)
- Modular Arithmetic, Modular Exponentiation, Modular Inverse
- Euler’s Totient Function & Fermat’s Little Theorem
- Chinese Remainder Theorem (CRT)
- Linear Diophantine Equations
- Möbius Inversion

### [13. Combinatorics](13-combinatorics/)
- Factorials & Modular Inverse Combinatorics ($nCr \pmod p$)
- Stars and Bars (Balls and Urns)
- Principle of Inclusion-Exclusion (PIE)
- Catalan Numbers & Derangements
- Lucas' Theorem

### [14. Bit Manipulation](14-bit-manipulation/)
- Bitwise Operators & Algebraic Properties
- Builtin Compiler Intrinsic Functions (`__builtin_clz`, `__builtin_popcount`)
- Iterating through all submasks of a mask in $O(3^N)$
- Sum Over Subsets (SOS) DP

### [15. Probability and Statistics](15-probability-and-statistics/)
- Discrete Probability, Conditional Probability, Bayes' Theorem
- Linearity of Expectation
- Markov Chains and Expected Steps to Absorption
- Probabilistic Dynamic Programming

### [16. Game Theory](16-game-theory/)
- Combinatorial Games, Normal Play Convention
- Impartial Games & Game Graphs
- Game of Nim & Bouton's Theorem
- Sprague-Grundy Function & Mex Rule

### [17. Computational Geometry](17-computational-geometry/)
- 2D Point & Vector Class with Cross and Dot Products
- Point Orientation (Clockwise / Counter-Clockwise / Collinear)
- Line and Segment Intersection
- Polygon Area (Shoelace Formula)
- Convex Hull: Monotone Chain / Graham Scan
- Sweep-Line Algorithms

### [18. Advanced Graph Theory](18-advanced-graph-theory/)
- Maximum Flow: Edmonds-Karp & Dinic's Algorithm
- Max-Flow Min-Cut Theorem
- Bipartite Matching: Hopcroft-Karp Algorithm
- Min-Cost Max-Flow (MCMF)
- 2-Satisfiability (2-SAT) via SCC

### [19. Advanced Algorithmic Techniques](19-advanced-algorithmic-techniques/)
- Divide and Conquer Optimization
- Meet-in-the-Middle on Exponential Spaces
- Offline Query Processing
- Parallel Binary Search
- Small-to-Large Merging (DSU on Tree)

### [20. Advanced Mathematics](20-advanced-mathematics/)
- Matrix Exponentiation for Linear Recurrences
- Gaussian Elimination (over $\mathbb{R}$ and $\mathbb{F}_2$)
- Fast Fourier Transform (FFT) & Number Theoretic Transform (NTT)

### [21. Contest Engineering](21-contest-engineering/)
- Stress Testing Harness (Bash/Python differential test runners)
- Random Test Generators (Trees, Graphs, Arrays, Corner Cases)
- Integer Overflow Prevention (`int64_t`, `__int128_t`)
- Memory and Recursion Stack Overflow Engineering

### [22. Quant and HFT Specialisation](22-quant-hft-specialisation/)
- Algorithmic Trading vs. Systems Engineering Clarity
- Cache Locality, Memory Layout, Structure-of-Arrays vs Array-of-Structures
- Low-latency Queue & Ring Buffer Mechanics
- Fast Order Book Mechanics & Order Statistic Trees
- Branch Prediction & Instruction-Level Parallelism considerations

---

## Standard Topic Structure (11-File Layout)

Every subtopic is organized into a modular folder following an identical 11-file layout:

```text
topic-folder/
├── README.md               # Complete 24-section reference guide
├── theory.md               # Formal mathematical theory, invariants, proofs
├── implementation.cpp      # Standalone C++20 verified implementation
├── dry-run.md              # Detailed manual state trace on concrete input
├── visual-explanation.md   # ASCII / Mermaid state diagrams
├── video-resources.md      # Verified video lectures & timestamps
├── github-resources.md     # Reference GitHub repositories & source files
├── web-resources.md        # High-quality tutorials, articles, visualizations
├── practice-problems.md    # Beginner, Intermediate, and Advanced problems
├── advanced-variations.md  # Generalizations, multidimensional variants
└── notes.md                # Personal reflections, pitfalls, and revision log
```

---

## Core Learning Protocol: 7-Step Mastery Loop

1. **Read & Absorb**: Study the conceptual invariants in `theory.md` and `README.md`.
2. **Watch**: View the curated video from `video-resources.md` to build geometric and dynamic intuition.
3. **Trace**: Perform a manual execution trace on paper following `dry-run.md`.
4. **Code from Scratch**: Recreate `implementation.cpp` in Ubuntu without looking at reference code.
5. **Inspect & Compare**: Diff your code against `implementation.cpp` and verify C++20 compilation.
6. **Solve Graded Problems**: Clear all 3 tiers in `practice-problems.md` (Beginner $\to$ Intermediate $\to$ Advanced).
7. **Document Mistakes**: Record every bug, TLE, or incorrect deduction in `26-mistakes-and-revisions/`.
