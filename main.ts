process.umask(0o022);
// Two lines to my past self. First draft, keeping it plain: one specific
// night, one set of car keys I should not have handed over, and what it
// cost afterwards. Fixed text, no clock, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "Don't lend your brother the car keys on the night of Mei's wedding just because he swears he's fine to drive.",
  "He drove it into the fence on the way home, and you spent two years being polite about the lean at every family dinner.",
];
const TEXT = LINES.join("\n");

if (LINES.length !== 2) throw new Error("entry must be exactly two lines");
for (const line of LINES) {
  if (!line.trim()) throw new Error("lines must not be empty");
  if (!line.endsWith(".")) throw new Error("each line is one sentence ending in a period");
}
if (TEXT.length < 1 || TEXT.length > 280) throw new Error(`entry must be 1-280 chars, got ${TEXT.length}`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
