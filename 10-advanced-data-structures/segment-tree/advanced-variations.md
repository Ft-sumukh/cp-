# Segment Tree — Advanced Variations

## 1. Iterative Segment Tree (Cache-Friendly $2N$ Representation)
Instead of recursive calls with $4N$ memory, an iterative segment tree stores leaves at indices $[N, 2N-1]$ and parents at $\lfloor i/2 \rfloor$:
```cpp
template <typename T>
struct IterativeSegTree {
    int n;
    std::vector<T> tree;

    IterativeSegTree(int n) : n(n), tree(2 * n, 0) {}

    void update(int p, T val) {
        for (tree[p += n] = val; p > 1; p >>= 1) {
            tree[p >> 1] = tree[p] + tree[p ^ 1];
        }
    }

    T query(int l, int r) { // [l, r] inclusive
        T res = 0;
        for (l += n, r += n + 1; l < r; l >>= 1, r >>= 1) {
            if (l & 1) res += tree[l++];
            if (r & 1) res += tree[--r];
        }
        return res;
    }
};
```
Benefits: 3x faster in practice due to contiguous loop iterations and direct CPU cache utilization.

---

## 2. Tree Walking (Binary Search on Segment Tree in $O(\log N)$)
Instead of binary searching the answer in $O(\log^2 N)$ by querying ranges repeatedly, descend directly down the segment tree branches:
- If left child has sum $\ge K$, descend left.
- Otherwise, subtract left sum from $K$ and descend right.
Total time strictly $O(\log N)$.
