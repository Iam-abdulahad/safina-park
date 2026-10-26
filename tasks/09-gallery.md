# Task 09: Gallery page

## Goal
Visitors browse real photos and videos by category and open them in a fullscreen lightbox.

## Read first
- PRD.md §6.8, §7.7, §9 (Media)
- Style.md §6.3 (lightbox), §7.10
- Golden reference: components/sections/attractions/AttractionFilters.tsx

## Allowed files (create or edit)
- app/[locale]/(site)/gallery/**
- components/sections/gallery/**
- messages/bn.json, messages/en.json (only keys under "gallery.")
- content/gallery.ts

## Forbidden
Everything not listed above, including all LOCKED paths in AGENTS.md §7.

## Use these shared pieces (do not modify)
- components/ui: Button, Chip, Container, Section, Heading
- lib: seo.ts, analytics.ts
- content/settings.ts (read only)

## Generator commands to run
- npm run gen -- page gallery
- npm run gen -- section gallery <SectionName>
- npm run gen -- component gallery <ComponentName>

## Requirements
1. GL-1 Masonry or editorial grid, filter chips by Park, Resort, Dining, Events, Visitors, 16 px soft-square corners
2. GL-2 Lightbox with swipe, keyboard (arrows, Escape), caption, alt text, focus trap and focus return. Load it with a dynamic import.
3. GL-3 Videos show a poster frame and load only on tap
4. Empty filter shows "No photos here yet. Try another category." from messages
5. `next/image` with explicit dimensions and blur placeholder, alt text from content in both languages
6. Fire a gallery engagement event from lib/analytics.ts when the lightbox opens
7. Create content/gallery.ts placeholder data typed with the Media type

## Acceptance criteria
- [ ] Lightbox works by keyboard only and closes with Escape
- [ ] Reduced-motion disables the shared-element transition
- [ ] No layout shift while images load
- [ ] Works in bn and en
- [ ] Mobile 360 px verified in Bangla
- [ ] npm run format:check && npm run lint && npm run typecheck && npm test && npm run i18n:check && npm run build pass
- [ ] npm run scope -- tasks/09-gallery.md passes

## Out of scope
- Visitor photo wall (P2)
- Home gallery teaser (task 07)
