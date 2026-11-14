# 14. Bit Manipulation

This module covers bitwise arithmetic, algebraic properties of XOR, fast compiler builtins, and subset iterations.

---

## Subtopics & Planned Modules

1. **`bitwise-operations/`**: AND, OR, XOR, NOT, left/right shifts, setting/clearing/toggling bits.
2. **`compiler-builtins/`**: `__builtin_popcountll`, `__builtin_clzll` (leading zeros), `__builtin_ctzll` (trailing zeros), C++20 `<bit>` library.
3. **`xor-properties/`**: Invertibility ($A \oplus A = 0$), prefix XOR queries, linear basis of XOR spaces.
4. **`submask-iteration/`**: The `s = (s - 1) & mask` idiom for iterating all submasks of a mask in $O(3^N)$.
5. **`binary-trie/`**: Finding maximum XOR sum of two elements in $O(30)$ per query.
6. **`sos-dp-foundations/`**: Sum Over Subsets dynamic programming using bitwise transitions.
