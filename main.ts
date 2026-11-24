// One Letter: Coffee or Tea — make.fun entry
// https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// The contract: write exactly one letter to /output/entry.txt —
// "A" for coffee, "B" for tea, nothing else, no punctuation.
// The gate rejects anything that is not UTF-8 text of exactly
// 1 character, so the program validates its letter before writing.
//
// Choice: "A" (coffee). The judge weighs the letters on vividness,
// humour and truth, most important first. Coffee is the bolder,
// more alive answer of the two: dark, loud, first thing in the
// morning, the drink people reach for when they mean it. Tea is
// gentle and patient; coffee lands harder, funnier and truer as a
// single-letter stance. So the entry is one letter: A.

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "A"; // A = coffee, B = tea
const OUT_PATH = "/output/entry.txt";

// Guard: only a single letter A or B may ever be written.
// Anything else would fail the gate (1 to 1 characters) and
// score 0, so refuse loudly instead of writing bad output.
if (!/^[AB]$/.test(LETTER)) {
  throw new Error(`invalid entry letter: ${JSON.stringify(LETTER)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LETTER, "utf8");
