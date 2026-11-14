# Resource Verification Standard and Reference Directory

This document outlines the evaluation protocol for all learning resources documented across this repository.

---

## 1. Resource Verification Protocol

To prevent link rot, misleading titles, and low-quality tutorials, every resource added to any module must satisfy these criteria:

1. **Accessibility**: The link must resolve with an HTTP 200 status code and require no paywall or forced registration for foundational learning.
2. **Pedagogical Quality**: The explanation must be mathematically rigorous, clear, and focused on algorithmic invariants and correct implementation details.
3. **C++ Modernity**: Code examples should either follow modern C++ or be clearly annotated where legacy C++ idioms are used.
4. **Attribution**: The author, channel, platform, and date verified must be clearly recorded.
5. **No Hallucinated Links**: All URLs, problem ratings, and titles are verified against live repositories and competitive platforms.

---

## 2. Resource Tiers and Categorization

Each concept designates the following top-tier references:

| Category | Description | Primary Criteria |
| :--- | :--- | :--- |
| **BEST VIDEO** | Single standalone lecture | Intuitive visual build-up, clear invariant proofs, no fluff |
| **BEST PLAYLIST** | Comprehensive video series | Progressive difficulty, structured curriculum, problem-solving coverage |
| **BEST GITHUB REPO** | Reference code & templates | Clean, tested C++ implementations with optimal asymptotic complexity |
| **BEST WRITTEN TUTORIAL** | In-depth text article | Rigorous proofs, clear mathematical formulations, edge-case breakdowns |
| **BEST VISUAL EXPLANATION** | Interactive visualizer / tool | Step-by-step state visualization (e.g. VisuAlgo, animated traces) |
| **BEST PRACTICE SET** | Curated problem sequence | Smooth rating progression (Beginner $\to$ Intermediate $\to$ Advanced) |

---

## 3. Core Reference Ecosystem

The primary learning references forming the bedrock of this curriculum include:

- **USACO Guide**: [https://usaco.guide/](https://usaco.guide/) — Highly structured, concept-driven syllabus from Bronze to Platinum.
- **CP-Algorithms**: [https://cp-algorithms.com/](https://cp-algorithms.com/) — Translation and expansion of the Russian E-Maxx algorithms knowledge base.
- **CSES Problem Set**: [https://cses.fi/problemset/](https://cses.fi/problemset/) — Pure, standard algorithmic problems testing core building blocks without distraction.
- **Codeforces**: [https://codeforces.com/](https://codeforces.com/) — Premier competitive programming platform for contest endurance and ad-hoc reasoning.
- **Codeforces EDU**: [https://codeforces.com/edu/courses](https://codeforces.com/edu/courses) — Step-by-step masterclasses on fundamental data structures and two-pointers.
- **AtCoder**: [https://atcoder.jp/](https://atcoder.jp/) — High-quality mathematical problems and Educational DP Contest.
- **VisuAlgo**: [https://visualgo.net/](https://visualgo.net/) — Interactive visualizations of data structures and algorithms.
- **Competitive Programmer's Handbook**: [https://cses.fi/book/book.pdf](https://cses.fi/book/book.pdf) — Concise reference text by Antti Laaksonen.

---

## 4. Verification Record Format

When documenting resources in individual subtopic `video-resources.md`, `github-resources.md`, and `web-resources.md` files, adhere to this format:

```markdown
### [Resource Title](URL)
- **Author / Channel**: Name
- **Platform**: YouTube / GitHub / Website
- **Difficulty**: Beginner | Intermediate | Advanced
- **Key Concepts Covered**: Key ideas and proof techniques
- **Why Recommended**: Specific strength of this resource
- **Date Verified**: YYYY-MM-DD
```
