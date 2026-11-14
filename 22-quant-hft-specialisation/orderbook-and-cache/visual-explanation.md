# Limit Order Book — Visual Cache Architecture

## 1. Flat Cache-Line Packed Price Ladder

```text
Memory Offset: 0x00       0x10       0x20       0x30       0x40 (Next Line)
             +----------+----------+----------+----------+
Cache Line 0 | Tick 0   | Tick 1   | Tick 2   | Tick 3   | ...
(64 Bytes)   | Vol: 100 | Vol: 250 | Vol: 0   | Vol: 500 |
             +----------+----------+----------+----------+
             |<------ Fetched into CPU L1 in single 1ns transaction ------>|
```

---

## 2. Order Matching Wavefront

```mermaid
flowchart LR
    subgraph Bids["Bids (Descending Price)"]
        B1["100.07 (300 sh) [BEST BID]"]
        B2["100.05 (500 sh)"]
        B3["100.02 (1200 sh)"]
    end

    subgraph Spread["Spread = $0.03"]
        SP["No trading activity"]
    end

    subgraph Asks["Asks (Ascending Price)"]
        A1["100.10 (1000 sh) [BEST ASK]"]
        A2["100.12 (800 sh)"]
        A3["100.15 (450 sh)"]
    end

    B1 --- Spread
    Spread --- A1
```
