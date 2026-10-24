"use client";

import { useState } from "react";
import { contact } from "@/lib/data";

const inputClass = "mt-1 w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-ink placeholder:text-ink/45";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", people: "", date: "", note: "" });

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function sendEnquiry(event) {
    event.preventDefault();
    const message = [
      `Hello Safina Park, I am ${form.name}.`,
      `Group size: ${form.people}.`,
      `Preferred date: ${form.date || "Not decided yet"}.`,
      `Enquiry: ${form.note}`,
    ].join(" ");
    const whatsappUrl = `https://wa.me/${contact.whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={sendEnquiry} className="rounded-3xl bg-white p-6 shadow-soft sm:p-8">
      <h2 className="font-head text-2xl font-semibold">Send a booking enquiry</h2>
      <p className="mt-2 text-sm leading-6 text-ink/70">Share a few details and your message will open in WhatsApp, ready to send.</p>
      <div className="mt-6 space-y-4">
        <label className="block text-sm font-semibold">Your name
          <input className={inputClass} name="name" autoComplete="name" value={form.name} onChange={updateField} required />
        </label>
        <label className="block text-sm font-semibold">Number of people
          <input className={inputClass} name="people" type="number" min="1" inputMode="numeric" value={form.people} onChange={updateField} required />
        </label>
        <label className="block text-sm font-semibold">Preferred visit date
          <input className={inputClass} name="date" type="date" value={form.date} onChange={updateField} />
        </label>
        <label className="block text-sm font-semibold">What are you planning?
          <textarea className={inputClass} name="note" rows={4} placeholder="Tickets, picnic, stay, event..." value={form.note} onChange={updateField} required />
        </label>
      </div>
      <button className="btn mt-6 w-full sm:w-auto" type="submit">Continue to WhatsApp</button>
    </form>
  );
}
