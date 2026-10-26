# Task 11: Visit Planner

## Goal
Visitors answer a few questions and get a suggested plan they can send on WhatsApp.

## Read first
- PRD.md §6.10 (X-1), §11
- Style.md §8.3, §6.3
- Golden reference: components/sections/attractions/AttractionFilters.tsx

## Allowed files (create or edit)
- app/[locale]/(site)/plan/**
- components/sections/plan/**
- messages/bn.json, messages/en.json (only keys under "plan.")
- content/plan.ts

## Forbidden
Everything not listed above, including all LOCKED paths in AGENTS.md §7.

## Use these shared pieces (do not modify)
- components/ui: Button, Chip, Badge, Container, Section, Heading
- lib: whatsapp.ts, format.ts, seo.ts, analytics.ts
- content/attractions.ts, content/packages.ts, content/settings.ts (read only)

## Generator commands to run
- npm run gen -- page plan
- npm run gen -- component plan <ComponentName>

## Requirements
1. Three steps with a dot trail and step numbers: Who's coming (family, friends, school, corporate) → What do you want (rides, swimming, dining, events, overnight stay, multi-select) → Your plan
2. Large tappable tiles with icons, 44 px minimum targets, keyboard operable, state kept when going back
3. Group size input as a touch-friendly stepper
4. Result: matching attractions, one suggested package, today's hours, and "Send this plan on WhatsApp" using the "Visit plan" template in both languages
5. `content/plan.ts` maps interests to attraction categories and group types to package types. Keep the matching logic as a pure function and unit test it.
6. Load the client planner with a dynamic import (heavy feature)
7. Fire a planner completion event from lib/analytics.ts
8. If no attraction matches, show a helpful empty state with WhatsApp

## Acceptance criteria
- [ ] Matching function tests cover each interest and the empty case
- [ ] Planner works without a mouse
- [ ] WhatsApp message lists chosen interests and package
- [ ] Works in bn and en
- [ ] Mobile 360 px verified in Bangla
- [ ] npm run format:check && npm run lint && npm run typecheck && npm test && npm run i18n:check && npm run build pass
- [ ] npm run scope -- tasks/11-plan.md passes

## Out of scope
- Saving plans or accounts
- Booking or payment
