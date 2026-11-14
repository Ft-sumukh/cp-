# Longest Increasing Subsequence — Personal Notes & Error Log

## 1. Key Invariant
`tails[k]` stores the smallest possible ending element of an increasing subsequence of length $k + 1$.
**`tails` is NOT the actual subsequence.** Never output `tails` as the answer when asked to reconstruct the sequence.

## 2. Common Pitfalls Checklist
- [ ] **Strict vs Non-Strict**: Did I use `lower_bound` for strictly increasing, or `upper_bound` for non-decreasing?
- [ ] **2D Sorting Bug**: In 2D problems (Russian Doll Envelopes), did I sort secondary dimensions in **descending** order for identical primary dimensions to prevent illegal self-nesting?
- [ ] **Path Reconstruction**: Did I link each incoming element to `tail_indices[idx - 1]` before updating `tail_indices[idx]`?

## 3. Revision Tracking
| Review Date | Review Focus | Solved Without Hints? | Confidence (1-5) | Next Review Date |
| :---: | :---: | :---: | :---: | :---: |
| 2026-11-14 | Initial implementation & proofs | Yes | 5/5 | 2026-11-28 |
