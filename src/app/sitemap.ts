import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/data/blog";
import { getProjectsList } from "@/data/projects";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;
  const blogPosts = getBlogPosts();
  const projects = getProjectsList();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/insights`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const insightRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/insights/${post.slug}`,
    lastModified: new Date(`${post.date}T12:00:00.000Z`),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...insightRoutes, ...projectRoutes];
}
