# Task 06: Attraction detail page

## Goal
Visitors open a single attraction to see photos, rules, safety notes and related attractions, and can ask about it on WhatsApp.

## Read first
- PRD.md §6.3 (A-5, A-6), §7.2, §9 (Attraction), §11
- Style.md §7.5, §8.4, §8.1 (Attractions = noon)
- Golden reference: components/sections/attractions/AttractionGrid.tsx, content/attractions.ts

## Allowed files (create or edit)
- app/[locale]/(site)/attractions/[slug]/**
- components/sections/attractions/AttractionDetail*.tsx
- messages/bn.json, messages/en.json (only keys under "attractions.detail.")

## Forbidden
Everything not listed above, including all LOCKED paths in AGENTS.md §7. Do not edit the golden reference files.

## Use these shared pieces (do not modify)
- components/ui: Button, Chip, Badge, ArchImage, Container, Section, Heading
- lib: whatsapp.ts, format.ts, seo.ts, analytics.ts
- content/attractions.ts (read only)

## Generator commands to run
- npm run gen -- section attractions AttractionDetailHero
- npm run gen -- section attractions AttractionDetailRules
- npm run gen -- section attractions AttractionDetailRelated

## Requirements
1. A-5 Detail page with photo gallery, optional short video (poster first, loads on tap), rules, safety notes, nearby facilities and related attractions
2. Rules block shows the height ruler, age rule and thrill droplets with text equivalents
3. A-6 WhatsApp and Call actions, WhatsApp message names the attraction in the site language
4. `generateStaticParams` from content and `notFound()` for unknown or draft slugs
5. Related attractions are picked by same category, excluding the current one, max 3
6. `generateMetadata` uses lib/seo.ts with the attraction name and summary
7. Do not add new fields to types. If you need one, put it under "Requests for lead".

## Acceptance criteria
- [ ] Unknown slug shows the 404 page
- [ ] Missing optional fields (video, safety notes, height) hide their blocks cleanly
- [ ] Works in bn and en
- [ ] Mobile 360 px verified in Bangla
- [ ] npm run format:check && npm run lint && npm run typecheck && npm test && npm run i18n:check && npm run build pass
- [ ] npm run scope -- tasks/06-attraction-detail.md passes

## Out of scope
- The attractions list page and filters (golden reference, already done)
- Park Map
