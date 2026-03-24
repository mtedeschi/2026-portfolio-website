import { ThisWeekInAiSection } from "@/components/ThisWeekInAiSection";
import { getBlogPosts } from "@/data/blog";

export default function InsightsPage() {
  const posts = getBlogPosts();

  return <ThisWeekInAiSection posts={posts} showViewAllLink={false} />;
}
