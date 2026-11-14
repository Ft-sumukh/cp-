import fs from 'node:fs';
import path from 'node:path';
import { domains } from './curriculum_data.mjs';

const rootDir = process.cwd();

let content = `# Competitive Programming Mastery
### Complete C++20 Learning Ecosystem, Algorithm Library, Resource Hub and Problem-Solving Tracker

[![Language: C++20](https://img.shields.io/badge/Language-C%2B%2B20-blue.svg)](https://en.cppreference.com/w/cpp/20)
[![Compiler: G++ 15.2.0](https://img.shields.io/badge/Compiler-G%2B%2B%2015.2.0-red.svg)](https://gcc.gnu.org/)
[![Platform: Codeforces](https://img.shields.io/badge/Platform-Codeforces-yellow.svg)](https://codeforces.com/)
[![Curriculum: USACO Guide](https://img.shields.io/badge/Curriculum-USACO%20Guide-green.svg)](https://usaco.guide/)
[![Curriculum: CP-Algorithms](https://img.shields.io/badge/Curriculum-CP--Algorithms-orange.svg)](https://cp-algorithms.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

An institutional-grade, comprehensively structured Competitive Programming repository covering **all 23 major algorithmic and mathematical domains**, expanded into **426 dedicated subtopic learning modules**. Engineered specifically for C++20 development, Codeforces Grandmaster progression, and Quantitative Developer preparation.

---

## Technical & Compilation Environment

- **Development Environment**: Ubuntu Linux running in VMware on Windows
- **Compiler**: \`g++ 15.2.0\` (or GCC/Clang with full modern C++20 support)
- **Editor**: Gedit / CLI
- **Standard Compilation Command**:
  \`\`\`bash
  g++ -std=c++20 -O2 -Wall -Wextra -Wshadow -Wconversion solution.cpp -o solution
  \`\`\`
- **Execution & I/O Redirection**:
  \`\`\`bash
  ./solution < in.txt > out.txt
  \`\`\`

---

## Repository Architecture

\`\`\`text
competitive-programming-mastery/
├── README.md                          # Master Portal & 426-Topic Clickable Index
├── ROADMAP.md                         # 5-Stage Progressive Learning Roadmap
├── PROGRESS.md                        # Master Progress Dashboard & Verification Checklists
├── RESOURCES.md                       # Verification Protocol & Authoritative Catalog
├── CONTRIBUTING.md                    # C++20 Standards, Style Guide & Directory Rules
├── LICENSE                            # MIT License
├── validate_repo.mjs                  # Automated Quality-Control & Link Validation Script
│
├── 00-cpp-foundations/                # Variables, Types, STL Containers, C++20 Features
├── 01-complexity-analysis/            # Asymptotics, Recurrences, Constraint Mapping
├── 02-basic-problem-solving/          # Prefix Sums, Two Pointers, Difference Arrays
├── 03-searching-and-optimisation/     # Discrete & Predicate Binary Search, Ternary Search
├── 04-recursion-and-backtracking/     # State Trees, Pruning, Branch & Bound
├── 05-sorting/                        # Stability, Custom Comparators, Radix/Merge
├── 06-basic-data-structures/          # Monotonic Stacks/Queues, Deques, Circular Buffers
├── 07-trees/                          # LCA, Binary Lifting, Tree DP, HLD, Centroids
├── 08-graphs/                         # BFS/DFS, Shortest Paths, MST, DSU, 2-SAT, Flows
├── 09-dynamic-programming/            # Knapsack, Interval, Digit, Bitmask, CHT, Aliens
├── 10-advanced-data-structures/       # Segment Tree, Lazy, Treap, Persistent ST, Mo
├── 11-string-algorithms/              # Rolling Hash, KMP, Z-Algorithm, Suffix Automaton
├── 12-number-theory/                  # Sieve, Modular Arithmetic, CRT, Mobius, Pollard Rho
├── 13-combinatorics/                  # Stars & Bars, Catalan Numbers, Lucas, Polya
├── 14-bit-manipulation/               # Bitmasks, SOS DP, Binary Tries, Linear Basis
├── 15-probability-and-statistics/     # Linearity of Expectation, Markov Chains
├── 16-game-theory/                    # Nim, Sprague-Grundy Theorem, Mex Rule
├── 17-computational-geometry/         # Vectors, Convex Hull, Sweep Line, Half-Plane
├── 18-advanced-graph-theory/          # Dinic Max-Flow, Hopcroft-Karp, MCMF, Connectivity
├── 19-advanced-algorithmic-techniques/# Parallel Binary Search, CDQ, Small-to-Large
├── 20-advanced-mathematics/           # Matrix Exponentiation, FFT, NTT, Lagrange
├── 21-contest-engineering/            # Stress Testing Harness, Overflow, Sanitizers
├── 22-quant-hft-specialisation/       # Cache Locality, Low-Latency L2 Order Book
│
├── 23-codeforces/                     # Problem Solutions Categorized by Rating (800 - 2000+)
├── 24-contest-practice/               # Virtual Contest Logs & Upsolving Protocols
├── 25-templates/                      # Battle-Tested C++20 CP Templates & Boilerplates
├── 26-mistakes-and-revisions/         # Error Taxonomy & Active Recall Ledger
└── 27-personal-notes/                 # Ad-hoc Pattern Discoveries & Mathematical Proofs
\`\`\`

---

## Master Topic Index (426 Topics with Direct Learning Links)

Every single subtopic in the curriculum has its own dedicated directory and learning page. Click any link in the **Learning Material** column to access its full documentation, C++20 reference code, theoretical proofs, visual diagrams, and graded problems.

`;

let globalIndex = 1;

for (const domain of domains) {
  content += `\n### ${domain.name}\n\n`;
  content += `Master Domain Index: [\`Open Domain Index\`](${domain.dir}/README.md)\n\n`;
  content += `| No. | Topic | Learning Material | Difficulty | Status | Resources |\n`;
  content += `|:---:|:---|:---:|:---:|:---:|:---:|\n`;

  for (const topic of domain.topics) {
    const statusBadge = topic.status === 'Completed' ? '**Completed**' : (topic.status || 'Not Started');
    const relativeLink = `[Open Topic](${domain.dir}/${topic.slug}/README.md)`;
    const videoLink = `[Videos](${domain.dir}/${topic.slug}/video-resources.md)`;
    const practiceLink = `[Practice](${domain.dir}/${topic.slug}/practice-problems.md)`;
    const resourcesCol = `${videoLink} \\| ${practiceLink}`;

    content += `| ${globalIndex} | ${topic.title} | ${relativeLink} | ${topic.difficulty} | ${statusBadge} | ${resourcesCol} |\n`;
    globalIndex++;
  }
}

content += `\n---

## Core Learning Protocol: 7-Step Mastery Loop

1. **Conceptual Absorption**: Study the definition, invariants, and mathematical proofs in \`README.md\` and \`theory.md\`.
2. **Visual & Intuitive Trace**: Walk through \`visual-explanation.md\` and \`dry-run.md\` to build geometric and state intuition.
3. **Curated Video Study**: Watch the curated video lecture listed in \`video-resources.md\`.
4. **Clean Implementation**: Implement the algorithm from scratch in C++20 on Ubuntu without referencing notes.
5. **Validation & Verification**: Verify against \`implementation.cpp\` and run local stress-testing harnesses.
6. **Graded Practice**: Solve all 3 problem tiers (Beginner $\\to$ Intermediate $\\to$ Advanced) in \`practice-problems.md\`.
7. **Mistake Logging**: Document any misconceptions, edge-case failures, or false paths in \`26-mistakes-and-revisions/\`.

---

## Automated Validation Script

To automatically verify that all 426 topics have intact pages, valid relative links, and complete resource sections, run:

\`\`\`bash
node validate_repo.mjs
\`\`\`
`;

fs.writeFileSync(path.join(rootDir, 'README.md'), content, 'utf-8');
console.log(`Generated root README.md with ${globalIndex - 1} subtopics.`);
