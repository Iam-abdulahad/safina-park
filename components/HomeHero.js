"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeHero({ location, parkHours }) {
  return (
    <section className="relative isolate min-h-[520px] overflow-hidden bg-ink sm:min-h-[640px] lg:min-h-[80vh]">
      <div className="hero-background absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=2200&q=90"
          alt="A sunlit, tree-lined park path"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-ink/15" aria-hidden="true" />

      <div className="wrap relative flex min-h-[520px] items-center py-12 sm:min-h-[640px] sm:py-16 lg:min-h-[80vh]">
        <div className="max-w-3xl text-white">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-ticket" aria-hidden="true" />
            {location}
          </p>
          <h1 className="max-w-3xl font-head text-3xl font-semibold leading-[1.08] tracking-tight sm:text-6xl sm:leading-[1.04] lg:text-7xl">
            A destination for days well spent.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/85 sm:mt-6 sm:text-xl sm:leading-8">
            Rides, picnics and resort stays for a day together.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ticket px-6 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ticket"
            >
              Plan your visit <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/rides"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore the park <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/25 pt-5 text-sm text-white/80 sm:mt-12">
            <span className="font-semibold text-white">Park hours</span>
            <span>{parkHours}</span>
            <span className="hidden h-1 w-1 rounded-full bg-ticket sm:inline-block" aria-hidden="true" />
            <span>Rides · Picnics · Resort stays</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-background {
          animation: hero-drift 28s ease-in-out infinite alternate;
          transform-origin: center;
        }

        @keyframes hero-drift {
          from {
            transform: scale(1.02);
          }
          to {
            transform: scale(1.1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-background {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
