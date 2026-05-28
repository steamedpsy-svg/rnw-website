import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

/**
 * MDX 글로벌 컴포넌트 — INSIGHT 한글 본문 타이포 정책
 */
const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-0 mb-6 text-[var(--color-navy)]"
      {...(props as ComponentPropsWithoutRef<"h1">)}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-14 mb-4 text-[var(--color-navy)] border-b border-[var(--border)] pb-3"
      {...(props as ComponentPropsWithoutRef<"h2">)}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-10 mb-3 text-[var(--color-navy)]"
      {...(props as ComponentPropsWithoutRef<"h3">)}
    />
  ),
  p: (props) => (
    <p
      className="my-5 leading-[1.95] text-[var(--color-grey-900)] text-[16.5px]"
      {...(props as ComponentPropsWithoutRef<"p">)}
    />
  ),
  ul: (props) => (
    <ul
      className="my-5 ml-1 space-y-2 text-[var(--color-grey-900)]"
      {...(props as ComponentPropsWithoutRef<"ul">)}
    />
  ),
  ol: (props) => (
    <ol
      className="my-5 ml-5 space-y-2 list-decimal text-[var(--color-grey-900)]"
      {...(props as ComponentPropsWithoutRef<"ol">)}
    />
  ),
  li: (props) => (
    <li
      className="leading-[1.85] pl-1"
      {...(props as ComponentPropsWithoutRef<"li">)}
    />
  ),
  a: (props) => (
    <a
      className="underline decoration-[var(--color-amber)] underline-offset-4 text-[var(--color-navy)] hover:text-[var(--color-amber)]"
      {...(props as ComponentPropsWithoutRef<"a">)}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-7 border-l-4 border-[var(--color-amber)] pl-5 italic text-[var(--color-grey-700)]"
      {...(props as ComponentPropsWithoutRef<"blockquote">)}
    />
  ),
  strong: (props) => (
    <strong
      className="font-bold text-[var(--color-navy)]"
      {...(props as ComponentPropsWithoutRef<"strong">)}
    />
  ),
  hr: () => <hr className="my-12 border-[var(--border)]" />,
  code: (props) => (
    <code
      className="rounded bg-[var(--surface-soft)] px-1.5 py-0.5 text-[0.92em] text-[var(--color-navy)]"
      {...(props as ComponentPropsWithoutRef<"code">)}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
