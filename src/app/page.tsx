import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { SocialIcon, type SocialKind } from "@/components/SocialIcon";
import { breadcrumbLd, serviceLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/seo";

/**
 * 홈 페이지 — V3 (V1 구조 + V2 색상 + PDF 회사 소개 보강)
 * 구성: Hero / WE-NOW / SERVICE / PORTFOLIO / INSIGHT / CTA
 */

type ServiceCard = {
  title: string;
  titleEn: string;
  image: string;
  imageAlt: string;
  items: readonly string[];
  href: string;
};

const SERVICES: readonly ServiceCard[] = [
  {
    title: "GEO 기반 컨설팅",
    titleEn: "GEO-Driven Solutions",
    image: "/images/visuals/task1.jpg",
    imageAlt: "GEO 진단 데이터 시각화",
    items: [
      "GEO 현황 진단",
      "데이터 기반 인사이트 분석",
      "GEO 최적화 전략 수립",
      "마케팅 실행 로드맵 및 운영 체계 설계",
    ],
    href: "/service#geo",
  },
  {
    title: "브랜딩",
    titleEn: "Brand Strategy",
    image: "/images/visuals/task2.jpg",
    imageAlt: "브랜드 전략 시각화",
    items: [
      "브랜드 정체성 · 메시지 시스템",
      "네이밍 · 슬로건 · 비주얼 가이드",
      "브랜드 경험 설계",
    ],
    href: "/service#branding",
  },
  {
    title: "마케팅",
    titleEn: "Marketing Execution",
    image: "/images/visuals/task3.jpg",
    imageAlt: "마케팅 데이터 분석",
    items: [
      "데이터 기반 채널 전략",
      "캠페인 기획 · 운영",
      "성과 측정 · 최적화",
    ],
    href: "/service#marketing",
  },
  {
    title: "콘텐츠 제작 · 운영",
    titleEn: "Content Production & Operations",
    image: "/images/visuals/task4.jpg",
    imageAlt: "콘텐츠 제작·운영 시각화",
    items: [
      "브랜드 채널 콘텐츠 기획 · 제작",
      "SNS · 블로그 · 뉴스룸 운영",
      "KPI 관리 · 리포트",
    ],
    href: "/service#content",
  },
];

type PortfolioCase = {
  client: string;
  logo: { kind: "image"; src: string; alt: string } | { kind: "text"; label: string };
  items: readonly string[];
  socials: readonly SocialKind[];
  caption?: string;
};

const PORTFOLIO: readonly PortfolioCase[] = [
  {
    client: "한국렌탈",
    logo: { kind: "image", src: "/images/clients/krental2.png", alt: "한국렌탈 로고" },
    items: [
      "공식 뉴스룸 & 블로그 기획 및 운영",
      "검색 상위 노출을 위한 SEO 전략 수립",
      "인스타그램 · 링크드인 콘텐츠 제작",
    ],
    socials: ["naverblog", "youtube", "instagram"],
  },
  {
    client: "KB국민카드",
    logo: { kind: "text", label: "KB국민카드" },
    items: [
      "트렌드 기반 숏폼(Shorts)",
      "시리즈 콘텐츠 기획",
      "카드 상품 및 금융 서비스 홍보 콘텐츠 제작",
    ],
    socials: ["naverblog", "youtube"],
  },
  {
    client: "유앤아이의원 광주점",
    logo: { kind: "image", src: "/images/clients/yoni2.png", alt: "유앤아이의원 광주점 로고" },
    items: [
      "인스타그램 공식 채널 운영",
      "네이버 카페 · 블로그 대행",
      "시즌 이벤트 기획",
    ],
    socials: ["instagram", "naverblog"],
  },
  {
    client: "그레이스셀 강남병원",
    logo: { kind: "image", src: "/images/clients/gcell2.png", alt: "그레이스셀 강남병원 로고" },
    items: [
      "병원 홈페이지 콘텐츠 기획 및 운영",
      "공식 블로그 내 건강/의학 칼럼 연재",
      "메타광고",
    ],
    socials: ["naverblog", "kakaotalk"],
  },
  {
    client: "동국대학교 메타융합상담코칭센터",
    logo: { kind: "text", label: "DonggukMeta" },
    items: [
      "팀 코칭 워크숍 프로그램 홍보",
      "메타광고",
      "인터넷신문사 광고",
    ],
    socials: ["facebook"],
  },
  {
    client: "KBS 디지털 제작국",
    logo: { kind: "text", label: "KBS" },
    items: [
      "Youtube 채널 운영 지원 (머니올라, 다큐, 걸어서 세계속으로 등)",
      "방송 콘텐츠 썸네일 제작",
      "SNS채널별 시청자 분석 및 구독자 관리",
    ],
    socials: ["tiktok", "youtube"],
    caption: "KBS 디지털 제작국 : 머니올라, KBS다큐, KBS여행",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "홈", url: SITE_URL }]),
          serviceLd({
            name: "GEO 기반 컨설팅",
            description:
              "GEO 현황 진단부터 데이터 분석, 전략 수립, 실행 로드맵까지 일관되게 설계하는 컨설팅",
            url: `${SITE_URL}/service#geo`,
          }),
        ]}
      />

      {/* ============ HERO ============ */}
      <section aria-label="Hero" className="relative isolate overflow-hidden bg-[#0a1620]">
        {/* 배경 이미지 (PCB / 디지털 트랜스포메이션) */}
        <Image
          src="/images/visuals/hero.png"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* 좌→우 그라데이션 오버레이 — 좌측 텍스트 가독성 확보 */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,16,24,0.92) 0%, rgba(8,16,24,0.78) 35%, rgba(8,16,24,0.45) 70%, rgba(8,16,24,0.25) 100%)",
          }}
        />

        <Container className="relative py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p
                style={{ color: "#2BBE9E" }}
                className="text-xs tracking-[0.18em] font-semibold uppercase"
              >
                Roots N Wings · GEO Era
              </p>
              <div className="mt-8 max-w-[480px]">
                <Image
                  src="/images/rnw_logo.png"
                  alt="Roots N Wings · 루츠앤윙스"
                  width={640}
                  height={220}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div
              style={{ color: "#ffffff", backgroundColor: "rgba(8,16,24,0.55)" }}
              className="rounded-2xl border border-white/15 backdrop-blur-md p-8 md:p-10"
            >
              <h1
                style={{ color: "#ffffff" }}
                className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.35]"
              >
                GEO 시대,
                <br />
                브랜드를 설계합니다
              </h1>
              <p
                style={{ color: "rgba(255,255,255,0.82)" }}
                className="mt-6 leading-[1.75]"
              >
                GEO 진단부터 데이터 분석, 브랜드 전략, 콘텐츠 설계,
                <br className="hidden sm:block" />
                마케팅 실행과 성과 평가까지 하나의 흐름으로 연결하는
                <br className="hidden sm:block" />
                컨설팅을 제공합니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/service"
                  style={{ color: "#0E1311", backgroundColor: "#ffffff" }}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  서비스 보기
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] text-[var(--color-navy)] px-5 py-3 text-sm font-bold hover:bg-[var(--color-amber-soft)] transition-colors"
                >
                  컨설팅 문의하기
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ WE / NOW ============ */}
      <section aria-label="WE / NOW" className="bg-white">
        <Container className="py-24">
          <p className="text-xs tracking-[0.18em] font-semibold uppercase text-[var(--color-grey-500)]">
            Who We Are · What We Do
          </p>
          <h2 className="mt-3 text-[var(--color-navy)] max-w-3xl">
            GEO와 데이터로 설계하는 마케팅 성과 최적화
          </h2>

          <div className="mt-12 relative w-full aspect-[16/6] rounded-2xl overflow-hidden bg-[var(--surface-soft)] border border-[var(--border)]">
            <Image
              src="/images/visuals/we-now.png"
              alt="GEO 데이터 분석과 브랜드 인사이트 시각화"
              fill
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10 md:gap-16">
            <article>
              <h3
                style={{ color: "#B53A2B" }}
                className="font-bold tracking-[0.18em] uppercase text-sm"
              >
                We
              </h3>
              <p
                style={{ color: "#0E1311" }}
                className="mt-4 leading-[1.85] text-lg"
              >
                시장 · 고객 데이터와 검색 환경을 함께 분석해,
                <br />
                브랜드가 생성형 AI와 고객 모두에게
                <br />
                더 잘 발견되고 선택될 수 있도록
                <br />
                마케팅 전 영역을 GEO 중심으로 설계합니다.
              </p>
            </article>
            <article>
              <h3
                style={{ color: "#01A081" }}
                className="font-bold tracking-[0.18em] uppercase text-sm"
              >
                Now
              </h3>
              <p
                style={{ color: "#0E1311" }}
                className="mt-4 leading-[1.85] text-lg"
              >
                고객사의 니즈에 맞춰
                <br />
                최적의 마케팅 전략을 기획하고 실행합니다.
                <br />
                홈페이지 및 SNS 채널을
                <br />
                체계적으로 운영 관리합니다.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* ============ SERVICE 미리보기 ============ */}
      <section aria-label="서비스" className="bg-[var(--surface-soft)]">
        <Container className="py-24">
          <p className="text-xs tracking-[0.18em] font-semibold uppercase text-[var(--color-grey-500)]">
            Service
          </p>
          <h2 className="mt-3 text-[var(--color-navy)] max-w-3xl">
            GEO와 데이터로 설계하는 브랜드 성장 전략
          </h2>
          <p className="mt-3 text-[var(--color-grey-500)] text-sm tracking-wide">
            GEO &amp; Data-Driven Solutions for Brand Growth
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl p-6 border border-[var(--border)] bg-white hover:border-[var(--color-navy)] transition-colors flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[var(--surface-soft)] mb-5">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 style={{ color: "#018B6F" }} className="font-bold">
                  {s.title}
                </h3>
                <p
                  style={{ color: "#6B7572" }}
                  className="mt-1 text-xs tracking-wider"
                >
                  {s.titleEn}
                </p>
                <ul
                  style={{ color: "#3D4744" }}
                  className="mt-5 space-y-1.5 text-sm"
                >
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden>·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.href}
                  style={{ color: "#018B6F" }}
                  className="mt-6 text-sm font-medium inline-flex items-center gap-1 hover:opacity-80"
                >
                  자세히 보기 <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ PORTFOLIO 미리보기 ============ */}
      <section aria-label="포트폴리오" className="bg-white">
        <Container className="py-24">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <p className="text-xs tracking-[0.18em] font-semibold uppercase text-[var(--color-grey-500)]">
                Portfolio
              </p>
              <h2 className="mt-3 text-[var(--color-navy)]">
                성장하는 회사와 고객이 선택한 루츠앤윙스
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-amber)]"
            >
              전체 포트폴리오 →
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO.map((p) => (
              <article
                key={p.client}
                className="rounded-2xl border border-[var(--border)] bg-white p-7 hover:border-[var(--color-navy)] transition-colors flex flex-col"
              >
                <div className="h-12 flex items-center">
                  {p.logo.kind === "image" ? (
                    <Image
                      src={p.logo.src}
                      alt={p.logo.alt}
                      width={160}
                      height={48}
                      className="max-h-10 w-auto object-contain"
                    />
                  ) : (
                    <span
                      style={{ color: "#0E1311" }}
                      className="text-lg font-bold tracking-tight"
                    >
                      {p.logo.label}
                    </span>
                  )}
                </div>

                <ul
                  style={{ color: "#0E1311" }}
                  className="mt-5 space-y-2 text-sm leading-relaxed"
                >
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden style={{ color: "#6B7572" }}>·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2.5 flex-wrap">
                  {p.socials.map((s) => (
                    <SocialIcon key={s} kind={s} size={28} />
                  ))}
                </div>

                <p
                  style={{ color: "#0E1311" }}
                  className="mt-6 pt-5 border-t border-[var(--border)] text-sm font-bold"
                >
                  {p.caption ?? p.client}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ INSIGHT 티저 ============ */}
      <section aria-label="인사이트" className="bg-[var(--green-100)]">
        <Container className="py-24">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <p className="text-xs tracking-[0.18em] font-semibold uppercase text-[var(--color-grey-500)]">
                Insight
              </p>
              <h2 className="mt-3 text-[var(--color-navy)]">
                GEO 시대를 먼저 읽는 관점
              </h2>
            </div>
            <Link
              href="/insight"
              className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-amber)]"
            >
              인사이트 보기 →
            </Link>
          </div>
        </Container>
      </section>

      {/* ============ CTA ============ */}
      <section aria-label="문의하기" className="bg-[var(--color-navy)] text-white">
        <Container className="py-20 md:py-24 text-center">
          <h2 className="text-white max-w-3xl mx-auto">
            브랜드를 만들고 성장시키며 날개를 달아드립니다
          </h2>
          <p className="mt-5 text-white/80 text-lg">
            귀사의 브랜드 성장 가능성을 진단해보세요
          </p>
          <p className="mt-6 text-[var(--color-amber-soft)] text-base tracking-wide">
            루츠앤윙스의 &lsquo;꿈&rsquo;은 고객사의 &lsquo;비상&rsquo; 입니다.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] text-[var(--color-navy)] px-7 py-4 text-base font-bold hover:bg-[var(--color-amber-soft)] transition-colors"
          >
            컨설팅 문의하기
            <span aria-hidden>→</span>
          </Link>
        </Container>
      </section>
    </>
  );
}
