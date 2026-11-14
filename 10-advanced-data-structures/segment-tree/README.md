# Segment Tree (Point Updates & Range Queries)

---

## 1. Topic Overview
A Segment Tree is a binary tree structure used for storing intervals or segments. It allows querying associative aggregate functions (sum, minimum, maximum, GCD, XOR) over any arbitrary range $[L, R]$ in $O(\log N)$ time, while simultaneously supporting point updates in $O(\log N)$ time.

## 2. Prerequisites
- Binary tree representations in flat arrays (`2 * i`, `2 * i + 1`).
- Recursion and divide-and-conquer paradigms.
- Monoids and associative algebraic operations ($a \star (b \star c) = (a \star b) \star c$).

## 3. What Problem Does It Solve?
Given an array $A$ of $N$ elements subject to dynamic modifications (e.g. "update element at index $i$ to value $v$") and queries (e.g. "find the minimum element in range $[L, R]$"), naive arrays take $O(1)$ update and $O(N)$ query, while prefix arrays take $O(1)$ query but $O(N)$ update. The Segment Tree harmonizes both operations into $O(\log N)$.

## 4. Why Is It Important?
- Standard workhorse for Stage 3 & 4 competitive programming (CF 1400 - 2200).
- Highly generalizable: easily adapted to support range assignment, range addition (Lazy Propagation), persistent versions, and 2D spatial queries.

## 5. When Should I Use It?
- Dynamic range queries with point or range updates.
- The operation over elements forms a **monoid** (associative with an identity element).
- Non-invertible operations where prefix sums fail (e.g. Range Minimum / Maximum Query, Range GCD).

## 6. How to Recognise It in a Problem Statement
- "Given an array of $N$ integers and $Q$ operations: either set $A[k] = x$ or find the minimum in range $[L, R]$."
- Constraints: $N, Q \le 2 \times 10^5$.

## 7. Intuition
Imagine a tournament bracket. The bottom leaves are the initial contenders (array elements). Each parent node represents the winner (minimum or sum) of the sub-bracket beneath it. If a single contender changes, you only need to re-evaluate the path from that leaf up to the root ($\approx \log_2 N$ matches), leaving the rest of the bracket untouched.

## 8. Mathematical Explanation
Let $(S, \star, e)$ be a monoid:
- Closure: $\forall a, b \in S, a \star b \in S$.
- Associativity: $(a \star b) \star c = a \star (b \star c)$.
- Identity: $a \star e = e \star a = a$.

For each internal node $u$ covering range $[l, r]$ with midpoint $m = \lfloor (l + r) / 2 \rfloor$:
$$\text{tree}[u] = \text{tree}[2u] \star \text{tree}[2u + 1]$$
Range query $[L, R]$ decomposes into at most $2 \lceil \log_2 N \rceil$ canonical disjoint segment nodes whose union equals $[L, R]$.

## 9. Step-by-Step Algorithm
1. **Build**: Recursively build left child $[l, m]$ and right child $[m+1, r]$. Aggregate values: `tree[node] = merge(tree[2*node], tree[2*node+1])`.
2. **Point Update**: Recurse down to the target leaf index, set its value, and backtrack up the tree, updating each ancestor.
3. **Range Query**:
   - If current segment $[l, r]$ is completely inside $[L, R]$, return `tree[node]`.
   - If current segment $[l, r]$ is disjoint from $[L, R]$, return the identity element $e$.
   - Else, split query across both children and return `merge(query(left), query(right))`.

## 10. Visual Explanation
```text
Root covering [0, 3]
       /        \
   [0, 1]      [2, 3]
   /    \      /    \
 [0]    [1]  [2]    [3]  <-- Leaves (Array elements)
```

## 11. Dry Run
Array $A = [1, 3, 5, 7, 9, 11]$ (sum queries).
- Leaves: $[1], [3], [5], [7], [9], [11]$.
- Intermediate parents: $[1+3=4]$, $[5+7=12]$, $[9+11=20]$.
- Higher parents: $[4+12=16]$, $[20]$.
- Root: $[16+20=36]$.
Query range $[1, 4]$ ($3 + 5 + 7 + 9 = 24$):
Decomposed nodes: leaf $[1] = 3$, segment $[2, 3] = 12$, leaf $[4] = 9$.
Sum $= 3 + 12 + 9 = 24$.

## 12. C++20 Implementation
See [`implementation.cpp`](implementation.cpp).

## 13. Detailed Explanation of C++ Syntax and STL Used
- Vector size `4 * N`: An array of size $N$ requires at most $4N$ nodes in a 1-indexed binary heap array layout.
- Lambda/Template merge function: Enables generic adaptation from Sum to Min/Max/GCD.

## 14. Time Complexity
- Build: $O(N)$
- Point Update: $O(\log N)$
- Range Query: $O(\log N)$

## 15. Space Complexity
- $O(4N) = O(N)$ memory.

## 16. Correctness Explanation or Proof
Every range $[L, R]$ intersects at most two canonical segments at each level of the tree. Since the tree depth is strictly $\lceil \log_2 N \rceil$, the query visits at most $4 \log_2 N$ nodes. Correctness follows from associativity of $\star$.

## 17. Common Mistakes
- Allocating size $2N$ instead of $4N$ in recursive tree representations (causes out-of-bounds heap corruption).
- Returning $0$ as identity for Range Minimum Query (identity for Min is $+\infty$, for Max is $-\infty$, for GCD is $0$).
- Off-by-one errors in segment midpoints $m = l + (r - l) / 2$.

## 18. Edge Cases
- Range of length 1 ($L = R$).
- Query covering entire array ($L = 0, R = N - 1$).
- Extreme values ($A[i] = 10^9$, requiring `int64_t` for sum).

## 19. Related Algorithms
- **Fenwick Tree (BIT)**: Simpler code and lower constant factor, but restricted to invertible or prefix operations.
- **Lazy Segment Tree**: Extends Segment Tree to support range updates in $O(\log N)$.
- **Sparse Table**: $O(1)$ query on static arrays, but cannot support updates.

## 20. Advanced Variations
- Dynamic Segment Tree (allocating nodes on the fly for coordinates up to $10^9$).
- Persistent Segment Tree (preserving previous versions of the array).

## 21. Interview Relevance
High frequency in Google and Citadel quantitative engineering interviews for interval queries.

## 22. Quant / HFT Relevance
Used in real-time volatility smile calculations and order book maximum depth searches across discrete price windows.

## 23. Complete Resource Collection
Detailed in [`video-resources.md`](video-resources.md), [`github-resources.md`](github-resources.md), and [`web-resources.md`](web-resources.md).

## 24. Practice Problem Progression
Detailed in [`practice-problems.md`](practice-problems.md).
