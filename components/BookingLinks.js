import { contact } from "@/lib/data";

export default function BookingLinks({ message = "Hello Safina Park, I would like to ask about booking." }) {
  const whatsappUrl = `https://wa.me/${contact.whatsappPhone}?text=${encodeURIComponent(message)}`;
  return (
    <div className="flex flex-wrap gap-3">
      <a className="btn" href={`tel:${contact.phones[0]}`}>Call to book</a>
      <a className="btn-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">Ask on WhatsApp</a>
    </div>
  );
}
