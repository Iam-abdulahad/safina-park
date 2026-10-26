# Style.md — Park + Resort Website

> Visual identity, motion, and component guide · v1.0 · October 2026
> Companion to `PRD.md`. Goal: **a site people screenshot and send to their family group chat.**

---

## 1. Design Concept: "Day to Dusk"

A day at the park has a shape: bright morning arrival, splashy midday, golden-hour glow, then a lantern-lit evening at the resort. The website *is* that day.

As the visitor scrolls the homepage, the whole page's atmosphere shifts, from fresh **morning sky** to **lagoon noon** to **golden hour** to a calm **dusk indigo** with warm lantern light at the resort and events sections. Nothing else on the page competes with this. It is the one memorable thing.

**Why this works**
- It tells the park + resort story (play by day, stay by night) without a word.
- It is cheap to build: a handful of CSS variables interpolated on scroll, no heavy assets.
- It makes the site instantly recognisable and different from template tourism sites.

**Spend boldness in one place.** The sky shift, the hero, and big photography carry the personality. Everything else stays disciplined, spacious, and fast.

### Design principles
1. **Photography first.** Real, saturated, joyful images are the main decoration. Interface chrome stays quiet around them.
2. **Playful, not childish.** Families, couples, and corporate guests all use this site. Fun shapes, grown-up typography.
3. **Tickets, wristbands, and height rulers.** Use the park's own vernacular as the visual language (see §7).
4. **One loud thing per screen.** A giant headline *or* a giant photo *or* a bold colour block, never all three fighting.
5. **Fast is beautiful.** If an effect costs frame rate on a mid-range Android phone, it is cut.
6. **Bangla is a first-class citizen.** Every layout is judged in Bangla first.

---

## 2. Colour

### 2.1 Core palette

| Token | Name | Hex | Role |
|---|---|---|---|
| `--c-ink` | Deep Ink | `#0E2530` | Primary text on light surfaces (never pure black) |
| `--c-lagoon` | Lagoon | `#0A5C7A` | Brand anchor; headers, noon sections, links |
| `--c-aqua` | Splash Aqua | `#19C2CF` | Water, highlights, active states |
| `--c-sun` | Marigold | `#FFB320` | Primary CTA, price highlights, sunburst moments |
| `--c-coral` | Hibiscus Coral | `#FF5C5C` | Secondary accent, badges, offers |
| `--c-leaf` | Canopy Green | `#16A05F` | Nature, picnic areas, success |
| `--c-mist` | Morning Mist | `#EEF9FB` | Default light page background |
| `--c-dusk` | Dusk Indigo | `#1C1747` | Night sections, footer |
| `--c-lantern` | Lantern Glow | `#FFD98C` | Warm light on dusk surfaces |
| `--c-white` | Clean White | `#FFFFFF` | Cards on tinted backgrounds, text on dark |

The accent family (Marigold, Coral, Aqua) is deliberately vivid, in the spirit of the bright colour of Bangladeshi rickshaw art and fairground signage, but it is balanced by generous Mist/White space and the deep Lagoon/Ink anchors so the result feels premium rather than loud.

### 2.2 The Day-to-Dusk sky scale
Used only for the **page background** and its decorative layers. Content cards stay readable on top.

| Stage | Section on Home | `--sky-top` | `--sky-bottom` | Text colour |
|---|---|---|---|---|
| Morning | Hero → Highlights | `#BDEBF5` | `#EEF9FB` | Ink |
| Noon | Attractions → Tickets | `#7FD8E3` | `#D8F3F6` | Ink |
| Golden hour | Offers → Reviews | `#FFD9A0` | `#FFEFD8` | Ink |
| Dusk | Resort rooms → Events → Location → Footer | `#2A2062` | `#1C1747` | White |

### 2.3 Usage rules
- **CTA = Marigold with Ink text.** Always. It is the only filled-yellow element, so it is the most visible thing on the page.
- **Coral** is for offers, "Popular", "New", and seasonal badges. Never for primary buttons.
- **Aqua** is for interactive/active states and water-themed decoration. Not for body text.
- **Lantern Glow** appears only on dusk surfaces (glows, highlights, small icons).
- Do not use gradients as decoration on cards. Gradients live in the sky background and on photo overlays only.
- Photo overlays for text legibility: `linear-gradient(to top, rgb(14 37 48 / 0.72), transparent 60%)`.

### 2.4 Contrast pairs (verify with a checker during build)
| Foreground | Background | Use |
|---|---|---|
| Ink `#0E2530` | Mist, White, Marigold, Aqua, Lantern | Body text, CTA label |
| White | Lagoon, Dusk, Ink | Text on dark |
| Lantern | Dusk | Accent text on dusk |
| Coral | Ink / Dusk | Badges on dark only |

**Never** place white text on Marigold, Aqua, Coral, or Lantern. Small coral text on light backgrounds is not allowed (use Ink text on a coral chip).

### 2.5 CSS variables

```css
:root {
  --c-ink: #0E2530;
  --c-lagoon: #0A5C7A;
  --c-aqua: #19C2CF;
  --c-sun: #FFB320;
  --c-coral: #FF5C5C;
  --c-leaf: #16A05F;
  --c-mist: #EEF9FB;
  --c-dusk: #1C1747;
  --c-lantern: #FFD98C;
  --c-white: #FFFFFF;

  /* driven by the scroll scene (see §8.1) */
  --sky-top: #BDEBF5;
  --sky-bottom: #EEF9FB;
  --on-sky: var(--c-ink);
}

body {
  background: linear-gradient(var(--sky-top), var(--sky-bottom)) fixed;
  color: var(--on-sky);
}
```

---

## 3. Typography

### 3.1 Typefaces

| Role | Latin | Bangla | Notes |
|---|---|---|---|
| **Display** (headlines, big numbers) | **Bricolage Grotesque** (variable; weight 600–800, optical size on) | **Anek Bangla** (variable; weight 600–800) | Characterful, friendly, confident. Not the default geometric sans. |
| **Text** (body, UI, forms) | **Figtree** (400, 500, 600) | **Hind Siliguri** (400, 500, 600) | Warm, highly legible at small sizes. |

Both Bangla fonts include the **৳** glyph and Bangla numerals. Test early; never allow a fallback to a font that shows a box for ৳.

Load via `next/font` with subsets `latin` and `bengali`, `display: swap`, preload only the display font's primary weight.

```css
:root {
  --font-display: 'Bricolage Grotesque', 'Anek Bangla', system-ui, sans-serif;
  --font-text: 'Figtree', 'Hind Siliguri', system-ui, sans-serif;
}
html[lang='bn'] {
  --font-display: 'Anek Bangla', 'Bricolage Grotesque', system-ui, sans-serif;
  --font-text: 'Hind Siliguri', 'Figtree', system-ui, sans-serif;
}
```

### 3.2 Type scale (fluid)

| Token | Size (mobile → desktop) | Line height | Weight | Use |
|---|---|---|---|---|
| `display-xl` | `clamp(2.75rem, 8vw, 6.5rem)` | 0.98 (bn: 1.2) | 800 | Hero headline only |
| `display-l` | `clamp(2.25rem, 5.5vw, 4.25rem)` | 1.02 (bn: 1.25) | 700 | Section headlines |
| `display-m` | `clamp(1.75rem, 3.5vw, 2.75rem)` | 1.1 (bn: 1.3) | 700 | Card titles, sub-sections |
| `title` | `1.25rem → 1.5rem` | 1.25 (bn: 1.45) | 600 | Component titles |
| `body-l` | `1.125rem → 1.25rem` | 1.6 (bn: 1.8) | 400 | Intros |
| `body` | `1rem → 1.0625rem` | 1.6 (bn: 1.75) | 400 | Default |
| `small` | `0.875rem` | 1.5 (bn: 1.7) | 500 | Captions, meta, helper text |
| `price` | `clamp(2rem, 4vw, 3.25rem)` | 1 | 800 | Ticket and room prices |

### 3.3 Typography rules
- **Sentence case** everywhere. No all-caps labels or eyebrows. Bangla has no case, so consistency matters.
- **No tracking** on Bangla; slight negative tracking (`-0.02em`) only on large Latin display text.
- Line length: **45–70 characters** for body copy. Max width `62ch` (Latin) / `56ch` (Bangla).
- Left-align text. Centre only short headlines on feature bands and CTA panels.
- No faux bold or italic in Bangla. Use real weights only.
- Headlines are set whole. **Do not colour or italicise a single word** for emphasis; vary scale or place a sentence on its own line instead.
- Don't add a small label above every heading. Use one only when it carries information (e.g., a date range, "Open today").
- Prices always use the `price` style, with ৳ at 60% of the number's size and baseline aligned.
- Numerals follow language: Bangla numerals (০–৯) in `bn`, Western in `en`.

---

## 4. Layout & Shape Language

### 4.1 Grid & spacing
- 12-column grid desktop, 4-column mobile. Max content width **1280 px**, hero and photo bands full-bleed.
- Spacing scale (px): `4, 8, 12, 16, 24, 32, 48, 72, 112, 160`.
- Section vertical padding: `72px` mobile, `112–160px` desktop. Generous space is part of the premium feel.
- Gutters: `16px` mobile, `32px` desktop. Safe-area padding on iOS.

### 4.2 Shapes (signature)
Use **different shapes for different roles**, not one radius on everything.

| Shape | Where | Spec |
|---|---|---|
| **Arch** (rounded-top gateway) | Hero media frame accents, room and facility images, gallery feature | `border-radius: 999px 999px 24px 24px` |
| **Ticket stub** (notched, perforated edge) | Ticket and package prices | Side notches via radial-gradient mask; dashed divider |
| **Pill** | Buttons, chips, filter tabs | `border-radius: 999px` |
| **Soft square** | Attraction cards, content cards | `border-radius: 20px` |
| **Wave divider** | Between sky stages | SVG wave, 2 layers with slight offset |

Cards are **not** all identical. Attraction cards are tall with big photos; ticket stubs are horizontal; room cards use arches; reviews are speech-bubble shaped. Vary hierarchy, vary form.

### 4.3 Homepage layout sketch (desktop)

```
┌──────────────────────────────────────────────────────────────┐
│ Logo   Attractions  Stay  Tickets  Events  Gallery  Contact  বাংলা|EN  [Plan Your Visit] │
├──────────────────────────────────────────────────────────────┤
│  FULL-BLEED HERO VIDEO / PHOTO                               │
│                                                              │
│  A whole day of                         ┌──── ticket stub ──┐│
│  fun, one stay                          │ Adult  ৳___       ││
│  away from home.                        │ Child  ৳___       ││
│                                         │ [WhatsApp] [Call] ││
│  [Explore Attractions] [Plan Your Visit]└───────────────────┘│
│  ~~~~~~~~~~~~~~~~ wave ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~│
├──────────────────────────────────────────────────────────────┤
│ Bento highlights: [Rides large][Resort][Pool][Dining][Family]│
├──────────────────────────────────────────────────────────────┤
│ Popular attractions  ←  tall photo cards, swipe  →           │
├──────────────────────────────────────────────────────────────┤
│ Tickets & packages: ticket stubs in a row                    │
├──────────────────────────────────────────────────────────────┤
│ Offers (golden hour)   Reviews                               │
├──────────────────────────────────────────────────────────────┤
│ DUSK: Resort rooms (arch images)  Events  Map & hours        │
├──────────────────────────────────────────────────────────────┤
│ Footer on Dusk Indigo                                        │
└──────────────────────────────────────────────────────────────┘
```

### 4.4 Alignment
Content left-aligned on a consistent left edge. Hero headline left, with the ticket-stub card offset to the lower right on desktop and stacked below on mobile. Bento tiles snap to the grid; avoid free-floating elements.

### 4.5 Responsive behaviour
| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | 320–639 | Single column, bottom action bar, swipe carousels |
| Tablet | 640–1023 | Two columns, bento collapses to 2×N |
| Laptop | 1024–1439 | Full layout |
| Large | 1440+ | Max width container; media scales, text does not |

Mobile first. Test at 360 px and 390 px wide in Bangla.

---

## 5. Imagery & Video

Authentic imagery is the single biggest factor in making this site eye-catching.

### 5.1 Direction
- **Real photos of the actual park and resort.** No stock for facilities or rooms.
- Bright, saturated, golden-hour and midday-sun photography. Children's and families' real joy: candid, in motion, mid-splash.
- Show scale: wide establishing shots, plus detail close-ups.
- Rooms: wide-angle, daylight, tidy, with a hero shot and 4–6 detail shots.
- Include people in diverse groups (families, couples, school groups); ensure permission.

### 5.2 Hero video
- 8–12 s seamless loop; cinematic shots of rides, water, resort at golden hour.
- Muted, no audio track, 1080p desktop ≤ 8 MB, 720p mobile ≤ 3 MB, WebM + MP4.
- Always has a poster image (same frame as video start) so there is no flash.
- Falls back to the poster when `prefers-reduced-motion`, data-saver, or slow connection.

### 5.3 Treatment
- Consistent colour grade: slightly warm highlights, saturated aqua water.
- Rounded or arch crops, never random shapes. Photo overlays only where text sits on top.
- Format: AVIF/WebP, `srcset`, blur placeholder, explicit aspect ratio.
- Aspect ratios: hero 16:9 (mobile 4:5), attraction card 4:5, room 3:4 arch, gallery mixed.

### 5.4 Illustration & icons
- Icons: a single outlined set (e.g., Lucide) at `1.75` stroke, rounded caps. Colour inherits text.
- A small custom illustration set (waves, sun, palm leaf, Ferris wheel line art) is used **sparingly**: wave dividers, the park map, empty states.
- No clip-art, no emoji in the interface.

---

## 6. Motion

### 6.1 Principles
1. Motion makes things clearer or more delightful, never slower.
2. **One orchestrated signature moment** (the sky scene, §8.1) plus **motion that answers the user's actions**.
3. Do **not** fade-and-slide every section on scroll or add hover lift to every card.
4. Everything has a reduced-motion fallback.

### 6.2 Tokens
| Token | Value |
|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` |
| `--dur-fast` | 150 ms |
| `--dur-base` | 280 ms |
| `--dur-slow` | 600 ms |
| `--dur-scene` | scroll-linked (scrubbed) |

### 6.3 Where motion is used
| Moment | Behaviour |
|---|---|
| **Page load (Home only)** | One staged sequence: hero media scales from 1.06 → 1, headline lines rise in sequence (80 ms stagger), ticket stub slides up. Total ≤ 1.2 s. |
| **Sky scene** | Scroll-scrubbed background colour shift (§8.1). |
| **Wave dividers** | Slow horizontal drift (40 s loop, CSS transform only); paused off-screen. |
| **Buttons** | Press scale 0.97; Marigold CTA gets a soft shimmer once on first view only. |
| **Filter chips** | Cards reflow with a layout animation (≤ 280 ms). |
| **Cards (attractions, rooms)** | Photo zooms 1.0 → 1.04 on hover/focus only (desktop). No lift. |
| **Carousels** | Native scroll-snap with momentum; arrows on desktop. |
| **Accordion / FAQ** | Height + icon rotate, 280 ms. |
| **Lightbox** | Shared-element transition from thumbnail; swipe to dismiss. |
| **Height ruler** | Marker slides to the minimum height once when the card enters view. |
| **Map pins** | Pop-in on filter change; selected pin pulses once. |
| **Number prices** | No counting animation. Prices must be instantly readable. |

### 6.4 Performance rules
- Animate only `transform` and `opacity` (and CSS variables for the sky scene, applied at the root).
- Use `will-change` sparingly and remove after animation.
- Pause video and animations when off-screen (IntersectionObserver).
- Keep long tasks < 50 ms on a mid-range Android test device.

### 6.5 Reduced motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
  video[autoplay] { display: none; }           /* show the poster instead */
}
```
The sky scene becomes **static section-based colours** (no scrubbing); wave drift stops; hero shows the poster image.

---

## 7. Components

### 7.1 Buttons
| Type | Style | Use |
|---|---|---|
| **Primary** | Marigold bg, Ink text, pill, height 52 px, weight 600 | Plan Your Visit, Inquire, Book |
| **Secondary** | Transparent, 2 px Ink border (White on dark), pill | Explore Attractions, Learn more |
| **WhatsApp** | `#25D366` bg, Ink text, WhatsApp glyph | WhatsApp actions only |
| **Call** | Lagoon bg, White text, phone glyph | Call actions |
| **Text link** | Lagoon, underlined, 2 px underline offset 4 px | Inline links |

Button labels say exactly what happens ("Ask on WhatsApp", "Call the front desk", "See ticket prices"). No trailing arrows by default. Focus ring: 3 px Lagoon outer ring with 2 px White gap (invert on dark).

### 7.2 Header
- Transparent over hero, becomes White/Mist with blur and subtle shadow after 80 px.
- Hides on scroll down, reappears on scroll up.
- **Plan Your Visit** is a Marigold pill in the header on desktop; on mobile it lives in the menu and in the bottom bar.
- Mobile menu: full-screen Dusk panel, large display-m links, language switch at top.

### 7.3 Mobile action bar (bottom, fixed)
Three equal buttons: **Call · WhatsApp · Directions**. White pill container with blur, 12 px inset, 16 px radius, safe-area padding. Hidden while the keyboard is open.

### 7.4 Ticket stub (price component, signature)
- Horizontal card, white, with circular notches on both sides at the 70% mark and a dashed vertical perforation.
- Left: ticket name and conditions. Right stub: price in `price` style, with ৳.
- Featured ticket (e.g., Family) gets a Marigold stub; others a Mist stub.
- Beneath: **Ask on WhatsApp** and **Call** actions.
- A small coral "Offer" badge for discounted items with `valid until` date.

```
┌────────────────────────┬┈┈┈┈┬──────────┐
│ Family day pass        ┊    ┊  ৳ 000   │
│ 2 adults + 2 children  ┊    ┊  per group│
└────────────────────────┴┈┈┈┈┴──────────┘
```

### 7.5 Attraction card
- Portrait 4:5 photo with soft-square corners, title and one-line description below the image (not over it).
- Top-left badges: Popular (Coral), Seasonal (Aqua).
- **Height ruler** (signature): a thin vertical ruler on the card's right edge with a marker at the minimum height and a small label ("Min 110 cm"). If there is no height rule, show an age chip instead.
- Thrill level shown as 1–5 filled droplets (water drops), with a text equivalent for screen readers.
- Entire card is one link; a clear focus ring.

### 7.6 Room card
- Arch-cropped photo carousel (3:4), dots below.
- Title, capacity chips (people icon + number), 3 key amenities as icon + text.
- **Price per night** in `price` style, "per night" in small text.
- Two actions: **Check availability** (WhatsApp prefill) and **View room**.
- On the dusk section, the card is Lantern-tinted glass: `rgb(255 255 255 / 0.08)` bg, 1 px `rgb(255 217 140 / 0.35)` border, White text.

### 7.7 Filter chips
Pill, Mist bg with 1 px Lagoon-tinted border; selected = Lagoon bg + White text. Horizontal scroll on mobile with edge fade; never wraps to 3 rows.

### 7.8 Bento highlights
Five tiles: Rides (2×2), Resort (1×2), Pool (1×1), Dining (1×1), Family (2×1). Tiles are photo-led with a short label and a corner icon. Tiles scale on hover/focus (1.02) only on pointer devices.

### 7.9 Reviews
Speech-bubble cards (rounded with a small tail), first name + date, optional source icon. 3 visible on desktop, swipe on mobile. Real reviews only.

### 7.10 Gallery
Masonry with mixed aspect ratios, category filter chips, soft-square corners at 16 px. Lightbox shows caption, previous/next, close; swipe and keyboard supported.

### 7.11 Map
- Custom illustrated SVG park map in Mist/Aqua/Leaf with the sun-and-wave motif.
- Pins: one colour per type (rides Coral, water Aqua, food Marigold, facilities Lagoon, parking Ink). Icon inside each pin; legend always visible.
- Tap pin → bottom sheet (mobile) / popover (desktop) with photo, name, short description, link.
- Google Maps embed is separate, on Contact, with a clear **Get directions** button.

### 7.12 Forms
- Labels above inputs, 52 px inputs, 12 px radius, 1.5 px Lagoon-tint border, Aqua focus ring.
- Inline validation after blur; error text in Ink with a Coral left bar and icon (never colour alone).
- Date and guest pickers are large, touch-friendly steppers.
- Success state: a short confirmation with the next step ("We'll reply on WhatsApp within [X] hours").

### 7.13 Badges
Small pill, 12–13 px text, weight 600: **Popular** (Coral bg, Ink), **New** (Aqua bg, Ink), **Seasonal** (Lantern bg, Ink), **Open today** (Leaf bg, White text on dark leaf `#0F7A48` for contrast).

### 7.14 Footer
Dusk Indigo, White text, Lantern accents. Large display-m phone number and WhatsApp link at the top, then four columns (Visit, Stay, Explore, Policies), socials, language switch, small print. A faint line-art skyline of the park's rides along the top edge.

### 7.15 Open/closed status
A small live chip near hours: "Open today until 7:00 pm" (Leaf) or "Closed now, opens tomorrow at 9:00 am" (Ink on Mist). Time-zone aware (Asia/Dhaka).

---

## 8. Signature Experiences

### 8.1 Day-to-Dusk scroll scene (homepage)
**What the visitor sees:** as they scroll, the page background glides from morning to dusk. Wave dividers between sections tint to match. At the dusk stage, soft lantern glows and a few twinkling dots appear behind the resort cards.

**How it works**
- Each section has `data-sky="morning|noon|golden|dusk"`.
- GSAP ScrollTrigger scrubs `--sky-top`, `--sky-bottom`, and `--on-sky` between the stage values in §2.2.
- Cards sit on White/glass surfaces so text contrast never depends on the sky.

```ts
// /components/motion/SkyScene.tsx (sketch)
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const stages = {
  morning: { top: '#BDEBF5', bottom: '#EEF9FB', on: '#0E2530' },
  noon:    { top: '#7FD8E3', bottom: '#D8F3F6', on: '#0E2530' },
  golden:  { top: '#FFD9A0', bottom: '#FFEFD8', on: '#0E2530' },
  dusk:    { top: '#2A2062', bottom: '#1C1747', on: '#FFFFFF' },
};

export function initSkyScene(root: HTMLElement) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return; // static fallback
  const sections = gsap.utils.toArray<HTMLElement>('[data-sky]');
  sections.forEach((el, i) => {
    const next = sections[i + 1];
    if (!next) return;
    const a = stages[el.dataset.sky as keyof typeof stages];
    const b = stages[next.dataset.sky as keyof typeof stages];
    gsap.fromTo(root,
      { '--sky-top': a.top, '--sky-bottom': a.bottom, '--on-sky': a.on },
      { '--sky-top': b.top, '--sky-bottom': b.bottom, '--on-sky': b.on,
        ease: 'none',
        scrollTrigger: { trigger: next, start: 'top 85%', end: 'top 35%', scrub: true } });
  });
}
```

**Rules:** only 4 stages; no more than one scene on the whole site; subpages use a single fixed stage (Attractions = noon, Tickets = golden, Stay and Events = dusk, Contact = morning).

### 8.2 Hero
- Full-bleed video with a gentle bottom gradient for legibility and a wave divider into the page.
- Headline in `display-xl`, left-aligned, 2–3 short lines, written as plain sentences (see §9).
- Ticket stub card with today's adult/child prices, WhatsApp, and Call; placed lower right on desktop, below the CTAs on mobile.
- Two CTAs: **Explore Attractions** (Secondary on dark: White outline) and **Plan Your Visit** (Primary).
- A soft "scroll" cue only on desktop, and only once.

### 8.3 Visit Planner
A friendly 3-step flow, large tappable tiles with icons: **Who's coming** (family, friends, school, corporate) → **What do you want** (rides, swimming, dining, events, overnight stay; multi-select) → **Your plan** (matching attractions, a suggested package, hours, and **Send this plan on WhatsApp**). Progress indicated by a simple dot trail. This is a sequence, so step numbers are appropriate here.

### 8.4 Height ruler detail
A tiny vertical ruler with tick marks on the attraction card. When the card first enters the viewport, a marker slides up to the minimum height. It communicates a real rule in a playful, glanceable way.

---

## 9. Voice & Microcopy

**Tone:** warm, clear, welcoming, and confident. Plain verbs, short sentences, sentence case. Bangla copy is written natively, not word-for-word translated.

| Element | Example (English) | Note |
|---|---|---|
| Hero headline | "A day of fun. A night to stay." | Short, human, no slogan clichés. Final slogan comes from the venue. |
| Primary CTA | "Plan your visit" | Same wording everywhere |
| Secondary CTA | "Explore attractions" | |
| WhatsApp CTA | "Ask on WhatsApp" | Not "Contact us" |
| Call CTA | "Call the front desk" | |
| Ticket helper | "Prices are per person. Children under [X] years enter free." | Fill from verified rules |
| Ride rule | "Minimum height 110 cm" | Always specific |
| Empty gallery filter | "No photos here yet. Try another category." | Directional |
| Form error | "Enter a phone number like 01XXXXXXXXX." | Says how to fix it |
| Form success | "Thanks. We'll reply on WhatsApp soon." | Sets expectations |
| Offer expiry | "Offer ends 30 November" | Date-specific |

Avoid: exclamation-mark overload, "unforgettable", "world-class", "paradise", and all superlatives the venue can't prove.

---

## 10. Accessibility Standards (design-level)

- Body text ≥ 16 px (Bangla ≥ 17 px effective), line-height per §3.2.
- All interactive targets ≥ 44 × 44 px; spacing ≥ 8 px.
- Visible focus on every interactive element; never remove outlines.
- Text on photos always sits on an overlay or a solid panel with ≥ 4.5:1 contrast.
- Never convey meaning by colour alone (badges include text; map pins include icons; errors include icons).
- Carousels, accordions, and lightboxes follow ARIA patterns with keyboard support.
- Respect `prefers-reduced-motion`, `prefers-contrast`, and `prefers-reduced-data`.
- Alt text describes what the photo shows for visitors, in both languages.

---

## 11. Tailwind Token Sketch

```ts
// tailwind.config.ts (excerpt)
export default {
  theme: {
    extend: {
      colors: {
        ink: '#0E2530', lagoon: '#0A5C7A', aqua: '#19C2CF',
        sun: '#FFB320', coral: '#FF5C5C', leaf: '#16A05F',
        mist: '#EEF9FB', dusk: '#1C1747', lantern: '#FFD98C',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        text: ['var(--font-text)'],
      },
      borderRadius: { card: '20px', arch: '999px 999px 24px 24px' },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      maxWidth: { content: '1280px', prose: '62ch' },
    },
  },
};
```

---

## 12. Do & Don't

| Do | Don't |
|---|---|
| Lead with big, real, joyful photography | Fill the page with stock images and icons |
| Let the sky scene be the one big moment | Add parallax, floating blobs, and cursor effects everywhere |
| Use Marigold only for the main action | Use five different button colours |
| Vary component shapes by role (arch, stub, pill) | Put every item in identical rounded cards with the same shadow |
| Show prices in plain sight, in ৳ | Hide prices behind clicks or forms |
| Write natively in Bangla and test it first | Machine-translate and hope the layout holds |
| Keep motion on `transform` and `opacity` | Animate layout properties on scroll |
| Use sentence case and clear verbs | Use all-caps labels, tracked-out eyebrows, or single-word colour accents in headlines |
| Provide static fallbacks for reduced motion and data-saver | Autoplay heavy video for everyone |

---

## 13. Design QA Checklist

- [ ] Hero loads fast and looks great on a 360 px Android phone on 4G
- [ ] Sky scene runs at 60 fps on a mid-range device; static fallback verified
- [ ] Every text/background pair meets contrast requirements, including dusk sections
- [ ] Bangla headlines, body, numerals, and ৳ render correctly with no clipped ascenders or conjuncts
- [ ] Ticket stubs, height rulers, and arches render crisply at all breakpoints
- [ ] CTA (Marigold) is the most prominent action on each screen
- [ ] Call, WhatsApp, and Directions are reachable in one tap on every page
- [ ] All images are real, optimised, with alt text and no layout shift
- [ ] Reduced-motion, reduced-data, and keyboard-only paths work end to end
- [ ] Final screenshot test: does the homepage look distinctive and joyful in a single glance?
