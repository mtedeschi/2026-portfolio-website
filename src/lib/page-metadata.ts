import type { Metadata } from "next";
import { getSiteUrl, siteConfig } from "@/lib/site";

const OG_SIZE = { width: 1200, height: 630 } as const;

export function pageMetadata(opts: {
  path: string;
  title: string;
  description: string;
  /** Path under public/ or absolute URL string */
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const base = getSiteUrl();
  const pathname = opts.path.startsWith("/") ? opts.path : `/${opts.path}`;
  const canonical = new URL(pathname, base).toString();
  const imagePath = opts.ogImage ?? siteConfig.defaultOgImage;

  const ogImages: NonNullable<NonNullable<Metadata["openGraph"]>["images"]> = [
    {
      url: imagePath,
      ...OG_SIZE,
      alt: opts.title,
    },
  ];

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: pathname },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: opts.type ?? "website",
      images: ogImages,
      ...(opts.type === "article" && opts.publishedTime
        ? {
            publishedTime: opts.publishedTime,
            ...(opts.modifiedTime ? { modifiedTime: opts.modifiedTime } : {}),
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [imagePath],
    },
  };
}
