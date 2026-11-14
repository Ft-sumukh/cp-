# Personal Notes, Heuristics & Mental Frameworks

This directory stores personal reflections, mathematical derivations, ad-hoc pattern recognitions, and quick-lookup reference sheets.

---

## 1. Fast Mental Heuristics

- **$N \le 10$**: $O(N!)$ brute force, permutation generation, Hamiltonian path.
- **$N \le 20$**: $O(2^N \cdot N)$ bitmask DP, meet-in-the-middle ($2^{N/2} \approx 2^{10} = 1024$).
- **$N \le 40$**: $O(2^{N/2})$ meet-in-the-middle with binary search / two pointers ($2^{20} \approx 10^6$).
- **$N \le 100$**: $O(N^4)$ or $O(N^3)$ (Floyd-Warshall, matrix multiplication, interval DP).
- **$N \le 2000$**: $O(N^2)$ 2D DP, all-pairs comparisons, nested loops ($4 \times 10^6$ ops).
- **$N \le 10^5$**: $O(N \log N)$ or $O(N \log^2 N)$ (Segment trees, sorting, binary search, tree DP).
- **$N \le 10^6$**: $O(N)$ linear scan, two pointers, prefix sums, KMP, hash tables.
- **$N > 10^9$**: $O(\log N)$ or $O(\sqrt{N})$ or $O(1)$ (Binary search, matrix exponentiation, prime factorization).

---

## 2. Invariant Discovery Framework
When stuck on an ad-hoc problem:
1. Work out $N=1, 2, 3, 4$ by hand.
2. Check parity (odd vs even invariants).
3. Check sum, XOR, or difference invariants.
4. Check if operations are reversible or form an equivalence relation.
5. Work backwards from the target state.
