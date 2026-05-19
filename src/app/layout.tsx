import type { Metadata } from "next";
import "./globals.css";
import { SkipNav } from "@/components/layout/SkipNav";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://wowcentermiami.org"),
  title: {
    default: "WOW Center Miami | Adult Day Programs for Developmental Disabilities Since 1972",
    template: "%s | WOW Center Miami",
  },
  description:
    "For 50 years, The WOW Center has empowered Miami adults with developmental disabilities through art, workforce training, therapy, and community. Learn how we can help.",
  keywords: [
    "disability nonprofit Miami",
    "adult day training center Miami",
    "developmental disabilities programs",
    "WOW Center Miami",
    "APD waiver Miami",
    "music therapy adults disabilities Miami",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wowcentermiami.org",
    siteName: "WOW Center Miami",
    title: "WOW Center Miami | Adult Day Programs for Developmental Disabilities Since 1972",
    description:
      "50 years of empowering Miami adults with developmental disabilities through community, creativity, and careers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WOW Center Miami",
    description:
      "50 years of empowering Miami adults with developmental disabilities.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        <SkipNav />
        <Nav />
        <main id="main-content" className="flex-1 pt-18" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
