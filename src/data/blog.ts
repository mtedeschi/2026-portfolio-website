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
    slug: "2026-03-30",
    date: "2026-03-30",
    title: "March 30, 2026: This Week in AI",
    summary:
      "This week: trust and system design, the AI skill and workflow gap, AI as default infrastructure, and policy falling behind.",
    tags: ["Trust", "Security", "Skills", "Policy"],
    image: "/images/insights/2026-03-30_thumb.jpg",
    quickSummary:
      "This week in AI didn’t feel like a story about new capabilities—it felt like a story about conflict: a quiet war around your job, data, trust, and choice as AI is embedded, scaled, and contested.",
    substackUrl:
      "https://miketedeschi.substack.com/p/march-30-2026-this-week-in-ai",
    sources: [
      {
        label:
          "TechCrunch — Stanford study outlines dangers of asking AI chatbots for personal advice",
        url: "https://techcrunch.com/2026/03/28/stanford-study-outlines-dangers-of-asking-ai-chatbots-for-personal-advice/",
      },
      {
        label:
          "Forbes — Why AI cyberattacks have made your software security strategy obsolete",
        url: "https://www.forbes.com/sites/digital-assets/2026/03/25/why-ai-cyberattacks-have-made-your-software-security-strategy-obsolete/",
      },
      {
        label: "Fast Company — Microsoft red team stress testing AI",
        url: "https://www.fastcompany.com/91513979/microsoft-red-team-stress-testing-ai",
      },
      {
        label: "TechCrunch — Wikipedia cracks down on the use of AI in article writing",
        url: "https://techcrunch.com/2026/03/26/wikipedia-cracks-down-on-the-use-of-ai-in-article-writing/",
      },
      {
        label:
          "Forbes — Most companies got breached through SaaS and AI last year",
        url: "https://www.forbes.com/sites/tonybradley/2026/03/24/most-companies-got-breached-through-saas-and-ai-last-year/",
      },
      {
        label: "Forbes — Hackers launch devastating attacks on AI devs",
        url: "https://www.forbes.com/sites/thomasbrewster/2026/03/26/hackers-launch-devastating-attacks-on-ai-devs/",
      },
      {
        label:
          "MIT Technology Review — The Download: tracing AI-fueled delusions; OpenAI warns Microsoft risks",
        url: "https://www.technologyreview.com/2026/03/24/1134540/the-download-tracing-ai-fueled-delusions-openai-warns-microsoft-risks/",
      },
      {
        label:
          "Business Insider — AI test spotting bullshit (Peter Gostev arena)",
        url: "https://www.businessinsider.com/ai-test-spotting-bullshit-peter-gostev-arena-anthropic-openai-google-2026-3",
      },
      {
        label:
          "Forbes — The Apple App Store is flooded with AI slop and legitimate developers are paying for it",
        url: "https://www.forbes.com/sites/josipamajic/2026/03/24/the-apple-app-store-is-flooded-with-ai-slop-and-legitimate-developers-are-paying-for-it/",
      },
      {
        label:
          "Forbes — The case for treating AI agents like untrusted devices",
        url: "https://www.forbes.com/sites/tonybradley/2026/03/25/the-case-for-treating-ai-agents-like-untrusted-devices/",
      },
      {
        label:
          "The Verge — Disney, OpenAI Sora, Epic, Fortnite, metaverse (streaming)",
        url: "https://www.theverge.com/streaming/900837/disney-open-ai-sora-epic-fortnite-metaverse",
      },
      {
        label: "Fast Company — The new rules of trust in an AI era",
        url: "https://www.fastcompany.com/91514784/the-new-rules-of-trust-in-an-ai-era",
      },
      {
        label:
          "TechCrunch — The AI skills gap is here; power users and AI company pull ahead",
        url: "https://techcrunch.com/2026/03/25/the-ai-skills-gap-is-here-says-ai-company-and-power-users-are-pulling-ahead/",
      },
      {
        label: "Business Insider — Meta AI push, employee goals, tool adoption",
        url: "https://www.businessinsider.com/meta-ai-push-employee-goals-tool-adoption-2-026-3",
      },
      {
        label:
          "Forbes — Boston institutes AI literacy for all high schoolers",
        url: "https://www.forbes.com/sites/johnwerner/2026/03/26/boston-institutes-ai-literacy-for-all-high-schoolers/",
      },
      {
        label:
          "AI Journ — Writer enterprise AI: first agent skills and playbooks for business teams",
        url: "https://aijourn.com/writer-sets-a-new-standard-for-enterprise-ai-with-the-first-agent-skills-and-playbooks-for-business-teams/",
      },
      {
        label:
          "Business Insider — Nvidia CEO Jensen Huang urges blue-collar workers to embrace AI",
        url: "https://www.businessinsider.com/nvidia-ceo-jensen-huang-urges-blue-collar-workers-embrace-ai-2026-3",
      },
      {
        label:
          "Forbes — We’re still only seeing AI’s first-order effects (former Tesla head)",
        url: "https://www.forbes.com/sites/joemckendrick/2026/03/25/were-still-only-seeing-ais-first-order-effects-former-tesla-head-states/",
      },
      {
        label:
          "Computerworld — HP will cram a 20-billion-parameter AI model into new AI PCs",
        url: "https://www.computerworld.com/article/4149838/hp-will-cram-a-20-billion-parameter-ai-model-into-new-ai-pcs.html",
      },
      {
        label:
          "Forbes — One in three adults turn to AI chatbots for health information (poll)",
        url: "https://www.forbes.com/sites/brucejapsen/2026/03/25/1-in-3-adults-turn-to-ai-chatbots-for-health-information-poll-says/",
      },
      {
        label:
          "National Interest — Energy as currency: the economics of power in the age of AI",
        url: "https://nationalinterest.org/blog/energy-world/energy-as-currency-the-economics-of-power-in-the-age-of-ai",
      },
      {
        label:
          "Fast Company — Amex Graphite card bundles ChatGPT, cash back, and AI tools",
        url: "https://www.fastcompany.com/91514880/amexs-new-graphite-card-bundles-chatgpt-cash-back-and-ai-tools-into-one-product",
      },
      {
        label:
          "Fast Company — AI is creating the first generation of cognitively outsourced humans",
        url: "https://www.fastcompany.com/91513823/ai-is-creating-the-first-generation-of-cognitively-outsourced-humans",
      },
      {
        label:
          "Computerworld — European Parliament delays implementation of parts of the EU AI Act",
        url: "https://www.computerworld.com/article/4151014/european-parliament-delays-implementation-of-parts-of-the-eu-ai-act-2.html",
      },
      {
        label:
          "Forbes — Anthropic–Pentagon dispute brings a turning point for the AI industry",
        url: "https://www.forbes.com/sites/tiriasresearch/2026/03/26/anthropicpentagon-dispute-brings-a-turning-point-for-the-ai-industry/",
      },
    ],
  },
  {
    slug: "2026-03-23",
    date: "2026-03-23",
    title: "March 23, 2026: This Week in AI",
    summary:
      "This week: hiring is changing, education is evolving, and policies are shaping the future.",
    tags: ["Jobs", "Design", "Policy", "Education"],
    image:
      "/images/insights/2026-03-23_thumb.jpg",
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
  "2026-03-30": () => import("@/content/blog/2026-03-30.mdx"),
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
