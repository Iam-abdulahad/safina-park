# Task 05: Dining & Facilities page

## Goal
Visitors see where to eat, swim and relax, and find practical info like parking, prayer rooms and first aid.

## Read first
- PRD.md §6.5, §7.4, §9 (Facility)
- Style.md §4.2 (arch), §7.3
- Golden reference: app/[locale]/(site)/attractions/page.tsx

## Allowed files (create or edit)
- app/[locale]/(site)/facilities/**
- components/sections/facilities/**
- messages/bn.json, messages/en.json (only keys under "facilities.")
- content/facilities.ts

## Forbidden
Everything not listed above, including all LOCKED paths in AGENTS.md §7.

## Use these shared pieces (do not modify)
- components/ui: Button, Chip, Badge, ArchImage, Container, Section, Heading
- lib: whatsapp.ts, format.ts, seo.ts, analytics.ts
- content/settings.ts (read only)

## Generator commands to run
- npm run gen -- page facilities
- npm run gen -- section facilities <SectionName>

## Requirements
1. F-1 Cards for swimming pool or water park, restaurants, cafés and food courts, arch-cropped images
2. F-2 Event halls, picnic zones and barbecue areas, shown only when they exist in content
3. F-3 Practical info grid: parking, prayer rooms, washrooms, accessibility, first aid
4. F-4 Food menus as a browsable image list or structured list (P1)
5. F-5 Opening hours per facility where provided (P1)
6. Each facility with a `mapPinId` links to the Park Map page
7. Page ends with a WhatsApp and Call action using the "General" template
8. Create content/facilities.ts placeholder data with stable ids, using `[BRACKETS]` for unverified values

## Acceptance criteria
- [ ] A facility missing from content does not render an empty card
- [ ] Practical info items have icons and visible text (no colour-only meaning)
- [ ] Works in bn and en
- [ ] Mobile 360 px verified in Bangla
- [ ] npm run format:check && npm run lint && npm run typecheck && npm test && npm run i18n:check && npm run build pass
- [ ] npm run scope -- tasks/05-facilities.md passes

## Out of scope
- The Park Map itself (task 12)
- Event venue cards (task 08)
