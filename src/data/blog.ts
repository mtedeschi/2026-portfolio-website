import type { ComponentType } from "react";

export type BlogSource = {
  label: string;
  url: string;
};

export type BlogPostSummary = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
};

export type BlogPost = BlogPostSummary & {
  quickSummary: string;
  substackUrl: string;
  sources: BlogSource[];
};

type BlogContentModule = {
  default: ComponentType;
};

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "2026-03-23",
    date: "2026-03-23",
    title: "March 23, 2026: This Week in AI",
    summary:
      "This week: hiring is changing, education is evolving, and policies are shaping the future.",
    tags: ["Jobs", "Design", "Policy", "Education"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    quickSummary:
      "This week, the pattern is less “acceleration” and more “tension.” AI is showing real capability and ways it’s changing how we live, learn, and work, but also exposing gaps in the systems we take for granted.",
    substackUrl: "https://miketedeschi.substack.com/p/march-23-2026-this-week-in-ai",
    sources: [
      {
        label: "Reuters — Companies cutting jobs as investments shift toward AI",
        url: "https://www.reuters.com/business/world-at-work/companies-cutting-jobs-investments-shift-toward-ai-2026-03-19/",
      },
      {
        label: "Business Insider — Companies replacing roles with AI (layoffs and workforce reductions)",
        url: "https://www.businessinsider.com/list-companies-replacing-human-employees-with-ai-layoffs-workforce-reductions",
      },
      {
        label: "Reuters — OpenAI to nearly double workforce to ~8,000 by end of 2026 (FT)",
        url: "https://www.reuters.com/business/openai-nearly-double-workforce-8000-by-end-2026-ft-reports-2026-03-21/",
      },
      {
        label: "The Wall Street Journal — AI and entry-level jobs",
        url: "https://www.wsj.com/tech/ai/ai-entry-level-jobs-impact-7f3d0c1a",
      },
      {
        label: "Bloomberg — Figma stock falls amid AI design competition",
        url: "https://www.bloomberg.com/news/articles/2026-03-19/figma-stock-falls-ai-design-threat",
      },
      {
        label: "The Verge — Google AI design tools and “vibe coding”",
        url: "https://www.theverge.com/2026/03/18/google-ai-design-tools-vibe-coding",
      },
      {
        label: "TechCrunch — AI UI generation tools and startups",
        url: "https://techcrunch.com/2026/03/20/ai-ui-generation-tools-startups",
      },
      {
        label: "Reuters — AI regulation and global frameworks",
        url: "https://www.reuters.com/technology/ai-regulation-global-frameworks-2026/",
      },
      {
        label: "CNBC — Trump administration national AI policy framework",
        url: "https://www.cnbc.com/2026/03/20/trump-admin-unveils-national-ai-policy-framework.html",
      },
      {
        label: "The Verge — Trump administration new AI policy framework",
        url: "https://www.theverge.com/ai-artificial-intelligence/898055/trump-new-ai-policy-framework",
      },
      {
        label: "The New York Times — Schools, AI, and ChatGPT policy",
        url: "https://www.nytimes.com/2026/03/17/technology/schools-ai-chatgpt-policy.html",
      },
      {
        label: "The Wall Street Journal — Students using AI for homework and school responses",
        url: "https://www.wsj.com/tech/ai/students-using-ai-homework-schools-response-2026",
      },
      {
        label: "EdSurge — How teachers are adapting to AI",
        url: "https://www.edsurge.com/news/2026-03-18-how-teachers-are-adapting-to-ai",
      },
    ],
  },
];

const blogContentLoaders: Record<string, () => Promise<BlogContentModule>> = {
  "2026-03-23": () => import("@/content/blog/2026-03-23.mdx"),
};

export function getBlogPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getLatestBlogPosts(count: number): BlogPost[] {
  return getBlogPosts().slice(0, count);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export async function getBlogPostContent(slug: string) {
  const loader = blogContentLoaders[slug];
  if (!loader) {
    return null;
  }

  return loader();
}
