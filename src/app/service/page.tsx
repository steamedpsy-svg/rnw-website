import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, faqLd, serviceLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "서비스",
  description:
    "GEO 기반 컨설팅, 브랜딩, 마케팅, 콘텐츠 제작·운영 — RnW는 GEO와 데이터로 브랜드 성장 전략을 설계합니다. Diagnose · Design · Execute · Optimize 4단계 프로세스로 진행됩니다.",
  alternates: { canonical: `${SITE_URL}/service` },
};

type Category = {
  id: string;
  badge?: string;
  title: string;
  titleEn: string;
  summary: string;
  image: string;
  imageAlt: string;
  items: readonly { head: string; body: string }[];
};

const CATEGORIES: readonly Category[] = [
  {
    id: "geo",
    title: "GEO 기반 컨설팅",
    titleEn: "GEO-Driven Solutions",
    summary:
      "AI 검색 시대에 브랜드가 발견되고 인용되는 방식을 설계하는 통합 컨설팅",
    image: "/images/visuals/task1.jpg",
    imageAlt: "GEO 진단 데이터 시각화",
    items: [
      {
        head: "GEO 현황 진단",
        body: "브랜드의 AI 검색 노출, 콘텐츠 구조, 인용 가능성을 정량/정성 진단",
      },
      {
        head: "데이터 기반 인사이트 분석",
        body: "검색·소셜·제3자 데이터에서 시사점을 추출하고 우선순위 도출",
      },
      {
        head: "GEO 최적화 전략 수립",
        body: "메시지 아키텍처·콘텐츠 구조·구조화 데이터를 통합 설계",
      },
      {
        head: "마케팅 실행 로드맵 및 운영 체계 설계",
        body: "발행·운영·측정의 KPI와 거버넌스를 함께 셋업",
      },
    ],
  },
  {
    id: "branding",
    title: "브랜딩",
    titleEn: "Brand Strategy",
    summary: "GEO 시대에도 통하는 브랜드 정체성과 메시지 시스템 설계",
    image: "/images/visuals/task2.jpg",
    imageAlt: "브랜드 전략 시각화",
    items: [
      {
        head: "브랜드 정체성 · 메시지 시스템",
        body: "포지셔닝, 키 메시지, 페르소나 정의",
      },
      {
        head: "네이밍 · 슬로건 · 비주얼 가이드",
        body: "AI에 인용되기 좋은 구조의 네이밍·카피·비주얼",
      },
      {
        head: "브랜드 경험 설계",
        body: "고객 여정 전반의 일관성과 차별화",
      },
      {
        head: "브랜드 리포지셔닝 · 리뉴얼",
        body: "기존 브랜드의 톤·메시지를 GEO 시대에 맞게 재정렬",
      },
    ],
  },
  {
    id: "marketing",
    title: "마케팅",
    titleEn: "Marketing Execution",
    summary: "데이터 기반 채널 전략과 캠페인 실행, 성과 최적화",
    image: "/images/visuals/task3.jpg",
    imageAlt: "마케팅 데이터 분석",
    items: [
      {
        head: "데이터 기반 채널 전략",
        body: "GEO·SEO·소셜·페이드의 통합 채널 믹스",
      },
      {
        head: "캠페인 기획 · 운영",
        body: "지속 가능한 캠페인 사이클과 운영 체계",
      },
      {
        head: "성과 측정 · 최적화",
        body: "KPI 정의, 대시보드, 주기적 리포트와 반복 개선",
      },
      {
        head: "META 광고 최적화",
        body: "Facebook · Instagram 광고 집행과 성과 관리",
      },
    ],
  },
  {
    id: "content",
    title: "콘텐츠 제작 · 운영",
    titleEn: "Content Production & Operations",
    summary: "AI에 잘 인용되는 콘텐츠를 만들고 채널을 일관되게 운영",
    image: "/images/visuals/task4.jpg",
    imageAlt: "콘텐츠 제작·운영 시각화",
    items: [
      {
        head: "브랜드 채널 콘텐츠 기획 · 제작",
        body: "블로그·뉴스룸·영상·숏폼·인포그래픽",
      },
      {
        head: "SNS · 블로그 · 뉴스룸 운영",
        body: "발행 주기·톤·KPI를 포함한 채널 운영",
      },
      {
        head: "KPI 관리 · 리포트",
        body: "월간 성과 측정과 반복 개선",
      },
      {
        head: "영상 · 숏폼 콘텐츠 제작",
        body: "YouTube · Reels · TikTok용 영상 기획과 제작",
      },
    ],
  },
];

const PROCESS = [
  {
    step: "01",
    name: "Diagnose",
    nameKo: "진단",
    body: "브랜드의 검색 노출, 콘텐츠 구조, AI 인용 가능성을 진단합니다.",
  },
  {
    step: "02",
    name: "Design",
    nameKo: "설계",
    body: "GEO 관점에서 브랜드 메시지와 콘텐츠 전략을 재설계합니다.",
  },
  {
    step: "03",
    name: "Execute",
    nameKo: "실행",
    body: "블로그, 뉴스룸, SNS, 홈페이지 콘텐츠를 실행합니다.",
  },
  {
    step: "04",
    name: "Optimize",
    nameKo: "최적화",
    body: "성과 데이터를 분석하고 콘텐츠 구조를 지속적으로 개선합니다.",
  },
] as const;

const FAQ = [
  {
    question: "GEO와 SEO는 무엇이 다른가요?",
    answer:
      "SEO는 검색 결과 페이지에서의 노출과 클릭 최적화에 초점을 둡니다.\nGEO(Generative Engine Optimization)는 ChatGPT·Claude·Perplexity 같은 생성형 AI 검색에서 브랜드가 '인용·추천'되는 방식을 설계하는 영역입니다.\nRnW는 두 영역을 통합 전략으로 운영합니다.",
  },
  {
    question: "GEO 진단은 얼마나 걸리나요?",
    answer:
      "표준 진단은 약 1~2주가 소요됩니다. 브랜드의 AI 검색 가시성, 콘텐츠 구조, 구조화 데이터, 경쟁 브랜드 비교까지 포함한 리포트를 제공합니다.",
  },
  {
    question: "어떤 규모의 기업과 협업하나요?",
    answer:
      "스타트업부터 대기업·공공기관까지 다양한 규모의 브랜드와 협업합니다. KB국민카드, 한국렌탈, KBS 디지털제작국 등이 RnW의 컨설팅·운영을 함께한 파트너입니다.",
  },
] as const;

export default function ServicePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "홈", url: SITE_URL },
            { name: "서비스", url: `${SITE_URL}/service` },
          ]),
          serviceLd({
            name: "GEO 기반 컨설팅",
            description:
              "GEO 현황 진단부터 데이터 분석, 전략 수립, 실행 로드맵까지 일관되게 설계하는 컨설팅",
            url: `${SITE_URL}/service#geo`,
          }),
          faqLd(FAQ.map((f) => ({ question: f.question, answer: f.answer }))),
        ]}
      />

      {/* Header */}
      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <Image
          src="/images/visuals/service-hero.png"
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
            Service
          </p>
          <h1
            style={{ color: "#ffffff" }}
            className="mt-4 max-w-none md:whitespace-nowrap"
          >
            GEO와 데이터로 설계하는 브랜드 성장 전략
          </h1>
          <p
            style={{ color: "rgba(255,255,255,0.6)" }}
            className="mt-3 tracking-wide"
          >
            GEO &amp; Data-Driven Solutions for Brand Growth
          </p>
          <p
            style={{ color: "rgba(255,255,255,0.85)" }}
            className="mt-8 max-w-2xl leading-relaxed"
          >
            GEO 진단부터 데이터 분석, 브랜드 전략, 콘텐츠 설계, 마케팅
            실행과 성과 평가까지 하나의 흐름으로 연결하는 컨설팅을 제공합니다.
          </p>
        </Container>
      </section>

      {/* Categories */}
      <section className="bg-white">
        <Container className="py-20 md:py-24 space-y-16">
          {CATEGORIES.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="grid md:grid-cols-[260px_1fr] gap-10 md:gap-16 scroll-mt-20"
            >
              <header>
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[var(--surface-soft)] mb-6 border border-[var(--border)]">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(min-width: 768px) 260px, 100vw"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-3 text-[var(--color-navy)]">{c.title}</h2>
                <p className="mt-1 text-sm tracking-wider text-[var(--color-grey-500)]">
                  {c.titleEn}
                </p>
                <p className="mt-5 text-[var(--color-grey-700)] leading-relaxed">
                  {c.summary}
                </p>
              </header>
              <ul className="grid sm:grid-cols-2 gap-4 content-start">
                {c.items.map((item) => (
                  <li
                    key={item.head}
                    className="rounded-xl border border-[var(--border)] p-5 bg-white hover:border-[var(--color-navy)] transition-colors"
                  >
                    <p className="font-semibold text-[var(--color-navy)]">
                      {item.head}
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-grey-700)] leading-relaxed">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>

      {/* GEO 4-step Process */}
      <section
        id="process"
        aria-label="GEO 진단 프로세스"
        className="bg-[var(--color-navy)] text-white scroll-mt-20"
      >
        <Container className="py-20 md:py-24">
          <p className="text-xs tracking-[0.18em] font-semibold uppercase text-[var(--color-amber)]">
            Process
          </p>
          <h2
            style={{ color: "#FFC857" }}
            className="mt-3 max-w-3xl"
          >
            GEO 진단 프로세스 4단계
          </h2>
          <p
            style={{ color: "rgba(255,255,255,0.92)" }}
            className="mt-5 max-w-3xl text-lg md:text-xl leading-relaxed"
          >
            Diagnose · Design · Execute · Optimize — GEO 컨설팅이 한 흐름으로
            실현되는 4단계 순환 프로세스입니다.
          </p>

          <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((p) => (
              <li
                key={p.step}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 flex flex-col"
              >
                <p className="text-[var(--color-amber)] font-bold text-xs tracking-[0.18em]">
                  STEP {p.step}
                </p>
                <p className="mt-4 text-2xl font-bold tracking-tight">
                  {p.name}
                </p>
                <p className="text-sm text-white/60 mt-1">{p.nameKo}</p>
                <p className="mt-5 text-sm text-white/80 leading-relaxed">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section aria-label="자주 묻는 질문" className="bg-white">
        <Container className="py-20 md:py-24">
          <p className="text-xs tracking-[0.18em] font-semibold uppercase text-[var(--color-grey-500)]">
            FAQ
          </p>
          <h2 className="mt-3 text-[var(--color-navy)]">자주 묻는 질문</h2>

          <dl className="mt-12 divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
            {FAQ.map((qa) => (
              <div key={qa.question} className="py-7">
                <dt className="text-[var(--color-navy)] font-semibold text-lg">
                  Q. {qa.question}
                </dt>
                <dd className="mt-3 text-[var(--color-grey-700)] leading-[1.85] whitespace-pre-line">
                  {qa.answer}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--surface-soft)]">
        <Container className="py-16 text-center">
          <h2 className="text-[var(--color-navy)]">
            컨설팅이 필요하신가요?
          </h2>
          <p className="mt-4 text-[var(--color-grey-700)]">
            귀사 브랜드의 GEO 가능성을 함께 진단하고 설계합니다.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] text-[var(--color-navy)] px-7 py-4 text-base font-bold hover:bg-[var(--color-amber-soft)] transition-colors"
          >
            컨설팅 문의하기
            <span aria-hidden>→</span>
          </Link>
        </Container>
      </section>
    </>
  );
}
