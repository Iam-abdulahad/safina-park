import Image from "next/image";
import Link from "next/link";
import { galleryItems, contact } from "@/lib/data";

export const metadata = {
  title: "Photos and videos",
  description: "See a few moments from Safina Park & Resort in Godagari, Rajshahi. Contact the team for current visitor photos and videos.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <main id="main-content" className="wrap section-space">
      <div className="max-w-3xl">
        <p className="eyebrow">A glimpse of the day</p>
        <h1 className="h2">A look around Safina.</h1>
        <p className="mt-4 text-lg leading-7 text-ink/75">Explore the park, water and picnic moments. We’re preparing a gallery of real visitor photos—contact our team for the latest videos.</p>
      </div>
      <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {galleryItems.map((item, index) => (
          <figure key={item.title} className={`overflow-hidden rounded-2xl bg-white ${index === 0 || index === 5 ? "col-span-2 aspect-[4/3]" : "aspect-square"}`}>
            <div className="relative h-full w-full">
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-4 pb-4 pt-10 text-sm font-semibold text-white">{item.title}</figcaption>
            </div>
          </figure>
        ))}
      </div>
      <section className="mt-12 rounded-3xl bg-ticket p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
        <div><h2 className="font-head text-2xl font-semibold">See the latest videos</h2><p className="mt-2 text-ink/75">Visit our YouTube channel for video updates from Safina Park.</p></div>
        <a className="btn mt-5 !bg-ink sm:mt-0" href={contact.youtube} target="_blank" rel="noreferrer">Watch on YouTube</a>
      </section>
      <p className="mt-5 text-sm text-ink/60">Some images shown are illustrative placeholders and are not verified photos of Safina Park.</p>
      <Link href="/contact" className="mt-6 inline-block font-semibold text-lagoon underline underline-offset-4">Share a gallery enquiry</Link>
    </main>
  );
}
