# Task 12: Park Map

## Goal
Visitors explore an illustrated park map, filter pins by type, and open a card for any place.

## Read first
- PRD.md §6.10 (X-3), §9 (Facility.mapPinId, Attraction.mapPinId)
- Style.md §5.4, §7.11
- Golden reference: components/sections/attractions/AttractionFilters.tsx

## Allowed files (create or edit)
- app/[locale]/(site)/map/**
- components/map/**
- messages/bn.json, messages/en.json (only keys under "map.")
- content/map-pins.ts

## Forbidden
Everything not listed above, including all LOCKED paths in AGENTS.md §7.

## Use these shared pieces (do not modify)
- components/ui: Button, Chip, Badge, Container, Section, Heading
- lib: seo.ts, analytics.ts
- content/attractions.ts, content/facilities.ts (read only)

## Generator commands to run
- npm run gen -- page map
- npm run gen -- component map <ComponentName>   (the generator targets sections, so move nothing by hand; if it cannot place files in components/map, ask in Open questions)

## Requirements
1. Illustrated SVG map in Mist, Aqua and Leaf with the sun-and-wave motif. Use a simple placeholder illustration, final art comes from the venue.
2. Pin types with colour plus icon: rides Coral, water Aqua, food Marigold, facilities Lagoon, parking Ink, plus entrances, washrooms, first aid, prayer rooms. Legend always visible.
3. Filter chips by type. Pins pop in on filter change.
4. Tap or press a pin: bottom sheet on mobile, popover on desktop, with photo, name, short description and a link to the detail page when one exists
5. Selected pin pulses once. Reduced-motion removes pop and pulse.
6. Pins are real buttons with accessible names, reachable by Tab, and the card is announced
7. `content/map-pins.ts` holds pin ids, types and coordinates (percent of the SVG viewBox). Ids must match `mapPinId` in attractions and facilities content.
8. Load the map client component with a dynamic import
9. A text list of all places below the map as a non-visual alternative

## Acceptance criteria
- [ ] Every pin id referenced in content exists in map-pins.ts
- [ ] Pins are operable by keyboard, bottom sheet traps focus and closes with Escape
- [ ] No meaning conveyed by colour alone
- [ ] Works in bn and en
- [ ] Mobile 360 px verified in Bangla
- [ ] npm run format:check && npm run lint && npm run typecheck && npm test && npm run i18n:check && npm run build pass
- [ ] npm run scope -- tasks/12-map.md passes

## Out of scope
- Google Maps embed (Contact page)
- Editing attractions or facilities content
