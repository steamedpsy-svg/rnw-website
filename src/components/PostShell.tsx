import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "./Container";
import { JsonLd } from "./JsonLd";
import { articleLd, breadcrumbLd } from "@/lib/jsonld";
import { getPost } from "@/lib/insight-posts";
import { SITE_URL } from "@/lib/seo";

export function PostShell({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  const post = getPost(slug);
  if (!post) notFound();
  const url = `${SITE_URL}/insight/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "홈", url: SITE_URL },
            { name: "INSIGHT", url: `${SITE_URL}/insight` },
            { name: post.title, url },
          ]),
          articleLd({
            title: post.title,
            description: post.description,
            url,
            datePublished: post.date,
          }),
        ]}
      />

      <section className="bg-[var(--surface-soft)]">
        <Container className="py-16 md:py-20 max-w-3xl">
          <p className="text-xs">
            <Link
              href="/insight"
              className="text-[var(--color-grey-500)] hover:text-[var(--color-navy)] uppercase tracking-[0.18em] font-semibold"
            >
              ← INSIGHT
            </Link>
          </p>
          <div className="mt-6 flex items-center gap-3 text-xs text-[var(--color-grey-500)]">
            <span className="font-semibold uppercase tracking-wider text-[var(--color-amber)]">
              {post.category}
            </span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{post.date}</time>
            <span aria-hidden>·</span>
            <span>{post.readMinutes}분 읽기</span>
          </div>
          <h1 className="mt-4 text-[var(--color-navy)]">{post.title}</h1>
          <p className="mt-5 text-[var(--color-grey-700)] text-lg leading-relaxed">
            {post.description}
          </p>
        </Container>
      </section>

      <article className="bg-white">
        <Container className="py-16 md:py-20 max-w-3xl">{children}</Container>
      </article>

      <section className="bg-[var(--color-navy)] text-white">
        <Container className="py-14 max-w-3xl text-center">
          <p className="text-lg">
            귀사의 GEO 가능성, 진단해드릴까요?
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] text-[var(--color-navy)] px-6 py-3 text-sm font-bold hover:bg-[var(--color-amber-soft)] transition-colors"
          >
            컨설팅 문의하기 →
          </Link>
        </Container>
      </section>
    </>
  );
}
