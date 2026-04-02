import Link from "next/link";
import type { BlogPostSummary } from "@/data/blog";
import { TAG_BADGE_CLASS } from "@/lib/tag-accent";

type ThisWeekInAiCardProps = {
  post: BlogPostSummary;
};

export function ThisWeekInAiCard({ post }: ThisWeekInAiCardProps) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-stone-200/60 bg-[#faf9f7] transition-all duration-300 hover:border-stone-300/90"
    >
      <div
        className="h-48 w-full shrink-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
        aria-hidden
      />

      <div className="flex flex-col gap-4 p-[clamp(1.25rem,3vw,1.5rem)]">
        <h3 className="text-2xl font-semibold leading-tight transition-colors group-hover:text-primary">
          {post.title}
        </h3>

        <p className="text-base leading-relaxed text-muted-foreground">{post.summary}</p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${TAG_BADGE_CLASS}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
