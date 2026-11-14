# Binary Search on Answer (Optimization to Decision Reduction)

---

## 1. Topic Overview
Binary Search on Answer transforms an optimization problem ("find the minimum possible maximum value" or "maximize the minimum allocation") into a sequence of decision problems ("is a target value $X$ achievable?"). If the decision predicate $P(X)$ is monotonic, binary search finds the optimal $X$ in $O(\log(\text{search space}) \cdot T(\text{check}))$.

## 2. Prerequisites
- Standard binary search on sorted arrays.
- Monotonicity concept (functions that are strictly non-increasing or non-decreasing).
- Greedy verification techniques.

## 3. What Problem Does It Solve?
Directly finding the optimal answer $X^*$ through mathematical formula or greedy construction is often intractable ($NP$-hard or combinatorially complex). However, testing whether a candidate answer $X$ is feasible (i.e. evaluating a boolean function `check(X)`) is frequently simple and runs in $O(N)$ greedy or linear time.

## 4. Why Is It Important?
- Bridges optimization and feasibility.
- One of the single most frequent techniques on Codeforces Division 2 (ratings 1200 - 1800).
- Replaces complex dynamic programming with simple greedy verifications.

## 5. When Should I Use It?
- Problem keywords: "minimize the maximum", "maximize the minimum", "find the smallest $X$ such that condition holds".
- Monotonic property holds: If $X$ is valid, then all $Y > X$ are also valid (or vice versa).
- The search space $[L, R]$ is bounded.

## 6. How to Recognise It in a Problem Statement
- "Partition an array into $K$ subarrays to minimize the largest subarray sum."
- "Allocate tasks across machines to minimize total completion time."
- Constraints: $N \le 2 \times 10^5$, answers up to $10^{14}$ or $10^{18}$.

## 7. Intuition
Imagine you have a volume knob for a speaker. You want the lowest volume setting where a person in the next room can hear you. You test volume 50: they can hear. You know 51 through 100 are also audible. You test 25: they cannot hear. You know 1 through 24 are inaudible. By continually halving the range, you pinpoint the exact threshold.

## 8. Mathematical Explanation
Let $f: S \to \{0, 1\}$ be a boolean predicate over a totally ordered set $S \subseteq \mathbb{Z}$ or $\mathbb{R}$.
$f$ is **monotonic** if:
$$x \le y \implies f(x) \le f(y) \quad (\text{Pattern: } 0, 0, \dots, 0, 1, 1, \dots, 1)$$
or
$$x \le y \implies f(x) \ge f(y) \quad (\text{Pattern: } 1, 1, \dots, 1, 0, 0, \dots, 0)$$
By testing the midpoint $M = \lfloor (L + R) / 2 \rfloor$:
- If $f(M) = 1$, we record $M$ as a candidate answer and narrow the search space to $[L, M - 1]$ (when minimizing).
- If $f(M) = 0$, $M$ and all smaller values are impossible, so we narrow search space to $[M + 1, R]$.

## 9. Step-by-Step Algorithm
1. Identify lower bound $L$ and upper bound $R$ ensuring the true answer $X^* \in [L, R]$.
2. Initialize `ans = -1`.
3. While $L \le R$:
   - $M = L + (R - L) / 2$ (prevents integer overflow).
   - If `check(M)` returns `true`:
     - `ans = M`
     - $R = M - 1$ (to search for smaller valid answers).
   - Else:
     - $L = M + 1$.
4. Return `ans`.

## 10. Visual Explanation
```text
Search Space:   [ 10,  20,  30,  40,  50,  60,  70,  80 ]
check(X):         0    0    0    1    1    1    1    1
                                 ^
                             Threshold (First True) = 40
```

## 11. Dry Run
Array $A = [7, 2, 5, 10, 8]$, $K = 2$ splits. Minimize maximum subarray sum.
- Bounds: $L = \max(A) = 10$, $R = \sum A = 32$.
- $M = 21$: `check(21)` $\to$ `[7, 2, 5] (sum 14), [10, 8] (sum 18)` $\to 2$ subarrays $\le 2 \implies$ True. `ans = 21, R = 20`.
- $M = 15$: `check(15)` $\to$ `[7, 2, 5] (14), [10] (10), [8] (8)` $\to 3$ subarrays $> 2 \implies$ False. `L = 16`.
- $M = 18$: `check(18)` $\to$ `[7, 2, 5] (14), [10, 8] (18)` $\to 2$ subarrays $\le 2 \implies$ True. `ans = 18, R = 17`.
- $M = 16$: `check(16)` $\to$ `[7, 2, 5] (14), [10] (10), [8] (8)` $\to 3$ subarrays $\implies$ False. `L = 17`.
- $M = 17$: `check(17)` $\to$ False. `L = 18`.
- Loop terminates ($L > R$). Optimal answer = $18$.

## 12. C++20 Implementation
See [`implementation.cpp`](implementation.cpp).

## 13. Detailed Explanation of C++ Syntax and STL Used
- `mid = low + (high - low) / 2`: Prevents integer overflow inherent to `(low + high) / 2`.
- `std::ranges::max_element` & `std::accumulate`: C++20 standard algorithm idioms for bound estimation.

## 14. Time Complexity
- Binary search iterations: $O(\log(R - L))$.
- Predicate verification: $O(N)$.
- Total Time: $O(N \log(R - L))$.

## 15. Space Complexity
- Auxiliary Space: $O(1)$ memory.

## 16. Correctness Explanation or Proof
Monotonicity ensures that the solution space is partitioned into two contiguous regions (invalid and valid). At every step, the invariant $X^* \in [L, R \cup \{\text{ans}\}]$ is preserved, and the interval length strictly halves: $|R - L + 1| \to \lfloor |R - L + 1| / 2 \rfloor$. Convergence is guaranteed in at most $\lceil \log_2(R - L + 1) \rceil$ steps.

## 17. Common Mistakes
- **Integer Overflow in Midpoint**: Using `(L + R) / 2` when $R = 10^{18}$.
- **Improper Bounds**: Setting $R$ too small (e.g. $10^9$ when maximum possible sum is $10^{14}$).
- **Non-Monotonic Predicate**: Applying binary search when feasibility does not exhibit monotonicity.

## 18. Edge Cases
- $K = 1$: Answer is $\sum A$.
- $K = N$: Answer is $\max A$.
- Single element array $N = 1$.

## 19. Related Algorithms
- **Ternary Search**: Used when the objective function is unimodal (has a single peak or valley) rather than monotonic.
- **Parallel Binary Search**: Resolving queries across multiple independent structures in batches.

## 20. Advanced Variations
- Binary search on floating point numbers with fixed iterations (e.g. `for(int iter=0; iter<80; ++iter)`).
- Binary search over fractional knapsack or mean value optimization.

## 21. Interview Relevance
Classic LeetCode Hard problem pattern ("Split Array Largest Sum", "Koko Eating Bananas").

## 22. Quant / HFT Relevance
Used in portfolio risk budgeting, execution slicing algorithms (finding the optimal participation rate that minimizes price impact while meeting fill deadlines).

## 23. Complete Resource Collection
Detailed in [`video-resources.md`](video-resources.md), [`github-resources.md`](github-resources.md), and [`web-resources.md`](web-resources.md).

## 24. Practice Problem Progression
Detailed in [`practice-problems.md`](practice-problems.md).
