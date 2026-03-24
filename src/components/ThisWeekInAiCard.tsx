import Link from "next/link";
import type { BlogPostSummary } from "@/data/blog";

type ThisWeekInAiCardProps = {
  post: BlogPostSummary;
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function ThisWeekInAiCard({ post }: ThisWeekInAiCardProps) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group overflow-hidden rounded-2xl border border-border/50 bg-background/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
    >
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
        aria-hidden
      />

      <div className="flex flex-col gap-4 p-6">
        <h3 className="text-2xl font-semibold leading-tight transition-colors group-hover:text-primary">
          {post.title}
        </h3>

        <p className="text-base leading-relaxed text-muted-foreground">{post.summary}</p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
