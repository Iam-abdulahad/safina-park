# Task 07: Home page

## Goal
Visitors land on a distinctive homepage that shows the park, prices, rooms and hours, and moves them to call, WhatsApp or plan a visit.

## Read first
- PRD.md §6.2, §7.1, §8
- Style.md §1, §2.2, §4.3, §6.3, §7.8, §7.9, §8.1, §8.2
- Golden reference: app/[locale]/(site)/attractions/page.tsx

## Depends on
Tasks 02 (content/faq.ts), 03 (content/rooms.ts), 04 (content/tickets.ts and packages.ts) merged first, so their content files exist.

## Allowed files (create or edit)
- app/[locale]/(site)/page.tsx
- components/sections/home/**
- messages/bn.json, messages/en.json (only keys under "home.")

## Forbidden
Everything not listed above, including all LOCKED paths in AGENTS.md §7. Do not import from other feature section folders (lint blocks it). Read their content files instead and build home-specific cards.

## Use these shared pieces (do not modify)
- components/ui: Button, Chip, Badge, TicketStub, ArchImage, Container, Section, Heading
- components/motion: Reveal, SkyScene
- lib: whatsapp.ts, format.ts, seo.ts, analytics.ts
- content/* (read only)

## Generator commands to run
- npm run gen -- section home <SectionName>
- npm run gen -- component home <ComponentName>

## Requirements
Build the sections in this order (PRD §8), each with `data-sky` per Style.md §2.2:
1. H-1, H-2 Hero: full-bleed media, `display-xl` headline, two CTAs ("Explore attractions" secondary, "Plan your visit" primary), ticket stub with today's adult and child prices plus WhatsApp and Call
2. H-4 Hero video: poster first, muted, paused for reduced-motion and data-saver, mobile variant 3 MB or less (media paths come from content or public/media)
3. H-3 Quick highlights as a bento (Rides 2×2, Resort 1×2, Pool, Dining, Family 2×1)
4. Popular attractions: horizontal scroll-snap cards linking to detail pages
5. Tickets and packages teaser with ticket stubs, prices visible without clicking
6. Resort rooms (dusk surface, arch images, price per night)
7. Events and special offers, expiry-aware
8. Reviews as speech-bubble cards (consent only) and gallery teaser
9. Location and visit info: open/closed chip, hours, directions, contacts
10. FAQ teaser from content/faq.ts
11. H-5 Mount SkyScene once for the page. Reduced-motion gives static section colours.
12. Page-load sequence on Home only, 1.2 s or less, using the shared motion wrappers
13. Hero headline is the venue slogan from messages (placeholder in `[BRACKETS]`). No single-word colour accents.

## Acceptance criteria
- [ ] Reduced-motion shows poster image and static sky colours
- [ ] No section except the hero uses scroll fade-in
- [ ] Prices and hours come from content, not components
- [ ] Marigold primary CTA is the most prominent action on each screen
- [ ] Works in bn and en
- [ ] Mobile 360 px verified in Bangla
- [ ] npm run format:check && npm run lint && npm run typecheck && npm test && npm run i18n:check && npm run build pass
- [ ] npm run scope -- tasks/07-home.md passes

## Out of scope
- Header, footer, mobile action bar (locked layout)
- Editing SkyScene or any motion wrapper
- Structured data and analytics wiring beyond lib/analytics.ts events (lead, Wave 4)
