# Fast I/O — Practice Problems Progression

## Curated Practice Sets

- **BEST PRACTICE SET**: [SPOJ & Codeforces High Volume I/O Problems](https://codeforces.com/)

---

## 1. Beginner Tier (High Volume Streaming Benchmarks)

1. **[INTEST — Enormous Input Test](https://www.spoj.com/problems/INTEST/)**
   - **Platform**: SPOJ
   - **Difficulty / Rating**: Codeforces 800 - 900
   - **Key Concepts Tested**: Reading $10^7$ integers within 2.0 seconds. Baseline test for Fast I/O.
   - **Recommended Order**: 1

2. **[Static Range Sum Queries](https://cses.fi/problemset/task/1646)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 900
   - **Key Concepts Tested**: $2 \times 10^5$ inputs and queries where naive I/O takes > 0.8s.
   - **Recommended Order**: 2

3. **[Watermelon](https://codeforces.com/problemset/problem/4/A)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 800
   - **Key Concepts Tested**: Standard template sanity check.
   - **Recommended Order**: 3

---

## 2. Intermediate Tier (Large Array Outputs & String Streaming)

1. **[Josephus Problem I](https://cses.fi/problemset/task/2162)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 1300
   - **Key Concepts Tested**: Streaming $2 \times 10^5$ output integers rapidly.
   - **Recommended Order**: 4

2. **[Word Capitalization](https://codeforces.com/problemset/problem/281/A)**
   - **Platform**: Codeforces
   - **Difficulty / Rating**: 800
   - **Key Concepts Tested**: Fast character and string streaming without stream buffer corruption.
   - **Recommended Order**: 5

3. **[Subarray Sums I](https://cses.fi/problemset/task/1660)**
   - **Platform**: CSES
   - **Difficulty / Rating**: 1200
   - **Key Concepts Tested**: Fast two-pointer scan over large inputs.
   - **Recommended Order**: 6

---

## 3. Advanced Tier (Interactive Grader Communication)

1. **[Guess the Number](https://codeforces.com/problemset/problem/101021/1)**
   - **Platform**: Codeforces (Interactive)
   - **Difficulty / Rating**: 1200
   - **Key Concepts Tested**: Interactive problems: understanding when flushing with `std::cout << std::endl` is mandatory.
   - **Recommended Order**: 7

2. **[Bear and Prime 100](https://codeforces.com/problemset/problem/679/A)**
   - **Platform**: Codeforces (Interactive)
   - **Difficulty / Rating**: 1600
   - **Key Concepts Tested**: Prime verification with query-response flushing cycles.
   - **Recommended Order**: 8

3. **[Lost Tree](https://codeforces.com/problemset/problem/1534/D)**
   - **Platform**: Codeforces (Interactive)
   - **Difficulty / Rating**: 1800
   - **Key Concepts Tested**: Tree reconstruction under strict query limits with interactive stream synchronization.
   - **Recommended Order**: 9
