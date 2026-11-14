# Limit Order Books & Memory Hardware Hierarchy

## 1. Asymptotic Complexity vs. Hardware Latency
In standard algorithmic analysis:
- Binary Search Tree lookup (`std::map`): $O(\log N)$
- Hash Table lookup (`std::unordered_map`): $O(1)$ amortized
- Linear search across flat array (`std::vector`): $O(N)$

In production systems engineering on an Intel Core or AMD Zen architecture:
- $N = 32$ elements:
  - Scanning a contiguous array of 32 elements takes **1 memory transaction** (32 integers $\times 4 \text{ bytes} = 128 \text{ bytes} = 2$ cache lines). CPU prefetcher loads both in parallel ($\approx 2 \text{ ns}$).
  - Traversing a balanced BST of 32 nodes traverses 5 pointers. Each pointer dereferences a scattered memory location in RAM ($\approx 5 \times 70 \text{ ns} = 350 \text{ ns}$).
  The theoretical $O(N)$ linear scan is **over 100 times faster** than the theoretical $O(\log N)$ tree!

---

## 2. False Sharing and Cache Coherency Protocols (MESI)
When multiple CPU cores execute concurrently:
- Cache coherency protocols (MESI: Modified, Exclusive, Shared, Invalid) operate at the granularity of **64-byte cache lines**.
- If Thread 1 (managing Bids) writes to `best_bid` and Thread 2 (managing Asks) writes to `best_ask`, and both variables reside on the *same 64-byte line*:
  Every write by Core 1 invalidates the entire $L1$ cache line on Core 2.
  Core 2 must stall execution and reload the line from $L3$/RAM.
- **Solution**: Explicitly separate hot write fields using `alignas(64)` padding:
  ```cpp
  alignas(64) std::array<Quantity, MAX_TICKS> bid_volume;
  alignas(64) std::array<Quantity, MAX_TICKS> ask_volume;
  ```
  Guarantees separate physical cache lines and zero cross-core invalidation stalls.
