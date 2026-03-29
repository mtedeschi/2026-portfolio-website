/**
 * Canonical site origin for metadata, sitemap, and structured data.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://miketedeschi.com).
 */
export function getSiteUrl(): URL {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://mtedeschi.com";
  const normalized = raw.replace(/\/$/, "");
  return new URL(normalized);
}

export const defaultSiteDescription =
  "Portfolio of Mike Tedeschi — AI-first design, product, and technology leadership, case studies, and insights.";

export const siteConfig = {
  name: "Mike Tedeschi",
  /** Used in Open Graph locale */
  locale: "en_US",
  /** Default share image when a page has no specific asset (relative to site root) */
  defaultOgImage: "/images/solventum/solventum_card_background.jpg",
  linkedInUrl: "https://www.linkedin.com/in/miketedeschi",
  substackUrl: "https://miketedeschi.substack.com",
} as const;
