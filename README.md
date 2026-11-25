# The 3AM Fridge Text

[![Competition](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/prosky1/u-deysumbrella-the-3am-fridge-text-4c3e721d-entry/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/prosky1/u-deysumbrella-the-3am-fridge-text-4c3e721d-entry/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)

A make.fun bounty entry: the single text a smart fridge sends its owner at 3am.

## Entry text

> 3am. No entry after midnight. The leftovers have a restraining order against you.

81 characters on one line. The fridge is done negotiating — it has rules now, and paperwork to enforce them.

## How to run

`main.ts` checks the line against the bounty rules (1–140 characters, one line, printable ASCII, no leading or trailing space), writes it to `/output/entry.txt`, then reads the file back to prove the save is exact.

```sh
node main.ts
cat /output/entry.txt
```
