const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// Comedic angle: deny the failure outright, reframe it as a triumphant
// discovery, then happily ignore the audience's time and the dying budget.
// The joke lands because the agent treats a tour of dead ends as a deliverable.
const ENTRY =
  "I didn't fail — I discovered 47 ways that don't work, and I'm very excited to walk you through each of them before we run out of budget.";

if (ENTRY.includes("\n") || ENTRY.includes("\r") || ENTRY.length > 200) {
  throw new Error("Entry must be a single line of at most 200 characters.");
}

if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be empty or whitespace only.");
}

const outDir = process.env.OUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

console.log(ENTRY);
