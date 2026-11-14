# Longest Increasing Subsequence — Theory & Patience Sorting Mechanics

## 1. Classical DP Formulation ($O(N^2)$)
Let $dp[i]$ be the length of the longest increasing subsequence ending at index $i$:
$$dp[i] = 1 + \max_{\substack{j < i \\ A[j] < A[i]}} dp[j]$$
Base case: $dp[i] = 1$ for all $i$.
Overall answer: $\max_{i} dp[i]$.
This requires comparing every pair $(i, j)$, yielding $\Theta(N^2)$ time.

---

## 2. Monotonic State Inversion ($O(N \log N)$)
Instead of asking "What is the maximum length ending at index $i$?", invert the state:
$$\text{Let } \text{tails}[L] = \text{the minimum ending value of an increasing subsequence of length } L$$

### Lemma 1 (Strict Monotonicity of Tails)
For all $1 \le L_1 < L_2 \le \text{current\_max\_len}$:
$$\text{tails}[L_1] < \text{tails}[L_2]$$

### Proof by Contradiction
Suppose $\text{tails}[L_2] \le \text{tails}[L_1]$ for $L_2 > L_1$.
By definition, there exists an increasing subsequence $S$ of length $L_2$ terminating at $\text{tails}[L_2]$.
The prefix of $S$ containing the first $L_1$ elements forms a valid increasing subsequence of length $L_1$.
Its ending element $x$ strictly precedes the terminal element in an increasing sequence, so $x < \text{tails}[L_2]$.
Thus:
$$x < \text{tails}[L_2] \le \text{tails}[L_1] \implies x < \text{tails}[L_1]$$
This contradicts the definition that $\text{tails}[L_1]$ is the *minimum* ending value among all valid subsequences of length $L_1$.
Hence, $\text{tails}$ is strictly sorted. $\blacksquare$

Because `tails` is strictly monotonic, finding the length extended by incoming element $A[i]$ takes $O(\log N)$ via binary search (`std::lower_bound`).
