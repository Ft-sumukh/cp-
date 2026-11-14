# Segment Tree — Theoretical Foundations & Invariants

## 1. Array-Based Complete Binary Tree Bounds
A classic question is: why does a recursive Segment Tree require an array size of $4N$?

### Proof of the $4N$ Upper Bound
Let $N$ be the number of leaves in the base array.
If $N = 2^k$ (an exact power of 2), the segment tree forms a full binary tree with:
$$2N - 1 < 2N \text{ nodes.}$$
However, if $N = 2^k + 1$, the smallest power of 2 greater than $N$ is $2^{k+1} = 2(N - 1) < 2N$.
The height of the tree is $h = \lceil \log_2 N \rceil + 1$.
The maximum index in a 1-based heap layout for a tree of height $h$ is:
$$\text{Max Index} = 2^h - 1 = 2^{\lceil \log_2 N \rceil + 1} - 1 < 2 \cdot 2^{\lceil \log_2 N \rceil} < 2 \cdot 2N = 4N$$
Thus, an array of size $4N$ is strictly guaranteed to prevent index out-of-bounds without dynamic allocation.

---

## 2. Query Complexity Proof ($O(\log N)$)
At each level of the tree, any contiguous interval $[L, R]$ can intersect the boundaries of at most two sub-segments.
At each depth level $d \in \{0, 1, \dots, h\}$:
- Nodes completely contained within $[L, R]$ are returned immediately (at most 2).
- Nodes completely disjoint are returned immediately (at most 2).
- Only nodes strictly overlapping the boundaries $[L, R]$ recurse down.

Since there are at most 2 boundary nodes per level, the total number of visited nodes across all levels is bounded by:
$$4 \lceil \log_2 N \rceil = O(\log N)$$
