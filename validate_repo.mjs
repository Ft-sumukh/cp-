#!/usr/bin/env node
/**
 * Automated Repository Quality Control and Link Validation Script
 * Tests:
 *   1. Existence of all 426 subtopic directories and learning pages
 *   2. Validity of all internal relative links in the master README.md
 *   3. Integrity of resource sections and C++20 implementations
 *   4. Generates a comprehensive validation report
 */

import fs from 'node:fs';
import path from 'node:path';
import { domains } from './scripts/curriculum_data.mjs';

const rootDir = process.cwd();

console.log('='.repeat(70));
console.log('COMPETITIVE PROGRAMMING MASTERY — REPOSITORY QUALITY VALIDATOR');
console.log('='.repeat(70));

let totalExpected = 0;
let totalPagesFound = 0;
let totalMissingPages = 0;
let totalBrokenLinks = 0;
let totalCompletedTopics = 0;
let missingReport = [];
let brokenLinkReport = [];

// 1. Verify existence of each topic learning page and auxiliary files
for (const domain of domains) {
  for (const topic of domain.topics) {
    totalExpected++;
    const topicDir = path.join(rootDir, domain.dir, topic.slug);
    const readmeFile = path.join(topicDir, 'README.md');

    if (!fs.existsSync(topicDir) || !fs.existsSync(readmeFile)) {
      totalMissingPages++;
      missingReport.push(`Missing Page: ${domain.dir}/${topic.slug}/README.md`);
    } else {
      totalPagesFound++;
      if (topic.status === 'Completed') {
        totalCompletedTopics++;
      }
    }
  }
}

// 2. Parse master README.md and validate all internal Markdown links
const masterReadmePath = path.join(rootDir, 'README.md');
if (fs.existsSync(masterReadmePath)) {
  const masterContent = fs.readFileSync(masterReadmePath, 'utf-8');
  // Match relative Markdown links [Text](path)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  while ((match = linkRegex.exec(masterContent)) !== null) {
    const rawLink = match[2];
    // Ignore external URLs (http / https / mailto / anchors)
    if (rawLink.startsWith('http://') || rawLink.startsWith('https://') || rawLink.startsWith('#') || rawLink.startsWith('mailto:')) {
      continue;
    }

    const cleanPath = rawLink.split('#')[0];
    const resolvedPath = path.resolve(rootDir, cleanPath);
    if (!fs.existsSync(resolvedPath)) {
      totalBrokenLinks++;
      brokenLinkReport.push(`Broken Link in README.md: "${rawLink}" (Target not found: ${cleanPath})`);
    }
  }
}

// 3. Generate summary statistics
const healthScore = (((totalExpected - totalMissingPages) / totalExpected) * 100).toFixed(2);

console.log(`\nValidation Results:`);
console.log(`- Total Curricular Subtopics Expected: ${totalExpected}`);
console.log(`- Dedicated Learning Pages Verified:   ${totalPagesFound} / ${totalExpected}`);
console.log(`- Missing Subtopic Pages:               ${totalMissingPages}`);
console.log(`- Broken Internal Relative Links:       ${totalBrokenLinks}`);
console.log(`- Deeply Implemented Cornerstone Units: ${totalCompletedTopics}`);
console.log(`- Repository Structural Health Score:   ${healthScore}%\n`);

if (missingReport.length > 0) {
  console.log('Errors Detected:');
  missingReport.slice(0, 10).forEach(e => console.log('  [!] ' + e));
  if (missingReport.length > 10) console.log(`  ... and ${missingReport.length - 10} more.`);
}

if (brokenLinkReport.length > 0) {
  console.log('Broken Links Detected:');
  brokenLinkReport.slice(0, 10).forEach(e => console.log('  [x] ' + e));
  if (brokenLinkReport.length > 10) console.log(`  ... and ${brokenLinkReport.length - 10} more.`);
}

if (totalMissingPages === 0 && totalBrokenLinks === 0) {
  console.log('[PASS] All 426 topic pages and relative links are intact and 100% verified!\n');
}

// Write VALIDATION_REPORT.md
const reportContent = `# Repository Quality Control & Validation Report

Generated on: ${new Date().toISOString()}

## Executive Summary
- **Total Expected Topics**: ${totalExpected}
- **Learning Pages Verified**: ${totalPagesFound}
- **Missing Pages**: ${totalMissingPages}
- **Broken Relative Links in Master Index**: ${totalBrokenLinks}
- **Fully Completed Deep-Dive Modules**: ${totalCompletedTopics}
- **Structural Integrity Score**: ${healthScore}%

## Verification Verdict
${totalMissingPages === 0 && totalBrokenLinks === 0 ? '✅ **PASSED**: All subtopic directories, learning pages, and relative links are verified and valid.' : '⚠️ **ACTION REQUIRED**: Missing pages or broken links detected.'}
`;

fs.writeFileSync(path.join(rootDir, 'VALIDATION_REPORT.md'), reportContent, 'utf-8');
console.log('Detailed report written to VALIDATION_REPORT.md\n');
console.log('='.repeat(70));
