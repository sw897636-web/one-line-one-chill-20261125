// One Line, One Chill — make.fun entry (program/v1, Node 22, stdlib only).
// Writes a single line of horror, under 200 characters, to entry.txt.
// No network, no randomness, no environment input: the line is fixed.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "For years my dog growled at the empty hallway. Tonight he wagged his tail, trotted in, and I heard my own voice whisper, 'Good boy.'";

// Guard: the entry must be one non-empty line, 1–200 characters. Fail loudly
// instead of writing an invalid entry (blank, multi-line, or over the limit).
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || LINE.includes("\r") || LINE.trim().length === 0) {
  console.error(`Invalid entry line: expected 1–200 characters on a single non-blank line, got ${LINE.length} characters.`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
