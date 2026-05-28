import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { INSIGHT_POSTS } from "@/lib/insight-posts";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "INSIGHT · GEO 시대를 먼저 읽는 관점",
  description:
    "AI 검색이 바꾸는 브랜드 발견의 문법, 데이터로 본 GEO 성과, 실제 컨설팅 현장의 인사이트 — RnW가 정리한 GEO·브랜드·콘텐츠 전략 칼럼.",
  alternates: { canonical: `${SITE_URL}/insight` },
};

export default function InsightIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "홈", url: SITE_URL },
          { name: "INSIGHT", url: `${SITE_URL}/insight` },
        ])}
      />

      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <Image
          src="/images/visuals/insight-hero.png"
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
            Insight
          </p>
          <h1 style={{ color: "#ffffff" }} className="mt-4 max-w-3xl">
            GEO 시대를 먼저 읽는 관점
          </h1>
          <p
            style={{ color: "rgba(255,255,255,0.85)" }}
            className="mt-8 max-w-2xl leading-relaxed whitespace-pre-line"
          >
            {"AI 검색이 바꾸는 브랜드 발견의 문법,\n데이터로 본 GEO 성과,\n실제 컨설팅 현장에서 검증된 인사이트를 정리합니다."}
          </p>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-6">
            {INSIGHT_POSTS.map((post, idx) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-[var(--border)] p-7 md:p-8 hover:border-[var(--color-navy)] transition-colors flex flex-col"
              >
                <div className="flex items-center gap-3 text-xs text-[var(--color-grey-500)]">
                  <span className="font-semibold uppercase tracking-wider text-[var(--color-amber)]">
                    #{idx + 1}
                  </span>
                  <span>{post.category}</span>
                  <span aria-hidden>·</span>
                  <time dateTime={post.date}>{post.date}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readMinutes}분 읽기</span>
                </div>
                <h2 className="mt-5 text-[var(--color-navy)] text-xl md:text-2xl font-bold leading-snug">
                  <Link
                    href={`/insight/${post.slug}`}
                    className="group-hover:text-[var(--color-amber)] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 text-[var(--color-grey-700)] leading-relaxed text-[15px] flex-1">
                  {post.description}
                </p>
                <Link
                  href={`/insight/${post.slug}`}
                  className="mt-6 text-sm font-medium text-[var(--color-navy)] inline-flex items-center gap-1.5 group-hover:text-[var(--color-amber)] transition-colors"
                >
                  글 읽기
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
