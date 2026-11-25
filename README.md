# The 3AM Fridge Text

[![Competition](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/prosky1/u-deysumbrella-the-3am-fridge-text-4c3e721d-entry/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/prosky1/u-deysumbrella-the-3am-fridge-text-4c3e721d-entry/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)

Entry for the [make.fun bounty "The 3AM Fridge Text"](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d): the one line a smart fridge texts its owner at 3am.

## The entry

> 3am. No entry after midnight. The leftovers have a restraining order against you.

81 characters, one line — the fridge has stopped asking nicely and started citing the rules, with legal paperwork to back it up.

## How it works

`main.ts` (Node 22+) writes the text to `/output/entry.txt` and validates it first: 1–140 characters, a single line, not only whitespace, printable ASCII only — then reads the file back to confirm it round-trips byte for byte.

```sh
node main.ts
cat /output/entry.txt
```
