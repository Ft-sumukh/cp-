# Binary Search on Answer — Visual Flow & State Transitions

## 1. Decision Function Monotonic Step

```text
Target: Find minimum X where condition check(X) is true.

Values:     10   12   14   16   17   18   19   20   25   32
check(X):   [F]  [F]  [F]  [F]  [F]  [T]  [T]  [T]  [T]  [T]
                                      ^
                           Target Optimal Value = 18
```

## 2. Iterative Bisection Tree

```mermaid
flowchart TD
    A["Interval [10, 32], Mid=21 (True)"] --> B["Interval [10, 20], Mid=15 (False)"]
    B --> C["Interval [16, 20], Mid=18 (True)"]
    C --> D["Interval [16, 17], Mid=16 (False)"]
    D --> E["Interval [17, 17], Mid=17 (False)"]
    E --> F["Converged: Answer = 18"]
```
