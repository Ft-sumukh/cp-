# Linear Sieve — Step-by-Step Execution Trace

## Limit $N = 12$
Initial: `spf[i] = i` for $i \in [2, 12]$, `primes = []`.

---

## Iteration Log

| $i$ | `spf[i] == i`? | Primes Array | Primes Checked $p$ | Action `spf[p * i] = p` | Break Condition $(i \% p == 0)$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2 | Yes (Prime) | `[2]` | $p = 2$ | `spf[2 * 2 = 4] = 2` | $2 \% 2 == 0 \implies$ Break |
| 3 | Yes (Prime) | `[2, 3]` | $p = 2$<br>$p = 3$ | `spf[2 * 3 = 6] = 2`<br>`spf[3 * 3 = 9] = 3` | $3 \% 2 \ne 0$<br>$3 \% 3 == 0 \implies$ Break |
| 4 | No (`spf[4]=2`) | `[2, 3]` | $p = 2$ | `spf[2 * 4 = 8] = 2` | $4 \% 2 == 0 \implies$ Break |
| 5 | Yes (Prime) | `[2, 3, 5]` | $p = 2$ | `spf[2 * 5 = 10] = 2` | $5 \% 2 \ne 0$ ($5 \cdot 3 = 15 > 12$) |
| 6 | No (`spf[6]=2`) | `[2, 3, 5]` | $p = 2$ | `spf[2 * 6 = 12] = 2` | $6 \% 2 == 0 \implies$ Break |

Final Primes: `[2, 3, 5, 7, 11]`
Final SPF:
- `spf[4] = 2`, `spf[6] = 2`, `spf[8] = 2`, `spf[9] = 3`, `spf[10] = 2`, `spf[12] = 2`.
Notice every composite number was written to **exactly once**!
