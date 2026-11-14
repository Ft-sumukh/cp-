# Low-Latency Limit Order Book & CPU Cache-Line Architecture

---

## 1. Topic Overview
In High-Frequency Trading (HFT) and Quantitative Development, order book matching engines must process market updates within hundreds of nanoseconds. Standard algorithmic data structures (`std::map`, Red-Black trees) exhibit poor cache locality due to pointer chasing. This module details flat, cache-aligned Level-2 (L2) Limit Order Book architectures designed for CPU cache-line saturation and zero-allocation execution.

## 2. Prerequisites
- CPU cache hierarchy ($L1$, $L2$, $L3$ cache, cache line size typically 64 bytes).
- Memory alignment and false sharing in multi-core systems.
- Competitive programming range structures (Fenwick Tree, binary search).

## 3. What Problem Does It Solve?
A standard Red-Black tree (`std::map<double, int>`) has theoretical $O(\log N)$ updates, but each node allocation is scattered across the heap. Accessing a node causes a cache miss ($\approx 50 - 100 \text{ ns}$ stall). A flat, contiguous array or tick-indexed buffer keeps hot price levels inside the CPU $L1$ cache ($1 \text{ ns}$ latency), executing updates in single-digit nanoseconds.

## 4. Why Is It Important?
- Core component of electronic trading matching engines and market maker gateways.
- Highlights the critical distinction between pure asymptotic Big-$O$ notation and real-world hardware latency.

## 5. When Should I Use It?
- High-throughput order processing.
- Market simulation backtesters processing millions of quotes per second.
- Quantitative Developer technical interviews (Citadel, Jane Street, Optiver, Jump Trading).

## 6. How to Recognise It in a Problem Statement
- "Design an order book supporting `add_order`, `cancel_order`, and `get_best_bid_ask` in under 1 microsecond."
- "Maintain top $K$ price levels on a fast streaming exchange feed."

## 7. Intuition
Imagine looking up a phone number. In a pointer-chasing tree, each digit tells you to walk to a completely different building in another town to read the next digit (cache misses). In a flat contiguous array, the entire phone directory is already printed on a single laminated card sitting in your hand ($L1$ cache line).

## 8. Mathematical & Hardware Explanation
### 1. The Cost of Memory Access:
- CPU Register: $0.5 \text{ ns}$ ($1$ cycle).
- $L1$ Data Cache ($32 - 64 \text{ KB}$): $\approx 1 \text{ ns}$ ($4$ cycles).
- $L2$ Cache ($512 \text{ KB} - 1 \text{ MB}$): $\approx 3 - 4 \text{ ns}$ ($12$ cycles).
- $L3$ Cache ($16 - 32 \text{ MB}$): $\approx 10 - 15 \text{ ns}$ ($40$ cycles).
- Main Memory (RAM): $\approx 60 - 100 \text{ ns}$ ($200 - 300$ cycles).

### 2. Fixed-Point Price Discretization:
Floating-point `double` prices introduce rounding errors and slow non-deterministic equality checks.
Quant engines convert prices into discrete integer ticks:
$$\text{Price Tick} = \text{round}\left(\frac{\text{Price}}{\text{Tick Size}}\right)$$
Example: With tick size $\$0.01$, $\$100.25 \implies 10025$.
This enables direct $O(1)$ indexing into flat contiguous arrays.

## 9. Step-by-Step Algorithm
1. Discretize price domain into an offset tick array: `index = price_tick - base_tick`.
2. Bids and asks maintain flat fixed-capacity ring buffers or contiguous arrays.
3. Track `best_bid` and `best_ask` pointers directly.
4. Update quantity at `bids[index]`:
   - If level becomes 0 and was `best_bid`, scan downwards to the next non-zero tick.
   - Run time: $O(1)$ amortized, with all hot memory resident in $L1/L2$ cache.

## 10. Visual Explanation
```text
Contiguous 64-Byte Cache Line Layout:
[ Level 10025: 500 sh ] [ Level 10024: 1200 sh ] [ Level 10023: 800 sh ] ...
^
All 8 contiguous price levels loaded into CPU L1 Cache in a SINGLE 64-byte burst!
Zero pointer chasing, zero heap fragmentation.
```

## 11. Dry Run
Market: Tick size $\$0.01$, Base $\$100.00$ (Tick $0$).
- Event 1: `Bid 100.05, 500 shares` $\to$ `bids[5] += 500`. Best bid = $\$100.05$.
- Event 2: `Bid 100.07, 300 shares` $\to$ `bids[7] += 300`. Best bid updated to $\$100.07$.
- Event 3: `Ask 100.09, 1000 shares` $\to$ `asks[9] += 1000`. Best ask = $\$100.09$.
Spread = $\$100.09 - \$100.07 = \$0.02$.
Every operation completes in $\approx 4$ CPU cycles!

## 12. C++20 Implementation
See [`implementation.cpp`](implementation.cpp).

## 13. Detailed Explanation of C++ Syntax and STL Used
- `alignas(64)`: Aligns struct memory boundaries to hardware 64-byte cache lines, preventing CPU false sharing.
- `std::span` (C++20): Provides zero-overhead contiguous array views without allocations.

## 14. Time Complexity
- Insert / Update Level: $O(1)$
- Cancel / Modify Volume: $O(1)$
- Get Best Bid/Ask: $O(1)$

## 15. Space Complexity
- Auxiliary Space: $O(\text{Max Price Ticks})$ contiguous flat memory, typically pre-allocated at startup.

## 16. Correctness Explanation or Proof
Discretization maps the real interval $[P_{\min}, P_{\max}]$ onto a total order over discrete integer indices. Invariant: `best_bid` always points to $\max \{ p \mid \text{volume}[p] > 0 \}$. Monotonic linear scans only occur when an entire price level is completely wiped out, yielding $O(1)$ amortized step time.

## 17. Common Mistakes
- Using floating-point keys in associative maps.
- Dynamically allocating (`new` / `malloc`) inside the trading hot path (triggers memory locks and TLB misses).
- False sharing: Placing bid and ask variables on the same 64-byte cache line when written to by distinct threads.

## 18. Edge Cases
- Empty book on one side (crossed or one-sided markets).
- Crossing orders (incoming bid $\ge$ best ask $\implies$ Trade execution).
- Price ticks outside preallocated array range (handled via circular offset mapping).

## 19. Related Algorithms
- **Order Statistic Tree**: Finding total volume between two price ranges in $O(\log P)$.
- **Fenwick Tree over Ticks**: $O(\log P)$ cumulative depth queries.

## 20. Advanced Variations
- Lock-free single-producer single-consumer (SPSC) ring buffers connecting network gateways to matching engines.

## 21. Interview Relevance
Primary topic in Quant Dev and Low-Latency C++ interviews (Citadel, Optiver, IMC, Jump Trading).

## 22. Quant / HFT Relevance
Fundamental foundation of modern automated market making (AMM) and electronic execution systems.

## 23. Complete Resource Collection
Detailed in [`video-resources.md`](video-resources.md), [`github-resources.md`](github-resources.md), and [`web-resources.md`](web-resources.md).

## 24. Practice Problem Progression
Detailed in [`practice-problems.md`](practice-problems.md).
