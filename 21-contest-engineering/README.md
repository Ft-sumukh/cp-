# Contest Engineering & Robust Testing Systems

This module focuses on contest pragmatics, debugging infrastructure, stress-testing harnesses, compiler sanitizers, and numerical precision safety.

---

## 1. Automated Stress-Testing Harness

When facing `Wrong Answer on test 47` with no visible test case, the deterministic way to debug is differential fuzzing:
1. Write `solution.cpp` (your fast $O(N \log N)$ or $O(N)$ candidate solution).
2. Write `brute.cpp` (a simple, undeniably correct $O(N^2)$ or $O(2^N)$ brute force).
3. Write `gen.cpp` (a randomized input generator generating tests matching constraints).
4. Run `stress.sh` to find the exact minimal failing input.

### `stress.sh` (Linux Bash Script)
```bash
#!/usr/bin/env bash
set -e

g++ -std=c++20 -O2 solution.cpp -o solution
g++ -std=c++20 -O2 brute.cpp -o brute
g++ -std=c++20 -O2 gen.cpp -o gen

for ((i = 1; ; ++i)); do
    ./gen > in.txt
    ./solution < in.txt > out_fast.txt
    ./brute < in.txt > out_brute.txt

    if ! cmp -s out_fast.txt out_brute.txt; then
        echo "Mismatch found on test $i!"
        echo "=== Input ==="
        cat in.txt
        echo "=== Fast Solution Output ==="
        cat out_fast.txt
        echo "=== Brute Solution Output ==="
        cat out_brute.txt
        break
    fi
    if (( i % 100 == 0 )); then
        echo "Passed $i random tests..."
    fi
done
```

---

## 2. Compiler Diagnostics and Sanitizers

When developing locally on Ubuntu VMware with `g++ 15.2.0`, use Address and Undefined Behavior sanitizers during debugging:

```bash
g++ -std=c++20 -fsanitize=address,undefined -g -Wall -Wextra -Wshadow solution.cpp -o solution_debug
```
- **AddressSanitizer (`-fsanitize=address`)**: Catches out-of-bounds array access, use-after-free, memory leaks.
- **UndefinedBehaviorSanitizer (`-fsanitize=undefined`)**: Catches signed integer overflow, division by zero, invalid bitshifts ($1 \ll 35$ on 32-bit int).

---

## 3. Increasing Linux Stack Limit for Deep Recursion

On Ubuntu / Linux, the default stack limit is typically 8 MB. To prevent `Segmentation Fault` on tree DFS of depth $N = 2 \times 10^5$:

```bash
ulimit -s unlimited
./solution
```
In contest environments where stack is shared with heap (e.g. Codeforces 256MB), recursive DFS is safe if recursion depth is within limits, but iterative DFS or expanding stack via assembly/pthreads can be used if needed.
