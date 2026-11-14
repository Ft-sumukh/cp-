# Limit Order Book & Low Latency — Personal Notes & Error Log

## 1. Key Invariant
In low-latency systems, **deterministic worst-case latency** is vastly more important than average latency. A structure that is $10 \text{ ns}$ on average but occasionally spikes to $500 \ \mu\text{s}$ due to garbage collection or dynamic resizing will cause execution losses. Always pre-allocate fixed capacities.

## 2. Common Pitfalls Checklist
- [ ] **Floating Point Rounding**: Never store price keys as `double` or `float`. Always convert to integer price ticks ($100.25 \to 10025$).
- [ ] **False Sharing**: Are variables written by different threads separated by at least 64 bytes (`alignas(64)`)?
- [ ] **Unbounded Scans**: In L2 books, scanning for the next non-empty level must have a defined bound to avoid reading past allocated buffer memory.

## 3. Revision Tracking
| Review Date | Review Focus | Solved Without Hints? | Confidence (1-5) | Next Review Date |
| :---: | :---: | :---: | :---: | :---: |
| 2026-11-14 | Initial implementation & proofs | Yes | 5/5 | 2026-11-28 |
