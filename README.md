# Safina Park & Resort

A mobile-first website for Safina Park & Resort in Godagari, Rajshahi, built with Next.js 14 App Router, React and Tailwind CSS.

## Design plan

- **Palette:** lagoon `#0D6872`, leafy green `#356B4A`, ticket yellow `#F7C948`, warm coral `#E76F51`, pale sky `#E9F4F2`, deep ink `#173B3A`.
- **Type:** Hind Siliguri for English and Bangla-friendly body copy; Fredoka for distinctive, playful headings.
- **Layout concept:** a perforated admission-ticket hero introduces the park, followed by quick actions, rides, picnic and resort, group packages, gallery, FAQ, location and contact.
- **Home wireframe:** `Hours + location + phones -> Ticket hero + Call/WhatsApp -> Quick links -> Rides -> Picnic/stay -> Packages -> Gallery -> FAQ -> Map/contact -> Footer`
- **Review:** the original starter relied on gradients and a narrow set of pages. The redesign gives the hero one memorable ticket motif, uses calmer surfaces elsewhere, adds the requested visitor routes, keeps the mobile booking bar available, and avoids unverified prices, statistics and claims.

## Run locally

Requirements: Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Create a production build with `npm run build`, then run it with `npm start`.

## Pages

- `/` - Home
- `/rides` and `/rides/[slug]` - Ride list and details for Nagordola, Train, Paddle Boat, Swimming Pool, Horror House and Plane Ride
- `/stay` - Cottage and hotel enquiries
- `/picnic-events` - Picnics, seminars, restaurant and corporate events
- `/packages` - Student, Couple, Family and Corporate packages (quote by enquiry)
- `/gallery` - Photo gallery and YouTube link
- `/blog` and `/blog/[slug]` - Visitor guides
- `/contact` - Contact information, map and WhatsApp enquiry form

## Editable content and contact settings

Update the content collections in [`lib/data.js`](./lib/data.js): phone numbers, opening hours, WhatsApp destination, navigation, rides, packages, gallery items, visitor guides and FAQs. Page-specific SEO metadata is defined alongside each route.

The contact details currently configured:

- Park: 8:30 AM to 6:30 PM daily
- Resort: 24/7
- Phone: 01330002333 and 01330002555
- Location: Godagari, Rajshahi, Bangladesh

The WhatsApp link is configured to use the first phone number, normalized to Bangladesh international format (`8801330002333`). Verify that this number accepts WhatsApp bookings before launch.

## Images and production content

Image URLs are illustrative Unsplash placeholders, not verified Safina Park photos. Replace them in `lib/data.js` and the homepage with authorized, optimized WebP/AVIF park photography. `next/image` is used for displayed images and is configured to optimize `images.unsplash.com`; update `next.config.mjs` if the image host changes. Gallery copy explicitly discloses that its current images are illustrative.

Prices, room details, ride availability, package inclusions and group terms are not confirmed here. The site invites visitors to request a quote rather than inventing this information. No payment gateway or online ticket purchase flow is configured.

## SEO and redirects

The site includes route metadata, shared Open Graph defaults, TouristAttraction/LocalBusiness JSON-LD on the homepage, and generated `/sitemap.xml` and `/robots.txt` routes. Permanent redirects for known legacy paths are in `next.config.mjs`: `/all-rides`, `/cottage-hotel`, `/picnic-facility` and `/ticket`. `/packages` remains the same canonical URL and therefore does not redirect to itself.

The English interface is the default. The language control currently prepares the document language and translated navigation labels for Bangla; full Bangla page copy should be added before advertising the site as fully bilingual.
# safina-park
