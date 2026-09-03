const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(indexHtmlPath, 'utf8');

const errors = [];

// Gate 1.1: Reject blocking browser dialogs
if (/window\.confirm|confirm\(|alert\(|prompt\(/.test(content)) {
  errors.push("FAIL Gate 1.1: Blocking browser dialogs detected (alert/confirm/prompt)");
}

// Gate 1.2: Reject ad-hoc border radius
if (/border-radius:(?!\s*(?:0|var\(--nd-radius\)))/i.test(content) || /rounded-(full|md|lg|sm)/.test(content)) {
  errors.push("FAIL Gate 1.2: Non-zero border-radius detected (violates Padkleur zero-radius invariant)");
}

// Gate 2.1: 3-Zone Sticky Header
if (!content.includes('position: sticky') && !content.includes('position:sticky')) {
  errors.push("FAIL Gate 2.1: Missing sticky header style");
}

// Gate 2.2: Launchpad Escape Hatch
if (!content.includes('nda-launchpad.vercel.app') && !content.includes('Launchpad')) {
  errors.push("FAIL Gate 2.2: Missing Zone 1 Launchpad escape hatch");
}

// Gate 2.3: Shell wrapper
if (!content.includes('nd-app-shell') && !content.includes('nd-shell')) {
  errors.push("FAIL Gate 2.3: Missing .nd-app-shell container");
}

if (errors.length > 0) {
  console.error("❌ UI CONSISTENCY AUDIT FAILED:");
  errors.forEach(e => console.error("  - " + e));
  process.exit(1);
} else {
  console.log("✅ UI CONSISTENCY AUDIT PASSED: All 4 gates satisfied.");
  process.exit(0);
}
