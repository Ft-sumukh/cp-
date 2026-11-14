# Segment Tree — Execution Trace

## Input Data
- Base Array: $A = [2, 1, 5, 3]$ (0-indexed, $N = 4$)
- Tree Operation: Range Sum Query (Identity = 0)

---

## 1. Tree Construction (Build Phase)

```text
               Node 1: [0, 3] = 11
              /                  \
      Node 2: [0, 1] = 3      Node 3: [2, 3] = 8
      /               \       /               \
Node 4: [0] = 2  Node 5: [1] = 1  Node 6: [2] = 5  Node 7: [3] = 3
```

- Leaves:
  - `tree[4] = A[0] = 2`
  - `tree[5] = A[1] = 1`
  - `tree[6] = A[2] = 5`
  - `tree[7] = A[3] = 3`
- Parents:
  - `tree[2] = tree[4] + tree[5] = 2 + 1 = 3`
  - `tree[3] = tree[6] + tree[7] = 5 + 3 = 8`
- Root:
  - `tree[1] = tree[2] + tree[3] = 3 + 8 = 11`

---

## 2. Query Range [1, 2] Execution Trace (Elements $1 + 5 = 6$)
1. Call `query(node=1, l=0, r=3, ql=1, qr=2)`:
   - Not fully contained, not disjoint. Midpoint = 1.
   - Recurse Left: `query(node=2, l=0, r=1, ql=1, qr=2)`
   - Recurse Right: `query(node=3, l=2, r=3, ql=1, qr=2)`
2. Left Subtree (`node=2`):
   - Overlaps boundary. Midpoint = 0.
   - Left child `[0, 0]` is disjoint from `[1, 2]` $\to$ returns 0.
   - Right child `[1, 1]` is fully contained in `[1, 2]` $\to$ returns `tree[5] = 1`.
   - Result for `node 2` = $0 + 1 = 1$.
3. Right Subtree (`node=3`):
   - Overlaps boundary. Midpoint = 2.
   - Left child `[2, 2]` is fully contained in `[1, 2]` $\to$ returns `tree[6] = 5`.
   - Right child `[3, 3]` is disjoint from `[1, 2]` $\to$ returns 0.
   - Result for `node 3` = $5 + 0 = 5$.
4. Total Combine:
   - Root returns $1 + 5 = \mathbf{6}$. Correct!
