# Sieve of Eratosthenes — Visual Breakdown

## 1. Classical Sieve Redundant Marks vs. Linear Sieve Single Mark

```text
Evaluating Composite Number 12:

Classical Sieve:
- Prime 2 crosses off: 4, 6, 8, 10, [12], 14, 16, 18, 20...
- Prime 3 crosses off: 9, [12], 15, 18, 21...
Notice 12 is crossed off TWICE!

Linear Sieve (Euler's Sieve):
- When i = 6:
  p = 2 is tested.
  spf[2 * 6 = 12] = 2.
  Check: 6 % 2 == 0 -> IMMEDIATE BREAK.
  Prime 3 is NEVER allowed to touch 6!
Result: 12 is touched EXACTLY ONCE.
```

---

## 2. Factorization Descent Chain via SPF

```mermaid
flowchart LR
    A["60 (spf=2)"] -->|/2| B["30 (spf=2)"]
    B -->|/2| C["15 (spf=3)"]
    C -->|/3| D["5 (spf=5)"]
    D -->|/5| E["1 (Terminal)"]

    style A fill:#FFCDD2,stroke:#D32F2F
    style B fill:#FFCDD2,stroke:#D32F2F
    style C fill:#FFE082,stroke:#FFA000
    style D fill:#C8E6C9,stroke:#388E3C
    style E fill:#E0E0E0,stroke:#616161
```
