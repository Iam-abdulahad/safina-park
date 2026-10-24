import Image from "next/image";
import BookingLinks from "@/components/BookingLinks";
import { contact } from "@/lib/data";

export const metadata = {
  title: "Cottage and hotel stays",
  description: "Ask about staying overnight at Safina Park & Resort in Godagari, Rajshahi. Resort enquiries and bookings are available 24/7.",
  alternates: { canonical: "/stay" },
};

export default function StayPage() {
  return (
    <main id="main-content" className="wrap section-space">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white">
          <Image src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80" alt="A welcoming place to stay surrounded by greenery" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        </div>
        <div>
          <p className="eyebrow">Rest easy</p>
          <h1 className="h2">Make a little more time for your trip.</h1>
          <p className="mt-5 leading-7 text-ink/75">Safina Park & Resort offers cottage and hotel accommodation. Tell us when you’re coming and what your group needs so we can check current availability.</p>
          <p className="mt-4 font-semibold">Resort enquiries: {contact.resortHours}</p>
          <div className="mt-7"><BookingLinks message="Hello Safina Park, I would like to ask about cottage or hotel accommodation. My preferred dates and group details are:" /></div>
        </div>
      </div>
      <section className="mt-16 rounded-3xl bg-white p-6 shadow-soft sm:p-9">
        <h2 className="font-head text-2xl font-semibold">A stay that fits your plans</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          <div><h3 className="font-semibold">Ask about rooms</h3><p className="mt-2 text-sm leading-6 text-ink/70">Room types and current availability can be confirmed by phone or WhatsApp.</p></div>
          <div><h3 className="font-semibold">Plan your visit</h3><p className="mt-2 text-sm leading-6 text-ink/70">Let the team know if you would also like to visit the park or arrange a picnic.</p></div>
          <div><h3 className="font-semibold">Get a quote</h3><p className="mt-2 text-sm leading-6 text-ink/70">Prices are not listed online. Contact us for current booking details.</p></div>
        </div>
      </section>
    </main>
  );
}
