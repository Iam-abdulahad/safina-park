# Task 02: Contact & Location page

## Goal
Visitors can find the park, see hours, open directions, read FAQs, and send an inquiry or message on WhatsApp.

## Read first
- PRD.md §6.9, §7.8, §11, §12
- Style.md §7.12 (forms), §7.15 (open/closed), §8.1 (Contact = morning)
- Golden reference: app/[locale]/(site)/attractions/page.tsx

## Allowed files (create or edit)
- app/[locale]/(site)/contact/**
- components/sections/contact/**
- messages/bn.json, messages/en.json (only keys under "contact.")
- content/faq.ts

## Forbidden
Everything not listed above, including all LOCKED paths in AGENTS.md §7.

## Use these shared pieces (do not modify)
- components/ui: Button, Chip, Badge, Container, Section, Heading
- lib: whatsapp.ts, format.ts, seo.ts, analytics.ts
- content/settings.ts (read only)
- POST /api/inquiry from task 01

## Generator commands to run
- npm run gen -- page contact
- npm run gen -- section contact <SectionName>
- npm run gen -- component contact <ComponentName>

## Requirements
1. C-1 Lazy loaded Google Maps embed (from settings.mapsEmbedUrl) and a "Get directions" button (settings.mapsUrl)
2. C-2 Phone, WhatsApp, email, address and opening hours from settings, with the open/closed chip (Asia/Dhaka time)
3. C-3 FAQ accordion (hours, tickets, children, food, parking, cancellations). Create `content/faq.ts` with typed bilingual items using the `Localized` type. Other tasks read this file.
4. C-4 General inquiry form posting `type: 'general'` to /api/inquiry, with honeypot field, labels, inline validation after blur, and success and error states in both languages
5. C-5 Social links from settings, shown only when set
6. Every WhatsApp and call click fires the matching event from lib/analytics.ts
7. Accordion follows the ARIA pattern with keyboard support
8. Page uses the fixed Morning sky stage using the same mechanism as the golden reference. If none exists, put the question in "Open questions".

## Acceptance criteria
- [ ] Map iframe loads lazily and has a title
- [ ] Form shows field errors like "Enter a phone number like 01XXXXXXXXX." in both languages
- [ ] FAQ items open and close by keyboard
- [ ] WhatsApp message uses the "General" template from PRD §11.2 in both languages
- [ ] Works in bn and en
- [ ] Mobile 360 px verified in Bangla
- [ ] npm run format:check && npm run lint && npm run typecheck && npm test && npm run i18n:check && npm run build pass
- [ ] npm run scope -- tasks/02-contact.md passes

## Out of scope
- The /api/inquiry route itself (task 01)
- Home page FAQ section (task 07 reads content/faq.ts)
- SEO structured data (lead, Wave 4)
