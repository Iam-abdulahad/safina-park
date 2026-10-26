import Image from "next/image";
import Link from "next/link";

export default function RideCard({ ride }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft">
      <Link href={`/rides/${ride.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-sky">
          <Image src={ride.image} alt={ride.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="font-head text-xl font-semibold text-ink">{ride.name}</h3>
          <p className="mt-2 text-sm leading-6 text-ink/75">{ride.description}</p>
          <span className="mt-4 inline-flex font-semibold text-lagoon">Explore ride <span aria-hidden="true" className="ml-2">→</span></span>
        </div>
      </Link>
    </article>
  );
}
