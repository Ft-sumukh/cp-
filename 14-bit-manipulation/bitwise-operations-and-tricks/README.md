# Bit Manipulation & Bitwise Operations (Compiler Intrinsics & Submask Invariants)

---

## 1. Topic Overview
Bit manipulation operates directly on binary representations of integers using hardware-level bitwise operators (AND, OR, XOR, NOT, left/right shifts) and dedicated CPU instructions (`popcnt`, `clz`, `ctz`). It provides $O(1)$ set operations and constant-factor speedups crucial for competitive programming and low-latency systems.

## 2. Prerequisites
- Two's complement representation of signed integers.
- Fundamental boolean algebra (De Morgan's laws, distributivity of AND over XOR).
- C++20 `<bit>` library concepts.

## 3. What Problem Does It Solve?
- Compactly represents subsets of up to 64 elements in a single 64-bit integer (`uint64_t`), making union, intersection, and complement $O(1)$ single-cycle CPU instructions.
- Eliminates heavy branching (`if`/`else`) in performance-critical loops.
- Enumerates all submasks of a mask in $O(3^N)$ instead of $O(4^N)$.

## 4. Why Is It Important?
- Core foundation for **Bitmask Dynamic Programming** ($N \le 20$).
- Essential for **Sum Over Subsets (SOS) DP** and Binary Tries.
- High-Frequency Trading & Systems: bitfields and bitwise masks maximize instruction-level parallelism and CPU register packing.

## 5. When Should I Use It?
- $N \le 20$ elements where states represent subsets.
- Problems involving parity, single unmatched elements, or power-of-two checks.
- Constant factor speedups ($1/64$ acceleration via `std::bitset`).

## 6. How to Recognise It in a Problem Statement
- "Find the single element appearing once while all other elements appear twice."
- "Given $N \le 20$ cities, find the minimum cost Hamiltonian path (TSP)."
- "Bitwise AND / OR / XOR of range."

## 7. Intuition
Think of an integer as an ultra-compact array of 64 boolean flags stored directly inside a CPU hardware register. Instead of looping through an array to find common elements, a single `A & B` executes 64 comparisons simultaneously in a single CPU cycle.

## 8. Mathematical Explanation
Let $A, B \in \mathbb{N}$ represented in binary:
- **AND (`&`)**: Intersection of sets. Bit is 1 iff both bits are 1.
- **OR (`|`)**: Union of sets. Bit is 1 if either bit is 1.
- **XOR (`^`)**: Symmetric difference (addition over $\mathbb{F}_2$).
  - Self-inverse: $A \oplus A = 0$.
  - Identity: $A \oplus 0 = A$.
  - Associative and commutative: order of XOR does not matter.
- **Lowbit**: Isolate the lowest set bit:
  $$\text{lowbit}(X) = X \ \& \ (-X)$$
  (Uses two's complement $-X = \sim X + 1$).
- **Submask Enumeration**:
  $$\text{For a mask } M: \quad s = (s - 1) \ \& \ M$$
  Visits all submasks of $M$ in strictly descending order.

## 9. Step-by-Step Algorithm (Submask Enumeration)
```cpp
for (int mask = 0; mask < (1 << n); ++mask) {
    for (int submask = mask; submask > 0; submask = (submask - 1) & mask) {
        // Process submask of mask
    }
    // Process submask 0 if needed
}
```
Total iterations across all masks:
$$\sum_{k=0}^n \binom{n}{k} 2^k = (1 + 2)^n = 3^n$$

## 10. Visual Explanation
```text
Isolating Lowest Set Bit via X & (-X):
X       = 12  = 00001100
~X      =       11110011
-X      = ~X+1= 11110100
X & -X  =       00000100 = 4 (Exact lowest set bit!)
```

## 11. Dry Run (Submask Enumeration of $M = 13$ [binary `1101`])
1. $s = 13$ (`1101`)
2. $s = (13 - 1) \& 13 = 12 \& 13 = 12$ (`1100`)
3. $s = (12 - 1) \& 13 = 11 \& 13 = 9$ (`1001`)
4. $s = (9 - 1) \& 13 = 8 \& 13 = 8$ (`1000`)
5. $s = (8 - 1) \& 13 = 7 \& 13 = 5$ (`0101`)
6. $s = (5 - 1) \& 13 = 4 \& 13 = 4$ (`0100`)
7. $s = (4 - 1) \& 13 = 3 \& 13 = 1$ (`0001`)
8. $s = (1 - 1) \& 13 = 0$ (Terminates). All 8 submasks generated!

## 12. C++20 Implementation
See [`implementation.cpp`](implementation.cpp).

## 13. Detailed Explanation of C++ Syntax and STL Used
- C++20 `<bit>` library:
  - `std::popcount`: Counts number of set bits (translates directly to `POPCNT` instruction).
  - `std::countl_zero` / `std::countr_zero`: Counts leading/trailing zeroes (`LZCNT`/`TZCNT`).
  - `std::has_single_bit`: Checks if a number is a power of 2 ($X > 0 \land (X \& (X - 1)) == 0$).

## 14. Time Complexity
- Primitive bitwise operations: $O(1)$ single-cycle instruction.
- Iterating submasks of a mask with $K$ bits: $O(2^K)$.
- Iterating all submasks of all $N$-bit masks: $O(3^N)$.

## 15. Space Complexity
- $O(1)$ auxiliary memory.

## 16. Correctness Explanation or Proof
The operation $s - 1$ flips the lowest set bit of $s$ to 0 and all trailing zeros to 1. Masking with $M$ via `(s - 1) & M` discards all bits that are not in $M$, producing the lexicographically largest submask strictly smaller than $s$. Strict descent guarantees every submask is visited without repetition.

## 17. Common Mistakes
- **Operator Precedence**: In C++, `==`, `<`, `+` have **higher precedence** than `&`, `|`, `^`.
  Always write `if ((mask & (1 << i)) != 0)`, NOT `if (mask & (1 << i) != 0)`.
- **Shift Overflow**: `1 << 35` overflows 32-bit signed int and yields Undefined Behavior! Always write `1ULL << 35` or `1LL << 35`.
- Negative numbers with right shifts (`>>` is arithmetic right shift, preserving sign bit; cast to `uint64_t` for logical shift).

## 18. Edge Cases
- $X = 0$: `__builtin_clz(0)` is Undefined Behavior in GCC! Use C++20 `std::countl_zero(0)` which safely returns the bit width.
- Power of 2 check on 0: $(0 \& -1) == 0$, so must check $X > 0$.

## 19. Related Algorithms
- **Binary Trie**: Finding maximum XOR pair in $O(30)$ time.
- **Sum Over Subsets (SOS) DP**: Computes submask sums for all masks in $O(N \cdot 2^N)$ instead of $O(3^N)$.

## 20. Advanced Variations
- XOR Linear Basis (Gaussian elimination over $\mathbb{F}_2$) for maximum XOR subsequence.

## 21. Interview Relevance
Frequent in systems and low-level engineering interviews (Apple, Qualcomm, Jane Street).

## 22. Quant / HFT Relevance
Bitboard representations, bitwise order masking, matching engine flags, and zero-branching hot paths.

## 23. Complete Resource Collection
Detailed in [`video-resources.md`](video-resources.md), [`github-resources.md`](github-resources.md), and [`web-resources.md`](web-resources.md).

## 24. Practice Problem Progression
Detailed in [`practice-problems.md`](practice-problems.md).
