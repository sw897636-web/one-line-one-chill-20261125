// One Line, One Chill — make.fun entry (program/v1, Node 22, stdlib only).
// Writes a single line of horror, under 200 characters, to entry.txt.
// No network, no randomness, no environment input: the line is fixed.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Every night my dog growls at the empty hallway, but tonight the hallway growled back in my dog's voice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
