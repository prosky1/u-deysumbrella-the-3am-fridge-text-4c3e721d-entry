// A smart fridge, 3am, one text to its owner.
// This script guards the line against the bounty rules, saves it to
// /output/entry.txt, then reads the file back to prove nothing was lost.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const FRIDGE_LINE =
  "3am. No entry after midnight. The leftovers have a restraining order against you.";
const CHAR_LIMIT = 140;
const OUTPUT_PATH = "/output/entry.txt";

// Gather every rule the line breaks instead of stopping at the first
// one, so a bad line reports all of its problems in a single error.
function findProblems(line: string): string[] {
  const problems: string[] = [];
  if (line.length === 0) problems.push("empty");
  if (line.length > CHAR_LIMIT) {
    problems.push(`too long (${line.length} > ${CHAR_LIMIT} chars)`);
  }
  if (line.trim() === "") problems.push("whitespace only");
  if (line !== line.trim()) problems.push("leading or trailing space");
  if (/[\r\n]/.test(line)) problems.push("more than one line");
  if (!/^[\x20-\x7E]*$/.test(line)) problems.push("not printable ASCII");
  return problems;
}

const problems = findProblems(FRIDGE_LINE);
if (problems.length > 0) {
  throw new Error(`entry rejected: ${problems.join("; ")}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, FRIDGE_LINE, "utf8");

// Read-back proof: the file must exist first — a missing file fails
// here with a plain message instead of a raw ENOENT from the reader —
// then its contents must match the line exactly, with byte count equal
// to character count (true only for pure ASCII).
if (!existsSync(OUTPUT_PATH)) {
  throw new Error(`read-back failed: ${OUTPUT_PATH} was not created`);
}
const saved = readFileSync(OUTPUT_PATH, "utf8");
const savedBytes = Buffer.byteLength(saved, "utf8");
if (saved !== FRIDGE_LINE || savedBytes !== FRIDGE_LINE.length) {
  throw new Error(
    `read-back mismatch: file holds ${savedBytes} bytes, expected ${FRIDGE_LINE.length}`,
  );
}

console.log(`saved ${FRIDGE_LINE.length}-char line to ${OUTPUT_PATH}`);
