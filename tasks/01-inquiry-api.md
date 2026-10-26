# Task 01: Inquiry API

## Goal
Room, event and general inquiry forms can send their data to one endpoint that validates it, blocks spam, and emails management.

## Read first
- PRD.md §12, §13.4
- AGENTS.md §5

## Allowed files (create or edit)
- app/api/inquiry/route.ts
- app/api/inquiry/route.test.ts

## Forbidden
Everything not listed above, including all LOCKED paths in AGENTS.md §7.

## Use these shared pieces (do not modify)
- lib: whatsapp.ts (only if you need number normalization)

## Generator commands to run
- none (this is a route handler, create it by hand)

## Requirements
1. POST /api/inquiry accepts JSON `{ type: 'room' | 'event' | 'general', locale: 'bn' | 'en', website: string, fields: object }`. `website` is the honeypot and must be empty.
2. Validate with Zod, defined inside route.ts. Fields per type:
   - room: name, phone, checkIn, checkOut, guests, roomTypeId, notes (optional)
   - event: name, phone, eventType, date, guestCount, notes (optional)
   - general: name, phone or email (at least one), message
3. Bangladeshi phone validation: `^(?:\+?88)?01[3-9]\d{8}$`.
4. Honeypot filled: return 200 and send nothing.
5. In-memory rate limit: 5 requests per IP per 10 minutes. Over the limit: 429.
6. Send email through the Resend REST API using `fetch` (no new dependency). Read `RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, `INQUIRY_FROM_EMAIL` from `process.env`. Never expose them to the client.
7. Responses: `{ ok: true }` or `{ ok: false, code: 'validation' | 'rate_limited' | 'delivery_failed', fieldErrors?: Record<string, string> }`. Use stable codes, not translated text, so each form can map them to bn and en messages.
8. Do not store inquiry data anywhere. Do not log personal data.
9. Tests: valid payload per type, invalid phone, honeypot, rate limit, delivery failure (mock fetch).

## Acceptance criteria
- [ ] All three types validate and send
- [ ] Honeypot, rate limit and invalid phone tests pass
- [ ] No secret appears in any client bundle
- [ ] npm run format:check && npm run lint && npm run typecheck && npm test && npm run i18n:check && npm run build pass
- [ ] npm run scope -- tasks/01-inquiry-api.md passes

## Out of scope
- Form UI (each feature builds its own form)
- CAPTCHA or Turnstile
- Database, booking, payment
