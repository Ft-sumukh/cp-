# Prefix Sums — Personal Notes & Error Log

## 1. Contest Mental Cues
- If the problem asks for continuous subarray properties with static elements, immediately consider prefix transforms.
- If the condition is $\sum_{i=L}^R A[i] = K$, rewrite it algebraically as $P[R] - P[L-1] = K \iff P[L-1] = P[R] - K$. This turns a two-variable search into an $O(1)$ hash map lookup of past prefix sums.

## 2. Common Bugs Checklist
- [ ] **Integer Overflow**: Always use `int64_t` / `long long` for prefix sums unless values are strictly guaranteed bounded by $10^4$.
- [ ] **Base Case Missing**: In hash-map prefix count problems, did I initialize `count[0] = 1`? (Essential to count valid subarrays starting at index 0).
- [ ] **Negative Modulo**: Did I use `((val % M) + M) % M` for modular arithmetic?

## 3. Revision Tracking
| Review Date | Review Focus | Solved Without Hints? | Confidence (1-5) | Next Review Date |
| :---: | :---: | :---: | :---: | :---: |
| 2026-11-14 | Initial implementation & proofs | Yes | 5/5 | 2026-11-28 |
