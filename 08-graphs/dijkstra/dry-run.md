# Dijkstra's Algorithm — Execution Trace

## Input Graph
- Vertices: $\{1, 2, 3, 4\}$, Source = $1$
- Directed Edges:
  - $(1, 2, 4)$
  - $(1, 3, 2)$
  - $(3, 2, 1)$
  - $(2, 4, 5)$
  - $(3, 4, 8)$

---

## Step-by-Step Priority Queue Trace

| Iteration | Extracted `{d, u}` | Stale Check | Neighbors Examined $(v, w)$ | Relaxation Condition $d[u] + w < d[v]$ | New Distance $d[v]$ | Priority Queue State |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Init | - | - | - | - | $d[1]=0$, others $\infty$ | `[(0, 1)]` |
| 1 | `{0, 1}` | Valid | $(2, 4)$<br>$(3, 2)$ | $0 + 4 < \infty \implies d[2]=4$<br>$0 + 2 < \infty \implies d[3]=2$ | $d[2]=4$<br>$d[3]=2$ | `[(2, 3), (4, 2)]` |
| 2 | `{2, 3}` | Valid | $(2, 1)$<br>$(4, 8)$ | $2 + 1 = 3 < 4 \implies d[2]=3$<br>$2 + 8 = 10 < \infty \implies d[4]=10$ | $d[2]=3$<br>$d[4]=10$ | `[(3, 2), (4, 2), (10, 4)]` |
| 3 | `{3, 2}` | Valid | $(4, 5)$ | $3 + 5 = 8 < 10 \implies d[4]=8$ | $d[4]=8$ | `[(4, 2), (8, 4), (10, 4)]` |
| 4 | `{4, 2}` | **Stale** ($4 > d[2]=3$) | - | Ignored | - | `[(8, 4), (10, 4)]` |
| 5 | `{8, 4}` | Valid | None | - | - | `[(10, 4)]` |
| 6 | `{10, 4}` | **Stale** ($10 > d[4]=8$) | - | Ignored | - | Empty |

Final Shortest Distances: $d[1]=0, d[2]=3, d[3]=2, d[4]=8$.
Path to 4: $1 \to 3 \to 2 \to 4$.
