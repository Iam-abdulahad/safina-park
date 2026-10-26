# Task 04: Tickets & Packages page

## Goal
Visitors see adult/child prices and packages on one page and can ask about them on WhatsApp or by phone.

## Read first
- PRD.md §6.6, §7.5, §9 (Ticket, Package, Offer), §11
- Style.md §7.4 (ticket stub), §3.3 (price style), §8.1 (Tickets = golden)
- Golden reference: app/[locale]/(site)/attractions/page.tsx

## Allowed files (create or edit)
- app/[locale]/(site)/tickets/**
- components/sections/tickets/**
- messages/bn.json, messages/en.json (only keys under "tickets.")
- content/tickets.ts
- content/packages.ts

## Forbidden
Everything not listed above, including all LOCKED paths in AGENTS.md §7.

## Use these shared pieces (do not modify)
- components/ui: Button, Chip, Badge, TicketStub, Container, Section, Heading
- lib: whatsapp.ts, format.ts, seo.ts, analytics.ts
- content/settings.ts (read only)

## Generator commands to run
- npm run gen -- page tickets
- npm run gen -- section tickets <SectionName>

## Requirements
1. T-1 Price table for adult, child, ride and water-park tickets with conditions
2. T-2 Package cards for family, group, school, corporate and stay
3. T-3 Opening hours, holiday schedule and special offers sections
4. T-4 Every price block has "Ask on WhatsApp" and "Call the front desk"
5. T-5 Prices through lib/format.ts, Bangla numerals in bn
6. T-6 Offers hide automatically after `validUntil` (write a pure helper inside the tickets section folder and test it)
7. Featured ticket gets the Marigold stub, others the Mist stub
8. Packages without a price show "Request a quote" from content
9. Group package CTA uses the "Group package" WhatsApp template, ticket CTAs use the "Tickets" template, in both languages
10. Create content/tickets.ts and content/packages.ts placeholder data with stable ids, using `[BRACKETS]` for unverified values

## Acceptance criteria
- [ ] Ticket stubs use components/ui/TicketStub
- [ ] Expired offer test passes
- [ ] Holiday hours render from settings
- [ ] Works in bn and en
- [ ] Mobile 360 px verified in Bangla
- [ ] npm run format:check && npm run lint && npm run typecheck && npm test && npm run i18n:check && npm run build pass
- [ ] npm run scope -- tasks/04-tickets.md passes

## Out of scope
- Online purchase (v2)
- Stay package detail (task 03)
- Home page tickets teaser (task 07)
