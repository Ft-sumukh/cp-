# Disjoint Set Union — Personal Notes & Error Log

## 1. Key Invariant
Always execute `u = find(u)` and `v = find(v)` before checking sizes or assigning parents. Uniting non-root nodes creates disconnected phantom cycles that break the tree invariant.

## 2. Common Pitfalls Checklist
- [ ] **Accidental Merge of Same Component**: Checked `if (root_u == root_v) return false;` to avoid inflating component sizes.
- [ ] **1-indexing vs 0-indexing**: Allocated vectors with `n + 1` elements.
- [ ] **Rollback Conflict**: If using rollbacks, make sure Path Compression is **disabled**; otherwise, rollback history pointers will corrupt tree invariants.

## 3. Revision Tracking
| Review Date | Review Focus | Solved Without Hints? | Confidence (1-5) | Next Review Date |
| :---: | :---: | :---: | :---: | :---: |
| 2026-11-14 | Initial implementation & proofs | Yes | 5/5 | 2026-11-28 |
