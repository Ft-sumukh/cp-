# Fast I/O — Personal Notes & Error Log

## 1. Key Invariant
**Never mix C streams and C++ streams** once `sync_with_stdio(false)` is invoked:
- Do NOT call `printf()` or `scanf()` if using `std::cin` / `std::cout`.
- Do NOT use `std::endl` in output loops (use `'\n'`).

## 2. The Interactive Contest Exception
In **interactive problems**, the grader waits for your output before sending the next input:
- Fast I/O will buffer your output and NEVER send it to the grader $\implies$ Immediate **Idleness Limit Exceeded**!
- In interactive problems, always write:
  ```cpp
  std::cout << answer << std::endl; // Flushes output stream immediately
  ```

## 3. Revision Tracking
| Review Date | Review Focus | Solved Without Hints? | Confidence (1-5) | Next Review Date |
| :---: | :---: | :---: | :---: | :---: |
| 2026-11-14 | Initial implementation & proofs | Yes | 5/5 | 2026-11-28 |
