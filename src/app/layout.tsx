import type { Metadata } from "next";
import { Bitter, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallToActionSection } from "@/components/CallToActionSection";
import { ParticleVisualization } from "@/components/ParticleVisualization";
import { InViewObserver } from "@/components/InViewObserver";
import { defaultSiteDescription, getSiteUrl, siteConfig } from "@/lib/site";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: "Mike Tedeschi - AI-First Design, Product, and Tech Leadership",
  description: defaultSiteDescription,
  manifest: "/favicon/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: "Mike Tedeschi - AI-First Design, Product, and Tech Leadership",
    description: defaultSiteDescription,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Tedeschi - AI-First Design, Product, and Tech Leadership",
    description: defaultSiteDescription,
    images: [siteConfig.defaultOgImage],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const origin = getSiteUrl().origin;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: origin,
        description: defaultSiteDescription,
        publisher: { "@id": `${origin}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${origin}/#person`,
        name: siteConfig.name,
        url: origin,
        sameAs: [siteConfig.linkedInUrl, siteConfig.substackUrl],
        jobTitle: "Design, product, and technology leadership",
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${bitter.variable} ${notoSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ParticleVisualization />
        <div
          className="fixed inset-0 z-[5] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(245,240,232,0.35) 100%)",
          }}
          aria-hidden
        />
        <InViewObserver />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <CallToActionSection />
          <Footer />
        </div>
      </body>
    </html>
  );
}
