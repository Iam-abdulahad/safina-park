# Task 03: Resort & Stay pages

## Goal
Visitors browse room types with prices, open a room page, and ask about availability on WhatsApp or through a form.

## Read first
- PRD.md §6.4, §7.3, §9 (RoomType), §11, §12
- Style.md §4.2 (arch), §7.6 (room card), §8.1 (Stay = dusk)
- Golden reference: app/[locale]/(site)/attractions/page.tsx

## Allowed files (create or edit)
- app/[locale]/(site)/stay/**
- components/sections/stay/**
- messages/bn.json, messages/en.json (only keys under "stay.")
- content/rooms.ts

## Forbidden
Everything not listed above, including all LOCKED paths in AGENTS.md §7.

## Use these shared pieces (do not modify)
- components/ui: Button, Chip, Badge, ArchImage, Container, Section, Heading
- lib: whatsapp.ts, format.ts, seo.ts, analytics.ts
- content/settings.ts, content/packages.ts (read only)
- POST /api/inquiry from task 01

## Generator commands to run
- npm run gen -- page stay
- npm run gen -- page stay/[slug]   (if the generator cannot nest, ask in Open questions)
- npm run gen -- section stay <SectionName>
- npm run gen -- component stay <ComponentName>

## Requirements
1. R-1 and R-2 Room card on /stay: arch photo carousel (3:4) with dots, capacity chips, 3 key amenities, price per night in the price style, actions "Check availability" (WhatsApp prefill) and "View room"
2. R-3 Room detail page /stay/[slug] with gallery, full amenities, policies, `generateStaticParams`, and `notFound()` for unknown slugs
3. R-4 Check-in and check-out times and stay policies near the top of both pages
4. R-5 Room inquiry form (client component) with name, phone, dates, guests, room type, notes. It posts `type: 'room'` to /api/inquiry and also offers a WhatsApp button using the "Room" template from PRD §11.2
5. R-6 Stay packages section showing packages of type `stay` from content/packages.ts
6. Amenities strip, and a policies block (check-in/out, children, cancellation) from content
7. Dusk surface styling for room cards per Style.md §7.6
8. Prices only through lib/format.ts, Bangla numerals in bn
9. Carousel uses native scroll-snap and has keyboard and screen reader support
10. Create content/rooms.ts placeholder data with stable ids, using `[BRACKETS]` for unverified values

## Acceptance criteria
- [ ] Unknown room slug shows the 404 page
- [ ] Date picker blocks check-out before check-in
- [ ] WhatsApp message contains room type, guests and dates in the site language
- [ ] No price or policy text is hardcoded in a component
- [ ] Works in bn and en
- [ ] Mobile 360 px verified in Bangla
- [ ] npm run format:check && npm run lint && npm run typecheck && npm test && npm run i18n:check && npm run build pass
- [ ] npm run scope -- tasks/03-stay.md passes

## Out of scope
- Availability calendar (v2)
- Ticket and package pages (task 04)
- Online booking or payment
