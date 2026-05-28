import Image from "next/image";
import Link from "next/link";
import { NAV, SITE } from "@/lib/seo";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[var(--border)]">
      <Container as="nav" className="flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${SITE.name} 홈으로 이동`}
        >
          <Image
            src="/images/n_logo.png"
            alt={`${SITE.name} 로고`}
            width={180}
            height={36}
            priority
            className="h-7 md:h-8 w-auto object-contain"
          />
        </Link>
        <ul className="hidden lg:flex items-center gap-6 text-[13px] tracking-wider font-medium text-[var(--color-grey-700)]">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-[var(--color-navy)] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-amber)] text-[var(--color-navy)] px-4 py-2 text-xs font-bold tracking-wider hover:bg-[var(--color-amber-soft)] transition-colors"
        >
          문의하기
          <span aria-hidden>→</span>
        </Link>
      </Container>
    </header>
  );
}
