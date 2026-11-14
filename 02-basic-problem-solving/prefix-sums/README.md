# Prefix Sums (1D & 2D Cumulative Arrays)

---

## 1. Topic Overview
Prefix Sums is a foundational algorithmic technique used to preprocess an array or grid so that any range sum query can be answered in $O(1)$ time after an initial $O(N)$ (or $O(NM)$) precomputation pass.

## 2. Prerequisites
- Basic array indexing (0-indexed vs. 1-indexed representations).
- Understanding of associative operations (addition, XOR, modular arithmetic).

## 3. What Problem Does It Solve?
Given an immutable array $A$ of size $N$ and $Q$ independent queries of the form $(L, R)$, calculate the sum:
$$\sum_{i=L}^{R} A[i]$$
Without precomputation, each query takes $O(N)$ time, leading to $O(N \cdot Q)$ total time (which times out for $N, Q \approx 10^5$). Prefix sums reduces total query time to $O(N + Q)$.

## 4. Why Is It Important?
- Transforms linear scan queries into instant constant-time operations.
- Serves as the building block for 2D range sums, difference arrays, and coordinate-compressed sweeping lines.

## 5. When Should I Use It?
- The underlying array is static (no point or range updates between queries).
- Queries request aggregations over contiguous subsegments or subgrids.
- The operation is invertible (e.g. Addition has subtraction; XOR has XOR).

## 6. How to Recognise It in a Problem Statement
- "Given an array and $Q$ queries asking for the total score between day $L$ and day $R$."
- "Find the number of subarrays whose sum equals $K$." (Combined with hash map).
- $Q \le 2 \times 10^5$ and $N \le 2 \times 10^5$.

## 7. Intuition
Imagine keeping a running odometer reading on a car trip. If you note the odometer at mile marker $L-1$ and at mile marker $R$, the distance traveled between them is simply:
$$\text{Distance} = \text{Odometer}(R) - \text{Odometer}(L-1)$$

## 8. Mathematical Explanation
For a 1-indexed array $A[1 \dots N]$:
$$P[0] = 0$$
$$P[i] = P[i-1] + A[i] \quad \text{for } 1 \le i \le N$$
Then, for any interval $[L, R]$ where $1 \le L \le R \le N$:
$$\sum_{i=L}^{R} A[i] = P[R] - P[L-1]$$

For 2D matrices, let $P[r][c]$ be the sum of elements in the bounding box from $(1, 1)$ to $(r, c)$:
$$P[r][c] = A[r][c] + P[r-1][c] + P[r][c-1] - P[r-1][c-1]$$
Query for subgrid $[r_1, c_1]$ to $[r_2, c_2]$:
$$\text{Sum} = P[r_2][c_2] - P[r_1-1][c_2] - P[r_2][c_1-1] + P[r_1-1][c_1-1]$$

## 9. Step-by-Step Algorithm
1. Allocate prefix array $P$ of size $N+1$ initialized to $0$.
2. Iterate $i$ from $1$ to $N$:
   $$P[i] = P[i-1] + A[i]$$
3. For each query $(L, R)$:
   $$\text{return } P[R] - P[L-1]$$

## 10. Visual Explanation
```text
Original Array A (1-indexed):
Index:   1   2   3   4   5
Value:   3   1   4   1   5

Prefix Array P:
Index:   0   1   2   3   4   5
Value:   0   3   4   8   9  14

Query sum from index 2 to 4:
P[4] = 9   (3 + 1 + 4 + 1)
P[1] = 3   (3)
Result = P[4] - P[1] = 9 - 3 = 6  (matches 1 + 4 + 1 = 6)
```

## 11. Dry Run
Input: $A = [5, -2, 7, 3]$, Queries: $(2, 4)$, $(1, 3)$.
- $P[0] = 0$
- $P[1] = 0 + 5 = 5$
- $P[2] = 5 + (-2) = 3$
- $P[3] = 3 + 7 = 10$
- $P[4] = 10 + 3 = 13$
Query $(2, 4) \implies P[4] - P[1] = 13 - 5 = 8$. (Check: $-2 + 7 + 3 = 8$).
Query $(1, 3) \implies P[3] - P[0] = 10 - 0 = 10$. (Check: $5 + (-2) + 7 = 10$).

## 12. C++20 Implementation
See [`implementation.cpp`](implementation.cpp) for full code.

## 13. Detailed Explanation of C++ Syntax and STL Used
- `std::vector<int64_t>`: Prevents integer overflow when $N = 10^5$ and $A[i] = 10^9$ (total sum can reach $10^{14}$).
- 1-based indexing idiom: Size `n + 1` naturally avoids boundary checks for $L=1$.

## 14. Time Complexity
- Preprocessing: $O(N)$
- Query: $O(1)$
- Total for $Q$ queries: $O(N + Q)$

## 15. Space Complexity
- Auxiliary Space: $O(N)$ for prefix table.

## 16. Correctness Explanation or Proof
By mathematical induction, $P[k] = \sum_{i=1}^k A[i]$.
$P[R] - P[L-1] = \sum_{i=1}^R A[i] - \sum_{i=1}^{L-1} A[i] = \sum_{i=L}^R A[i]$. Holds for all $1 \le L \le R \le N$.

## 17. Common Mistakes
- Using 32-bit `int` instead of `int64_t` leading to signed overflow on large sums.
- Off-by-one error when converting 0-indexed problem statements to 1-indexed tables.
- Forgetting that dynamic updates cannot be handled in $O(1)$ (requires Fenwick/Segment Tree).

## 18. Edge Cases
- $L = 1$: Relies on $P[0] = 0$.
- $L = R$: Single element query $P[R] - P[R-1] = A[R]$.
- All negative elements or all zeroes.

## 19. Related Algorithms
- **Difference Array**: Inverse operation (range updates, single point queries).
- **Fenwick Tree**: Dynamic prefix sums with $O(\log N)$ point updates.
- **Prefix XOR**: Range XOR queries using $X \oplus X = 0$.

## 20. Advanced Variations
- Subarray sum equals $K$: Using a hash map of prefix frequencies in $O(N)$.
- 2D Subgrid sums with 2D prefix sums.

## 21. Interview Relevance
Appears consistently in Meta/Google/Amazon interviews as an optimization step for subarray problems.

## 22. Quant / HFT Relevance
Used in cumulative volume profiling, calculating volume-weighted moving sums over fixed microsecond intervals.

## 23. Complete Resource Collection
Detailed in [`video-resources.md`](video-resources.md), [`github-resources.md`](github-resources.md), and [`web-resources.md`](web-resources.md).

## 24. Practice Problem Progression
Detailed in [`practice-problems.md`](practice-problems.md).
