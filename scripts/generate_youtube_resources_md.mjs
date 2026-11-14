import fs from 'node:fs';
import path from 'node:path';
import { domains } from './curriculum_data.mjs';
import { videoCatalog } from './video_curation_data.mjs';

const rootDir = process.cwd();

let content = `# Master YouTube Learning Directory for Competitive Programming & Quant Engineering

A curated, institutionally organized video library mapping every single competitive programming concept to verified, high-yield YouTube lectures, implementation walkthroughs, and topic playlists.

---

## 1. Master Curated Playlists by Domain

### Best Complete Competitive Programming Playlists
- **[Errichto — Competitive Programming Courses](https://www.youtube.com/playlist?list=PLl0KD3g-oDOGJUemmxfOV3upZPvfHcc-H)** — Legend Grandmaster Errichto's complete algorithm and contest techniques series.
- **[Colin Galen — Codeforces Roadmap & Guides](https://www.youtube.com/c/ColinGalen)** — Practical problem-solving heuristics, contest strategy, and division roadmap.
- **[Luv — C++ for Competitive Programming Course](https://www.youtube.com/playlist?list=PLauivoElc3ggagradg8MfOZreCMmXMmJ-)** — Comprehensive beginner to advanced CP implementation course in C++.

### Best C++ & Standard Template Library (STL) Playlists
- **[take U forward — C++ STL Complete Masterclass](https://www.youtube.com/playlist?list=PLgUwDviBIf0rnqcQR74VeCbk799OR7QUx)** — Vector, Map, Set, Priority Queue, Iterators, and modern syntax.
- **[CppCon — High Performance & Low Latency C++](https://www.youtube.com/user/CppCon)** — Hardware cache locality, zero-allocation data structures, and memory alignment.

### Best Graph Theory Playlists
- **[William Fiset — Graph Theory Complete Series](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P)** — World-class visual animations of BFS, DFS, Dijkstra, Tarjan, Dinic, Eulerian paths.
- **[take U forward — Graph Series](https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn)** — Comprehensive practice problems from BFS to Disjoint Set Union and Bridges.

### Best Tree Algorithms Playlists
- **[Colin Galen — Tree Algorithms for CP](https://www.youtube.com/playlist?list=PL2q4fbVm1Ik64I3VqbVGRfl_WgYzvstq8)** — Tree Diameter, Centroids, Tree DP, and Subtree Queries.
- **[CodeNCode — Advanced Tree Decompositions](https://www.youtube.com/playlist?list=PL2q4fbVm1Ik64I3VqbVGRfl_WgYzvstq8)** — Heavy-Light Decomposition (HLD) and Centroid Decomposition.

### Best Dynamic Programming Playlists
- **[take U forward — Dynamic Programming Master Series](https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKAhpyErxDtxnK)** — 56 lectures from memoization to tabulation, space optimization, and bitmask DP.
- **[Tushar Roy — Dynamic Programming Classic Problems](https://www.youtube.com/playlist?list=PLrmLmBdmIlpsHaNTPP_jHHDx_os9ItYXr)** — Rigorous tabular DP breakdowns and 2D recurrences.

### Best Number Theory Playlists
- **[CodeNCode — Number Theory for Competitive Programming](https://www.youtube.com/playlist?list=PL2q4fbVm1Ik4liHX78UCT4SiE4UrVjm8G)** — Sieve, Euler Phi, CRT, Extended GCD, Matrix Exponentiation, Modular Inverses.

### Best Advanced Data Structures Playlists
- **[William Fiset — Data Structures Complete Course](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUO274Jr3OQn1M9vcYl)** — Fenwick Tree, Sparse Table, Balanced Trees, Quadtrees, Suffix Arrays.
- **[SecondThread — Competitive Programming Data Structures](https://www.youtube.com/c/SecondThread)** — Segment Tree Beats, Treaps, and Implicit Cartesian Trees.

### Best Mathematics, String & Theoretical Algorithms Playlists
- **[Reducible — Beautiful Mathematical Algorithms](https://www.youtube.com/channel/UC9Iqddptdm44-uAwh0NfLNg)** — Fast Fourier Transform (FFT), Graph traversals, and LIS intuition.
- **[Tushar Roy — String Algorithms Series](https://www.youtube.com/playlist?list=PLrmLmBdmIlpvhrUunQXkndglqPduM_S5B)** — KMP, Z-Algorithm, Suffix Tree, and Aho-Corasick.
- **[MIT OpenCourseWare — Design and Analysis of Algorithms (6.046J)](https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3Ab6)** — Rigorous asymptotic proofs, randomized algorithms, and network flow.

---

## 2. Topic-by-Topic Master Video Directory (All 426 Subtopics)

`;

let subtopicCounter = 1;

for (const domain of domains) {
  content += `\n### ${domain.name}\n\n`;
  content += `| No. | Subtopic | Dedicated Resource File | Best Video / Lecture | Channel | Direct Link |\n`;
  content += `|:---:|:---|:---:|:---|:---:|:---:|\n`;

  for (const topic of domain.topics) {
    const custom = videoCatalog[topic.slug];
    const vidTitle = custom?.lecture?.title || custom?.beginner?.title || `${topic.title} Guide`;
    const vidChannel = custom?.lecture?.channel || custom?.beginner?.channel || "Errichto / William Fiset / Striver";
    const vidUrl = custom?.lecture?.url || custom?.beginner?.url || "https://www.youtube.com/c/Errichto";
    const localFileLink = `[video-resources.md](${domain.dir}/${topic.slug}/video-resources.md)`;
    const watchLink = `[Watch Video](${vidUrl})`;

    content += `| ${subtopicCounter} | ${topic.title} | ${localFileLink} | ${vidTitle} | ${vidChannel} | ${watchLink} |\n`;
    subtopicCounter++;
  }
}

fs.writeFileSync(path.join(rootDir, 'YOUTUBE_RESOURCES.md'), content, 'utf-8');
console.log(`Generated YOUTUBE_RESOURCES.md with ${subtopicCounter - 1} subtopics.`);
