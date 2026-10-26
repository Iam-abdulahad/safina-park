# Task 08: Events & Offers page

## Goal
Organizers see event types, venues and packages, and can send an event inquiry or ask on WhatsApp.

## Read first
- PRD.md §6.7, §7.6, §9 (EventVenue, Offer), §11, §12
- Style.md §7.6 (dusk surfaces), §7.12 (forms), §8.1 (Events = dusk)
- Golden reference: app/[locale]/(site)/attractions/page.tsx

## Allowed files (create or edit)
- app/[locale]/(site)/events/**
- components/sections/events/**
- messages/bn.json, messages/en.json (only keys under "events.")
- content/events.ts

## Forbidden
Everything not listed above, including all LOCKED paths in AGENTS.md §7.

## Use these shared pieces (do not modify)
- components/ui: Button, Chip, Badge, TicketStub, ArchImage, Container, Section, Heading
- lib: whatsapp.ts, format.ts, seo.ts, analytics.ts
- content/settings.ts, content/packages.ts (read only)
- POST /api/inquiry from task 01

## Generator commands to run
- npm run gen -- page events
- npm run gen -- section events <SectionName>
- npm run gen -- component events <ComponentName>

## Requirements
1. E-1 Event types grid: birthday, family gathering, wedding, reception, school trip, corporate outing
2. E-2 Venue cards with capacity, photos and included services
3. E-3 Event packages with indicative pricing or "Request a quote"
4. E-4 Event inquiry form posting `type: 'event'` to /api/inquiry, plus a WhatsApp option using the "Event" template from PRD §11.2
5. E-5 Upcoming events and seasonal offers list, expired offers hidden automatically
6. Form has labels, honeypot, inline validation after blur, a privacy note, and bn/en success and error states
7. Offers show "Offer ends <date>" with the locale date format
8. Create content/events.ts placeholder data (venues, offers) with stable ids, using `[BRACKETS]` for unverified values

## Acceptance criteria
- [ ] Guest count and date fields reject invalid values with a fix-it message
- [ ] Expired offers do not render
- [ ] Works in bn and en
- [ ] Mobile 360 px verified in Bangla
- [ ] npm run format:check && npm run lint && npm run typecheck && npm test && npm run i18n:check && npm run build pass
- [ ] npm run scope -- tasks/08-events.md passes

## Out of scope
- The /api/inquiry route (task 01)
- Package content owned by task 04
