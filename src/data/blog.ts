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
    slug: "2026-04-13",
    date: "2026-04-13",
    title: "April 13, 2026: This Week in AI",
    summary:
      "Move fast and break things, at whatever the cost. AI labs are pushing the limits of what they can deliver with little concern to the cost: mental health, to bias and behavior, and to cybersecurity.",
    tags: ["Commerce", "Security", "Healthcare", "Mental health"],
    image: "/images/insights/2026-03-23_thumb.jpg",
    quickSummary:
      "Move fast and break things, at whatever the cost. AI labs are pushing the limits of what they can deliver with little concern to the cost: mental health, to bias and behavior, and to cybersecurity.",
    substackUrl:
      "https://miketedeschi.substack.com/p/april-13-2026-this-week-in-ai",
    sources: [
      {
        label:
          "Reuters — U.S. House committee questions travel companies on AI pricing",
        url: "https://www.reuters.com/world/us/us-house-committee-wants-travel-companies-answer-questions-use-ai-pricing-2026-03-05",
      },
      {
        label: "New York Post — How AI pricing could harm retailers (survey context)",
        url: "https://nypost.com/2026/02/12/tech/how-ai-pricing-could-harm-retailers/",
      },
      {
        label: "New York Post — Meta rolls out new AI model",
        url: "https://nypost.com/2026/04/09/business/meta-rolls-out-new-ai-model-in-latest-effort-to-catch-up-with-rivals",
      },
      {
        label: "The New York Times — Meta Muse / Spark AI model",
        url: "https://www.nytimes.com/2026/04/08/technology/meta-muse-spark-ai-model.html",
      },
      {
        label: "Reuters — Meta deal with Broadcom for custom AI chips",
        url: "https://www.reuters.com/business/meta-inks-deal-with-broadcom-custom-ai-chips-2026-04-14/",
      },
      {
        label: "Anthropic — Project Glasswing",
        url: "https://www.anthropic.com/glasswing",
      },
      {
        label:
          "PBS NewsHour — Anthropic’s powerful new AI model and high-tech risks",
        url: "https://www.pbs.org/newshour/show/anthropics-powerful-new-ai-model-raises-concerns-about-high-tech-risks",
      },
      {
        label: "NPR — Anthropic Project Glasswing / Mythos preview and cybersecurity",
        url: "https://www.npr.org/2026/04/11/nx-s1-5778508/anthropic-project-glasswing-ai-cybersecurity-mythos-preview",
      },
      {
        label: "The Economist — How dangerous is Mythos?",
        url: "https://www.economist.com/business/2026/04/08/how-dangerous-is-mythos-anthropics-new-ai-model",
      },
      {
        label:
          "The New York Times — Anthropic Claude Mythos preview and banks",
        url: "https://www.nytimes.com/2026/04/10/business/anthropic-claude-mythos-preview-banks.html",
      },
      {
        label: "The Hill — Anthropic new AI and public access debate",
        url: "https://thehill.com/policy/technology/5824219-anthropic-new-ai-dangerous-public/",
      },
      {
        label:
          "The Washington Post (Opinion) — AI robots and senior care tradeoffs",
        url: "https://www.washingtonpost.com/opinions/2026/04/09/ai-robot-senior-care-abi/",
      },
      {
        label: "CNBC — Novo Nordisk and OpenAI for drug discovery",
        url: "https://www.cnbc.com/2026/04/14/novo-nordisk-openai-ai-drug-discovery-healthcare-nvo.html",
      },
      {
        label: "The New York Times — AI chatbots and cancer patients",
        url: "https://www.nytimes.com/2026/04/13/well/ai-chatbots-cancer.html",
      },
      {
        label: "The Free Press — Personal account: AI during a loved one’s illness",
        url: "https://www.thefp.com/p/i-used-ai-to-fight-my-girlfriends-tumor",
      },
      {
        label: "The New Stack — Karpathy on “AI psychosis”",
        url: "https://thenewstack.io/karpathy-says-developers-have-ai-psychosis-everyone-else-is-next/",
      },
      {
        label: "The Guardian — Experiment with AI journaling",
        url: "https://www.theguardian.com/technology/2026/apr/12/experiment-with-ai-journalling",
      },
      {
        label: "NPR — AI, mental health, and JAMA Psychiatry research",
        url: "https://www.npr.org/2026/04/10/nx-s1-5780796/artificial-intelligence-ai-mental-health-chatgpt-jama-psychiatry",
      },
      {
        label:
          "MIT Technology Review — Current state of AI (charts and analysis)",
        url: "https://www.technologyreview.com/2026/04/13/1135675/want-to-understand-the-current-state-of-ai-check-out-these-charts/",
      },
    ],
  },
  {
    slug: "2026-04-06",
    date: "2026-04-06",
    title: "April 6, 2026: This Week in AI",
    summary:
      "This week: cognitive overload and trust, human orchestration and the ‘supermanager,’ AI funding and seed valuations, and infrastructure and environmental costs.",
    tags: ["Scale", "Trust", "Infrastructure"],
    image: "/images/insights/2026-04-06_thumb.jpg",
    quickSummary:
      "This week’s theme is scale—and keeping up with it: funding, cognitive load, and infrastructure, while AI keeps moving faster than many people can process, manage, and adapt to.",
    substackUrl:
      "https://miketedeschi.substack.com/p/april-6-2026-this-week-in-ai",
    sources: [
      {
        label:
          "AI Productivity — BCG study: AI ‘brain fry’ and cognitive overload",
        url: "https://aiproductivity.ai/news/bcg-study-ai-brain-fry-cognitive-overload/",
      },
      {
        label:
          "AI Productivity — UPenn study: people follow ChatGPT’s wrong advice",
        url: "https://aiproductivity.ai/news/upenn-study-people-follow-chatgpt-wrong-advice/",
      },
      {
        label:
          "TechCrunch — AI trust and adoption: more Americans use tools, fewer trust results",
        url: "https://techcrunch.com/2026/03/30/ai-trust-adoption-poll-more-americans-adopt-tools-fewer-say-they-can-trust-the-results/",
      },
      {
        label:
          "Forbes — To build stronger AI, we need to better understand the human brain",
        url: "https://www.forbes.com/sites/robtoews/2026/04/05/to-build-stronger-ai-we-need-to-better-understand-the-human-brain/",
      },
      {
        label:
          "Forbes — Getting rid of more humans in AI and restructuring the market",
        url: "https://www.forbes.com/sites/johnwerner/2026/04/04/getting-rid-of-more-humans-in-ai-restructuring-market/",
      },
      {
        label:
          "Business Insider — Simon Willison and the ‘dark factory’ of AI-assisted software",
        url: "https://www.businessinsider.com/simon-willison-dark-factory-ai-2026-4",
      },
      {
        label:
          "Forbes — AI’s real value only arises when humans step up (beyond doom talk)",
        url: "https://www.forbes.com/sites/joemckendrick/2026/04/04/ignore-the-doom-talk-ais-real-value-only-arises-when-humans-step-up/",
      },
      {
        label:
          "Yahoo Finance — Jensen Huang on CEOs, imagination, and doing more with more",
        url: "https://finance.yahoo.com/sectors/technology/articles/jensen-huang-says-ceos-imagination-183000742.html",
      },
      {
        label:
          "Fortune — Jensen Huang: workers scared of AI may be confusing the job with the tools",
        url: "https://fortune.com/2026/04/01/nvidia-ceo-jensen-huang-advice-workers-scared-ai-confusing-job-with-tools-to-do-it/",
      },
      {
        label:
          "TechCrunch — Poll: willingness to work for an AI ‘boss’ / supervisor (Quinnipiac)",
        url: "https://techcrunch.com/2026/03/30/ai-work-boss-supervisor-us-quinnipiac-poll/",
      },
      {
        label:
          "Forbes — AI agents are multiplying faster than humans can manage them",
        url: "https://www.forbes.com/sites/josipamajic/2026/04/04/ai-agents-are-multiplying-faster-than-humans-can-manage-them/",
      },
      {
        label: "Fast Company — How to thrive in the era of the supermanager",
        url: "https://www.fastcompany.com/91492747/how-to-thrive-in-the-era-of-the-supermanager",
      },
      {
        label:
          "TechCrunch — AI seed startups are commanding higher valuations",
        url: "https://techcrunch.com/2026/03/31/its-not-your-imagination-ai-seed-startups-are-commanding-higher-valuations/",
      },
      {
        label:
          "The New York Times — OpenAI’s latest multibillion-dollar funding round",
        url: "https://www.nytimes.com/2026/03/31/technology/openai-12-billion-latest-funding-round.html",
      },
      {
        label:
          "TechCrunch — OpenAI raises $3B from retail investors in ~$122B fund raise",
        url: "https://techcrunch.com/2026/03/31/openai-not-yet-public-raises-3b-from-retail-investors-in-monster-122b-fund-raise/",
      },
      {
        label:
          "Forbes — How AI and $20,000 helped build an ~$1.8B telehealth startup",
        url: "https://www.forbes.com/sites/josipamajic/2026/04/02/ai-and-20000-helped-one-man-build-a-18-billion-telehealth-startup/",
      },
      {
        label:
          "The Decoder — Anthropic: functional ‘emotions’ in Claude influencing behavior",
        url: "https://the-decoder.com/anthropic-discovers-functional-emotions-in-claude-that-influence-its-behavior/",
      },
      {
        label: "Anthropic Research — Emotion concepts and function",
        url: "https://www.anthropic.com/research/emotion-concepts-function",
      },
      {
        label:
          "BBC News — AI system resorts to blackmail if told it will be removed",
        url: "https://www.bbc.com/news/articles/cpqeng9d20go",
      },
      {
        label: "Anthropic Research — Agentic misalignment",
        url: "https://www.anthropic.com/research/agentic-misalignment",
      },
      {
        label:
          "Fortune — When AI models ‘blackmail’: existence goals and threats (labs study)",
        url: "https://fortune.com/2025/06/23/ai-models-blackmail-existence-goals-threatened-anthropic-openai-xai-google/",
      },
      {
        label: "CNBC — Oracle layoffs and shift toward AI spending",
        url: "https://www.cnbc.com/2026/03/31/oracle-layoffs-ai-spending.html",
      },
      {
        label:
          "Greenpeace — AI, energy, environment, and democracy",
        url: "https://www.greenpeace.org/international/story/82486/ai-energy-environment-democracy/",
      },
      {
        label:
          "ScienceDaily — AI breakthrough cuts energy use by 100x while boosting accuracy (Tufts)",
        url: "https://www.sciencedaily.com/releases/2026/04/260405003952.htm",
      },
    ],
  },
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
  "2026-04-13": () => import("@/content/blog/2026-04-13.mdx"),
  "2026-04-06": () => import("@/content/blog/2026-04-06.mdx"),
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
