# The 3AM Fridge Text

[![Competition](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/prosky1/u-deysumbrella-the-3am-fridge-text-4c3e721d-entry/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/prosky1/u-deysumbrella-the-3am-fridge-text-4c3e721d-entry/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)

Entry for the [make.fun bounty "The 3AM Fridge Text"](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d): the one line a smart fridge texts its owner at 3am.

## The entry

> It's 3am. You opened me again. The leftovers have filed a noise complaint.

74 characters, one line — a machine that has been awake all night, keeps score, and has finally decided to speak.

## How it works

`main.ts` (Node 22+) writes the text to `/output/entry.txt` and validates it first: 1–140 characters, a single line, not only whitespace, printable ASCII only — then reads the file back to confirm it round-trips byte for byte.

```sh
node main.ts
cat /output/entry.txt
```
