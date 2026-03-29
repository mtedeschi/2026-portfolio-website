import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPostContent, getBlogPosts } from "@/data/blog";
import { pageMetadata } from "@/lib/page-metadata";
import { getSiteUrl, siteConfig } from "@/lib/site";

type BlogDetailPageProps = {
  params: Promise<{
    date: string;
  }>;
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ date: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { date } = await params;
  const post = getBlogPost(date);
  if (!post) {
    return {};
  }
  const publishedTime = `${post.date}T12:00:00.000Z`;
  return pageMetadata({
    path: `/insights/${post.slug}`,
    title: post.title,
    description: post.summary,
    ogImage: post.image,
    type: "article",
    publishedTime,
  });
}

export default async function InsightsDetailPage({ params }: BlogDetailPageProps) {
  const { date } = await params;
  const post = getBlogPost(date);

  if (!post) {
    notFound();
  }

  const contentModule = await getBlogPostContent(post.slug);
  if (!contentModule) {
    notFound();
  }

  const PostContent = contentModule.default;

  const articleUrl = new URL(`/insights/${post.slug}`, getSiteUrl()).toString();
  const datePublished = `${post.date}T12:00:00.000Z`;
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished,
    image: [new URL(post.image, getSiteUrl()).toString()],
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: getSiteUrl().origin,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <section data-particle-shape="" className="w-full py-[clamp(4rem,12vw,8rem)] animate-in-view">
      <div className="px-4 md:px-[clamp(2rem,8vw,4rem)]">
        <div className="mx-auto max-w-4xl">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(articleStructuredData),
            }}
          />
          <header className="mb-12">
            <p className="text-[clamp(0.875rem,2vw,1rem)] font-semibold uppercase tracking-wide text-muted-foreground">
              Insights
            </p>
            <div className="mt-[clamp(1rem,3vw,1.5rem)] flex flex-col gap-[clamp(1rem,2.5vw,1.25rem)]">
              <h1 className="text-[clamp(2rem,6.5vw,3.25rem)] font-bold leading-[1.1] tracking-tight">
                {post.title}
              </h1>
              <p className="text-[clamp(1rem,2vw,1.125rem)] leading-relaxed text-muted-foreground">
                {post.quickSummary}
              </p>
            </div>
          </header>

          <article
            className="
              [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:leading-tight
              [&_p]:mt-4 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-foreground/90
              [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
              [&_li]:text-lg [&_li]:leading-relaxed [&_li]:text-foreground/90
              [&_strong]:font-semibold
            "
          >
            <PostContent />
          </article>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold">Sources</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <Link
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {source.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-xl border border-border/50 bg-muted/40 p-6">
              <p className="text-lg leading-relaxed">
                Want to discuss this week&apos;s themes in more depth?
              </p>
              <Link
                href={post.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:text-primary/80"
              >
                Join the conversation on Substack
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
