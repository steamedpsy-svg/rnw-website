import Image from "next/image";
import Link from "next/link";
import { NAV, SITE } from "@/lib/seo";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--surface-soft)]">
      <Container className="py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Image
            src="/images/rnw_logo.png"
            alt={`${SITE.name} 로고`}
            width={140}
            height={40}
            className="h-10 w-auto mb-3 object-contain"
          />
          <p className="font-bold text-[var(--color-navy)] text-base">
            {SITE.name}
          </p>
          <p className="mt-2 text-sm text-[var(--color-grey-500)] leading-relaxed">
            {SITE.tagline}
            <br />
            {SITE.taglineEn}
          </p>
        </div>
        <nav aria-label="푸터 메뉴">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-grey-500)]">
            Site
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-grey-700)]">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-[var(--color-navy)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-grey-500)]">
            Contact
          </p>
          <address className="mt-3 not-italic text-sm text-[var(--color-grey-700)] leading-relaxed">
            <a
              href={`mailto:${SITE.contact.email}`}
              className="hover:text-[var(--color-navy)]"
            >
              {SITE.contact.email}
            </a>
            <br />
            서울 {SITE.address.addressLocality} {SITE.address.streetAddress}
          </address>
        </div>
      </Container>
      <div className="border-t border-[var(--border)]">
        <Container className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[var(--color-grey-500)]">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p>Designed and built with GEO in mind.</p>
        </Container>
      </div>
    </footer>
  );
}
