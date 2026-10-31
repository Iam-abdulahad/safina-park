"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function HomeHero({ location, parkHours }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[520px] overflow-hidden bg-ink sm:min-h-[640px] lg:min-h-[80vh]">
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={
          prefersReducedMotion
            ? { scale: 1.04, x: 0, y: 0 }
            : { scale: [1.04, 1.1], x: [0, -12, 6, 0], y: [0, 6, -3, 0] }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                duration: 32,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=2200&q=90"
          alt="A sunlit, tree-lined park path"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-ink/15" aria-hidden="true" />

      <div className="wrap relative flex min-h-[520px] items-center py-12 sm:min-h-[640px] sm:py-16 lg:min-h-[80vh]">
        <motion.div
          className="max-w-3xl text-white"
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.12,
                delayChildren: prefersReducedMotion ? 0 : 0.1,
              },
            },
          }}
        >
          <motion.p
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2 sm:text-sm"
            variants={entranceVariants}
            transition={entranceTransition(prefersReducedMotion)}
          >
            <span className="h-2 w-2 rounded-full bg-ticket" aria-hidden="true" />
            {location}
          </motion.p>
          <motion.h1
            className="max-w-3xl font-head text-3xl font-semibold leading-[1.08] tracking-tight sm:text-6xl sm:leading-[1.04] lg:text-7xl"
            variants={entranceVariants}
            transition={entranceTransition(prefersReducedMotion)}
          >
            A destination for days well spent.
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-sm leading-6 text-white/85 sm:mt-6 sm:text-xl sm:leading-8"
            variants={entranceVariants}
            transition={entranceTransition(prefersReducedMotion)}
          >
            Rides, picnics and resort stays for a day together.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-3 sm:mt-8"
            variants={entranceVariants}
            transition={entranceTransition(prefersReducedMotion)}
          >
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
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/25 pt-5 text-sm text-white/80 sm:mt-12"
            variants={entranceVariants}
            transition={entranceTransition(prefersReducedMotion)}
          >
            <span className="font-semibold text-white">Park hours</span>
            <span>{parkHours}</span>
            <span className="hidden h-1 w-1 rounded-full bg-ticket sm:inline-block" aria-hidden="true" />
            <span>Rides · Picnics · Resort stays</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const entranceVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function entranceTransition(prefersReducedMotion) {
  return prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] };
}
