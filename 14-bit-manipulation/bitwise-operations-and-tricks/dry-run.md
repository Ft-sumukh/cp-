# Bit Manipulation — Execution Trace (Lowbit & Submask)

## 1. Lowbit Isolation Trace
- Target: $X = 40$ (Binary `00101000`)
- Step 1: Invert all bits $\sim X =$ `11010111`
- Step 2: Add 1 (Two's complement $-X$) $= \sim X + 1 =$ `11011000`
- Step 3: Bitwise AND:
  ```text
    00101000  (X = 40)
  & 11011000  (-X = -40)
  ----------
    00001000  (Result = 8)
  ```
  The lowest set bit is at position 3 ($2^3 = 8$).

---

## 2. Brian Kernighan's Bit Counting Trace
- Number of set bits in $X = 22$ (Binary `10110`):
  1. $X = 22$ (`10110`): $X \& (X - 1) = 22 \& 21 = 20$ (`10100`). Count = 1.
  2. $X = 20$ (`10100`): $X \& (X - 1) = 20 \& 19 = 16$ (`10000`). Count = 2.
  3. $X = 16$ (`10000`): $X \& (X - 1) = 16 \& 15 = 0$ (`00000`). Count = 3.
  4. $X = 0 \implies$ Terminate. Total set bits = 3.
Notice loop only runs $k$ times where $k$ is the number of set bits (independent of total bit-width)!
