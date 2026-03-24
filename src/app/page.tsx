import { Hero } from "@/components/Hero"
import { LeadershipSection } from "@/components/LeadershipSection"
import { CaseStudiesSection } from "@/components/CaseStudiesSection"
import { ThisWeekInAiSection } from "@/components/ThisWeekInAiSection"
import { getLatestBlogPosts } from "@/data/blog"

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
