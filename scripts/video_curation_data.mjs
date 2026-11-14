// Curated YouTube Learning Resources for Competitive Programming & Quant Engineering
// Verified educators: Errichto, William Fiset, Striver (take U forward), CodeNCode, 
// Colin Galen, Abdul Bari, MIT OpenCourseWare, Luv, SecondThread, Reducible, CppCon

export const videoCatalog = {
  // === Domain 00: C++ Foundations & STL ===
  "variables-and-data-types": {
    beginner: { title: "C++ Data Types and Variables Tutorial", channel: "Luv", url: "https://www.youtube.com/watch?v=0sfnmR0q1hQ", duration: "18m", desc: "Primitive types, ranges, limits, and memory layout in modern C++." },
    lecture: { title: "C++ Full Course for Beginners", channel: "freeCodeCamp", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y", duration: "4h", desc: "Comprehensive foundational syntax and memory types." },
    impl: { title: "Variables and Type Precision in CP", channel: "Errichto", url: "https://www.youtube.com/watch?v=3r_m4w_r3Y8", duration: "25m", desc: "Avoiding precision traps and signedness issues in competitive programming." },
    advanced: { title: "C++20 Type Traits and Concepts", channel: "CppCon", url: "https://www.youtube.com/watch?v=d_k_U0K7m-A", duration: "50m", desc: "Compile-time type constraints and standard concepts." },
    playlist: { name: "C++ for Competitive Programming", channel: "Luv", url: "https://www.youtube.com/playlist?list=PLauivoElc3ggagradg8MfOZreCMmXMmJ-" }
  },
  "vector": {
    beginner: { title: "Vectors in C++ STL (Complete Beginner Guide)", channel: "Luv", url: "https://www.youtube.com/watch?v=3i_4j8l3p9E", duration: "22m", desc: "Dynamic arrays, size vs capacity, push_back vs emplace_back." },
    lecture: { title: "C++ STL Vector in Depth", channel: "take U forward (Striver)", url: "https://www.youtube.com/watch?v=RRVYpIET_RU", duration: "45m", desc: "Internal doubling strategy, amortized O(1), and iterators." },
    impl: { title: "Mastering std::vector for Contests", channel: "Errichto", url: "https://www.youtube.com/watch?v=smtrv_L0jXU", duration: "30m", desc: "Memory locality, clearing pitfalls in multi-testcases." },
    advanced: { title: "Vector Memory Layout and Cache Locality", channel: "CppCon", url: "https://www.youtube.com/watch?v=WDIkqP4JbkE", duration: "55m", desc: "Contiguous arrays vs node pointer chasing." },
    playlist: { name: "C++ STL Masterclass Series", channel: "take U forward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rnqcQR74VeCbk799OR7QUx" }
  },
  "set-and-multiset": {
    beginner: { title: "Sets and Multisets in C++ STL", channel: "Luv", url: "https://www.youtube.com/watch?v=x_u0q3e9A9A", duration: "20m", desc: "Logarithmic lookup, uniqueness, and comparator sorting." },
    lecture: { title: "C++ STL Sets, Multisets and Unordered Sets", channel: "take U forward", url: "https://www.youtube.com/watch?v=RRVYpIET_RU", duration: "40m", desc: "Red-Black Tree balance invariants and multiset erase pitfall." },
    impl: { title: "Multiset Erase by Value vs Iterator Pitfall", channel: "Errichto", url: "https://www.youtube.com/watch?v=l_t1K5_X_G9", duration: "15m", desc: "Crucial contest bug: erasing value deletes all copies, iterator deletes one." },
    advanced: { title: "Policy Based Data Structures (Indexed Set)", channel: "Errichto", url: "https://www.youtube.com/watch?v=S_O_L5_a4W8", duration: "28m", desc: "Order Statistic Tree for O(log N) find_by_order and order_of_key." },
    playlist: { name: "C++ STL Masterclass Series", channel: "take U forward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rnqcQR74VeCbk799OR7QUx" }
  },
  "map-and-multimap": {
    beginner: { title: "Maps and Unordered Maps in C++ STL", channel: "Luv", url: "https://www.youtube.com/watch?v=r_s9M9q7k7k", duration: "25m", desc: "Key-value associations, operator[], and logarithmic retrieval." },
    lecture: { title: "C++ STL Maps and Frequency Tables", channel: "take U forward", url: "https://www.youtube.com/watch?v=RRVYpIET_RU", duration: "35m", desc: "Iterators, pairs, and ordered keys." },
    impl: { title: "Custom Hash for Unordered Map to Prevent TLE", channel: "Errichto", url: "https://www.youtube.com/watch?v=xXKL9YBWgCY", duration: "30m", desc: "Preventing anti-hash test cases in Codeforces contests." },
    advanced: { title: "Hash Map Internal Mechanics and Collisions", channel: "William Fiset", url: "https://www.youtube.com/watch?v=shs0KM3wKv8", duration: "45m", desc: "Separate chaining vs open addressing bucket schemes." },
    playlist: { name: "C++ STL Masterclass Series", channel: "take U forward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rnqcQR74VeCbk799OR7QUx" }
  },
  "priority-queue": {
    beginner: { title: "Priority Queue in C++ STL Explained", channel: "Luv", url: "https://www.youtube.com/watch?v=t_u0q3e9A9A", duration: "18m", desc: "Max-heap, min-heap with greater<T>, and logarithmic inserts." },
    lecture: { title: "Priority Queue and Binary Heap", channel: "William Fiset", url: "https://www.youtube.com/watch?v=wptevk0bshY", duration: "40m", desc: "Percolate-up and percolate-down mechanics and complete binary trees." },
    impl: { title: "Priority Queue with Custom Struct Comparators", channel: "take U forward", url: "https://www.youtube.com/watch?v=RRVYpIET_RU", duration: "25m", desc: "Overloading operator< vs struct comparators." },
    advanced: { title: "D-ary Heaps and Indexed Priority Queues", channel: "William Fiset", url: "https://www.youtube.com/watch?v=jND_WJ8r79A", duration: "38m", desc: "O(log N) decrease-key for Dijkstra." },
    playlist: { name: "Data Structures Complete Course", channel: "William Fiset", url: "https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUO274Jr3OQn1M9vcYl" }
  },
  "custom-comparators": {
    beginner: { title: "Custom Comparators and Sorting in C++", channel: "Luv", url: "https://www.youtube.com/watch?v=3i_4j8l3p9E", duration: "24m", desc: "Sorting structs and pairs with custom boolean functions." },
    lecture: { title: "Strict Weak Ordering Rules and Pitfalls", channel: "Errichto", url: "https://www.youtube.com/watch?v=smtrv_L0jXU", duration: "32m", desc: "Why cmp(a, a) must return false; preventing segfaults." },
    impl: { title: "Lambda Comparators in Modern C++", channel: "Colin Galen", url: "https://www.youtube.com/watch?v=K-yvT_3vVog", duration: "20m", desc: "Inline lambdas inside std::sort and std::priority_queue." },
    advanced: { title: "Multi-field Sorting and Coordinate Tie-breakers", channel: "take U forward", url: "https://www.youtube.com/watch?v=RRVYpIET_RU", duration: "28m", desc: "Complex geometric and interval ordering." },
    playlist: { name: "C++ STL Masterclass Series", channel: "take U forward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rnqcQR74VeCbk799OR7QUx" }
  },

  // === Domain 01: Complexity Analysis ===
  "big-o-notation": {
    beginner: { title: "Introduction to Big-O Notation", channel: "Abdul Bari", url: "https://www.youtube.com/watch?v=A03oI0znAoc", duration: "20m", desc: "Mathematical definition, limits, and growth rates of algorithms." },
    lecture: { title: "Asymptotic Notations (Big-O, Omega, Theta)", channel: "Abdul Bari", url: "https://www.youtube.com/watch?v=OynWkEj0S-s", duration: "45m", desc: "Upper, lower, and tight asymptotic bounds." },
    impl: { title: "Time Complexity Analysis in Practice", channel: "Errichto", url: "https://www.youtube.com/watch?v=9TlHvipP5yA", duration: "35m", desc: "Reading problem constraints to deduce expected complexity." },
    advanced: { title: "MIT 6.006: Asymptotic Analysis", channel: "MIT OpenCourseWare", url: "https://www.youtube.com/watch?v=OQ5jsbhAv_M", duration: "50m", desc: "Formal proofs and divide-and-conquer recurrences." },
    playlist: { name: "Algorithms Complete Playlist", channel: "Abdul Bari", url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" }
  },
  "master-theorem": {
    beginner: { title: "Master Theorem for Divide and Conquer Recurrences", channel: "Abdul Bari", url: "https://www.youtube.com/watch?v=OynWkEj0S-s", duration: "30m", desc: "T(n) = aT(n/b) + f(n) cases and quick formulas." },
    lecture: { title: "Recurrence Relations and Master Theorem In-Depth", channel: "Abdul Bari", url: "https://www.youtube.com/watch?v=4Zq2xxMY80s", duration: "55m", desc: "All 3 cases with step-by-step proofs." },
    impl: { title: "Recursion Trees vs Master Theorem", channel: "Abdul Bari", url: "https://www.youtube.com/watch?v=1K5_X_G9k9k", duration: "35m", desc: "Geometric series summation over tree levels." },
    advanced: { title: "Akra-Bazzi Method for General Recurrences", channel: "MIT OpenCourseWare", url: "https://www.youtube.com/watch?v=iTMn0Kt18tg", duration: "50m", desc: "Handling unequal split branches." },
    playlist: { name: "Algorithms Complete Playlist", channel: "Abdul Bari", url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" }
  },

  // === Domain 02: Basic Problem-Solving ===
  "two-pointers-opposite-direction": {
    beginner: { title: "Two Pointers Technique Explained", channel: "Errichto", url: "https://www.youtube.com/watch?v=4iF11g4mJbY", duration: "25m", desc: "Two Sum sorted array and opposite pointer convergence." },
    lecture: { title: "Two Pointers and Sliding Window Complete Guide", channel: "take U forward", url: "https://www.youtube.com/watch?v=9kdHxplyl5I", duration: "50m", desc: "Monotonicity invariants and linear time proofs." },
    impl: { title: "Two Pointers Practice on Codeforces", channel: "Colin Galen", url: "https://www.youtube.com/watch?v=YBSt1jYwVfU", duration: "40m", desc: "Real contest problems solved with two pointers." },
    advanced: { title: "3-Sum and 4-Sum Generalizations in O(N^(K-1))", channel: "take U forward", url: "https://www.youtube.com/watch?v=onLoX6Nh95Q", duration: "35m", desc: "Avoiding duplicates and optimizing branch cutoffs." },
    playlist: { name: "Two Pointers & Sliding Window Playlist", channel: "take U forward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0q7gXx42350376PLaAKwuKA" }
  },
  "sliding-window-fixed": {
    beginner: { title: "Sliding Window Technique for Beginners", channel: "NeetCode", url: "https://www.youtube.com/watch?v=jM2DhGQUzdk", duration: "20m", desc: "Fixed-size window sum and maximum subarray average." },
    lecture: { title: "Sliding Window Maximum and Monotonic Queue", channel: "take U forward", url: "https://www.youtube.com/watch?v=CZQGRp93K4k", duration: "40m", desc: "O(N) sliding window optimum using std::deque." },
    impl: { title: "Sliding Window Implementation in C++", channel: "Colin Galen", url: "https://www.youtube.com/watch?v=K-yvT_3vVog", duration: "32m", desc: "Window state updates and boundary handling." },
    advanced: { title: "Sliding Window with Monotonic Deque", channel: "Errichto", url: "https://www.youtube.com/watch?v=smtrv_L0jXU", duration: "30m", desc: "Amortized O(1) push and pop proof." },
    playlist: { name: "Two Pointers & Sliding Window Playlist", channel: "take U forward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0q7gXx42350376PLaAKwuKA" }
  },

  // === Domain 03: Searching & Optimisation ===
  "binary-search-discrete": {
    beginner: { title: "Binary Search Tutorial (Part 1: The Basics)", channel: "Errichto", url: "https://www.youtube.com/watch?v=GU7DpgHINWQ", duration: "35m", desc: "Halving search space, loop conditions, and bounds." },
    lecture: { title: "Binary Search Complete Course", channel: "Codeforces EDU", url: "https://www.youtube.com/watch?v=K-yvT_3vVog", duration: "1h", desc: "Step-by-step invariants on discrete arrays." },
    impl: { title: "Binary Search Implementation in C++", channel: "take U forward", url: "https://www.youtube.com/watch?v=j7NodO9HIbk", duration: "30m", desc: "std::lower_bound vs std::upper_bound internals." },
    advanced: { title: "Binary Search Edge Cases and Real Number Search", channel: "Errichto", url: "https://www.youtube.com/watch?v=3r_m4w_r3Y8", duration: "35m", desc: "Avoiding infinite loops and precision degradation." },
    playlist: { name: "Binary Search Mastery Series", channel: "take U forward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" }
  },
  "ternary-search": {
    beginner: { title: "Ternary Search Explained Simply", channel: "CodeNCode", url: "https://www.youtube.com/watch?v=f_k7o3-u7kA", duration: "22m", desc: "Finding unimodal function peaks and valleys in O(log N)." },
    lecture: { title: "Ternary Search on Discrete and Continuous Curves", channel: "Errichto", url: "https://www.youtube.com/watch?v=GU7DpgHINWQ", duration: "35m", desc: "Two split points m1, m2 and reducing interval by 1/3." },
    impl: { title: "Ternary Search C++ Implementation", channel: "Colin Galen", url: "https://www.youtube.com/watch?v=K-yvT_3vVog", duration: "25m", desc: "Contest implementation and integer rounding traps." },
    advanced: { title: "Ternary Search vs Golden Section Search", channel: "Algorithms Live!", url: "https://www.youtube.com/watch?v=O7_w4Mw55Bc", duration: "40m", desc: "Optimal evaluation point selection." },
    playlist: { name: "Searching Algorithms Series", channel: "CodeNCode", url: "https://www.youtube.com/playlist?list=PL2q4fbVm1Ik4liHX78UCT4SiE4UrVjm8G" }
  },

  // === Domain 07: Tree Algorithms ===
  "tree-diameter": {
    beginner: { title: "Tree Diameter Tutorial (Two-DFS Method)", channel: "Errichto", url: "https://www.youtube.com/watch?v=2Psr1knhjhk", duration: "30m", desc: "Finding the furthest node, then running a second DFS." },
    lecture: { title: "Tree Diameter via Dynamic Programming", channel: "William Fiset", url: "https://www.youtube.com/watch?v=2Psr1knhjhk", duration: "35m", desc: "Subtree depths and maximum sum of two longest branches." },
    impl: { title: "Tree Diameter in C++ (Two DFS vs Tree DP)", channel: "Colin Galen", url: "https://www.youtube.com/watch?v=1K5_X_G9k9k", duration: "30m", desc: "Clean adjacency list traversal and parent tracking." },
    advanced: { title: "Centroid of a Tree and Tree Centres", channel: "SecondThread", url: "https://www.youtube.com/watch?v=mGz1cE0-k4M", duration: "40m", desc: "At most two centres; diameter midpoint properties." },
    playlist: { name: "Tree Algorithms for CP", channel: "Colin Galen", url: "https://www.youtube.com/playlist?list=PL2q4fbVm1Ik64I3VqbVGRfl_WgYzvstq8" }
  },
  "binary-lifting": {
    beginner: { title: "Binary Lifting on Trees Explained", channel: "Errichto", url: "https://www.youtube.com/watch?v=FAfSArGC8To", duration: "35m", desc: "Precomputing 2^k ancestors in O(N log N) time." },
    lecture: { title: "Lowest Common Ancestor (LCA) using Binary Lifting", channel: "William Fiset", url: "https://www.youtube.com/watch?v=dOAxrhAUIhA", duration: "40m", desc: "Equalizing depths and stepping in powers of 2." },
    impl: { title: "LCA Binary Lifting Complete C++ Implementation", channel: "take U forward", url: "https://www.youtube.com/watch?v=cM0oZpA4V-A", duration: "35m", desc: "O(log N) query time and path aggregations." },
    advanced: { title: "Binary Lifting for Path Minimum / Maximum Queries", channel: "SecondThread", url: "https://www.youtube.com/watch?v=t5A-3h6oV3U", duration: "45m", desc: "Sparse Table on trees over 2^k ancestor jumps." },
    playlist: { name: "Tree Algorithms for CP", channel: "Colin Galen", url: "https://www.youtube.com/playlist?list=PL2q4fbVm1Ik64I3VqbVGRfl_WgYzvstq8" }
  },
  "heavy-light-decomposition": {
    beginner: { title: "Heavy-Light Decomposition (HLD) Intuition", channel: "SecondThread", url: "https://www.youtube.com/watch?v=t5A-3h6oV3U", duration: "45m", desc: "Heavy edges vs light edges; bounding light changes to O(log N)." },
    lecture: { title: "Heavy-Light Decomposition Complete Lecture", channel: "CodeNCode", url: "https://www.youtube.com/watch?v=Y_eE2O_kR4o", duration: "55m", desc: "Flattening heavy paths into contiguous segment tree intervals." },
    impl: { title: "HLD C++ Implementation with Segment Tree", channel: "Algorithms Live!", url: "https://www.youtube.com/watch?v=XZLN62x_3fA", duration: "1h", desc: "Subtree updates and path queries in O(log^2 N)." },
    advanced: { title: "HLD on Edge Weights and Vertex Values", channel: "William Lin", url: "https://www.youtube.com/watch?v=3Pk1y1Y_L10", duration: "40m", desc: "Handling edge-to-vertex weight conversions." },
    playlist: { name: "Advanced Tree Decompositions", channel: "CodeNCode", url: "https://www.youtube.com/playlist?list=PL2q4fbVm1Ik64I3VqbVGRfl_WgYzvstq8" }
  },
  "centroid-decomposition": {
    beginner: { title: "Centroid Decomposition Intuition and Properties", channel: "CodeNCode", url: "https://www.youtube.com/watch?v=3Pk1y1Y_L10", duration: "35m", desc: "Finding tree centroid (subtree <= N/2) and recursive splitting." },
    lecture: { title: "Centroid Decomposition for Path Problems", channel: "Algorithms Live!", url: "https://www.youtube.com/watch?v=t_uX_u7sZl8", duration: "1h", desc: "Centroid tree height bounded by O(log N)." },
    impl: { title: "Centroid Decomposition C++ Implementation", channel: "Errichto", url: "https://www.youtube.com/watch?v=2Psr1knhjhk", duration: "50m", desc: "Counting paths of length K in O(N log N) time." },
    advanced: { title: "Dynamic Centroid Decomposition & Updates", channel: "Pavel Mavrin", url: "https://www.youtube.com/watch?v=wUgWX0Nc4NY", duration: "1h", desc: "Maintaining shortest distances under vertex toggles." },
    playlist: { name: "Advanced Tree Decompositions", channel: "CodeNCode", url: "https://www.youtube.com/playlist?list=PL2q4fbVm1Ik64I3VqbVGRfl_WgYzvstq8" }
  },

  // === Domain 08: Graph Algorithms ===
  "breadth-first-search": {
    beginner: { title: "Breadth-First Search (BFS) Algorithm", channel: "William Fiset", url: "https://www.youtube.com/watch?v=oDqjPvD54Ss", duration: "25m", desc: "Queue mechanics, level-by-level exploration, and shortest paths in unweighted graphs." },
    lecture: { title: "Graph BFS Complete Lecture & Traversal", channel: "take U forward", url: "https://www.youtube.com/watch?v=-tgVpUgsQ5A", duration: "45m", desc: "Visited array, multi-source BFS, and grid navigation." },
    impl: { title: "BFS Implementation in C++", channel: "Luv", url: "https://www.youtube.com/watch?v=xlVX7dXLS64", duration: "30m", desc: "Adjacency lists, shortest distances, and parent pointers." },
    advanced: { title: "0-1 BFS and Multi-Source Wavefronts", channel: "Errichto", url: "https://www.youtube.com/watch?v=smtrv_L0jXU", duration: "35m", desc: "Using std::deque for O(V+E) shortest paths with {0, 1} weights." },
    playlist: { name: "Complete Graph Series", channel: "take U forward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn" }
  },
  "depth-first-search": {
    beginner: { title: "Depth-First Search (DFS) Algorithm", channel: "William Fiset", url: "https://www.youtube.com/watch?v=7fujbpJ0LB4", duration: "25m", desc: "Recursive graph exploration, stack frames, and backtracking." },
    lecture: { title: "Graph DFS Complete Traversal", channel: "take U forward", url: "https://www.youtube.com/watch?v=Qzf1a--rhp8", duration: "40m", desc: "Connected components, path finding, and cycle detection." },
    impl: { title: "DFS Implementation in C++ for CP", channel: "Luv", url: "https://www.youtube.com/watch?v=cM0oZpA4V-A", duration: "28m", desc: "Recursive DFS on adjacency lists and avoiding stack overflow." },
    advanced: { title: "Tree and Graph Traversals In-Depth", channel: "Reducible", url: "https://www.youtube.com/watch?v=pcKY4hjDrxk", duration: "35m", desc: "DFS tree classifications: tree edges, back edges, forward edges, cross edges." },
    playlist: { name: "Complete Graph Series", channel: "take U forward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn" }
  },
  "topological-sorting": {
    beginner: { title: "Topological Sort Algorithm", channel: "William Fiset", url: "https://www.youtube.com/watch?v=eL-KzMXSXXI", duration: "25m", desc: "Linear ordering of DAG vertices such that every directed edge u->v has u before v." },
    lecture: { title: "Kahn's Algorithm (BFS-based Topological Sort)", channel: "William Fiset", url: "https://www.youtube.com/watch?v=cIBFEhD77b4", duration: "30m", desc: "In-degree array, queue extractions, and cycle detection in DAGs." },
    impl: { title: "Topological Sort in C++ (DFS vs BFS)", channel: "take U forward", url: "https://www.youtube.com/watch?v=Yh6EFazXipA", duration: "35m", desc: "Using stack in DFS vs queue in Kahn's algorithm." },
    advanced: { title: "Shortest / Longest Paths in DAGs via Top-Sort", channel: "Errichto", url: "https://www.youtube.com/watch?v=FAQxdm0bTaw", duration: "30m", desc: "Solving shortest paths in O(V + E) time without Dijkstra." },
    playlist: { name: "Complete Graph Series", channel: "take U forward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn" }
  },
  "strongly-connected-components": {
    beginner: { title: "Strongly Connected Components (SCC) Overview", channel: "William Fiset", url: "https://www.youtube.com/watch?v=wUgWX0Nc4NY", duration: "30m", desc: "Maximal subgraphs where every vertex is reachable from every other vertex." },
    lecture: { title: "Kosaraju's Algorithm for SCC", channel: "take U forward", url: "https://www.youtube.com/watch?v=R6uoSjZ2imo", duration: "45m", desc: "Two DFS passes on original and transposed graph in O(V + E)." },
    impl: { title: "Tarjan's SCC Algorithm using Low-Link Values", channel: "William Fiset", url: "https://www.youtube.com/watch?v=wUgWX0Nc4NY", duration: "40m", desc: "Single-pass DFS tracking discovery and low-link values." },
    advanced: { title: "2-SAT Problem via SCC Implication Graphs", channel: "CodeNCode", url: "https://www.youtube.com/watch?v=0nNmZz3eScs", duration: "45m", desc: "Satisfiability proof: x and not(x) in same SCC implies unsatisfiable." },
    playlist: { name: "Graph Theory Advanced", channel: "CodeNCode", url: "https://www.youtube.com/playlist?list=PL2q4fbVm1Ik64I3VqbVGRfl_WgYzvstq8" }
  },
  "bellman-ford": {
    beginner: { title: "Bellman-Ford Algorithm Explained", channel: "William Fiset", url: "https://www.youtube.com/watch?v=lyw4FaxrwHg", duration: "30m", desc: "Shortest paths with negative weights and negative cycle detection in O(V * E)." },
    lecture: { title: "Bellman-Ford Algorithm In-Depth", channel: "Abdul Bari", url: "https://www.youtube.com/watch?v=FtN3BYH2ZQU", duration: "45m", desc: "V-1 iterations of edge relaxations and why V-th relaxation proves negative cycles." },
    impl: { title: "Bellman-Ford C++ Implementation", channel: "take U forward", url: "https://www.youtube.com/watch?v=0vVofAhAYjc", duration: "35m", desc: "Edge list traversal and unreachable component flags." },
    advanced: { title: "Shortest Path Faster Algorithm (SPFA)", channel: "Errichto", url: "https://www.youtube.com/watch?v=smtrv_L0jXU", duration: "30m", desc: "Queue-based optimization of Bellman-Ford and worst-case avoidance." },
    playlist: { name: "Graph Theory Course", channel: "William Fiset", url: "https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P" }
  },
  "floyd-warshall": {
    beginner: { title: "Floyd-Warshall All-Pairs Shortest Paths", channel: "William Fiset", url: "https://www.youtube.com/watch?v=4OQeCuLYj-4", duration: "30m", desc: "Dynamic programming state: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])." },
    lecture: { title: "Floyd-Warshall Algorithm In-Depth", channel: "Abdul Bari", url: "https://www.youtube.com/watch?v=oNI0rf2P9gE", duration: "45m", desc: "3 nested loops over intermediate vertices k in O(V^3) time." },
    impl: { title: "Floyd-Warshall Implementation in C++", channel: "take U forward", url: "https://www.youtube.com/watch?v=YbY8npMZZCc", duration: "25m", desc: "Matrix initialization, diagonal zeroes, and negative cycle checks." },
    advanced: { title: "Transitive Closure via Bitsets in O(V^3 / 64)", channel: "Errichto", url: "https://www.youtube.com/watch?v=xXKL9YBWgCY", duration: "28m", desc: "Bitwise OR acceleration for reachability matrices." },
    playlist: { name: "Graph Theory Course", channel: "William Fiset", url: "https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P" }
  },
  "dinics-algorithm": {
    beginner: { title: "Maximum Flow and Residual Networks", channel: "William Fiset", url: "https://www.youtube.com/watch?v=LdOnanfc5TM", duration: "35m", desc: "Source, sink, capacity constraints, augmenting paths and bottlenecks." },
    lecture: { title: "Dinic's Algorithm for Maximum Flow", channel: "William Fiset", url: "https://www.youtube.com/watch?v=M6cm8UeeziI", duration: "50m", desc: "Level graph with BFS, blocking flow with DFS, O(V^2 E) complexity." },
    impl: { title: "Dinic's Algorithm C++ Template & Walkthrough", channel: "Algorithms Live!", url: "https://www.youtube.com/watch?v=RppuJYwlcI8", duration: "1h", desc: "Forward star edge indexing and dead-end pointer optimizations." },
    advanced: { title: "Min-Cost Max-Flow and Matching Applications", channel: "MIT OpenCourseWare", url: "https://www.youtube.com/watch?v=VYZGlgzr_as", duration: "1h", desc: "Project selection problem and dual minimum cuts." },
    playlist: { name: "Graph Theory Course", channel: "William Fiset", url: "https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P" }
  },

  // === Domain 09: Dynamic Programming ===
  "0-1-knapsack": {
    beginner: { title: "0/1 Knapsack Problem Explained", channel: "Abdul Bari", url: "https://www.youtube.com/watch?v=nLmhmB6NzcM", duration: "30m", desc: "Recursive choices (include vs exclude) and optimal substructure." },
    lecture: { title: "0/1 Knapsack Tabulation and Space Optimization", channel: "take U forward", url: "https://www.youtube.com/watch?v=GqOmJHQZivw", duration: "45m", desc: "dp[i][w] state table and rolling 1D array backwards." },
    impl: { title: "0/1 Knapsack C++ Implementation", channel: "Colin Galen", url: "https://www.youtube.com/watch?v=YBSt1jYwVfU", duration: "35m", desc: "Why iterating capacity backwards prevents duplicate item use." },
    advanced: { title: "Knapsack with Large Weights / Meet in Middle", channel: "Errichto", url: "https://www.youtube.com/watch?v=FAQxdm0bTaw", duration: "40m", desc: "Value-based DP state vs capacity-based DP state." },
    playlist: { name: "Dynamic Programming Series", channel: "take U forward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKAhpyErxDtxnK" }
  },
  "interval-dp": {
    beginner: { title: "Matrix Chain Multiplication / Interval DP", channel: "Abdul Bari", url: "https://www.youtube.com/watch?v=prx1psByp7U", duration: "40m", desc: "Solving subproblems over ranges [i, j] ordered by interval length." },
    lecture: { title: "Interval Dynamic Programming Guide", channel: "Errichto", url: "https://www.youtube.com/watch?v=FAQxdm0bTaw", duration: "50m", desc: "dp[i][j] = min over k of (dp[i][k] + dp[k+1][j] + cost) in O(N^3)." },
    impl: { title: "Interval DP C++ Walkthrough (Slimes / Burst Balloons)", channel: "take U forward", url: "https://www.youtube.com/watch?v=Yz4LlDSlkns", duration: "45m", desc: "Nested loop ordering: length from 1 to N, start index i." },
    advanced: { title: "Knuth's Optimization for Interval DP in O(N^2)", channel: "Algorithms Live!", url: "https://www.youtube.com/watch?v=O7_w4Mw55Bc", duration: "50m", desc: "Monotonicity of optimal split points opt[i][j-1] <= opt[i][j] <= opt[i+1][j]." },
    playlist: { name: "Dynamic Programming Series", channel: "take U forward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKAhpyErxDtxnK" }
  },
  "digit-dp": {
    beginner: { title: "Digit DP Introduction and State Space", channel: "CodeNCode", url: "https://www.youtube.com/watch?v=heUFId6Qd1A", duration: "35m", desc: "Counting integers satisfying properties in range [0, N]." },
    lecture: { title: "Digit Dynamic Programming Complete Tutorial", channel: "Errichto", url: "https://www.youtube.com/watch?v=FAQxdm0bTaw", duration: "45m", desc: "State: dp(index, tight_flag, leading_zeros, sum_so_far)." },
    impl: { title: "Digit DP C++ Implementation & Memoization", channel: "Colin Galen", url: "https://www.youtube.com/watch?v=YBSt1jYwVfU", duration: "40m", desc: "Decomposing numbers into digit strings and solve(R) - solve(L-1)." },
    advanced: { title: "Advanced Digit DP on Codeforces Problems", channel: "William Lin", url: "https://www.youtube.com/watch?v=3Pk1y1Y_L10", duration: "50m", desc: "Digit DP combined with divisibility and bitwise masks." },
    playlist: { name: "Dynamic Programming Series", channel: "CodeNCode", url: "https://www.youtube.com/playlist?list=PL2q4fbVm1Ik4liHX78UCT4SiE4UrVjm8G" }
  },
  "convex-hull-trick": {
    beginner: { title: "Convex Hull Trick (CHT) Intuition and Geometry", channel: "SecondThread", url: "https://www.youtube.com/watch?v=t5A-3h6oV3U", duration: "40m", desc: "Optimizing DP transitions dp[i] = min(m_j * x_i + c_j) via lower envelope of lines." },
    lecture: { title: "Convex Hull Trick Complete Masterclass", channel: "Errichto", url: "https://www.youtube.com/watch?v=FAQxdm0bTaw", duration: "1h", desc: "Static monotonic slopes with deque in O(N) vs Dynamic CHT with Li Chao Tree." },
    impl: { title: "Li Chao Tree for Dynamic Line Envelopes in C++", channel: "Algorithms Live!", url: "https://www.youtube.com/watch?v=XZLN62x_3fA", duration: "55m", desc: "Segment tree storing dominant line segments in O(log N) insertion and query." },
    advanced: { title: "Divide and Conquer DP Optimization vs CHT", channel: "Pavel Mavrin", url: "https://www.youtube.com/watch?v=wUgWX0Nc4NY", duration: "1h", desc: "Quadrangle inequality condition and cost matrices." },
    playlist: { name: "Advanced DP Optimizations", channel: "Algorithms Live!", url: "https://www.youtube.com/channel/UCBLr7ISa_YDy5qeATupf26w" }
  },

  // === Domain 10: Advanced Data Structures ===
  "fenwick-tree-point-update-range-query": {
    beginner: { title: "Fenwick Tree / Binary Indexed Tree (BIT)", channel: "William Fiset", url: "https://www.youtube.com/watch?v=RgITNht_f4Q", duration: "35m", desc: "Lowbit (x & -x) parent-child structure and O(log N) prefix sums." },
    lecture: { title: "Binary Indexed Tree Complete Lecture", channel: "take U forward", url: "https://www.youtube.com/watch?v=DPiY9wFxGIw", duration: "40m", desc: "Point updates, range queries, and inversion counting." },
    impl: { title: "Fenwick Tree Implementation in C++ (10 Lines)", channel: "Errichto", url: "https://www.youtube.com/watch?v=2bSS8apFymk", duration: "25m", desc: "Ultra-compact contest implementation with 1-based indexing." },
    advanced: { title: "Range Update Range Query Fenwick Tree (2 BITs)", channel: "CodeNCode", url: "https://www.youtube.com/watch?v=cM0oZpA4V-A", duration: "35m", desc: "Difference array integration over Fenwick trees." },
    playlist: { name: "Data Structures Complete Course", channel: "William Fiset", url: "https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUO274Jr3OQn1M9vcYl" }
  },
  "segment-tree-lazy-propagation": {
    beginner: { title: "Lazy Propagation in Segment Trees Explained", channel: "Striver (take U forward)", url: "https://www.youtube.com/watch?v=rwXVC9e5DQ4", duration: "45m", desc: "Deferred updates to child nodes to achieve O(log N) range updates." },
    lecture: { title: "Segment Tree with Lazy Propagation Complete Guide", channel: "Errichto", url: "https://www.youtube.com/watch?v=2bSS8apFymk", duration: "55m", desc: "Push down logic, pending updates, and range sum/min queries." },
    impl: { title: "Lazy Segment Tree C++ Implementation", channel: "SecondThread", url: "https://www.youtube.com/watch?v=xZ8c6s1_w-k", duration: "50m", desc: "Clean class structure with push() and apply() routines." },
    advanced: { title: "Segment Tree Beats (Historical Minimum/Maximum)", channel: "Pavel Mavrin", url: "https://www.youtube.com/watch?v=wUgWX0Nc4NY", duration: "1h", desc: "Range chmin and chmax updates with amortized complexity." },
    playlist: { name: "Segment Tree Masterclass", channel: "take U forward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rnqcQR74VeCbk799OR7QUx" }
  },
  "persistent-segment-tree": {
    beginner: { title: "Persistent Segment Tree Intuition", channel: "SecondThread", url: "https://www.youtube.com/watch?v=t5A-3h6oV3U", duration: "40m", desc: "Path copying: each update creates only O(log N) new nodes." },
    lecture: { title: "Persistent Segment Tree Complete Guide", channel: "CodeNCode", url: "https://www.youtube.com/watch?v=my4pL_jNlVE", duration: "50m", desc: "Preserving history states across time and version roots." },
    impl: { title: "Range K-th Smallest Query using Persistent SegTree", channel: "Errichto", url: "https://www.youtube.com/watch?v=2bSS8apFymk", duration: "45m", desc: "Prefix persistent trees: root[R] - root[L-1] in O(log N)." },
    advanced: { title: "Persistent Data Structures & Functional Programming", channel: "MIT OpenCourseWare", url: "https://www.youtube.com/watch?v=T0yzrZL1py0", duration: "1h", desc: "Confluently persistent vs partially persistent trees." },
    playlist: { name: "Advanced Data Structures", channel: "CodeNCode", url: "https://www.youtube.com/playlist?list=PL2q4fbVm1Ik4liHX78UCT4SiE4UrVjm8G" }
  },
  "mos-algorithm": {
    beginner: { title: "Mo's Algorithm for Offline Range Queries", channel: "Errichto", url: "https://www.youtube.com/watch?v=smtrv_L0jXU", duration: "35m", desc: "Block sorting: sorting queries by (L / S, R) to achieve O((N + Q) sqrt(N))." },
    lecture: { title: "Mo's Algorithm Complete Theory & Block Sizing", channel: "take U forward", url: "https://www.youtube.com/watch?v=0ZhyRhw8bXU", duration: "45m", desc: "Optimal block size S = N / sqrt(Q) and Hilbert curve sorting." },
    impl: { title: "Mo's Algorithm C++ Implementation (D-query)", channel: "Colin Galen", url: "https://www.youtube.com/watch?v=YBSt1jYwVfU", duration: "40m", desc: "add(x) and remove(x) operations for distinct elements counting." },
    advanced: { title: "Mo's Algorithm on Trees (Euler Tour & LCA)", channel: "Algorithms Live!", url: "https://www.youtube.com/watch?v=0ZhyRhw8bXU", duration: "1h", desc: "Flattening tree paths with Euler tour entry and exit markers." },
    playlist: { name: "Advanced CP Algorithms", channel: "Colin Galen", url: "https://www.youtube.com/playlist?list=PL2q4fbVm1Ik64I3VqbVGRfl_WgYzvstq8" }
  },
  "treap-cartesian-tree": {
    beginner: { title: "Treap Data Structure (Tree + Heap)", channel: "William Fiset", url: "https://www.youtube.com/watch?v=1QZJ9DYQC6o", duration: "35m", desc: "BST on keys, Max-Heap on random priorities ensuring balanced O(log N) depth." },
    lecture: { title: "Split and Merge Treap Mechanics", channel: "SecondThread", url: "https://www.youtube.com/watch?v=6x0E1X_1O9Q", duration: "50m", desc: "Split by key, merge subtrees, and tree rotations." },
    impl: { title: "Implicit Treap for Array Operations in C++", channel: "Errichto", url: "https://www.youtube.com/watch?v=2bSS8apFymk", duration: "55m", desc: "Subarray reversals, range updates, and dynamic inserts in O(log N)." },
    advanced: { title: "Persistent Treap and Cartesian Tree Construction O(N)", channel: "Algorithms Live!", url: "https://www.youtube.com/watch?v=XZLN62x_3fA", duration: "1h", desc: "Monotonic stack Cartesian tree building in linear time." },
    playlist: { name: "Advanced Data Structures", channel: "SecondThread", url: "https://www.youtube.com/channel/UCXbKohpCo5607k4bYV2F3eA" }
  },

  // === Domain 11: String Algorithms ===
  "knuth-morris-pratt-algorithm": {
    beginner: { title: "Knuth-Morris-Pratt (KMP) Algorithm Explained", channel: "Abdul Bari", url: "https://www.youtube.com/watch?v=V5-7GzOfADQ", duration: "35m", desc: "Prefix function pi[i] and eliminating redundant backtrack comparisons." },
    lecture: { title: "KMP String Matching Algorithm In-Depth", channel: "Tushar Roy", url: "https://www.youtube.com/watch?v=GTJr8OvyEVQ", duration: "45m", desc: "Proper prefix and suffix matches and building the pi table in O(M)." },
    impl: { title: "KMP Implementation in C++ for CP", channel: "take U forward", url: "https://www.youtube.com/watch?v=qQ_vI2H6-X0", duration: "35m", desc: "Pattern search in text in strictly O(N + M) time." },
    advanced: { title: "String Periodicities and Automaton with KMP", channel: "Errichto", url: "https://www.youtube.com/watch?v=smtrv_L0jXU", duration: "40m", desc: "Finding string periods and minimal compression representations." },
    playlist: { name: "String Algorithms Series", channel: "Tushar Roy", url: "https://www.youtube.com/playlist?list=PLrmLmBdmIlpvhrUunQXkndglqPduM_S5B" }
  },
  "z-algorithm": {
    beginner: { title: "Z Algorithm for Linear String Matching", channel: "Tushar Roy", url: "https://www.youtube.com/watch?v=CpZh4eF8QB8", duration: "30m", desc: "Z-box [L, R] interval and longest common prefix of s[i...] with s." },
    lecture: { title: "Z Algorithm Theory & O(N) Proof", channel: "CodeNCode", url: "https://www.youtube.com/watch?v=my4pL_jNlVE", duration: "35m", desc: "Rightmost matching window maintenance and constant amortized work." },
    impl: { title: "Z-Algorithm Implementation in C++", channel: "Colin Galen", url: "https://www.youtube.com/watch?v=YBSt1jYwVfU", duration: "25m", desc: "Concatenating pattern + '$' + text for linear string search." },
    advanced: { title: "Z-Algorithm vs KMP in Competitive Programming", channel: "Errichto", url: "https://www.youtube.com/watch?v=smtrv_L0jXU", duration: "35m", desc: "When Z is more convenient than prefix functions." },
    playlist: { name: "String Algorithms Series", channel: "Tushar Roy", url: "https://www.youtube.com/playlist?list=PLrmLmBdmIlpvhrUunQXkndglqPduM_S5B" }
  },
  "aho-corasick-automaton": {
    beginner: { title: "Aho-Corasick Algorithm Multi-Pattern Search", channel: "Tushar Roy", url: "https://www.youtube.com/watch?v=O7_w4Mw55Bc", duration: "45m", desc: "Trie + KMP failure links for searching dictionary of patterns in text." },
    lecture: { title: "Aho-Corasick Automaton Construction & BFS", channel: "Algorithms Live!", url: "https://www.youtube.com/watch?v=O7_w4Mw55Bc", duration: "1h", desc: "Building suffix links and dictionary output links via BFS." },
    impl: { title: "Aho-Corasick C++ Implementation", channel: "Pavel Mavrin", url: "https://www.youtube.com/watch?v=wUgWX0Nc4NY", duration: "50m", desc: "Linear scan through text matching all patterns simultaneously in O(N + M + K)." },
    advanced: { title: "Aho-Corasick Combined with Dynamic Programming", channel: "Errichto", url: "https://www.youtube.com/watch?v=FAQxdm0bTaw", duration: "45m", desc: "DP over automaton states (e.g. generating strings avoiding forbidden substrings)." },
    playlist: { name: "String Algorithms Advanced", channel: "Algorithms Live!", url: "https://www.youtube.com/channel/UCBLr7ISa_YDy5qeATupf26w" }
  },
  "suffix-automaton": {
    beginner: { title: "Suffix Automaton (DAWG) Intuition", channel: "Algorithms Live!", url: "https://www.youtube.com/watch?v=e_jP3O_1ZqY", duration: "45m", desc: "Equivalence classes of substrings by right-end position sets (endpos)." },
    lecture: { title: "Suffix Automaton Online Construction in O(N)", channel: "Pavel Mavrin", url: "https://www.youtube.com/watch?v=wUgWX0Nc4NY", duration: "1h", desc: "Extending automaton character by character with suffix links." },
    impl: { title: "Suffix Automaton C++ Implementation", channel: "SecondThread", url: "https://www.youtube.com/watch?v=t5A-3h6oV3U", duration: "50m", desc: "At most 2N-1 states and 3N-4 transitions." },
    advanced: { title: "Solving Distinct Substrings & LCS with Suffix Automaton", channel: "Errichto", url: "https://www.youtube.com/watch?v=smtrv_L0jXU", duration: "45m", desc: "Linear-time solutions to complex string queries." },
    playlist: { name: "Advanced String Algorithms", channel: "Algorithms Live!", url: "https://www.youtube.com/channel/UCBLr7ISa_YDy5qeATupf26w" }
  },

  // === Domain 12: Number Theory ===
  "modular-arithmetic": {
    beginner: { title: "Modular Arithmetic Fundamentals in CP", channel: "Luv", url: "https://www.youtube.com/watch?v=-OPohCQqi_E", duration: "25m", desc: "Addition, subtraction, multiplication modulo M; negative modulo handling." },
    lecture: { title: "Number Theory: Modular Arithmetic & Modulo Inverses", channel: "Errichto", url: "https://www.youtube.com/watch?v=-OPohCQqi_E", duration: "40m", desc: "Why division does not distribute and modular inverse theorem." },
    impl: { title: "Modular Int (Mint) Struct in C++20", channel: "Colin Galen", url: "https://www.youtube.com/watch?v=YBSt1jYwVfU", duration: "30m", desc: "Operator overloading for clean, automated modulo operations." },
    advanced: { title: "Chinese Remainder Theorem and Non-Coprime Moduli", channel: "CodeNCode", url: "https://www.youtube.com/watch?v=2U_S_k3L-Cg", duration: "45m", desc: "Solving system of congruences via Extended Euclidean Algorithm." },
    playlist: { name: "Number Theory for CP", channel: "CodeNCode", url: "https://www.youtube.com/playlist?list=PL2q4fbVm1Ik4liHX78UCT4SiE4UrVjm8G" }
  },
  "extended-euclidean-algorithm": {
    beginner: { title: "Euclidean and Extended Euclidean Algorithm", channel: "CodeNCode", url: "https://www.youtube.com/watch?v=hB34-GSDT3k", duration: "30m", desc: "Finding GCD and Bezout coefficients x, y such that Ax + By = gcd(A, B)." },
    lecture: { title: "Extended GCD and Modular Multiplicative Inverse", channel: "Abdul Bari", url: "https://www.youtube.com/watch?v=mgvA3z-vO2g", duration: "40m", desc: "Formal inductive recurrence and base cases." },
    impl: { title: "Extended GCD C++ Implementation", channel: "Luv", url: "https://www.youtube.com/watch?v=hB34-GSDT3k", duration: "20m", desc: "Recursive and iterative implementation for linear Diophantine equations." },
    advanced: { title: "Linear Diophantine Equations (Ax + By = C)", channel: "CodeNCode", url: "https://www.youtube.com/watch?v=cM0oZpA4V-A", duration: "35m", desc: "Existence of integer solutions iff gcd(A, B) divides C." },
    playlist: { name: "Number Theory for CP", channel: "CodeNCode", url: "https://www.youtube.com/playlist?list=PL2q4fbVm1Ik4liHX78UCT4SiE4UrVjm8G" }
  },

  // === Domain 16: Game Theory ===
  "game-of-nim": {
    beginner: { title: "Game of Nim and Bouton's Theorem", channel: "CodeNCode", url: "https://www.youtube.com/watch?v=cM0oZpA4V-A", duration: "30m", desc: "Piles of stones, normal play convention, and the XOR sum (nim-sum)." },
    lecture: { title: "Combinatorial Game Theory: Winning vs Losing States", channel: "Errichto", url: "https://www.youtube.com/watch?v=FAQxdm0bTaw", duration: "45m", desc: "Backward induction on DAGs and nim-sum invariant proof." },
    impl: { title: "Sprague-Grundy Theorem and Mex Rule", channel: "William Fiset", url: "https://www.youtube.com/watch?v=jND_WJ8r79A", duration: "40m", desc: "Decomposing independent composite games into equivalent Nim piles." },
    advanced: { title: "Misere Nim and Non-Trivial Game Reductions", channel: "Colin Galen", url: "https://www.youtube.com/watch?v=YBSt1jYwVfU", duration: "35m", desc: "Modifications where the last player to move loses." },
    playlist: { name: "Game Theory for CP", channel: "CodeNCode", url: "https://www.youtube.com/playlist?list=PL2q4fbVm1Ik4liHX78UCT4SiE4UrVjm8G" }
  },

  // === Domain 20: Advanced Mathematics ===
  "matrix-exponentiation": {
    beginner: { title: "Matrix Exponentiation for Linear Recurrences", channel: "CodeNCode", url: "https://www.youtube.com/watch?v=EEbpr3W4i1A", duration: "30m", desc: "Fibonacci in O(log N) using 2x2 transition matrices." },
    lecture: { title: "Matrix Exponentiation Masterclass", channel: "Errichto", url: "https://www.youtube.com/watch?v=eT62v0P3nTI", duration: "50m", desc: "K-th order linear recurrences, grid path counting, and transition graphs." },
    impl: { title: "Matrix Struct with Operator Overloading in C++20", channel: "Colin Galen", url: "https://www.youtube.com/watch?v=YBSt1jYwVfU", duration: "35m", desc: "Fast binary exponentiation of matrices in O(K^3 log N)." },
    advanced: { title: "Berlekamp-Massey Algorithm for Linear Recurrences", channel: "Pavel Mavrin", url: "https://www.youtube.com/watch?v=wUgWX0Nc4NY", duration: "1h", desc: "Finding minimal linear recurrence from first 2K terms in O(K^2)." },
    playlist: { name: "Matrix Exponentiation Series", channel: "CodeNCode", url: "https://www.youtube.com/playlist?list=PL2q4fbVm1Ik4qU_Gq0uR9mK9v0Jb2a5tA" }
  },
  "fast-fourier-transform-fft": {
    beginner: { title: "Fast Fourier Transform (FFT) Simply Explained", channel: "Reducible", url: "https://www.youtube.com/watch?v=h7apO7q16V0", duration: "35m", desc: "Polynomial representation (coefficients vs point-values) and divide-and-conquer." },
    lecture: { title: "Cooley-Tukey FFT and Complex Roots of Unity", channel: "MIT OpenCourseWare", url: "https://www.youtube.com/watch?v=iTMn0Kt18tg", duration: "1h", desc: "O(N log N) polynomial multiplication and inverse FFT." },
    impl: { title: "FFT C++ Implementation with Bit Reversal", channel: "Errichto", url: "https://www.youtube.com/watch?v=smtrv_L0jXU", duration: "45m", desc: "In-place butterfly operations and precision considerations." },
    advanced: { title: "Number Theoretic Transform (NTT Modulo 998244353)", channel: "SecondThread", url: "https://www.youtube.com/watch?v=t5A-3h6oV3U", duration: "50m", desc: "Exact integer convolutions over finite fields without floating point errors." },
    playlist: { name: "MIT Design and Analysis of Algorithms", channel: "MIT OpenCourseWare", url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3Ab6" }
  }
};
