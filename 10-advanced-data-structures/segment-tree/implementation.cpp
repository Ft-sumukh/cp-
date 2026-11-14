/**
 * Data Structure: Segment Tree (Point Updates & Range Queries)
 * Language: C++20
 * Optimization: -std=c++20 -O2 -Wall -Wextra
 *
 * Supports:
 *   1. Point update: A[idx] = val in O(log N)
 *   2. Range query:  f(A[L...R])   in O(log N)
 */

#include <iostream>
#include <vector>
#include <algorithm>
#include <cstdint>
#include <limits>

using i64 = int64_t;

template <typename T>
class SegmentTree {
private:
    int n;
    std::vector<T> tree;
    T identity;

    // Associative binary operation: can be sum, min, max, gcd, etc.
    T combine(T a, T b) const {
        return a + b; // Change to std::min(a, b) for RMQ
    }

    void build(const std::vector<T>& arr, int node, int l, int r) {
        if (l == r) {
            tree[node] = arr[l];
            return;
        }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node, l, mid);
        build(arr, 2 * node + 1, mid + 1, r);
        tree[node] = combine(tree[2 * node], tree[2 * node + 1]);
    }

    void update(int node, int l, int r, int idx, T val) {
        if (l == r) {
            tree[node] = val;
            return;
        }
        int mid = l + (r - l) / 2;
        if (idx <= mid) {
            update(2 * node, l, mid, idx, val);
        } else {
            update(2 * node + 1, mid + 1, r, idx, val);
        }
        tree[node] = combine(tree[2 * node], tree[2 * node + 1]);
    }

    T query(int node, int l, int r, int ql, int qr) const {
        if (ql > r || qr < l) {
            return identity;
        }
        if (ql <= l && r <= qr) {
            return tree[node];
        }
        int mid = l + (r - l) / 2;
        T left_res = query(2 * node, l, mid, ql, qr);
        T right_res = query(2 * node + 1, mid + 1, r, ql, qr);
        return combine(left_res, right_res);
    }

public:
    explicit SegmentTree(const std::vector<T>& arr, T id = 0) 
        : n(static_cast<int>(arr.size())), tree(4 * n, id), identity(id) {
        if (n > 0) {
            build(arr, 1, 0, n - 1);
        }
    }

    // Set arr[idx] = val (0-indexed)
    void update(int idx, T val) {
        update(1, 0, n - 1, idx, val);
    }

    // Query range [ql, qr] inclusive (0-indexed)
    [[nodiscard]] T query(int ql, int qr) const {
        return query(1, 0, n - 1, ql, qr);
    }
};

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    std::vector<i64> arr = {1, 3, 5, 7, 9, 11};
    SegmentTree<i64> st(arr, 0); // 0 is identity for sum

    std::cout << "Sum [1, 4]: " << st.query(1, 4) << "\n"; // 3 + 5 + 7 + 9 = 24

    // Point update: set index 2 (value 5) to 10
    st.update(2, 10);
    std::cout << "Sum [1, 4] after update: " << st.query(1, 4) << "\n"; // 3 + 10 + 7 + 9 = 29

    return 0;
}
