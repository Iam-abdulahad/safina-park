import { articles, rides } from "@/lib/data";

const siteUrl = "https://safinapark.com";

export default function sitemap() {
  const staticPages = ["", "/rides", "/stay", "/picnic-events", "/packages", "/gallery", "/blog", "/contact"];
  const ridePages = rides.map((ride) => `/rides/${ride.slug}`);
  const articlePages = articles.map((article) => `/blog/${article.slug}`);
  return [...staticPages, ...ridePages, ...articlePages].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" ? 0.8 : 0.7,
  }));
}
