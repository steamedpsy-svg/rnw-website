import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { HERO_BLUR } from "@/lib/hero-blur";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "PEOPLE · 사람들",
  description:
    "비즈니스의 성공을 돕는 루츠앤윙스의 사람들 — GEO 기반 브랜드 성장 전문가 그룹.",
  alternates: { canonical: `${SITE_URL}/people` },
};

const TEAMS = [
  {
    name: "브랜드기획팀",
    role: "브랜드 전략 기획 및 설계",
  },
  {
    name: "마케팅팀",
    role: "매출 성장 전략 및 캠페인 운영",
  },
  {
    name: "DX 개발팀",
    role: "DX 개발 지원 (홈페이지 & 솔루션)",
  },
  {
    name: "SNS 운영팀",
    role: "SNS 채널 운영 및 광고",
  },
  {
    name: "디자인팀",
    role: "디자인 · 영상 제작",
  },
] as const;

const CEO_CAREER = [
  "신한카드 빅데이터 연구소장",
  "신한카드 브랜드기획팀장",
  "신한카드 SNS 랩장",
  "AI 비즈니스 전략 전문가",
  "현 루츠앤윙스 대표",
] as const;

export default function PeoplePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "홈", url: SITE_URL },
          { name: "PEOPLE", url: `${SITE_URL}/people` },
        ])}
      />

      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <Image
          src="/images/visuals/people-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={HERO_BLUR.people}
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
            Who RnW · 루츠앤윙스
          </p>
          <h1 style={{ color: "#ffffff" }} className="mt-4 max-w-3xl">
            비즈니스의 성공을 돕는 루츠앤윙스의 사람들
          </h1>
        </Container>
      </section>

      {/* CEO */}
      <section className="bg-white">
        <Container className="py-20 md:py-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
            <div
              style={{ color: "#ffffff" }}
              className="rounded-2xl bg-[var(--color-navy)] p-6 md:p-7 overflow-hidden"
            >
              <p className="text-xs uppercase tracking-[0.18em] font-bold text-[var(--color-amber)]">
                CEO
              </p>
              <div className="mt-5 relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-white">
                <Image
                  src="/images/people/ceo.png"
                  alt="장재영 대표"
                  fill
                  sizes="(min-width: 768px) 360px, 80vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-5 text-2xl font-bold tracking-tight">장재영</p>
              <p className="mt-1 text-white/70 text-sm">Jaeyoung Jang</p>
              <p className="mt-5 text-sm font-semibold text-[var(--color-amber)] leading-relaxed">
                DATA와 AI로 디지털마케팅 혁신
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.18em] font-semibold uppercase text-[var(--color-grey-500)]">
                Profile
              </p>
              <h2 className="mt-3 text-[var(--color-navy)]">대표이사 소개</h2>
              <blockquote className="mt-6 border-l-4 border-[var(--color-amber)] pl-5 text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-navy)] leading-snug">
                “루츠앤윙스의 ‘꿈’은 고객사의 ‘비상’ 입니다.”
              </blockquote>
              <p className="mt-6 text-[var(--color-grey-700)] leading-relaxed max-w-2xl whitespace-pre-line">
                {"대기업 빅데이터 · 브랜드 · SNS · AI 영역에서 쌓은 경력을 바탕으로,\n데이터에서 출발해 브랜드 전략과 디지털 채널까지 하나의 흐름으로 설계합니다."}
              </p>
              <p className="mt-10 text-xs tracking-[0.18em] font-semibold uppercase text-[var(--color-grey-500)]">
                Career
              </p>
              <h3 className="mt-2 text-[var(--color-navy)]">
                주요 경력 및 성과
              </h3>
              <ul className="mt-6 space-y-4">
                {CEO_CAREER.map((c) => (
                  <li
                    key={c}
                    className="flex gap-4 items-start border-b border-[var(--border)] pb-4"
                  >
                    <span
                      aria-hidden
                      className="text-[var(--color-amber)] font-bold mt-1"
                    >
                      ·
                    </span>
                    <span className="text-[var(--color-grey-900)] leading-relaxed">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Team grid */}
      <section className="bg-[var(--surface-soft)]">
        <Container className="py-20 md:py-24">
          <p className="text-xs tracking-[0.18em] font-semibold uppercase text-[var(--color-grey-500)]">
            Organization
          </p>
          <h2 className="mt-3 text-[var(--color-navy)] max-w-3xl">
            GEO 기반 브랜드 성장 전문가 그룹
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAMS.map((t, idx) => (
              <article
                key={t.name}
                className="rounded-2xl bg-white border border-[var(--border)] p-7 hover:border-[var(--color-navy)] transition-colors"
              >
                <p className="text-[var(--color-amber)] font-bold text-xs tracking-[0.18em]">
                  TEAM 0{idx + 1}
                </p>
                <h3 className="mt-3 text-[var(--color-navy)]">{t.name}</h3>
                <p className="mt-3 text-sm text-[var(--color-grey-700)] leading-relaxed">
                  {t.role}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
