import Link from "next/link";
import { ThisWeekInAiCard } from "@/components/ThisWeekInAiCard";
import { getBlogPosts, type BlogPostSummary } from "@/data/blog";

type ThisWeekInAiSectionProps = {
  posts?: BlogPostSummary[];
  showViewAllLink?: boolean;
};

const defaultDescription =
  "Staying on top of AI news shouldn't be difficult—here are some of the top themes developing this week related to AI and tech.";

export function ThisWeekInAiSection({
  posts = getBlogPosts(),
  showViewAllLink = true,
}: ThisWeekInAiSectionProps) {
  return (
    <section data-particle-shape="" className="w-full border-y border-stone-200/70 bg-white py-[clamp(4rem,12vw,8rem)] animate-in-view">
      <div className="px-4 md:px-[clamp(2rem,8vw,4rem)]">
        <div className="mb-[clamp(2rem,6vw,4rem)] flex flex-col gap-4">
          <p className="text-[clamp(0.875rem,2vw,1rem)] font-semibold uppercase tracking-wide text-muted-foreground">
            Insights
          </p>
          <h2 className="text-[clamp(2.5rem,7vw,4.25rem)] font-bold leading-[1.08] tracking-tight">
            This Week in AI
          </h2>
          <p className="max-w-4xl text-[clamp(1rem,2vw,1.125rem)] leading-relaxed text-muted-foreground">
            {defaultDescription} {" "}
            <Link
              href="/insights"
              className="text-primary transition-colors hover:text-primary/80"
            >
              View all posts
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <ThisWeekInAiCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
