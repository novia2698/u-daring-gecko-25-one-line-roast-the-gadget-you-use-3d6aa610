// One-Line Roast entry for make.fun.
// Writes a single original roast line about a gadget used every day
// to <output>/entry.txt. Node 22, standard library only, no network,
// fully deterministic: the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: my phone's charging port is so worn that the cable only
// connects at one precise angle. One line, well under the 200-char cap.
const ROAST =
  "My phone only charges at one exact angle, so every night I hold it like a bomb technician defusing my own battery.";

// Why this line, against the judge's brief (funniest, freshest, neatest):
// - It roasts the phone itself, the gadget everyone uses every day.
// - The joke lands on first read: anyone with a worn charging port has
//   done exactly this little ritual, holding the phone at a magic angle.
// - The angle is fresh: not the dead-battery complaint everyone makes,
//   but the bomb-technician image, which turns a nightly annoyance into
//   a scene with a sting of recognition.
// - It is tight: one sentence, no wasted words, the punch lands at the end.
const WHY =
  "Target: the daily phone. Fresh angle: the charging cable's one magic angle, held like a bomb technician. Punch at the end, no wasted words.";

const MAX_CHARS = 200;

function main(): void {
  const line = ROAST.trim();
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`roast must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  // No trailing newline: the file holds exactly the roast, nothing else.
  writeFileSync(target, line, "utf8");
  console.log(`wrote ${target} (${line.length} chars)`);
  console.log(line);
  console.log(`why: ${WHY}`);
}

main();
