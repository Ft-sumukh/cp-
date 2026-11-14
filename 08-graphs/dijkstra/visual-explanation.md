# Dijkstra's Algorithm — Visual Graph Relaxation

## 1. Graph Topology & Edge Weights

```mermaid
flowchart LR
    N1((Node 1)) -->|w=4| N2((Node 2))
    N1 -->|w=2| N3((Node 3))
    N3 -->|w=1| N2
    N2 -->|w=5| N4((Node 4))
    N3 -->|w=8| N4

    style N1 fill:#4CAF50,stroke:#388E3C,color:white
    style N3 fill:#2196F3,stroke:#1976D2,color:white
    style N2 fill:#FF9800,stroke:#F57C00,color:white
    style N4 fill:#9C27B0,stroke:#7B1FA2,color:white
```

---

## 2. Settled Wavefront Expansion

```text
Time 0: Settled = { 1 (dist=0) }
        Frontier: (Node 3, dist 2), (Node 2, dist 4)

Time 2: Node 3 settled! (dist=2)
        Edge 3 -> 2 relaxes Node 2 from 4 down to 3!
        Settled = { 1, 3 }
        Frontier: (Node 2, dist 3), (Node 4, dist 10)

Time 3: Node 2 settled! (dist=3)
        Edge 2 -> 4 relaxes Node 4 from 10 down to 8!
        Settled = { 1, 3, 2 }
        Frontier: (Node 4, dist 8)

Time 8: Node 4 settled! (dist=8)
        All reachable vertices finalized!
```
