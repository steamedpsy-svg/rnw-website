import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { SITE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ABOUT RnW · 회사 소개",
  description:
    "루츠앤윙스(RnW)는 GEO 시대에 브랜드가 발견되고 선택되는 방식을 설계하는 데이터 기반 마케팅 컨설팅 파트너입니다.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const VALUES = [
  {
    title: "데이터로 시작합니다",
    body: "감(感)이 아닌 검색·소셜·채널 데이터에서 출발해 의사결정의 근거를 만듭니다.",
  },
  {
    title: "GEO를 코어로 둡니다",
    body: "AI 검색 시대에 인용·추천 받는 브랜드의 문법을 설계합니다.",
  },
  {
    title: "전략과 실행을 연결합니다",
    body: "전략 보고서로 끝내지 않고 실제 운영·캠페인까지 한 흐름으로 진행합니다.",
  },
  {
    title: "성과로 증명합니다",
    body: "채널 KPI로 GEO 성과를 정량화하고 반복 개선합니다.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "홈", url: SITE_URL },
          { name: "ABOUT RnW", url: `${SITE_URL}/about` },
        ])}
      />

      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <Image
          src="/images/visuals/about-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
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
            About RnW
          </p>
          <h1 style={{ color: "#ffffff" }} className="mt-4 max-w-4xl">
            {SITE.nameKo}는 GEO 시대에 브랜드가
            <br />
            발견되고 선택되는 방식을 설계하는
            <br />
            데이터 기반 마케팅 컨설팅 파트너입니다.
          </h1>
          <p
            style={{ color: "rgba(255,255,255,0.85)" }}
            className="mt-8 max-w-2xl leading-relaxed"
          >
            우리는 시장 · 고객 데이터와 검색 환경을 함께 분석해, 브랜드가
            생성형 AI와 고객 모두에게 더 잘 발견되고 선택될 수 있도록
            마케팅 전 영역을 GEO 중심으로 설계합니다.
          </p>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white">
        <Container className="py-20 md:py-24">
          <p
            style={{ color: "#018B6F" }}
            className="text-xs tracking-[0.18em] font-semibold uppercase"
          >
            How We Work
          </p>
          <h2 className="mt-3 text-[var(--color-navy)]">
            루츠앤윙스가 일하는 4가지 원칙
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {VALUES.map((v, idx) => (
              <article
                key={v.title}
                className="rounded-2xl border border-[var(--border)] p-8"
              >
                <p className="text-[var(--color-amber)] font-bold text-sm tracking-[0.18em]">
                  0{idx + 1}
                </p>
                <h3 className="mt-3 text-[var(--color-navy)]">{v.title}</h3>
                <p className="mt-3 text-[var(--color-grey-700)] leading-[1.85]">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* RnW Core Values — 회사 소개 자료 기반 */}
      <section className="bg-[var(--surface-soft)]">
        <Container className="py-20 md:py-24">
          <p
            style={{ color: "#018B6F" }}
            className="text-xs tracking-[0.18em] font-semibold uppercase"
          >
            Why RnW
          </p>
          <h2 className="mt-3 text-[var(--color-navy)]">
            루츠앤윙스의 핵심가치
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--color-grey-700)] leading-relaxed">
            루츠앤윙스는 단단한 뿌리가 되어, 고객 성공의 날개를 펼쳐 드립니다.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "혁신성",
                body: "변화가 빠른 시대, 한계를 넘는 성장의 비상",
              },
              {
                title: "정확성",
                body: "데이터와 직관을 융합한 의사결정",
              },
              {
                title: "진정성",
                body: "진정성을 기반으로 차별화된 마케팅",
              },
              {
                title: "고객중심",
                body: "고객 Needs에 신속한 대응",
              },
            ].map((v) => (
              <article
                key={v.title}
                className="rounded-2xl bg-white border border-[var(--border)] p-7"
              >
                <h3 className="text-[var(--color-navy)] text-lg font-bold">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-grey-700)] leading-[1.85]">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 고객 중심 업무 프로세스 — PDF 기반 */}
      <section className="bg-white border-t border-[var(--border)]">
        <Container className="py-20 md:py-24">
          <p
            style={{ color: "#018B6F" }}
            className="text-xs tracking-[0.18em] font-semibold uppercase"
          >
            Process
          </p>
          <h2 className="mt-3 text-[var(--color-navy)]">
            고객 중심 업무 프로세스
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--color-grey-700)] leading-relaxed">
            현장의 목소리에서 출발해, AI·데이터로 방향을 잡고, 실행과 인사이트를 순환시키는 4단계 흐름입니다.
          </p>
          <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "현장의견 수렴",
                body: "고객사와 시장에서 객관적인 의견을 수렴합니다.",
              },
              {
                step: "02",
                title: "정확한 타겟팅",
                body: "AI와 DATA로 유의미한 타겟과 방향성을 찾습니다.",
              },
              {
                step: "03",
                title: "분석 및 인사이트",
                body: "마케팅 결과를 분석하여 새로운 인사이트를 도출합니다.",
              },
              {
                step: "04",
                title: "마케팅 실행",
                body: "객관적인 KPI로 증명되는 마케팅을 실행합니다.",
              },
            ].map((p) => (
              <li
                key={p.step}
                className="rounded-2xl border border-[var(--border)] p-7 bg-white hover:border-[var(--color-navy)] transition-colors"
              >
                <p className="text-[var(--color-amber)] font-bold text-xs tracking-[0.18em]">
                  STEP {p.step}
                </p>
                <h3 className="mt-3 text-[var(--color-navy)] text-lg font-bold">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-grey-700)] leading-[1.85]">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* RnW 차별화 강점 */}
      <section className="bg-[var(--surface-soft)] border-t border-[var(--border)]">
        <Container className="py-20 md:py-24">
          <p
            style={{ color: "#018B6F" }}
            className="text-xs tracking-[0.18em] font-semibold uppercase"
          >
            Strength
          </p>
          <h2 className="mt-3 text-[var(--color-navy)] max-w-3xl">
            루츠앤윙스만의 강점
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--color-grey-700)] leading-relaxed">
            대기업 마케팅 · 빅데이터 출신 전문가가 다른 에이전시와 다르게
            제공하는 4가지 차별화 강점입니다.
          </p>
          <ul className="mt-12 grid sm:grid-cols-2 gap-5">
            {[
              {
                head: "온라인 · SNS 채널 통합 운영",
                body: "홈페이지 · 네이버 · Meta · YouTube · TikTok을 하나의 채널 믹스로 묶어 일관된 메시지로 운영합니다.",
              },
              {
                head: "전략적 제휴 · 파트너십",
                body: "공공기관 · 언론사 · 이업종과의 협업 체계를 연결해 단독 마케팅으로는 닿을 수 없는 노출 자산을 확보합니다.",
              },
              {
                head: "DB 활용 마케팅",
                body: "카드사 · 통신사 DB 운영 경험을 기반으로 타깃 정밀도가 높은 마케팅을 설계합니다.",
              },
              {
                head: "AI 마케팅 자동화",
                body: "추천 알고리즘과 AI 솔루션을 활용해 콘텐츠 발행 · 광고 운영의 자동화 체계를 구축합니다.",
              },
            ].map((s) => (
              <li
                key={s.head}
                className="rounded-2xl border border-[var(--border)] bg-white p-7 hover:border-[var(--color-navy)] transition-colors"
              >
                <p
                  style={{ color: "#018B6F" }}
                  className="font-bold text-lg"
                >
                  {s.head}
                </p>
                <p className="mt-3 text-sm text-[var(--color-grey-700)] leading-[1.85]">
                  {s.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
