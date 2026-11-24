// One Letter: Coffee or Tea — make.fun entry
// https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// The contract: write exactly one letter to /output/entry.txt —
// "A" for coffee, "B" for tea, nothing else, no punctuation.
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

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LETTER, "utf8");
