# Disjoint Set Union — Step-by-Step Execution Trace

## Trace Scenario
- Universe $N = 5$ (Nodes $1, 2, 3, 4, 5$).
- Operations:
  1. `unite(1, 2)`
  2. `unite(3, 4)`
  3. `unite(4, 5)`
  4. `find(5)`
  5. `unite(2, 5)`

---

## State Transition Table

| Step | Operation | Root $u$ (Size) | Root $v$ (Size) | Parent Pointer Action | New Size | Total Components |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Init | - | - | - | `parent[i] = i`, `size[i] = 1` | 1 each | 5 |
| 1 | `unite(1, 2)` | 1 (1) | 2 (1) | `parent[2] = 1` | `size[1] = 2` | 4 |
| 2 | `unite(3, 4)` | 3 (1) | 4 (1) | `parent[4] = 3` | `size[3] = 2` | 3 |
| 3 | `unite(4, 5)` | 3 (2) | 5 (1) | `parent[5] = 3` | `size[3] = 3` | 2 |
| 4 | `find(5)` | - | - | Traversed: $5 \to 3$. (No change, points to 3). | - | 2 |
| 5 | `unite(2, 5)` | 1 (2) | 3 (3) | Root 1 attached to Root 3: `parent[1] = 3` | `size[3] = 5` | 1 |

All 5 nodes are now united under single root 3!
