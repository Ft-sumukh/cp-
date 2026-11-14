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

## Repository Master Navigation & Resources

- [Master YouTube Video Directory (\`YOUTUBE_RESOURCES.md\`)](YOUTUBE_RESOURCES.md) — Comprehensive master catalog of video lectures & playlists
- [5-Stage Progressive Learning Roadmap (\`ROADMAP.md\`)](ROADMAP.md) — From Bronze/CF 800 to Grandmaster & Quant Systems
- [Master Progress Dashboard (\`PROGRESS.md\`)](PROGRESS.md) — Live tracking of all 426 subtopics & revision logs
- [Resource Verification Standard (\`RESOURCES.md\`)](RESOURCES.md) — Strict evaluation protocols preventing link rot
- [Automated Repository Quality Validator (\`validate_repo.mjs\`)](validate_repo.mjs) — Automated link & file consistency checker

---

## Master Topic Index (426 Topics with Direct Learning & Video Links)

Every individual subtopic in the curriculum has its own dedicated directory, its own learning page, and its own curated YouTube video guide.

`;

let globalIndex = 1;

for (const domain of domains) {
  content += `\n### ${domain.name}\n\n`;
  content += `Master Domain Index: [\`Open Domain Index\`](${domain.dir}/README.md)\n\n`;
  content += `| No. | Topic | Learning Material | Video Resources | Practice | Difficulty | Status |\n`;
  content += `|:---:|:---|:---:|:---:|:---:|:---:|:---:|\n`;

  for (const topic of domain.topics) {
    const statusBadge = topic.status === 'Completed' ? '**Completed**' : (topic.status || 'Not Started');
    const relativeLink = `[Open Topic](${domain.dir}/${topic.slug}/README.md)`;
    const videoLink = `[Watch Video](${domain.dir}/${topic.slug}/video-resources.md)`;
    const practiceLink = `[Problems](${domain.dir}/${topic.slug}/practice-problems.md)`;

    content += `| ${globalIndex} | ${topic.title} | ${relativeLink} | ${videoLink} | ${practiceLink} | ${topic.difficulty} | ${statusBadge} |\n`;
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
console.log(`Updated root README.md with ${globalIndex - 1} subtopics.`);
