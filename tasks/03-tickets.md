# Task 03: Tickets & Packages page

## Goal
Visitors see adult/child prices and package options on a single page and can ask about them via WhatsApp or phone.

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
```
