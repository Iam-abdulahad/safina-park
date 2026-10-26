import Link from "next/link";
import { contact, navigation } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-14 text-white md:pb-12">
      <div className="wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-head text-2xl font-semibold">Safina Park & Resort</Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">A park and resort destination in Godagari, Rajshahi.</p>
          <a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold text-ticket underline-offset-4 hover:underline">Get directions</a>
        </div>
        <div>
          <h2 className="font-semibold">Plan your visit</h2>
          <p className="mt-3 text-sm leading-6 text-white/75">Park: {contact.parkHours}<br />Resort: {contact.resortHours}</p>
          <p className="mt-2 text-sm text-white/75">{contact.location}</p>
        </div>
        <div>
          <h2 className="font-semibold">Talk to our team</h2>
          <div className="mt-3 space-y-2">
            {contact.phones.map((phone) => <a key={phone} href={`tel:${phone}`} className="block text-sm text-white/85 hover:text-ticket">{phone}</a>)}
            <a href={`https://wa.me/${contact.whatsappPhone}`} target="_blank" rel="noreferrer" className="block text-sm text-white/85 hover:text-ticket">WhatsApp us</a>
          </div>
        </div>
      </div>
      <div className="wrap mt-10 flex flex-col gap-4 border-t border-white/15 pt-5 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Safina Park & Resort</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-4 gap-y-2">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}
        </nav>
      </div>
    </footer>
  );
}
