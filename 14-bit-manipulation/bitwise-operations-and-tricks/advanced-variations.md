# Bit Manipulation — Advanced Variations

## 1. Sum Over Subsets (SOS) DP in $O(N \cdot 2^N)$
Given an array $A$ of size $2^N$, compute for every mask $M$:
$$F[M] = \sum_{S \subseteq M} A[S]$$
Naive submask enumeration takes $O(3^N)$.
SOS DP transforms this into an $N$-dimensional prefix sum over boolean coordinates in $O(N \cdot 2^N)$:
```cpp
for (int i = 0; i < (1 << n); ++i) F[i] = A[i];

for (int i = 0; i < n; ++i) {
    for (int mask = 0; mask < (1 << n); ++mask) {
        if (mask & (1 << i)) {
            F[mask] += F[mask ^ (1 << i)];
        }
    }
}
```

---

## 2. XOR Linear Basis over $\mathbb{F}_2$
To find the maximum XOR sum of any subset of an array of $N$ integers ($A_i \le 10^{18}$):
- Maintain an array `basis[64]` where `basis[i]` has its highest set bit at position $i$.
- Insert each number using Gaussian elimination.
- Query maximum XOR by greedily XORing from the most significant bit downwards:
```cpp
struct XorBasis {
    uint64_t basis[64] = {0};

    void insert(uint64_t mask) {
        for (int i = 63; i >= 0; --i) {
            if ((mask >> i) & 1) {
                if (!basis[i]) { basis[i] = mask; return; }
                mask ^= basis[i];
            }
        }
    }

    uint64_t get_max() {
        uint64_t res = 0;
        for (int i = 63; i >= 0; --i) {
            if ((res ^ basis[i]) > res) res ^= basis[i];
        }
        return res;
    }
};
```
Runs in $O(64 N)$ time!
