import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { SocialIcon, type SocialKind } from "@/components/SocialIcon";
import { breadcrumbLd } from "@/lib/jsonld";
import { HERO_BLUR } from "@/lib/hero-blur";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "PORTFOLIO · 클라이언트 실적",
  description:
    "KB국민카드, 한국렌탈, KBS 디지털제작국, 유앤아이의원 광주점, 그레이스셀 강남병원, 동국대 메타융합상담코칭센터 — RnW와 함께한 6개 브랜드의 협업 사례.",
  alternates: { canonical: `${SITE_URL}/portfolio` },
};

const CASES = [
  {
    client: "KB국민카드",
    category: "금융 · 카드",
    period: "협업 진행",
    logo: "/images/clients/kb.png",
    summary: "트렌드 기반 숏폼·시리즈 콘텐츠와 검색 친화적 정보 구조 설계",
    items: [
      "트렌드 기반 숏폼 콘텐츠",
      "시리즈 콘텐츠 기획",
      "금융서비스 홍보 콘텐츠",
      "검색 친화적 콘텐츠 구조 설계",
    ],
    channels: ["naverblog", "youtube"] as SocialKind[],
  },
  {
    client: "한국렌탈",
    category: "B2B · 렌탈",
    period: "협업 진행",
    logo: "/images/clients/krental2.png",
    summary: "B2B 뉴스룸과 SEO·GEO 통합 전략으로 검색 자산 구축",
    items: [
      "공식 뉴스룸 · 블로그 기획 · 운영",
      "SEO · GEO 통합 전략",
      "Instagram · LinkedIn 콘텐츠",
    ],
    channels: ["naverblog", "instagram", "youtube", "linkedin"] as SocialKind[],
  },
  {
    client: "KBS 디지털제작국",
    category: "방송 · 미디어",
    period: "협업 진행",
    logo: "/images/clients/kbs.png",
    summary: "공영 방송 YouTube 채널 운영과 시청자 데이터 분석",
    items: [
      "YouTube 채널 운영",
      "방송 썸네일 제작",
      "SNS 시청자 분석",
    ],
    channels: ["youtube", "naverblog", "instagram", "tiktok"] as SocialKind[],
  },
  {
    client: "유앤아이의원 광주점",
    category: "의료 · 로컬",
    period: "협업 진행",
    logo: "/images/clients/yoni2.png",
    summary: "로컬 의료 브랜드의 검색 노출과 채널 운영 최적화",
    items: [
      "Instagram 공식 채널 운영",
      "Naver cafe · blog 관리",
      "시즌 이벤트 기획",
      "브랜드 검색 노출 최적화",
    ],
    channels: ["instagram", "naverblog", "kakaotalk"] as SocialKind[],
  },
  {
    client: "그레이스셀 강남병원",
    category: "의료 · 강남",
    period: "협업 진행",
    logo: "/images/clients/gcell2.png",
    summary: "강남 의료 브랜드의 콘텐츠와 디지털 광고 운영",
    items: [
      "병원 홈페이지 콘텐츠",
      "공식 블로그 의학 칼럼",
      "Meta 광고",
    ],
    channels: ["naverblog", "meta"] as SocialKind[],
  },
  {
    client: "동국대 메타융합상담코칭센터",
    category: "교육 · 학술",
    period: "협업 진행",
    logo: "/images/clients/dongguk.png",
    summary: "학술 기관의 프로그램 홍보와 매체 운영",
    items: [
      "팀 코칭 워크숍 홍보",
      "Meta 광고",
      "인터넷신문사 광고",
    ],
    channels: ["meta", "youtube"] as SocialKind[],
  },
] as const;

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "홈", url: SITE_URL },
          { name: "PORTFOLIO", url: `${SITE_URL}/portfolio` },
        ])}
      />

      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <Image
          src="/images/visuals/portfolio-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={HERO_BLUR.portfolio}
          className="object-cover object-center opacity-45"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(14,19,17,0.85) 0%, rgba(14,19,17,0.55) 60%, rgba(14,19,17,0.2) 100%)",
          }}
        />
        <Container className="relative py-20 md:py-28">
          <p
            style={{ color: "#FFC857" }}
            className="text-xs tracking-[0.18em] font-semibold uppercase"
          >
            Portfolio
          </p>
          <h1 style={{ color: "#ffffff" }} className="mt-4 max-w-3xl">
            성장하는 회사와 고객이 선택한 루츠앤윙스
          </h1>
          <p
            style={{ color: "rgba(255,255,255,0.85)" }}
            className="mt-8 max-w-2xl leading-relaxed"
          >
            금융 · B2B · 미디어 · 의료 · 교육까지 — 루츠앤윙스는 각 산업의
            맥락에 맞는 GEO · 콘텐츠 · 채널 전략을 함께 설계해 왔습니다.
          </p>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-6">
            {CASES.map((c) => (
              <article
                key={c.client}
                className="rounded-2xl border border-[var(--border)] p-7 md:p-8 hover:border-[var(--color-navy)] transition-colors"
              >
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center justify-center h-12 w-32">
                    <Image
                      src={c.logo}
                      alt={`${c.client} 로고`}
                      width={120}
                      height={40}
                      unoptimized
                      className="object-contain max-h-9 w-auto"
                    />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-grey-500)] bg-[var(--surface-soft)] rounded-full px-2.5 py-1">
                    {c.category}
                  </span>
                </div>
                <h2 className="mt-5 text-[var(--color-navy)] text-xl font-bold">
                  {c.client}
                </h2>
                <p className="mt-3 text-sm text-[var(--color-grey-700)] leading-relaxed">
                  {c.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--color-grey-900)]">
                  {c.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        aria-hidden
                        className="text-[var(--color-amber)] font-bold"
                      >
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {c.channels && c.channels.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-[var(--border)] flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-grey-500)] mr-1">
                      Channels
                    </span>
                    {c.channels.map((k) => (
                      <SocialIcon key={k} kind={k} size={26} />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-[var(--surface-soft)] p-8 md:p-10 text-center">
            <h2 className="text-[var(--color-navy)]">
              비슷한 고민을 함께 풀고 싶으신가요?
            </h2>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] text-[var(--color-navy)] px-6 py-3 text-sm font-bold hover:bg-[var(--color-amber-soft)] transition-colors"
            >
              컨설팅 문의하기 →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
