import "./globals.css";
import { Manrope, Hind_Siliguri } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";

const headingFont = Manrope({ subsets: ["latin"], variable: "--font-head", display: "swap" });
const bodyFont = Hind_Siliguri({ subsets: ["latin", "bengali"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://safinapark.com"),
  title: {
    default: "Safina Park & Resort | A family day out in Rajshahi",
    template: "%s | Safina Park & Resort",
  },
  description: "Plan a day of rides, a family picnic or a resort stay at Safina Park & Resort in Godagari, Rajshahi. Call or WhatsApp to book.",
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Safina Park & Resort",
    title: "Safina Park & Resort | A family day out in Rajshahi",
    description: "Rides, picnics, events and resort stays in Godagari, Rajshahi.",
    images: [{ url: "/park-illustration.svg", width: 1200, height: 900, alt: "Illustration of the park with a Ferris wheel and green space" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <StickyBookingBar />
      </body>
    </html>
  );
}
