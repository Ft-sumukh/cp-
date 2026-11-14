# Binary Search on Answer — Personal Notes & Error Log

## 1. Key Invariant
Always ensure that the boundary `high` is set to an upper bound that is strictly guaranteed to contain a valid solution. Setting `high = 1e9` when the answer could be $10^{14}$ will silently cause Wrong Answer.

## 2. Common Pitfalls Checklist
- [ ] **Integer Overflow**: `(low + high) / 2` overflows when `high = 2e9` or `1e18`. Always write `low + (high - low) / 2`.
- [ ] **Wrong Answer on Test 1**: Ensure `check(mid)` correctly handles edge cases where a single element $A[i]$ exceeds `mid`.
- [ ] **Direction of Predicate**: Did I mix up whether I'm seeking the *first True* (minimization) or the *last True* (maximization)?

## 3. Revision Tracking
| Review Date | Review Focus | Solved Without Hints? | Confidence (1-5) | Next Review Date |
| :---: | :---: | :---: | :---: | :---: |
| 2026-11-14 | Initial implementation & proofs | Yes | 5/5 | 2026-11-28 |
