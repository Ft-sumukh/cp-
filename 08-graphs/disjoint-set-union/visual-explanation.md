# Disjoint Set Union — Visual Transitions & Path Compression

## 1. Union by Size (Attaching Smaller to Larger)

```mermaid
flowchart TD
    subgraph Component_A["Component A (Size = 3)"]
        R1((Root 3)) --> C1((Node 4))
        R1 --> C2((Node 5))
    end

    subgraph Component_B["Component B (Size = 2)"]
        R2((Root 1)) --> C3((Node 2))
    end

    R1 -.->|"unite(2, 5): Attach smaller root 1 to root 3"| R2
```

---

## 2. Path Compression Visualized

```text
Before Calling find(4):
          Root (1)
             ^
             |
          Node (2)
             ^
             |
          Node (3)
             ^
             |
          Node (4)

After Calling find(4):
          Root (1)
        /    |    \
      Node2 Node3 Node4   <-- Tree depth flattened to 1!
```
