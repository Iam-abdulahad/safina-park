import Image from "next/image";
import Link from "next/link";
import BookingLinks from "@/components/BookingLinks";
import RideCard from "@/components/RideCard";
import ScrollReveal from "@/components/ScrollReveal";
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
  { title: "Park & attractions", description: "Discover rides and activities.", href: "/rides", mark: "01" },
  { title: "Picnic & events", description: "Plan a gathering for your group.", href: "/picnic-events", mark: "02" },
  { title: "Resort & stay", description: "Explore accommodation options.", href: "/stay", mark: "03" },
];

const experiences = [
  {
    title: "A day out with the family",
    description: "Share a few rides, take a break, and make the day your own.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=85",
    alt: "A green outdoor space for a relaxed day together",
    href: "/rides",
    label: "Explore rides",
  },
  {
    title: "Bring everyone together",
    description: "Ask about picnic arrangements for family, school and work groups.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85",
    alt: "A group sharing a meal around an outdoor table",
    href: "/picnic-events",
    label: "Plan a gathering",
  },
  {
    title: "Take time to unwind",
    description: "Explore the resort and ask the team about current room options.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85",
    alt: "A peaceful tree-lined path in a green setting",
    href: "/stay",
    label: "Explore stays",
  },
];

function SectionHeading({ eyebrow, title, description, href, linkLabel }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2">{title}</h2>
        {description && <p className="mt-4 max-w-xl leading-7 text-ink/70">{description}</p>}
      </div>
      {href && (
        <Link href={href} className="w-fit font-semibold text-lagoon underline underline-offset-4 transition-colors hover:text-coral">
          {linkLabel} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionSchema).replace(/</g, "\\u003c") }}
      />

      <section className="wrap pb-8 pt-8 sm:pt-12 md:pb-12">
        <div className="grid overflow-hidden border border-ink/10 bg-white shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-lagoon">
              Safina Park & Resort <span className="mx-2 text-ink/30">/</span> Godagari, Rajshahi
            </p>
            <h1 className="max-w-xl font-head text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
              A destination for days well spent.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-ink/70 sm:text-lg">
              Discover the park, plan a picnic or explore a resort stay. Find the right setting for your next visit.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn">Plan your visit</Link>
              <Link href="/rides" className="btn-secondary">Explore the park</Link>
            </div>
            <div className="mt-9 border-t border-ink/10 pt-5 text-sm text-ink/65">
              <span className="font-semibold text-ink">Park hours</span>
              <span className="mx-2 text-ink/30">/</span>
              {contact.parkHours}
              <p className="mt-1 text-xs text-ink/45">Sample schedule — please confirm before travelling.</p>
            </div>
          </div>
          <div className="relative min-h-[300px] bg-sky sm:min-h-[420px] lg:min-h-[540px]">
            <Image
              src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1800&q=90"
              alt="A shaded walking path through a green park"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/65 to-transparent p-5 pt-16 sm:p-7 sm:pt-20">
              <p className="text-sm font-medium text-white/90">Park, picnic and resort experiences</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap pb-8 md:pb-12" aria-label="Explore the park">
        <div className="grid gap-3 md:grid-cols-3">
          {quickLinks.map((item, index) => (
            <ScrollReveal key={item.href} delay={index * 90}>
              <Link href={item.href} className="group flex h-full min-h-32 items-center justify-between gap-4 border border-ink/10 bg-white p-5 transition-colors hover:border-lagoon/40 sm:p-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-lagoon/70">{item.mark} / EXPLORE</span>
                  <h2 className="mt-2 font-head text-xl font-semibold text-ink sm:text-2xl">{item.title}</h2>
                  <p className="mt-1 text-sm text-ink/70">{item.description}</p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink/15 text-lg text-ink transition-colors group-hover:border-lagoon group-hover:bg-lagoon group-hover:text-white" aria-hidden="true">→</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="wrap section-space">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Pick your kind of fun"
            title="Little adventures, all in one place."
            description="From a spin on a favorite ride to a splash in the pool, start with what sounds fun to you."
            href="/rides"
            linkLabel="Explore all rides"
          />
        </ScrollReveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rides.slice(0, 3).map((ride, index) => (
            <ScrollReveal key={ride.slug} delay={index * 100}>
              <RideCard ride={ride} />
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink/55">Photos and attraction details are examples for this demo. Check availability with the park before your visit.</p>
      </section>

      <section className="overflow-hidden bg-white py-16 md:py-24">
        <div className="wrap">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Make it your day"
              title="Choose the outing that feels like you."
              description="Keep it spontaneous or bring a whole group. The team can help you plan around your visit."
            />
          </ScrollReveal>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {experiences.map((experience, index) => (
              <ScrollReveal key={experience.title} delay={index * 100}>
                <article className="group h-full overflow-hidden rounded-3xl border border-ink/5 bg-sky/50 shadow-soft">
                  <Link href={experience.href} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-sky">
                      <Image
                        src={experience.image}
                        alt={experience.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-ink backdrop-blur">A day to remember</span>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="font-head text-2xl font-semibold text-ink">{experience.title}</h3>
                      <p className="mt-2 min-h-14 leading-6 text-ink/70">{experience.description}</p>
                      <span className="mt-4 inline-flex items-center gap-2 font-semibold text-lagoon">
                        {experience.label}<span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section-space">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-lagoon sm:min-h-[460px]">
              <Image
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85"
                alt="Sunlight reflected on calm water"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-ink">Slow down. Stay a little longer.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="lg:py-8">
              <p className="eyebrow">Picnics, events and stays</p>
              <h2 className="h2">Bring your group together.</h2>
              <p className="mt-5 max-w-xl leading-7 text-ink/70">
                Planning a family day, school outing or team gathering? Explore the options, then ask the team about current arrangements and availability.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Link href="/picnic-events" className="rounded-2xl border border-ink/10 bg-white p-4 transition-colors hover:border-lagoon/40">
                  <span className="text-sm font-semibold text-coral">01 / GET TOGETHER</span>
                  <span className="mt-2 block font-head text-xl font-semibold text-ink">Picnic & events</span>
                  <span className="mt-1 block text-sm text-ink/65">Make plans for your group.</span>
                </Link>
                <Link href="/stay" className="rounded-2xl border border-ink/10 bg-white p-4 transition-colors hover:border-lagoon/40">
                  <span className="text-sm font-semibold text-coral">02 / WIND DOWN</span>
                  <span className="mt-2 block font-head text-xl font-semibold text-ink">Explore stays</span>
                  <span className="mt-1 block text-sm text-ink/65">Ask about resort options.</span>
                </Link>
              </div>
              <Link href="/contact" className="btn mt-6">Talk through your plans <span aria-hidden="true">→</span></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-sky/70 py-16 md:py-24">
        <div className="wrap">
          <ScrollReveal>
            <SectionHeading
              eyebrow="For every kind of group"
              title="Start with your people."
              description="Browse the sample group options, then contact the team for current details and a tailored quote."
              href="/packages"
              linkLabel="View group options"
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 80}>
                <Link
                  href={`/packages#${item.id}`}
                  className={`group block h-full rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 ${index === 1 ? "bg-ticket" : index === 3 ? "bg-lagoon text-white" : "bg-white shadow-soft"}`}
                >
                  <span className={`text-sm font-bold ${index === 3 ? "text-white/65" : "text-coral"}`}>0{index + 1} / GROUP</span>
                  <h3 className="mt-5 font-head text-2xl font-semibold">{item.name}</h3>
                  <p className={`mt-2 min-h-12 text-sm leading-5 ${index === 3 ? "text-white/75" : "text-ink/65"}`}>{item.for}</p>
                  <span className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${index === 3 ? "text-ticket" : "text-lagoon"}`}>
                    Ask for a quote <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white md:py-24">
        <div className="wrap">
          <ScrollReveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 font-semibold text-ticket">A little look around</p>
                <h2 className="font-head text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">A look around the park and resort.</h2>
              </div>
              <Link href="/gallery" className="w-fit font-semibold text-white underline underline-offset-4 hover:text-ticket">Browse the gallery <span aria-hidden="true">→</span></Link>
            </div>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryItems.slice(0, 4).map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80} className={index === 0 ? "col-span-2 row-span-2 md:min-h-96" : ""}>
                <Link href="/gallery" className={`group relative block overflow-hidden rounded-2xl bg-white/10 ${index === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"}`}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">{item.title}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/55">Gallery imagery is illustrative demo content.</p>
        </div>
      </section>

      <section className="wrap section-space">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <ScrollReveal>
            <div className="lg:sticky lg:top-36">
              <p className="eyebrow">Before you set off</p>
              <h2 className="h2">Visitor information.</h2>
              <p className="mt-4 leading-7 text-ink/70">Need a detail that isn’t here? Reach out to the team and check the latest information before travelling.</p>
              <Link className="mt-6 inline-flex font-semibold text-lagoon underline underline-offset-4 hover:text-coral" href="/contact">Get in touch <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:hidden">
                    {faq.question}
                    <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky text-xl text-lagoon transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-2xl pt-3 leading-7 text-ink/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="wrap grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <ScrollReveal>
            <div className="flex h-full flex-col justify-center rounded-3xl bg-sky p-6 sm:p-9">
              <p className="eyebrow">Come see us</p>
              <h2 className="h2">Your day out is waiting.</h2>
              <p className="mt-4 leading-7 text-ink/70">{contact.location}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4">
                  <span className="text-sm font-semibold text-ink/55">Park hours · demo</span>
                  <p className="mt-1 font-semibold text-ink">{contact.parkHours}</p>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <span className="text-sm font-semibold text-ink/55">Resort hours · demo</span>
                  <p className="mt-1 font-semibold text-ink">{contact.resortHours}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {contact.phones.map((phone) => <a key={phone} href={`tel:${phone}`} className="font-semibold text-lagoon underline underline-offset-4">{phone}</a>)}
              </div>
              <div className="mt-7"><BookingLinks message="Hello Safina Park, I would like help planning a visit." /></div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="relative min-h-[340px] overflow-hidden rounded-3xl bg-sky">
              <iframe
                title="Map showing Safina Park & Resort in Godagari, Rajshahi"
                src="https://www.google.com/maps?q=Safina+Park+%26+Resort+Godagari+Rajshahi&output=embed"
                className="absolute inset-0 h-full min-h-[340px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
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
