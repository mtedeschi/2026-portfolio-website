import type { Metadata } from "next";
import { Geist, Geist_Mono, League_Gothic } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallToActionSection } from "@/components/CallToActionSection";
import { ParticleVisualization } from "@/components/ParticleVisualization";
import { InViewObserver } from "@/components/InViewObserver";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const leagueGothic = League_Gothic({
  variable: "--font-league-gothic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mike Tedeschi - AI-First Design, Product, and Tech Leadership",
  description: "Portfolio of Mike Tedeschi - Design, Product, and Technology Leadership",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${leagueGothic.variable} antialiased`}
      >
        <ParticleVisualization />
        <div
          className="fixed inset-0 z-[5] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
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
