# Longest Increasing Subsequence (LIS — $O(N \log N)$ Patience Sorting)

---

## 1. Topic Overview
The Longest Increasing Subsequence (LIS) problem seeks the maximum length of a subsequence of a given sequence in which all elements are sorted in strictly increasing order. While standard tabulation yields an $O(N^2)$ dynamic programming solution, applying Patience Sorting with binary search optimizes execution to $O(N \log N)$.

## 2. Prerequisites
- Basic Dynamic Programming principles (optimal substructure, memoization).
- Binary Search and `std::lower_bound` / `std::upper_bound` mechanics.
- Subsequences vs. contiguous subarrays distinction.

## 3. What Problem Does It Solve?
Given an array $A$ of $N$ numbers, find a sequence of indices $i_1 < i_2 < \dots < i_k$ such that $A[i_1] < A[i_2] < \dots < A[i_k]$ with maximum possible length $k$. When $N \approx 2 \times 10^5$, $O(N^2)$ algorithm times out; the $O(N \log N)$ algorithm processes all elements effortlessly.

## 4. Why Is It Important?
- Landmark problem showcasing how auxiliary monotonic structures accelerate dynamic programming transitions.
- Equivalent to finding the minimum number of non-increasing subsequences needed to partition the array (Dilworth's Theorem).

## 5. When Should I Use It?
- Sequence ordering optimization problems.
- 2D coordinate bounding problems (e.g. Russian Doll Envelopes) by sorting one dimension and running LIS on the second.
- Constraints: $N \le 2 \times 10^5$.

## 6. How to Recognise It in a Problem Statement
- "Find the minimum number of elements to delete so the remaining elements are strictly increasing."
- "What is the maximum number of boxes that can be nested inside one another?"
- $N$ up to $2 \times 10^5$.

## 7. Intuition (Patience Sorting)
Imagine playing solitaire (patience card game). For each incoming card:
- You scan existing piles from left to right.
- You place the card on top of the first pile whose visible top card is $\ge$ the new card.
- If no such pile exists, start a new pile to the right.
At the end, the number of piles is *exactly* the length of the Longest Increasing Subsequence! Because pile tops are strictly increasing, finding the destination pile takes $O(\log N)$ via binary search.

## 8. Mathematical Explanation
Let `tails[k]` denote the smallest ending element of an increasing subsequence of length $k + 1$ found so far.
### Invariants:
1. `tails` is strictly monotonic: `tails[0] < tails[1] < ... < tails[len-1]`.
2. For each element $x = A[i]$:
   - Find index $idx = \text{lower\_bound}(\text{tails}, x)$.
   - If $idx == \text{tails.size()}$, append $x$ (extends maximum LIS).
   - Otherwise, replace $\text{tails}[idx] = x$ (greedily improves the potential to form longer future subsequences with smaller tail values).

## 9. Step-by-Step Algorithm
1. Initialize an empty dynamic array `tails`.
2. For each element $x$ in $A$:
   - $idx = \text{std::lower\_bound}(\text{tails.begin}(), \text{tails.end}(), x) - \text{tails.begin}()$.
   - If $idx == \text{tails.size()}$, `tails.push_back(x)`.
   - Else, `tails[idx] = x`.
3. Return `tails.size()`.

## 10. Visual Explanation
```text
Incoming: [10, 9, 2, 5, 3, 7, 101, 18]

Patience Piles:
10 -> Pile 1: [10]
 9 -> Pile 1: [9]      (replaces 10)
 2 -> Pile 1: [2]      (replaces 9)
 5 -> Pile 2: [5]      (new pile)
 3 -> Pile 2: [3]      (replaces 5)
 7 -> Pile 3: [7]      (new pile)
101-> Pile 4: [101]    (new pile)
 18-> Pile 4: [18]     (replaces 101)

Final Piles count = 4 -> LIS Length = 4 (e.g. [2, 3, 7, 18]).
```

## 11. Dry Run
Array $A = [3, 1, 4, 1, 5, 9, 2]$:
- $x = 3$: `tails = [3]`
- $x = 1$: lower bound on 1 is index 0 $\to$ `tails = [1]`
- $x = 4$: lower bound on 4 is index 1 $\to$ `tails = [1, 4]`
- $x = 1$: lower bound on 1 is index 0 $\to$ `tails = [1, 4]` (replaces 1 with 1)
- $x = 5$: lower bound on 5 is index 2 $\to$ `tails = [1, 4, 5]`
- $x = 9$: lower bound on 9 is index 3 $\to$ `tails = [1, 4, 5, 9]`
- $x = 2$: lower bound on 2 is index 1 $\to$ `tails = [1, 2, 5, 9]`
Final LIS length = $4$.

## 12. C++20 Implementation
See [`implementation.cpp`](implementation.cpp).

## 13. Detailed Explanation of C++ Syntax and STL Used
- `std::lower_bound`: Binary searches for the first element $\ge x$ in logarithmic time ($O(\log N)$).
- Note: For *non-decreasing* subsequence, substitute `std::upper_bound` for `std::lower_bound`.

## 14. Time Complexity
- $N$ elements, each performing 1 binary search: $O(N \log N)$.

## 15. Space Complexity
- Auxiliary Space: $O(N)$ for `tails` vector.

## 16. Correctness Explanation or Proof
Invariant: `tails[k]` represents the minimal terminal element of all valid increasing subsequences of length $k+1$.
- Greedy choice: A smaller terminal element strictly dominates a larger terminal element because any number that can extend the larger one can also extend the smaller one.
- Since `tails` is strictly sorted at all times, `std::lower_bound` correctly identifies the optimal subsequence length to update in $O(\log N)$.

## 17. Common Mistakes
- Confusing `std::lower_bound` (strictly increasing) with `std::upper_bound` (non-decreasing).
- Assuming `tails` contains the actual subsequence elements (it stores the optimal tail values; reconstructing the path requires predecessor parent pointers).

## 18. Edge Cases
- All elements identical ($[5, 5, 5]$) $\to$ LIS length is 1 for strictly increasing, 3 for non-decreasing.
- Already sorted array in reverse order ($[5, 4, 3, 2, 1]$) $\to$ LIS length is 1.
- Array with 1 element.

## 19. Related Algorithms
- **Segment Tree LIS**: Finding LIS by coordinate compressing values and running Range Maximum Query in $O(N \log N)$ (useful when values have associated weights).
- **Dilworth's Theorem**: Minimum path cover in DAGs.

## 20. Advanced Variations
- 2D LIS / Box Nesting (Russian Doll Envelopes).
- Reconstructing the lexicographically smallest LIS using parent arrays.

## 21. Interview Relevance
Standard question in Big Tech technical screens (Google, Bloomberg, Uber).

## 22. Quant / HFT Relevance
Used in algorithmic trend-persistence indicators and detecting sequential price monotonicity.

## 23. Complete Resource Collection
Detailed in [`video-resources.md`](video-resources.md), [`github-resources.md`](github-resources.md), and [`web-resources.md`](web-resources.md).

## 24. Practice Problem Progression
Detailed in [`practice-problems.md`](practice-problems.md).
