# Bit Manipulation — Personal Notes & Error Log

## 1. Key Invariant
In C++, operator precedence rules are dangerous for bitwise operators:
Comparison operators (`==`, `!=`, `<`, `>`) have strictly **higher precedence** than `&`, `|`, `^`.
Always wrap bitwise expressions in parentheses:
```cpp
if ((mask & (1 << i)) != 0) // CORRECT
if (mask & (1 << i) != 0)   // BUG! Evaluates as mask & ((1 << i) != 0)
```

## 2. Common Pitfalls Checklist
- [ ] **Shift Overflow**: Did I use `1ULL << i` when $i \ge 31$? `1 << 35` triggers 32-bit signed overflow.
- [ ] **Negative Modulo vs Right Shift**: Arithmetic right shift (`>>`) on negative integers duplicates the sign bit (`1`), while logical right shift on `uint64_t` fills with `0`. Always cast to unsigned for logical shifts.
- [ ] **`__builtin_clz(0)`**: Undefined Behavior! Use C++20 `std::countl_zero` instead.

## 3. Revision Tracking
| Review Date | Review Focus | Solved Without Hints? | Confidence (1-5) | Next Review Date |
| :---: | :---: | :---: | :---: | :---: |
| 2026-11-14 | Initial implementation & proofs | Yes | 5/5 | 2026-11-28 |
