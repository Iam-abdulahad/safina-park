import { contact } from "@/lib/data";

export default function StickyBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(23,59,58,0.12)] md:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a className="btn min-h-11 flex-1 px-3 py-2" href={`tel:${contact.phones[0]}`}>Call the park</a>
        <a className="btn-secondary min-h-11 flex-1 px-3 py-2" href={`https://wa.me/${contact.whatsappPhone}`} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </div>
  );
}
