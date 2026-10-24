import Image from "next/image";
import Link from "next/link";
import RideCard from "@/components/RideCard";
import BookingLinks from "@/components/BookingLinks";
import { contact, faqs, galleryItems, packages, rides } from "@/lib/data";

const attractionSchema = {
  "@context": "https://schema.org",
  "@type": ["TouristAttraction", "LocalBusiness"],
  name: "Safina Park & Resort",
  description: "An amusement park, picnic spot and resort in Godagari, Rajshahi, Bangladesh.",
  url: "https://safinapark.com",
  telephone: contact.phones.map((phone) => `+88${phone}`),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Godagari",
    addressRegion: "Rajshahi",
    addressCountry: "BD",
  },
  openingHours: "Mo-Su 08:30-18:30",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Resort", value: true },
    { "@type": "LocationFeatureSpecification", name: "Picnic and events", value: true },
  ],
};

const quickLinks = [
  { title: "Tickets & rides", description: "Find a ride for everyone.", href: "/rides", mark: "01" },
  { title: "Stay", description: "Ask about cottage and hotel stays.", href: "/stay", mark: "02" },
  { title: "Group packages", description: "Plan a day for your group.", href: "/packages", mark: "03" },
  { title: "Restaurant", description: "Ask us about food options.", href: "/picnic-events#restaurant", mark: "04" },
];

export default function Home() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionSchema).replace(/</g, "\\u003c") }} />

      <section className="wrap pb-10 pt-8 sm:pt-12 md:pb-16 md:pt-14">
        <div className="ticket-entry relative grid overflow-hidden rounded-[2rem] bg-lagoon text-white shadow-soft md:min-h-[500px] md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative order-2 min-h-[260px] bg-sky md:order-2 md:min-h-full">
            <Image src="/park-illustration.svg" alt="Illustration of a Ferris wheel, rides and trees at an amusement park" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/15 to-transparent md:bg-gradient-to-r md:from-lagoon/10 md:to-transparent" />
            <p className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-ink md:bottom-8 md:left-8">Good days start here</p>
          </div>
          <div className="relative order-1 flex flex-col justify-center px-6 py-9 sm:px-10 md:order-1 md:px-12 md:py-14">
            <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-ticket" /> Godagari, Rajshahi</p>
            <h1 className="max-w-xl font-head text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">Make a day of it.</h1>
            <p className="mt-5 max-w-lg text-lg leading-7 text-white/85">Bring your favourite people for rides, a picnic, or a little time away at Safina Park & Resort.</p>
            <p className="mt-5 text-sm font-semibold text-white/90">Park: {contact.parkHours} <span className="mx-1 text-white/50">·</span> Resort: {contact.resortHours}</p>
            <div className="mt-7"><BookingLinks message="Hello Safina Park, I would like to ask about tickets and booking." /></div>
            <span aria-hidden="true" className="pointer-events-none absolute -right-7 top-1/2 hidden h-14 w-14 -translate-y-1/2 rounded-full bg-sky md:block" />
          </div>
          <div aria-hidden="true" className="absolute bottom-0 left-1/2 top-0 hidden border-l-2 border-dashed border-white/35 md:block" />
        </div>
      </section>

      <section id="tickets" className="wrap pb-8 md:pb-14" aria-label="Quick links">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href} className="group rounded-2xl border border-ink/10 bg-white p-4 transition-colors hover:border-lagoon/35 hover:bg-white sm:p-5">
              <span className="text-xs font-semibold text-coral">{item.mark}</span>
              <h2 className="mt-2 font-head text-lg font-semibold text-ink">{item.title}<span aria-hidden="true" className="ml-2 text-lagoon transition-transform group-hover:translate-x-1">→</span></h2>
              <p className="mt-1 text-sm leading-5 text-ink/70">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section-space">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="eyebrow">Pick your kind of fun</p><h2 className="h2">Rides for a good day out</h2></div>
          <Link href="/rides" className="font-semibold text-lagoon underline underline-offset-4 hover:text-coral">See all rides <span aria-hidden="true">→</span></Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rides.slice(0, 3).map((ride) => <RideCard key={ride.slug} ride={ride} />)}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-sky">
            <Image src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80" alt="A quiet, leafy park path for a relaxing day outdoors" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="md:py-8">
            <p className="eyebrow">Stay a little longer</p>
            <h2 className="h2">Room for a picnic, a gathering or an overnight stay.</h2>
            <p className="mt-5 max-w-xl leading-7 text-ink/75">Bring your class, office or family together. Ask our team about picnic spots, food, the seminar hall, cottages and hotel accommodation.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/picnic-events" className="btn">Picnic & events</Link>
              <Link href="/stay" className="btn-secondary">Explore stays</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section-space">
        <div className="max-w-2xl">
          <p className="eyebrow">Made for your group</p>
          <h2 className="h2">Tell us who’s coming.</h2>
          <p className="mt-4 leading-7 text-ink/75">Every outing looks a little different. Share your group size and plans, and we’ll help you figure out the details. Packages are quoted on request.</p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((item, index) => (
            <Link key={item.id} href={`/packages#${item.id}`} className={`rounded-3xl p-6 ${index === 1 ? "bg-ticket" : index === 3 ? "bg-lagoon text-white" : "bg-white shadow-soft"}`}>
              <span className={`text-sm font-semibold ${index === 3 ? "text-white/75" : "text-coral"}`}>0{index + 1}</span>
              <h3 className="mt-4 font-head text-2xl font-semibold">{item.name}</h3>
              <p className={`mt-2 min-h-12 text-sm leading-5 ${index === 3 ? "text-white/80" : "text-ink/70"}`}>{item.for}</p>
              <span className={`mt-5 inline-block text-sm font-semibold ${index === 3 ? "text-ticket" : "text-lagoon"}`}>Ask for a quote →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-lagoon py-16 text-white md:py-24">
        <div className="wrap">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="eyebrow !text-ticket">A look around</p><h2 className="h2">Little moments at Safina</h2></div>
            <Link href="/gallery" className="font-semibold text-white underline underline-offset-4 hover:text-ticket">Visit the gallery <span aria-hidden="true">→</span></Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryItems.slice(0, 4).map((item, index) => (
              <Link href="/gallery" key={item.title} className={`group relative overflow-hidden rounded-2xl bg-white/10 ${index === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
                <Image src={item.image} alt={item.alt} fill sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"} className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section-space">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="eyebrow">Before you set off</p><h2 className="h2">A few things people ask.</h2><p className="mt-4 leading-7 text-ink/75">Need a detail that isn’t here? Give our team a call and we’ll help.</p><Link className="mt-6 inline-block font-semibold text-lagoon underline underline-offset-4" href="/contact">Get in touch</Link></div>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:hidden">{faq.question}<span aria-hidden="true" className="text-xl text-lagoon group-open:rotate-45">+</span></summary>
                <p className="max-w-2xl pt-3 leading-7 text-ink/75">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Come see us</p><h2 className="h2">Find us in Godagari.</h2>
            <p className="mt-4 leading-7 text-ink/75">{contact.location}</p>
            <p className="mt-3 leading-7"><strong>Park:</strong> {contact.parkHours}<br /><strong>Resort:</strong> {contact.resortHours}</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {contact.phones.map((phone) => <a key={phone} href={`tel:${phone}`} className="font-semibold text-lagoon underline underline-offset-4">{phone}</a>)}
            </div>
            <div className="mt-7"><BookingLinks message="Hello Safina Park, I would like help planning a visit." /></div>
          </div>
          <div className="min-h-[300px] overflow-hidden rounded-3xl bg-sky">
            <iframe title="Map showing Safina Park & Resort in Godagari, Rajshahi" src="https://www.google.com/maps?q=Safina+Park+%26+Resort+Godagari+Rajshahi&output=embed" className="h-full min-h-[300px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Safina Park & Resort | Family fun, picnics and stays in Rajshahi",
  description: "Plan a family day of rides, a picnic, event or resort stay at Safina Park in Godagari, Rajshahi. Call or WhatsApp for tickets and bookings.",
  alternates: { canonical: "/" },
};
