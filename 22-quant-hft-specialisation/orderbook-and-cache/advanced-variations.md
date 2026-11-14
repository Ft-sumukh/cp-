# Limit Order Book — Advanced Variations

## 1. Zero-Allocation Object Pools for Limit Orders
In Level-3 (L3) order books, individual orders must be tracked for cancellations:
- Calling `new` / `delete` on every market quote triggers OS memory allocator heap locks (`brk`/`mmap`), causing unpredictable latency spikes of tens of microseconds.
- **Solution: Object Pool**:
  Pre-allocate an array of $1,000,000$ order nodes at startup.
  Maintain an intrusive singly-linked free list inside the array.
  Allocation and deallocation become $O(1)$ single-cycle pointer updates without touching the OS allocator.

---

## 2. Kernel Bypass Networking (Solarflare OpenOnload / DPDK)
In production HFT:
- Reading packets through the Linux network stack (`recv()` / `epoll`) costs $\approx 1.5 - 3.0 \ \mu\text{s}$ due to interrupt handling and sk_buff copies.
- Kernel bypass drivers map the network interface card (NIC) ring buffer directly into user space memory, reducing wire-to-application latency below $100 \text{ ns}$.
