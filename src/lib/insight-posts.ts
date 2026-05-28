/**
 * INSIGHT 게시물 매니페스트 — 인덱스/RSS/사이트맵에서 단일 출처로 사용
 * 새 글 추가 시 (1) src/app/insight/[slug]/page.mdx 작성 (2) 여기 항목 추가
 */
export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // YYYY-MM-DD
  readMinutes: number;
};

export const INSIGHT_POSTS: InsightPost[] = [
  {
    slug: "what-is-geo",
    title: "GEO란 무엇인가",
    description:
      "AI 검색 시대의 브랜드 노출 전략 — GEO 정의, 기존 SEO와의 차이, 그리고 왜 지금 중요한가.",
    category: "GEO 입문",
    date: "2026-05-23",
    readMinutes: 6,
  },
  {
    slug: "search-to-citation",
    title: "검색에서 인용으로",
    description:
      "콘텐츠 전략은 어떻게 바뀌는가 — 검색 노출에서 AI 인용 가능성으로 무게중심이 옮겨가는 흐름.",
    category: "콘텐츠 전략",
    date: "2026-05-23",
    readMinutes: 7,
  },
  {
    slug: "ai-brand-content-structure",
    title: "생성형 AI가 이해하는 브랜드 콘텐츠 구조",
    description:
      "엔티티 · 컨텍스트 · 시그널 — AI가 브랜드를 정확히 인식하고 인용하게 만드는 콘텐츠 구조.",
    category: "GEO 실전",
    date: "2026-05-23",
    readMinutes: 8,
  },
];

export function getPost(slug: string): InsightPost | undefined {
  return INSIGHT_POSTS.find((p) => p.slug === slug);
}
