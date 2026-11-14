# Fast I/O — Theoretical & Architectural Foundations

## 1. Operating System Context Switch Overhead
Reading input from the operating system requires querying the file descriptor table via the `read()` system call.
Each system call causes a transition from CPU user mode (Ring 3) to kernel mode (Ring 0):
1. CPU registers are saved onto the kernel stack.
2. The Translation Lookaside Buffer (TLB) may be flushed or invalidated.
3. Memory buffers are copied across kernel/user space boundaries.
4. Execution context is restored.

When unbuffered I/O reads byte-by-byte, $10^6$ characters trigger $10^6$ context switches ($\sim 1.5 - 2.5$ seconds wasted).
By buffering $128 \text{ KB}$ blocks at once, $10^6$ bytes require only $\approx 8$ context switches!

---

## 2. Stream Synchronization Mechanics
The C++ standard specification requires:
> "If sync is false, the C++ standard streams operate independently of the standard C streams, which may result in large performance gains." (ISO/IEC 14882)

When `sync_with_stdio(true)` (the default), `std::cin` must defer character storage to ensure synchronization with `getchar()` / `scanf()`. This disables modern compiler vectorization and stream caching. Setting `sync_with_stdio(false)` permits the C++ runtime to utilize its high-capacity internal `streambuf`.
