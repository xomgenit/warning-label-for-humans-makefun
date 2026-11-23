// Warning Label for Humans: One Line, Big Laugh
// Entry: a safety warning label that should come printed on every human being.
// Chosen over two alternates: (A) "May contain traces of confidence, sarcasm,
// and unsolicited opinions. Do not shake." — good label form, but the list format
// is a well-worn joke shape; (C) "CAUTION: Human may spontaneously start a
// sentence with 'well, actually' and cannot be switched off." — strong
// recognition, but narrower (pedants only) and a wordier setup.
// The winner reads like a real printed label ("Contents under pressure" +
// "Do not expose to"), escalates through three universal triggers, and lands
// the laugh on the quoted phrase in the last few words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Gate: 1-160 chars, single line. Entry is 111 chars — verified by local run.
const entry =
  "WARNING: Contents under pressure. Do not expose to Mondays, meetings, or anyone asking 'can I pick your brain?'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, entry, "utf8");
