/**
 * 공통 SEO 상수 — 진단 #1·#8·#11·#13 해결의 단일 출처
 */

export const SITE_URL = "https://rnw0221.com";

export const SITE = {
  name: "Roots N Wings",
  nameKo: "루츠앤윙스",
  legalName: "주식회사 루츠앤윙스",
  tagline: "GEO와 데이터로 설계하는 브랜드 성장 전략",
  taglineEn: "GEO & Data-Driven Solutions for Brand Growth",
  description:
    "GEO 진단부터 데이터 분석, 브랜드 전략, 콘텐츠 설계, 마케팅 실행과 성과 평가까지 하나의 흐름으로 연결하는 컨설팅을 제공합니다.",
  url: SITE_URL,
  // OG 이미지는 src/app/opengraph-image.tsx 파일 컨벤션으로 자동 생성됨
  locale: "ko_KR",
  // 사무실 주소 (소개에서만 노출 — 진단 #4: 본문 다중 노출 제거)
  address: {
    streetAddress: "충정로 53, 골든타워 1207·1208호",
    addressLocality: "서대문구",
    addressRegion: "서울",
    postalCode: "03737",
    addressCountry: "KR",
  },
  contact: {
    email: "hello@rnw0221.com",
  },
  sameAs: [] as string[],
} as const;

// 톱 네비 — v4.11 doc §1 확정안: 6개 메뉴 + 우측 CTA 버튼
export const NAV = [
  { href: "/about", label: "ABOUT RnW" },
  { href: "/service", label: "SERVICE" },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/people", label: "PEOPLE" },
  { href: "/contact", label: "CONTACT" },
  { href: "/insight", label: "INSIGHT" },
] as const;
