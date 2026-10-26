# TASK_TEMPLATE.md — How to dispatch work to agents

Every task uses the same format. Copy the block, fill it in, save it as `tasks/<id>-<name>.md`, and paste only this file path into the agent prompt.

## Prompt to give any agent (identical every time)

```
Read /AGENTS.md first, then the task file: /tasks/<id>-<name>.md.
Follow both exactly. Edit only the allowed files. Run the checks and end with the final message format from AGENTS.md §10.
```

## Task file template

```md
# Task <ID>: <Name>

## Goal
<One or two sentences. What the visitor will be able to do or see.>

## Read first
- PRD.md §<sections>
- Style.md §<sections>
- Golden reference: <file paths>

## Allowed files (create or edit)
- app/[locale]/(site)/<route>/**
- components/sections/<feature>/**
- messages/bn.json, messages/en.json (only keys under "<feature>.")
- content/<feature>.ts

## Forbidden
Everything not listed above, including all LOCKED paths in AGENTS.md §7.

## Use these shared pieces (do not modify)
- components/ui: Button, Chip, Badge, TicketStub
- lib: whatsapp.ts, format.ts, seo.ts, analytics.ts

## Generator commands to run
- pnpm gen page <route>
- pnpm gen section <feature> <SectionName>

## Requirements
1. <Requirement with PRD ID, e.g. A-2 Attraction card shows photo, name, category, age/height rule>
2. ...

## Acceptance criteria
- [ ] <Observable result>
- [ ] Works in bn and en
- [ ] Mobile 360 px verified
- [ ] pnpm format:check && lint && typecheck && test && build pass

## Out of scope
- <Things that look related but must not be touched>
```

## Example: filled task

```md
# Task 03: Tickets & Packages page

## Goal
Visitors see adult/child prices and packages on one page and can ask about them on WhatsApp or by phone.

## Read first
- PRD.md §6.6, §9 (Ticket, Package), §11
- Style.md §7.4 (Ticket stub), §3.3 (price style)
- Golden reference: app/[locale]/(site)/attractions/page.tsx

## Allowed files
- app/[locale]/(site)/tickets/**
- components/sections/tickets/**
- messages/*.json (keys under "tickets.")
- content/tickets.ts

## Requirements
1. T-1 Price table for adult, child, ride and water-park tickets with conditions
2. T-2 Package cards for family, group, school, corporate and stay
3. T-4 Every price block has "Ask on WhatsApp" and "Call the front desk"
4. T-5 Prices through lib/format.ts, Bangla numerals in bn
5. T-6 Offers hide automatically after validUntil

## Acceptance criteria
- [ ] Ticket stubs use components/ui/TicketStub
- [ ] WhatsApp message uses the "Tickets" template from PRD §11.2 in both languages
- [ ] Expired offer test passes
```

## Workflow

| Step | Who | What |
|---|---|---|
| 1 | You / lead | Scaffold, tokens, locked layer, golden reference (see SCAFFOLD.md) |
| 2 | You | Write one task file per route or feature, with non-overlapping allowed files |
| 3 | Agents | One agent per task, each in its own git worktree and branch (`agent/<id>-<name>`) |
| 4 | Reviewer agent or you | Check the PR against the review checklist below |
| 5 | You | Merge one PR at a time, rebase the others, re-run CI |
| 6 | Lead | Integration pass: nav, SEO, accessibility, performance |

```bash
# example parallel setup
git worktree add ../park-03-tickets -b agent/03-tickets
git worktree add ../park-04-stay    -b agent/04-stay
```

## Suggested task order
| Wave | Tasks (parallel inside a wave) |
|---|---|
| 0 (lead only) | Scaffold, tokens, UI primitives, i18n, content types, lint/CI, golden reference (Attractions) |
| 1 | Home sections, Stay, Tickets & Packages, Facilities |
| 2 | Events & Offers, Gallery, Contact & Location, Policies |
| 3 | Visit Planner, Park Map, Sky scene |
| 4 (lead) | SEO and structured data, analytics events, performance and accessibility pass |

## Reviewer checklist (paste into a review agent or use yourself)

```
Review this PR against /AGENTS.md and the task file.
1. Run: git diff --name-only main... Any file outside "Allowed files"? Reject.
2. Any hardcoded hex, arbitrary Tailwind value, inline style, or new font? Reject.
3. Any hardcoded copy, price, phone, or hours in components? Reject.
4. bn.json and en.json both updated and keys match? Run pnpm i18n:check.
5. Naming, folder placement, default/named exports follow AGENTS.md §3–§4?
6. Uses shared Button/TicketStub/etc. instead of re-implementing?
7. Matches the golden reference patterns?
8. Server/client split correct, no unnecessary 'use client'?
9. Accessibility: labels, alt text, focus, keyboard, reduced motion?
10. pnpm format:check && lint && typecheck && test && build all pass?
Output: PASS or a numbered list of required fixes. Do not fix the code yourself.
```
