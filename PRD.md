# PRD — Park + Resort Website

> Product Requirements Document · v1.0 · October 2026
> Source: *Park + Resort Website Features* planning guide
> Companion file: `Style.md` (visual identity, motion, components)

Placeholders in `[BRACKETS]` (park name, prices, hours, phone) must be replaced with verified venue data before launch. Never publish unconfirmed prices, safety details, or policies.

---

## 1. Overview

### 1.1 Product summary
A premium, immersive, mobile-first **informational website** for an entertainment park and resort. It inspires families and groups, shows what there is to do and where to stay, makes ticket and room prices transparent, and turns interest into a **phone call, WhatsApp message, or inquiry** in as few taps as possible.

### 1.2 Direction (from the planning guide)
- Build an informational website, **not** a complex web application.
- Launch with **Option A** (prices + click-to-call + WhatsApp + Google Maps; no database, accounts, or payments).
- Architect so **Option B** (online booking and payments) can be added later without a rebuild.

### 1.3 Problem
Visitors choose a destination by feel first and logistics second. Most local park and resort sites fail on both: weak photography, buried prices, no clear way to ask a question, and poor mobile performance.

### 1.4 Product pillars
| Pillar | Meaning |
|---|---|
| **Eye-catching** | The first five seconds must make a visitor want to go. Strong visuals, one signature motion moment, zero clutter. |
| **Easy to plan** | Prices, hours, directions, and "what's right for my group" are always one tap away. |
| **Easy to ask** | Every page has a visible Call / WhatsApp action with context prefilled. |
| **Fast & light** | Smooth on mid-range Android over mobile data. Beauty never costs speed. |
| **Bangla + English** | Equal-quality language support, not an afterthought. |

---

## 2. Goals & Success Metrics

### 2.1 Business goals
1. Increase inquiries (calls, WhatsApp, forms) for tickets, rooms, packages, and events.
2. Build trust with real photos, clear policies, and genuine reviews.
3. Rank for local discovery ("park near [CITY]", "resort in [AREA]", Bangla equivalents).
4. Give staff a way to update prices, offers, and notices without a developer.

### 2.2 Measurable targets (first 90 days after launch)
| Metric | Target |
|---|---|
| Mobile Lighthouse Performance | ≥ 85 (stretch 90) |
| Largest Contentful Paint (4G mobile) | ≤ 2.5 s |
| Cumulative Layout Shift | ≤ 0.1 |
| Lighthouse Accessibility / SEO / Best Practices | ≥ 95 / ≥ 95 / ≥ 95 |
| Share of sessions with a CTA click (call, WhatsApp, form, map) | ≥ 15% |
| Homepage → Tickets or Stay page click-through | ≥ 35% |
| Bounce rate on mobile homepage | ≤ 55% |
| Top 3 Google local-pack for brand + city queries | Achieved within 90 days |

### 2.3 Non-goals (v1)
- Online payments, user accounts, or login.
- Real-time room availability or inventory sync.
- Native mobile apps.
- Loyalty programs or e-commerce for merchandise.

---

## 3. Audience & Personas

| Persona | Needs | Key actions |
|---|---|---|
| **Family planner** (parents, 28–45) | Safe, fun, easy day out; age/height rules; food; prices | View attractions, check ticket prices, WhatsApp question |
| **Weekend couple / small group** | Romantic or relaxed stay, room photos, rates | Browse rooms, inquire about availability |
| **Event organizer** (birthday, wedding, corporate, school) | Capacity, packages, custom quote | Fill event inquiry, WhatsApp group coordinator |
| **School / corporate trip lead** | Group rates, schedule, logistics | Request group package, call |
| **Visitor on the way** | Directions, hours, parking | Open map, tap-to-call |

**Device reality:** majority mobile, many on mid-range Android and variable 4G. Facebook/Instagram are common traffic sources. Many users prefer Bangla.

---

## 4. Scope

### 4.1 v1 — Option A: Informational
- Full marketing site (pages in §5).
- Prices displayed for tickets, rooms, and packages.
- Click-to-call and prefilled WhatsApp on every key section.
- Inquiry forms for rooms and events (email/WhatsApp delivery; no stored accounts).
- Embedded Google Maps and verified social links.
- Bangla / English.
- Lightweight CMS for prices, notices, offers.

### 4.2 v2 — Option B: Booking-enabled (future, architecture must allow it)
- Online ticket purchase and payment gateway integration.
- Room availability calendar and reservation management.
- Booking confirmations, cancellation policy handling, optional admin dashboard.

**Architecture rule:** ticket, room, and package data must live in structured content models (§9) with stable IDs, so a booking layer can attach later.

---

## 5. Information Architecture

### 5.1 Primary navigation
Keep it concise. The booking/inquiry action is always visible.

```
[Logo]  Park & Attractions · Resort & Stay · Tickets & Packages · Events & Offers · Gallery · Contact      [বাংলা | EN]  [Plan Your Visit]
```
Dining & Facilities is reached via the homepage, footer, and a "More" or sub-menu item if nav space is tight.

### 5.2 Sitemap
| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Inspire, highlight, convert |
| Park & Attractions | `/attractions` | Rides, activities, kids' zone, water park, picnic |
| Attraction detail | `/attractions/[slug]` | Single attraction: photos, rules, video |
| Resort & Stay | `/stay` | Room types overview, amenities, policies |
| Room detail | `/stay/[slug]` | Room type page with inquiry |
| Dining & Facilities | `/facilities` | Restaurants, pools, parking, prayer rooms, accessibility |
| Tickets & Packages | `/tickets` | Entry fees, packages, conditions |
| Events & Offers | `/events` | Celebrations, venues, seasonal offers |
| Gallery | `/gallery` | Photos and videos |
| Contact & Location | `/contact` | Map, directions, hours, forms |
| Visit Planner | `/plan` | Interest-based planner |
| Park Map | `/map` | Interactive map |
| Policies | `/policies` | Entry, stay, cancellation, safety, privacy |
| 404 | — | Friendly, with nav and WhatsApp |

All routes exist in both languages: `/bn/...` and `/en/...` (default decided in §17).

---

## 6. Functional Requirements

Priority: **P0** = launch-blocking · **P1** = important, launch if possible · **P2** = post-launch.

### 6.1 Global
| ID | Requirement | Priority |
|---|---|---|
| G-1 | Sticky header with logo, nav, language switch, and **Plan Your Visit** button; collapses to full-screen menu on mobile | P0 |
| G-2 | Persistent mobile action bar (bottom): **Call · WhatsApp · Directions** | P0 |
| G-3 | Language switch preserves the current page and scroll context | P0 |
| G-4 | Footer: contact info, hours, social links, policies, essential nav, copyright | P0 |
| G-5 | Skeleton/blur-up image loading; no layout jumps | P0 |
| G-6 | Cookie/analytics notice only if required by chosen analytics setup | P1 |
| G-7 | Announcement bar for closures, weather notices, offers (CMS-driven) | P1 |

### 6.2 Homepage (see §8 for section order)
| ID | Requirement | Priority |
|---|---|---|
| H-1 | Full-bleed hero with optimized video or image, name, slogan, location | P0 |
| H-2 | Two hero CTAs: **Explore Attractions** and **Plan Your Visit** | P0 |
| H-3 | Quick-highlight chips: Rides, Resort, Pool, Dining, Family fun | P0 |
| H-4 | Hero video: poster image, muted autoplay, paused under data-saver / reduced-motion, ≤ 3 MB mobile variant | P0 |
| H-5 | Signature scroll experience described in `Style.md` ("Day to Dusk") | P1 |

### 6.3 Attractions
| ID | Requirement | Priority |
|---|---|---|
| A-1 | Sections: rides, water attractions, kids' zone, adventure, picnic spots | P0 |
| A-2 | Attraction card: photo, name, short description, category, age/height rule, thrill level | P0 |
| A-3 | Category filter chips with animated, no-reload filtering | P0 |
| A-4 | "Popular" and "Seasonal" badges | P1 |
| A-5 | Detail page: gallery, short video, rules, safety notes, nearby facilities, related attractions | P0 |
| A-6 | Each detail page has a WhatsApp/Call CTA | P0 |

### 6.4 Resort & Stay
| ID | Requirement | Priority |
|---|---|---|
| R-1 | Room types: rooms, cottages, suites, family options | P0 |
| R-2 | Room card: photo carousel, capacity, bed type, size, key amenities, **price per night** | P0 |
| R-3 | Room detail page with gallery, full amenities, policies | P0 |
| R-4 | Check-in / check-out times and stay policies visible without scrolling far | P0 |
| R-5 | **Room inquiry flow**: dates, guests, room type, name, phone → WhatsApp prefill or form | P0 |
| R-6 | Stay packages (e.g., ticket + night) cross-linked from Tickets | P1 |
| R-7 | Availability calendar | P2 (v2) |

### 6.5 Facilities & Dining
| ID | Requirement | Priority |
|---|---|---|
| F-1 | Cards/sections for swimming pool or water park, restaurants, cafés, food courts | P0 |
| F-2 | Event halls, picnic zones, barbecue areas (only where they exist) | P0 |
| F-3 | Practical info: parking, prayer rooms, washrooms, accessibility, first-aid | P0 |
| F-4 | Food menus (browsable images or structured list) | P1 |
| F-5 | Opening hours per facility | P1 |

### 6.6 Tickets & Packages
| ID | Requirement | Priority |
|---|---|---|
| T-1 | Adult / child entry fees; ride or water-park prices; ticket conditions | P0 |
| T-2 | Packages: family, group, school, corporate, resort-stay | P0 |
| T-3 | Opening hours, holiday schedule, special offers | P0 |
| T-4 | Every price block has **Inquire on WhatsApp** and **Call** actions | P0 |
| T-5 | Prices in ৳ with correct Bangla numerals when in Bangla mode | P0 |
| T-6 | "Valid until" date on offers; expired offers auto-hide | P1 |
| T-7 | Online purchase | P2 (v2) |

### 6.7 Events & Celebrations
| ID | Requirement | Priority |
|---|---|---|
| E-1 | Event types: birthday, family gathering, wedding, reception, school trip, corporate outing | P0 |
| E-2 | Venue cards with capacity, photos, included services | P0 |
| E-3 | Event packages and indicative pricing (or "Request a quote") | P0 |
| E-4 | Event inquiry form: event type, date, guest count, contact, notes | P0 |
| E-5 | Upcoming events and seasonal promotions list | P1 |

### 6.8 Gallery
| ID | Requirement | Priority |
|---|---|---|
| GL-1 | Masonry or editorial grid of real photos, filterable by category (Park, Resort, Dining, Events, Visitors) | P0 |
| GL-2 | Fullscreen lightbox with swipe, keyboard, captions, and alt text | P0 |
| GL-3 | Short videos with poster frames; load on tap | P1 |
| GL-4 | Visitor photos only with permission | P1 |

### 6.9 Contact & Location
| ID | Requirement | Priority |
|---|---|---|
| C-1 | Google Maps embed (lazy loaded) and **Get directions** deep link | P0 |
| C-2 | Phone, WhatsApp, email, address, opening hours | P0 |
| C-3 | FAQ accordion (hours, tickets, children, food, parking, cancellations) | P0 |
| C-4 | General inquiry form with spam protection | P0 |
| C-5 | Verified social links | P0 |

### 6.10 Premium differentiators
| ID | Feature | Spec | Priority |
|---|---|---|---|
| X-1 | **Visit Planner** | Visitor picks interests (rides, swimming, dining, events, overnight stay), group type and size → result page with matching attractions, suggested package, hours, and a "Send this plan on WhatsApp" button | P1 |
| X-2 | **WhatsApp booking & inquiry** | Prefilled messages per context (§11) | P0 |
| X-3 | **Interactive park map** | Illustrated map with pins: attractions, washrooms, restaurants, entrances, parking, first-aid, prayer rooms; tap pin → card; filter by type | P1 |
| X-4 | **Immersive storytelling** | Large photography, short video, layered cards, scroll-triggered motion (see `Style.md`) | P0 |
| X-5 | **Trust & credibility** | Genuine testimonials with name/first name + date, real photos, clear policies, verified social | P0 |
| X-6 | **Bangla + English** | Full translation parity, quality Bangla typography, ৳ pricing | P0 |

### 6.11 Reviews & social proof
| ID | Requirement | Priority |
|---|---|---|
| S-1 | Review carousel with real quotes (consent obtained) | P0 |
| S-2 | Link to Google reviews / Facebook page | P1 |
| S-3 | Visitor photo wall (consented) | P2 |

---

## 7. Page Specifications (summary)

### 7.1 Home — `/`
Follows §8. Must contain: hero, highlights, popular attractions, tickets & packages teaser, resort rooms, events & offers, reviews & gallery, location & hours, FAQ, footer.

### 7.2 Park & Attractions — `/attractions`
Intro banner → category filter → attraction grid → seasonal strip → gallery teaser → CTA band.

### 7.3 Resort & Stay — `/stay`
Intro banner → room-type cards → amenities strip → policies (check-in/out, children, cancellation) → stay packages → inquiry CTA.

### 7.4 Dining & Facilities — `/facilities`
Dining highlights → menus → pool/water park → event halls & picnic → practical info grid (parking, prayer, washrooms, accessibility, first-aid).

### 7.5 Tickets & Packages — `/tickets`
Price table (adult/child/ride/water-park) → conditions → package cards → holiday hours → offers → inquiry actions.

### 7.6 Events & Offers — `/events`
Event types grid → venue capacity → packages → upcoming events/offers → inquiry form.

### 7.7 Gallery — `/gallery`
Category filter → grid → lightbox → videos.

### 7.8 Contact & Location — `/contact`
Map → directions → hours → phone/WhatsApp/email → form → FAQ → socials.

---

## 8. Homepage Structure

| # | Section | Content | Notes |
|---|---|---|---|
| 1 | Header & navigation | Logo, key pages, language switch, **Plan Your Visit** | Sticky, hides on scroll down, shows on scroll up |
| 2 | Hero | Large visual, headline, short line, two CTAs | Signature moment; see `Style.md` |
| 3 | Quick highlights | Attractions, resort stay, dining, family activities | Four large tappable tiles |
| 4 | Popular attractions | Photo cards → detail pages | Horizontal swipe on mobile |
| 5 | Tickets & packages | Transparent prices, family offers, inquiry actions | Price shown without clicking |
| 6 | Resort rooms | Photos, amenities, capacity, rates | Cards link to room pages |
| 7 | Events & special offers | Seasonal promos, event packages | Expiry-aware |
| 8 | Reviews & gallery | Real feedback, photos, short videos | Real content only |
| 9 | Location & visit info | Map, directions, hours, contacts, FAQs | Open/closed status badge |
| 10 | Footer | Contacts, socials, policies, essential nav | |

---

## 9. Content Model

Store content as structured data (CMS documents or typed JSON). Every entity has `id`, `slug`, `status` (draft/published), and bilingual fields `{ bn, en }`.

```ts
type Localized = { bn: string; en: string };

interface Attraction {
  id: string; slug: string;
  name: Localized; summary: Localized; description: Localized;
  category: 'ride' | 'water' | 'kids' | 'adventure' | 'picnic' | 'seasonal';
  thrill?: 1 | 2 | 3 | 4 | 5;
  minAge?: number; minHeightCm?: number; maxHeightCm?: number;
  seasonal?: { from: string; to: string };
  popular: boolean;
  images: Media[]; video?: Media;
  safetyNotes?: Localized;
  mapPinId?: string;
}

interface RoomType {
  id: string; slug: string;
  name: Localized; description: Localized;
  capacity: { adults: number; children: number };
  beds: Localized; sizeSqm?: number;
  amenities: string[];            // ids from Amenity list
  pricePerNightBdt: number;       // display price; confirm with venue
  priceNote?: Localized;          // e.g. weekday/weekend variation
  images: Media[];
  policies?: Localized;
}

interface Ticket {
  id: string; label: Localized;
  audience: 'adult' | 'child' | 'senior' | 'student' | 'group';
  priceBdt: number; conditions?: Localized;
  appliesTo: 'park-entry' | 'water-park' | 'ride' | 'combo';
}

interface Package {
  id: string; slug: string; name: Localized;
  type: 'family' | 'group' | 'school' | 'corporate' | 'stay';
  includes: Localized[]; priceBdt?: number; priceLabel?: Localized; // "Request a quote"
  validFrom?: string; validUntil?: string;
}

interface EventVenue {
  id: string; name: Localized; capacity: number;
  suitableFor: string[]; images: Media[]; services: Localized[];
}

interface Offer {
  id: string; title: Localized; details: Localized;
  validFrom: string; validUntil: string; image?: Media; cta?: 'whatsapp' | 'call' | 'link';
}

interface Facility {
  id: string; name: Localized; type: string; hours?: Localized; notes?: Localized;
  mapPinId?: string; images?: Media[];
}

interface Review {
  id: string; displayName: string; quote: Localized; rating?: number; date: string;
  source?: 'google' | 'facebook' | 'direct'; consentGiven: true;
}

interface SiteSettings {
  phone: string; whatsappNumber: string; email: string;
  address: Localized; mapsUrl: string; mapsEmbedUrl: string;
  openingHours: HoursSchedule; holidayHours?: HoursSchedule[];
  social: { facebook?: string; instagram?: string; youtube?: string; tiktok?: string };
  announcement?: { text: Localized; active: boolean };
}

interface Media {
  src: string; alt: Localized; width: number; height: number;
  blurDataUrl?: string; caption?: Localized;
}
```

Prices are numbers in BDT; formatting (৳, Bangla numerals, separators) is a display concern.

---

## 10. Bilingual Requirements (Bangla + English)

- Language switch in header and footer; selection remembered (cookie/localStorage) and reflected in the URL.
- All page content, buttons, form labels, errors, SEO titles/descriptions, and alt text exist in both languages.
- `hreflang` and `<html lang="bn|en">` set correctly.
- Currency displays as **৳**. In Bangla mode, show Bangla numerals (০–৯); in English mode, Western numerals. Use a proper font so ৳ never renders as a missing-glyph box.
- Bangla typography must be comfortable: larger line height (≥ 1.7), no letter-spacing, no faux bold/italic, and no all-caps styling. Test conjuncts (যুক্তাক্ষর) render correctly.
- Layouts must tolerate Bangla strings being longer or taller than English.
- Date and time display follow the locale.

---

## 11. WhatsApp & Call Integration

### 11.1 Rules
- Use `https://wa.me/<number-with-country-code>?text=<url-encoded message>`.
- Number format: international, digits only (e.g., `8801XXXXXXXXX`).
- Message language follows the site language.
- Every WhatsApp or call click fires an analytics event with its context.
- Click-to-call uses `tel:` links.

### 11.2 Prefilled message templates

| Context | English template |
|---|---|
| General | "Hello! I'd like to know more about [PARK_NAME]." |
| Tickets | "Hello! I'd like to ask about ticket prices for [N] adults and [N] children on [DATE]." |
| Room | "Hello! I'm interested in the [ROOM TYPE] for [N] guests, [CHECK-IN] to [CHECK-OUT]. Is it available?" |
| Group package | "Hello! We're a [school/corporate/family] group of [N]. Could you share group package details?" |
| Event | "Hello! I'd like to arrange a [EVENT TYPE] on [DATE] for about [N] guests." |
| Visit plan | "Hello! Here's my planned visit: [SELECTED INTERESTS / PACKAGE]. Can you help confirm?" |

Bangla versions of each template are required.

---

## 12. Forms

| Form | Fields | Delivery |
|---|---|---|
| Room inquiry | Name, phone, dates, guests, room type, notes | Email to management + WhatsApp option |
| Event inquiry | Name, phone, event type, date, guest count, notes | Same |
| General contact | Name, phone/email, message | Same |

Requirements: client + server validation, honeypot plus rate limiting (or CAPTCHA if abuse appears), clear success/error states in both languages, Bangladeshi phone number validation, no sensitive data stored beyond what email delivery requires, and a privacy note near each form.

---

## 13. Non-Functional Requirements

### 13.1 Performance
- Images in WebP/AVIF with responsive `srcset`; lazy load below the fold; explicit dimensions.
- Hero video: compressed (≤ 3 MB mobile, ≤ 8 MB desktop), no audio track, poster image, loads after first paint, disabled when `prefers-reduced-data` / Save-Data / `prefers-reduced-motion`.
- Fonts: subset Latin + Bengali, `font-display: swap`, preload display font only.
- JS budget: ≤ 170 KB gzipped initial route (excluding images/video). Heavy features (map, lightbox, planner) dynamically imported.
- Third-party scripts (analytics, maps) deferred.

### 13.2 SEO & local discovery
- Unique title and meta description per page and language.
- Open Graph and Twitter cards with attractive share images.
- Structured data: `LocalBusiness` / `AmusementPark`, `Hotel` / `LodgingBusiness`, `Event`, `FAQPage`, `Offer`.
- `sitemap.xml`, `robots.txt`, canonical URLs, `hreflang`.
- Accurate NAP (name, address, phone), hours, Google Business Profile link.
- Descriptive image file names and alt text.

### 13.3 Accessibility (WCAG 2.2 AA target)
- Full keyboard navigation with visible focus.
- Colour contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text/UI.
- Meaningful alt text; decorative images marked as such.
- `prefers-reduced-motion` fully respected (no parallax, no autoplay video, minimal transitions).
- Touch targets ≥ 44 × 44 px.
- Forms with labels, error association, and no colour-only status.
- Accordions, tabs, carousels, and lightbox follow ARIA patterns.

### 13.4 Security
- HTTPS everywhere with HSTS.
- Form validation, sanitization, spam protection, rate limiting.
- Security headers (CSP, X-Content-Type-Options, Referrer-Policy).
- No secrets in client bundles.

### 13.5 Analytics
Track: page views, language used, **call clicks**, **WhatsApp clicks (with context)**, form submissions, directions clicks, Visit Planner completions, ticket/package CTA clicks, gallery engagement, scroll depth on home. Use a privacy-conscious tool (e.g., Plausible/GA4) and build a simple conversion dashboard.

### 13.6 Browser/device support
Last 2 versions of Chrome, Safari, Firefox, Edge; Android 9+; iOS 15+. Responsive from 320 px to 2560 px.

---

## 14. Technical Architecture

### 14.1 Recommended stack
| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | SSR/SSG for SEO, image optimization, i18n routing, easy later API routes for booking |
| Styling | **Tailwind CSS** with design tokens from `Style.md` | Fast, consistent, small CSS |
| Motion | **Framer Motion** (UI transitions) + **GSAP ScrollTrigger** (signature scroll scene) | Smooth, controllable, reduced-motion aware |
| i18n | **next-intl** | Locale routing, ICU formatting for Bangla numerals/currency |
| Content | **Headless CMS (Sanity or Payload)** or typed JSON + Git for the very first launch | Staff can update prices/offers; swap path documented |
| Media | CMS-managed images + Next/Image; videos via Cloudflare Stream/Bunny or self-hosted MP4/WebM | Fast delivery |
| Forms | Next.js Route Handlers + Resend/Nodemailer + Turnstile/hCaptcha | No database needed |
| Maps | Google Maps embed (lazy) + custom SVG park map | Reliable directions + branded map |
| Analytics | Plausible or GA4 | Conversion events |
| Hosting | Vercel (or Netlify/VPS with Node) + CDN | Edge caching, previews |

### 14.2 Booking-ready design (for v2)
- Keep `Ticket`, `RoomType`, `Package` IDs stable and referenced by inquiry payloads.
- Isolate inquiry/booking logic in a `/lib/booking` module with a provider interface (`WhatsAppProvider` now; `GatewayProvider` later, e.g., SSLCommerz, bKash, Nagad).
- Reserve `/api/bookings`, `/api/availability` namespaces.
- Add a database (PostgreSQL/MongoDB) only when v2 starts.

### 14.3 Suggested folder structure
```
/app/[locale]/(site)/
  page.tsx                 # Home
  attractions/ [slug]/
  stay/ [slug]/
  facilities/ tickets/ events/ gallery/ contact/ plan/ map/ policies/
/components/ ui/ sections/ motion/ map/
/content/ (or CMS client)
/lib/ whatsapp.ts format.ts seo.ts analytics.ts booking/
/messages/ bn.json en.json
/public/ fonts/ media/ icons/
```

---

## 15. Content Workflow

1. Staff update prices, offers, notices, hours, and announcements in the CMS (or via a simple admin sheet in the earliest phase).
2. Changes publish without a developer; preview before publish.
3. Offers carry start/end dates and hide automatically when expired.
4. A launch **content checklist** (§17.2) must be signed off by the venue.

---

## 16. Milestones

| Phase | Deliverables | Rough time |
|---|---|---|
| 0. Discovery | Confirm questions in §17, collect photos/video, prices, hours, policies, logo | Week 1 |
| 1. Design | Style tokens, homepage design, key page designs (mobile first), motion prototypes | Weeks 1–2 |
| 2. Build core | Layout, i18n, content models, Home, Attractions, Stay, Tickets, Contact | Weeks 2–4 |
| 3. Build extras | Events, Gallery, Facilities, Visit Planner, Park Map, forms, analytics | Weeks 4–5 |
| 4. QA & polish | Performance, accessibility, SEO, device testing, Bangla review, content proofing | Week 6 |
| 5. Launch | DNS, HTTPS, Google Business Profile, Search Console, monitoring | Week 6–7 |
| 6. Post-launch | Conversion review, content updates, v2 booking scoping | Ongoing |

---

## 17. Open Questions & Assumptions

### 17.1 Decisions needed (from the guide's "final planning question")
1. **Will visitors book tickets and rooms online, or contact management?** *Assumed: contact management (Option A) for v1.*
2. Park/resort name, slogan, logo, and brand colours (if any exist)?
3. Default language: Bangla or English? *Assumed: Bangla-first on `/`, with English one tap away.*
4. Does the venue have professional photos/video? If not, a shoot is strongly recommended; authentic imagery is the #1 driver of the "eye-catching" goal.
5. Who updates content, and how often?
6. Exact attractions, room types, and facilities that exist (do not invent).
7. Peak seasons, closure days, and holiday schedules.
8. Preferred payment gateways if v2 proceeds.

### 17.2 Launch content checklist
- [ ] Verified ticket prices and conditions
- [ ] Verified room prices, capacity, check-in/out, policies
- [ ] Opening hours and holiday schedule
- [ ] Age/height/safety rules for each ride
- [ ] Accurate address, phone, WhatsApp, email, map pin
- [ ] Real photos and videos (with alt text and captions)
- [ ] Testimonials with consent
- [ ] Verified social links
- [ ] Privacy, cancellation, and safety policies
- [ ] Bangla copy reviewed by a native reader

---

## 18. Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Weak or stock imagery | Site feels generic, hurts trust | Plan a photo/video shoot; ban stock for facilities |
| Heavy animation/video slows phones | High bounce | Performance budgets, poster images, reduced-data fallbacks |
| Outdated prices or offers | Trust loss, disputes | CMS with expiry dates, owner responsibility |
| Bangla rendering issues | Poor readability | Proper fonts, early device testing |
| Inquiry spam | Staff overload | Honeypot, rate limit, Turnstile |
| Scope creep into booking | Delay | Hold v1 to Option A; keep v2 hooks only |

---

## 19. Acceptance Criteria (launch gate)

1. All P0 requirements implemented and verified on real iOS and Android phones.
2. Lighthouse mobile scores meet §2.2 on Home, Attractions, Stay, Tickets.
3. Every key page has a visible Call and WhatsApp action; prefilled messages work in both languages.
4. Bangla and English are complete with no placeholder text and no broken glyphs (including ৳).
5. Accessibility audit shows no critical issues; reduced-motion mode verified.
6. SEO basics verified: titles, descriptions, schema, sitemap, robots, hreflang, Google Business link.
7. Forms deliver to management and show proper success/error states.
8. Venue has confirmed all prices, hours, policies, and safety information in writing.
9. Staff can edit prices, offers, and announcements without a developer.
10. Design review confirms the visual identity, motion, and "eye-catching" bar defined in `Style.md`.
