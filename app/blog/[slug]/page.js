import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingLinks from "@/components/BookingLinks";
import { articles } from "@/lib/data";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) return { title: "Guide not found" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: { images: [{ url: article.image, alt: article.alt }] },
  };
}

export default function ArticlePage({ params }) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) notFound();

  return (
    <main id="main-content" className="wrap max-w-5xl py-10 md:py-16">
      <Link href="/blog" className="font-semibold text-lagoon underline underline-offset-4">← Visitor guides</Link>
      <article className="mt-6 overflow-hidden rounded-[2rem] bg-white shadow-soft">
        <div className="relative aspect-[16/8] bg-sky">
          <Image src={article.image} alt={article.alt} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" priority />
        </div>
        <div className="mx-auto max-w-3xl px-6 py-8 sm:px-10 sm:py-12">
          <p className="font-semibold text-coral">{article.date}</p>
          <h1 className="mt-2 font-head text-4xl font-semibold leading-tight sm:text-5xl">{article.title}</h1>
          <p className="mt-5 text-lg leading-7 text-ink/75">{article.excerpt}</p>
          <div className="mt-8 space-y-5">
            {article.paragraphs.map((paragraph) => <p key={paragraph} className="leading-8 text-ink/80">{paragraph}</p>)}
          </div>
          <div className="mt-9 border-t border-ink/10 pt-7">
            <h2 className="font-head text-2xl font-semibold">Ready to plan your visit?</h2>
            <div className="mt-5"><BookingLinks message="Hello Safina Park, I read your visitor guide and would like help planning a visit." /></div>
          </div>
        </div>
      </article>
    </main>
  );
}
