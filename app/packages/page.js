import BookingLinks from "@/components/BookingLinks";
import { packages } from "@/lib/data";

export const metadata = {
  title: "Picnic, family and group packages",
  description: "Ask for a quote for student, couple, family or corporate packages at Safina Park & Resort in Rajshahi.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <main id="main-content" className="wrap section-space">
      <div className="max-w-3xl">
        <p className="eyebrow">Made around your plans</p>
        <h1 className="h2">The right day for your group.</h1>
        <p className="mt-4 text-lg leading-7 text-ink/75">Tell us your group size, preferred date and what you would like to do. We’ll help you put together the details and share a quote.</p>
        <p className="mt-3 text-sm font-semibold text-lagoon">Package prices are available by enquiry. No prices are listed online.</p>
      </div>
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {packages.map((item, index) => (
          <section id={item.id} key={item.id} className={`scroll-mt-32 rounded-3xl p-6 sm:p-8 ${index === 1 ? "bg-ticket" : index === 3 ? "bg-lagoon text-white" : "bg-white shadow-soft"}`}>
            <p className={`text-sm font-semibold ${index === 3 ? "text-white/70" : "text-coral"}`}>{item.for}</p>
            <h2 className="mt-2 font-head text-3xl font-semibold">{item.name} package</h2>
            <p className={`mt-3 leading-6 ${index === 3 ? "text-white/80" : "text-ink/75"}`}>{item.description}</p>
            <ul className={`mt-5 space-y-2 text-sm ${index === 3 ? "text-white/90" : "text-ink/80"}`}>
              {item.items.map((detail) => <li key={detail} className="flex gap-2"><span aria-hidden="true">✓</span><span>{detail}</span></li>)}
            </ul>
            <p className={`mt-6 font-semibold ${index === 3 ? "text-ticket" : "text-ink"}`}>Ask for a quote</p>
            <div className="mt-4"><BookingLinks message={`Hello Safina Park, I would like to ask for a quote for the ${item.name.toLowerCase()} package. Our group size and preferred date are:`} /></div>
          </section>
        ))}
      </div>
    </main>
  );
}
