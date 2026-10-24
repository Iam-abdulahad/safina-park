import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingLinks from "@/components/BookingLinks";
import { rides } from "@/lib/data";

export function generateStaticParams() {
  return rides.map((ride) => ({ slug: ride.slug }));
}

export function generateMetadata({ params }) {
  const ride = rides.find((item) => item.slug === params.slug);
  if (!ride) return { title: "Ride not found" };
  return {
    title: `${ride.name} ride`,
    description: `${ride.description} Ask Safina Park & Resort in Godagari, Rajshahi about ride details and tickets.`,
    alternates: { canonical: `/rides/${ride.slug}` },
    openGraph: { images: [{ url: ride.image, alt: ride.alt }] },
  };
}

export default function RideDetailPage({ params }) {
  const ride = rides.find((item) => item.slug === params.slug);
  if (!ride) notFound();

  return (
    <main id="main-content" className="wrap py-10 md:py-16">
      <Link href="/rides" className="font-semibold text-lagoon underline underline-offset-4">← All rides</Link>
      <article className="mt-6 grid overflow-hidden rounded-[2rem] bg-white shadow-soft md:grid-cols-2">
        <div className="relative min-h-[280px] bg-sky md:min-h-[500px]">
          <Image src={ride.image} alt={ride.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-10 md:p-12">
          <p className="eyebrow">At Safina Park</p>
          <h1 className="font-head text-4xl font-semibold sm:text-5xl">{ride.name}</h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">{ride.detail}</p>
          <p className="mt-4 text-sm leading-6 text-ink/65">Ride availability and safety guidance may vary. Please check with the ride team on the day.</p>
          <div className="mt-7"><BookingLinks message={`Hello Safina Park, I would like to ask about the ${ride.name} ride and tickets.`} /></div>
        </div>
      </article>
    </main>
  );
}
