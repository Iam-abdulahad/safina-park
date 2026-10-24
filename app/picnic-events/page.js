import Image from "next/image";
import Link from "next/link";
import BookingLinks from "@/components/BookingLinks";
import { contact } from "@/lib/data";

export const metadata = {
  title: "Picnic spots, seminars and corporate events",
  description: "Plan a family picnic, school outing, seminar or office event at Safina Park & Resort. Ask our Rajshahi team for availability and a quote.",
  alternates: { canonical: "/picnic-events" },
};

const eventOptions = [
  { title: "Family & friends", text: "Make time for an outdoor meal and a day together at the park." },
  { title: "School & student groups", text: "Coordinate a group visit and picnic around your preferred date." },
  { title: "Office & corporate", text: "Ask about gathering space, food arrangements and activities for your team." },
  { title: "Seminars & gatherings", text: "Tell us about your event and ask whether the seminar hall is available." },
];

export default function PicnicEventsPage() {
  return (
    <main id="main-content" className="wrap section-space">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow">Bring everyone together</p>
          <h1 className="h2">A little space for a big get-together.</h1>
          <p className="mt-5 max-w-xl leading-7 text-ink/75">From a family picnic to a school outing or office event, share your plans with our team. We’ll help you check what’s available and arrange a quote.</p>
          <div className="mt-7"><BookingLinks message="Hello Safina Park, I would like to ask about arranging a picnic or group event. Our preferred date, group size and needs are:" /></div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white">
          <Image src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=80" alt="Friends gathered around a meal at an outdoor picnic" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        </div>
      </div>
      <section className="mt-16 grid gap-4 sm:grid-cols-2">
        {eventOptions.map((option, index) => (
          <article key={option.title} className={`rounded-3xl p-6 sm:p-8 ${index === 0 ? "bg-ticket" : "bg-white shadow-soft"}`}>
            <span className="text-sm font-semibold text-coral">0{index + 1}</span>
            <h2 className="mt-3 font-head text-2xl font-semibold">{option.title}</h2>
            <p className="mt-2 max-w-lg leading-6 text-ink/75">{option.text}</p>
          </article>
        ))}
      </section>
      <section id="restaurant" className="mt-12 scroll-mt-28 rounded-3xl bg-lagoon p-6 text-white sm:p-9">
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div><h2 className="font-head text-2xl font-semibold">Food and restaurant enquiries</h2><p className="mt-2 max-w-2xl leading-6 text-white/80">Planning a meal as part of your visit? Call ahead to ask about restaurant and group food options.</p><p className="mt-3 text-sm text-white/75">Park hours: {contact.parkHours}</p></div>
          <Link href="/contact" className="btn !bg-ticket !text-ink hover:!bg-white">Ask about food</Link>
        </div>
      </section>
    </main>
  );
}
