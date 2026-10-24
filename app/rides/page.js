import RideCard from "@/components/RideCard";
import BookingLinks from "@/components/BookingLinks";
import { rides } from "@/lib/data";

export const metadata = {
  title: "Rides and attractions",
  description: "Explore rides and attractions at Safina Park & Resort in Godagari, Rajshahi. Call to ask about tickets and ride availability.",
  alternates: { canonical: "/rides" },
};

export default function RidesPage() {
  return (
    <main id="main-content" className="wrap section-space">
      <div className="max-w-3xl">
        <p className="eyebrow">Choose your next stop</p>
        <h1 className="h2">A ride for every kind of day.</h1>
        <p className="mt-4 max-w-2xl text-lg leading-7 text-ink/75">From a gentle spin to a splash in the pool, pick what sounds fun. Ask the team about ride access and availability before your visit.</p>
      </div>
      <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rides.map((ride) => <RideCard key={ride.slug} ride={ride} />)}
      </div>
      <div className="mt-12 rounded-3xl bg-ticket p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
        <div><h2 className="font-head text-2xl font-semibold">Have tickets or ride questions?</h2><p className="mt-2 text-ink/75">Our team can help you plan ahead.</p></div>
        <div className="mt-5 sm:mt-0"><BookingLinks message="Hello Safina Park, I have a question about tickets and rides." /></div>
      </div>
    </main>
  );
}
