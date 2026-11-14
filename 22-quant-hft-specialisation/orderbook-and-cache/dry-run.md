# Limit Order Book — Execution Trace & State Transitions

## Market Feed Scenario
- Base Price: $\$100.00$ ($10000$ ticks, tick size $\$0.01$)
- Initial Book: Empty (`best_bid = -1`, `best_ask = INF`)

---

## Trace Table

| Step | Feed Message | Array Index Targeted | Internal Buffer Action | `best_bid` (Price) | `best_ask` (Price) | Spread (Ticks) | CPU Cache Residency |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | Bid 100.05, 500 sh | `10005 - 10000 = 5` | `bid_volume[5] = 500` | 10005 (\$100.05) | INF | - | Line 0 cached |
| 2 | Bid 100.07, 300 sh | `10007 - 10000 = 7` | `bid_volume[7] = 300` | 10007 (\$100.07) | INF | - | Line 0 cached |
| 3 | Ask 100.10, 1000 sh | `10010 - 10000 = 10` | `ask_volume[10] = 1000` | 10007 (\$100.07) | 10010 (\$100.10) | 3 ticks (\$0.03) | Line 0 cached |
| 4 | Cancel Bid 100.07 | `10007 - 10000 = 7` | `bid_volume[7] = 0` | 10005 (\$100.05) | 10010 (\$100.10) | 5 ticks (\$0.05) | Line 0 cached |

Notice all 4 events hit array indices 5, 7, and 10, which reside entirely on the first 64-byte chunk of memory! Zero cache misses occurred.
