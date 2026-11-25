// u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018 entry (Node 22,
// standard library only): writes one original one-line code review
// comment to /output/entry.txt.
//
// The comment must approve a pull request while carrying quiet
// existential dread, in a single line of at most 140 characters. The
// judge compares comments pairwise on, in order: it is a single-line
// approval carrying quiet dread; the laugh comes from the dread
// itself; the dread stays quiet (understatement, flat tone, no
// melodrama); it reads like a comment a tired engineer would really
// paste before clicking approve; it finds a fresh turn of phrase.
//
// So this program keeps a small bank of original candidates, scores
// each deterministically on those axes, and writes only the winner.
// No clock, no randomness, no network: both grader runs write the
// same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

type Candidate = {
  text: string;
  dread: number; // quiet existential dread, felt not announced
  laugh: number; // the laugh comes from the dread itself
  quiet: number; // understatement, flat tone, no melodrama
  real: number; // reads like a tired engineer really pasting it
  fresh: number; // a turn of phrase the stock line would not take
};

// Every comment below is original, written for this competition.
const BANK: Candidate[] = [
  {
    text: 'LGTM. The code works, the tests pass, and I have made my peace with all of it.',
    dread: 9,
    laugh: 9,
    quiet: 10,
    real: 9,
    fresh: 8,
  },
  {
    text: 'Approved. It works today, which is the most any of us can honestly promise.',
    dread: 8,
    laugh: 7,
    quiet: 9,
    real: 9,
    fresh: 7,
  },
  {
    text: 'LGTM. I understand what it does. I no longer ask what it will become.',
    dread: 9,
    laugh: 7,
    quiet: 9,
    real: 8,
    fresh: 8,
  },
  {
    text: "Approved. The diff is fine. The future is someone else's problem now, probably mine.",
    dread: 8,
    laugh: 8,
    quiet: 7,
    real: 8,
    fresh: 9,
  },
  {
    text: 'LGTM. It merges cleanly, it runs, and I have accepted that this is my life now.',
    dread: 9,
    laugh: 8,
    quiet: 8,
    real: 9,
    fresh: 7,
  },
  {
    text: 'Approved. Nothing here is wrong, which is the most frightening thing about it.',
    dread: 8,
    laugh: 7,
    quiet: 6,
    real: 7,
    fresh: 9,
  },
  {
    text: 'LGTM. The tests are green, the code is fine, and the dread is purely decorative.',
    dread: 6,
    laugh: 7,
    quiet: 6,
    real: 6,
    fresh: 9,
  },
  {
    text: 'Approved. Ship it. Whatever this becomes, it becomes it, and I will be here watching.',
    dread: 7,
    laugh: 6,
    quiet: 7,
    real: 7,
    fresh: 6,
  },
];

function score(c: Candidate): number {
  // Judge order: dread-first approval, laugh from the dread, quiet
  // tone, realistic paste, fresh phrase — weighted in that order.
  return c.dread * 3 + c.laugh * 3 + c.quiet * 2 + c.real * 2 + c.fresh;
}

let best = BANK[0];
for (const c of BANK.slice(1)) {
  if (score(c) > score(best)) best = c;
}

// Criterion 1 is a hard gate, not a score: the winner must actually
// approve. If a future bank edit ever promoted a comment without an
// approval token, the entry would lose to any comment that approves.
if (!/^(LGTM|Approved)\b/.test(best.text)) {
  throw new Error(`winner does not approve: ${best.text}`);
}

const entry = best.text;
if (entry.length < 1 || entry.length > 140 || entry.includes('\n')) {
  throw new Error(`entry invalid: ${entry.length} chars`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), entry, 'utf8');
