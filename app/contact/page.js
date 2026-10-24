import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/data";

export const metadata = {
  title: "Contact and booking enquiries",
  description: "Call, WhatsApp or send a booking enquiry to Safina Park & Resort in Godagari, Rajshahi. Park open daily, resort open 24/7.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="wrap section-space">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">We’re here to help</p>
          <h1 className="h2">Let’s plan your visit.</h1>
          <p className="mt-4 max-w-xl leading-7 text-ink/75">Ask about tickets, rides, picnics, resort stays or events. Call us directly, or send your details in a WhatsApp message.</p>
          <div className="mt-7 space-y-6 rounded-3xl bg-white p-6 shadow-soft sm:p-8">
            <div><h2 className="font-semibold">Call our team</h2><div className="mt-2 space-y-2">{contact.phones.map((phone) => <a key={phone} href={`tel:${phone}`} className="block text-lg font-semibold text-lagoon underline underline-offset-4">{phone}</a>)}</div></div>
            <div><h2 className="font-semibold">Opening hours</h2><p className="mt-2 text-ink/75">Park: {contact.parkHours}<br />Resort: {contact.resortHours}</p></div>
            <div><h2 className="font-semibold">Find us</h2><p className="mt-2 text-ink/75">{contact.location}</p><a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block font-semibold text-lagoon underline underline-offset-4">Open map directions</a></div>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
