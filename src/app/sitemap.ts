import type { MetadataRoute } from "next";
import { INSIGHT_POSTS } from "@/lib/insight-posts";
import { SITE_URL } from "@/lib/seo";

/**
 * 진단 이슈 #6 (사이트맵 빈약) · #7 (HTTPS 미정규화) 해결
 * Next.js sitemap.ts 컨벤션 — 모든 URL이 SITE_URL 기준 HTTPS로 자동 정규화
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/about", priority: 0.9, freq: "monthly" },
    { path: "/service", priority: 0.9, freq: "monthly" },
    { path: "/portfolio", priority: 0.8, freq: "monthly" },
    { path: "/people", priority: 0.7, freq: "monthly" },
    { path: "/insight", priority: 0.9, freq: "weekly" },
    { path: "/contact", priority: 0.7, freq: "yearly" },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified: today,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...INSIGHT_POSTS.map((post) => ({
      url: `${SITE_URL}/insight/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
