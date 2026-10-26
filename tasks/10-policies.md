# Task 10: Policies page

## Goal
Visitors read entry, stay, cancellation, safety and privacy policies in clear language.

## Read first
- PRD.md §5.2, §17.2
- Style.md §3.3, §10
- Golden reference: app/[locale]/(site)/attractions/page.tsx

## Allowed files (create or edit)
- app/[locale]/(site)/policies/**
- components/sections/policies/**
- messages/bn.json, messages/en.json (only keys under "policies.")

## Forbidden
Everything not listed above, including all LOCKED paths in AGENTS.md §7.

## Use these shared pieces (do not modify)
- components/ui: Button, Container, Section, Heading
- lib: whatsapp.ts, seo.ts, analytics.ts
- content/settings.ts (read only)

## Generator commands to run
- npm run gen -- page policies
- npm run gen -- section policies <SectionName>

## Requirements
1. Sections: entry rules, stay (check-in/out, children), cancellation, safety, privacy
2. Anchor links for each section and a sticky contents list on desktop
3. Body text at `prose` width, left-aligned, with real headings in order (h1, then h2)
4. All policy text lives in messages as `[BRACKETS]` placeholders, never invented rules
5. Page ends with a WhatsApp and Call action using the "General" template
6. Printable: readable without the sticky list and without motion

## Acceptance criteria
- [ ] Every heading has an id that matches its anchor link
- [ ] No policy invented beyond the placeholders
- [ ] Works in bn and en
- [ ] Mobile 360 px verified in Bangla
- [ ] npm run format:check && npm run lint && npm run typecheck && npm test && npm run i18n:check && npm run build pass
- [ ] npm run scope -- tasks/10-policies.md passes

## Out of scope
- Cookie notice (G-6, lead)
- Legal review of the text (venue)
