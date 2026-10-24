"use client";

import Link from "next/link";
import { useState } from "react";
import { contact, navigation } from "@/lib/data";

const bengaliNavigation = {
  Rides: "রাইড",
  Stay: "থাকা",
  "Picnic & Events": "পিকনিক ও অনুষ্ঠান",
  Packages: "প্যাকেজ",
  Gallery: "গ্যালারি",
  Blog: "ব্লগ",
  Contact: "যোগাযোগ",
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const bangla = language === "bn";

  function toggleLanguage() {
    const nextLanguage = bangla ? "en" : "bn";
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur">
      <div className="border-b border-ink/10 bg-sky">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-xs font-medium text-ink sm:text-sm">
          <p>Park: {contact.parkHours} <span className="mx-2 text-ink/40">·</span> Resort: {contact.resortHours}</p>
          <div className="flex flex-wrap items-center gap-x-3">
            {contact.phones.map((phone, index) => (
              <span key={phone} className="flex items-center gap-3">
                {index > 0 && <span aria-hidden="true" className="text-ink/40">·</span>}
                <a href={`tel:${phone}`} className="hover:text-coral">{phone}</a>
              </span>
            ))}
            <span aria-hidden="true" className="hidden text-ink/40 sm:inline">·</span>
            <span>{contact.location}</span>
          </div>
        </div>
      </div>
      <div className="wrap flex min-h-[4.5rem] items-center justify-between gap-3 py-2">
        <Link href="/" aria-label="Safina Park & Resort home" className="shrink-0 font-head text-xl font-semibold leading-none text-ink sm:text-2xl">
          Safina <span className="text-lagoon">Park</span>
          <span className="mt-1 block font-body text-[10px] font-medium tracking-wide text-ink/65 sm:text-xs"> & Resort</span>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-ink transition-colors hover:text-coral">
              {bangla ? bengaliNavigation[item.label] : item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleLanguage} className="rounded-full border border-ink/15 px-3 py-2 text-xs font-semibold text-ink hover:bg-sky" aria-label={bangla ? "Switch to English" : "বাংলা ভাষায় দেখুন"} aria-pressed={bangla}>
            {bangla ? "বাংলা" : "EN"}
          </button>
          <a className="btn hidden min-h-10 px-4 py-2 text-sm sm:inline-flex" href={`tel:${contact.phones[0]}`}>
            {bangla ? "বুকিংয়ে কল" : "Call to book"}
          </a>
          <button className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold xl:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" className="wrap flex flex-col gap-1 border-t border-ink/10 pb-4 pt-3 xl:hidden" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 font-semibold hover:bg-sky">
              {bangla ? bengaliNavigation[item.label] : item.label}
            </Link>
          ))}
          <a className="btn mt-2 sm:hidden" href={`tel:${contact.phones[0]}`}>{bangla ? "বুকিংয়ে কল" : "Call to book"}</a>
        </nav>
      )}
    </header>
  );
}
