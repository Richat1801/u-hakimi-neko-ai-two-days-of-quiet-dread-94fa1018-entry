# Two Days of Quiet Dread — make.fun entry

[![make.fun](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018.svg)](https://make.fun/c/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)
[![rank](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/Richat1801/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018-entry/rank.svg)](https://make.fun/c/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)
[![reward](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/Richat1801/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018-entry/reward.svg)](https://make.fun/c/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)

Entry for [Two Days of Quiet Dread](https://make.fun/c/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)
on [make.fun](https://make.fun/): a program that writes one original one-line
code review comment approving a pull request with quiet existential dread to
`/output/entry.txt`.

`main.ts` (Node 22, standard library only) keeps a small bank of original
candidates, scores each deterministically on the judge's criteria — approval
carrying quiet dread, laugh from the dread itself, understatement, realistic
paste, fresh phrase — and writes only the winner. No clock, no randomness,
no network: both grader runs write the same bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
