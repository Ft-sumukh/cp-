# 00. C++ Foundations and STL

This module establishes professional fluency with modern C++ (C++20) for competitive programming, high-throughput I/O, standard library containers, and memory layout.

---

## Subtopics & Planned Modules

1. **`fast-io/`**: Decoupling `cin/cout`, buffer management, `'\n'` vs `std::endl`, custom fast I/O readers.
2. **`types-and-overflow/`**: Integer limits ($2^{31}-1, 2^{63}-1$), signed vs unsigned, `int64_t`, `__int128_t`, floating-point precision issues (`double` vs `long double`).
3. **`sequential-containers/`**: `std::vector` (capacity vs size, `emplace_back`), `std::deque`, `std::array`.
4. **`associative-containers/`**: `std::set`, `std::multiset` (erasing iterator vs value pitfall), `std::map`.
5. **`hash-containers/`**: `std::unordered_set`, `std::unordered_map`, custom hash functions to prevent $O(N^2)$ anti-hash tests.
6. **`container-adaptors/`**: `std::stack`, `std::queue`, `std::priority_queue` (max-heap vs min-heap comparators).
7. **`iterators-and-ranges/`**: Random-access vs bidirectional iterators, `std::ranges`, `std::views`.
8. **`stl-algorithms/`**: `std::sort`, `std::stable_sort`, `std::lower_bound`, `std::upper_bound`, `std::binary_search`, `std::rotate`, `std::next_permutation`.
9. **`custom-comparators/`**: Strict weak ordering requirement, lambda comparators, comparator structs.
10. **`modern-cpp20-features/`**: Structured bindings (`auto [u, v, w]`), `<concepts>`, `<bit>` header (`std::popcount`, `std::countl_zero`).
11. **`pointers-references-memory/`**: Lvalue vs rvalue references, pass-by-value vs pass-by-reference-to-const, call-stack depth.
12. **`templates-and-classes/`**: Generic structs, operator overloading for points and modular arithmetic.

---

## Implementation Template
Refer to [`25-templates/cpp20-template.cpp`](../25-templates/cpp20-template.cpp) for the standard contest starter code.
Refer to [`25-templates/topic-template/`](../25-templates/topic-template/) for the 11-file standard for each subtopic.
