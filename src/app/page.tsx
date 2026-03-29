import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LeadershipSection } from "@/components/LeadershipSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ThisWeekInAiSection } from "@/components/ThisWeekInAiSection";
import { getLatestBlogPosts } from "@/data/blog";
import { defaultSiteDescription } from "@/lib/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: "Mike Tedeschi - AI-First Design, Product, and Tech Leadership",
  description: defaultSiteDescription,
});

export default function Home() {
  const latestPosts = getLatestBlogPosts(3)

  return (
    <>
      <Hero />
      <LeadershipSection />
      <CaseStudiesSection />
      <ThisWeekInAiSection posts={latestPosts} />
    </>
  );
}
