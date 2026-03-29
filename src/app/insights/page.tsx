import type { Metadata } from "next";
import { ThisWeekInAiSection } from "@/components/ThisWeekInAiSection";
import { getBlogPosts } from "@/data/blog";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  path: "/insights",
  title: "This Week in AI — Insights | Mike Tedeschi",
  description:
    "Weekly AI insights: policy, product, design, security, and what it means for teams building with intelligent systems.",
});

export default function InsightsPage() {
  const posts = getBlogPosts();

  return <ThisWeekInAiSection posts={posts} showViewAllLink={false} />;
}
