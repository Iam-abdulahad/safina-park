import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/data";

export const metadata = {
  title: "Visitor guides and park news",
  description: "Read helpful visitor and group picnic guides from Safina Park & Resort in Godagari, Rajshahi.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main id="main-content" className="wrap section-space">
      <div className="max-w-3xl">
        <p className="eyebrow">Ideas for your visit</p>
        <h1 className="h2">A little help planning your day.</h1>
        <p className="mt-4 text-lg leading-7 text-ink/75">Simple tips for family visits, group picnics and making the most of your time at the park.</p>
      </div>
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {articles.map((article) => (
          <article key={article.slug} className="overflow-hidden rounded-3xl bg-white shadow-soft">
            <Link href={`/blog/${article.slug}`} className="group block">
              <div className="relative aspect-[16/9] bg-sky">
                <Image src={article.image} alt={article.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-coral">{article.date}</p>
                <h2 className="mt-2 font-head text-2xl font-semibold">{article.title}</h2>
                <p className="mt-2 leading-6 text-ink/75">{article.excerpt}</p>
                <span className="mt-4 inline-block font-semibold text-lagoon">Read guide →</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
