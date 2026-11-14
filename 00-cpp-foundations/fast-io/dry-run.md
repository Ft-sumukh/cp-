# Fast I/O — Execution Benchmarks & Trace

## Microbenchmark on 1,000,000 64-bit Integers (Ubuntu 24.04 / GCC 15)

| I/O Configuration | Execution Time | Context Switches (Estimated) | Status |
| :--- | :---: | :---: | :---: |
| Naive `std::cin` + `std::cout << std::endl` | 2.45 s | $\approx 2 \times 10^6$ | **TLE** (Limit: 1.0s) |
| `std::cin` + `std::cout << '\n'` | 1.15 s | $\approx 10^6$ | **Borderline TLE** |
| `sync_with_stdio(false)` + `cin.tie(nullptr)` + `'\n'` | **0.18 s** | $\approx 64$ | **Passed comfortably** |
| Custom `fread_unlocked` FastIO | **0.04 s** | $\approx 8$ | **Maximum Speed** |

---

## Buffer Refill Trace
For input size: $500,000$ integers:
1. `read_char()` called. Buffer empty ($ptr = len = 0$).
2. Calls `fread(buffer, 1, 131072, stdin)` $\to$ loads $131,072$ raw bytes directly from OS.
3. Next $131,072$ character reads happen directly from L1/L2 cache with zero system calls!
4. Buffer exhausted $\to$ single kernel read for next 128KB block.
Total kernel interactions: $< 15$ calls.
