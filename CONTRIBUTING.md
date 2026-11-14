# Contribution and C++20 Engineering Guidelines

This repository serves as a personal Competitive Programming and Quantitative Engineering knowledge base. To maintain strict technical quality and longevity, all additions must conform to the following standards.

---

## 1. Code Standards (C++20)

- **Target Standard**: ISO C++20 (`-std=c++20`).
- **Target Compiler**: `g++ 15.2.0` (or modern GCC/Clang with full C++20 support).
- **Compilation Flags**:
  ```bash
  g++ -std=c++20 -O2 -Wall -Wextra -Wshadow -Wconversion -DLOCAL solution.cpp -o solution
  ```
- **Formatting**:
  - Consistent indentation (2 or 4 spaces; avoid tabs).
  - Explicit integer typing: prefer `int64_t` / `long long` when operations may exceed $2^{31} - 1$.
  - Fast I/O: include standard decoupled streams at the start of `main()`:
    ```cpp
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);
    ```
  - Prefer iterative logic over deep recursion to protect against call-stack exhaustion on tight memory constraints.

---

## 2. Topic Directory Standard

Every topic directory under the numerical modules must follow this 11-file layout:

```text
topic-name/
├── README.md               # 24-section comprehensive documentation
├── theory.md               # Mathematical foundations & algorithmic principles
├── implementation.cpp      # Production-grade C++20 implementation
├── dry-run.md              # Trace-by-trace execution on sample inputs
├── visual-explanation.md   # ASCII / Mermaid state diagrams
├── video-resources.md      # Curated, verified video lectures
├── github-resources.md     # Reference open-source repositories & libraries
├── web-resources.md        # Articles, notes, and visualizer links
├── practice-problems.md    # Graded problems (Beginner / Intermediate / Advanced)
├── advanced-variations.md  # Generalizations, optimizations, and edge-cases
└── notes.md                # Personal takeaways, pitfalls, and revision log
```

---

## 3. Resource Verification Policy

- Every link must be actively verified for accessibility and relevance.
- Do not add unverified, broken, or low-quality links.
- Record the date of verification using the ISO-8601 format (`YYYY-MM-DD`).
