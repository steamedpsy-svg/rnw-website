import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { SITE, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CONTACT · 문의",
  description:
    "GEO 컨설팅·브랜드 전략·콘텐츠 협업 문의. 이메일 hello@rnw0221.com 또는 문의 폼으로 연락주세요.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

const MAILTO = `mailto:${SITE.contact.email}?subject=${encodeURIComponent(
  "[RnW 문의] "
)}&body=${encodeURIComponent(
  [
    "회사명:",
    "담당자:",
    "연락처:",
    "문의 유형: (GEO 컨설팅 / 브랜딩 / 마케팅 / 콘텐츠 제작·운영 / 기타)",
    "",
    "문의 내용:",
  ].join("\n")
)}`;

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "홈", url: SITE_URL },
          { name: "CONTACT", url: `${SITE_URL}/contact` },
        ])}
      />

      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <Image
          src="/images/visuals/contact-hero.jpg"
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
            Contact
          </p>
          <h1 style={{ color: "#ffffff" }} className="mt-4 max-w-3xl">
            귀사의 브랜드 성장 가능성을
            <br />
            함께 진단해보세요
          </h1>
          <p
            style={{ color: "rgba(255,255,255,0.85)" }}
            className="mt-8 max-w-2xl leading-relaxed"
          >
            GEO 진단부터 컨설팅, 브랜드 전략, 콘텐츠 협업, 채널 운영까지
            <br />
            필요하신 방향을 알려주시면 가장 적합한 협업 방식을 제안드립니다.
          </p>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Form */}
            <form
              action={MAILTO}
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <p className="text-xs tracking-[0.18em] font-semibold uppercase text-[var(--color-grey-500)]">
                문의 폼
              </p>

              <Field label="회사명" name="company" required />
              <Field label="담당자명" name="name" required />
              <Field label="이메일" name="email" type="email" required />
              <Field label="연락처" name="phone" />

              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-semibold text-[var(--color-navy)] mb-2"
                >
                  문의 유형
                </label>
                <select
                  id="type"
                  name="type"
                  className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--color-navy)] focus:outline-none"
                  defaultValue="geo"
                >
                  <option value="geo">GEO 기반 컨설팅</option>
                  <option value="branding">브랜딩</option>
                  <option value="marketing">마케팅</option>
                  <option value="content">콘텐츠 제작 · 운영</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[var(--color-navy)] mb-2"
                >
                  문의 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="현재 상황과 협업하고 싶은 방향을 알려주세요."
                  className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--color-navy)] focus:outline-none resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[var(--color-navy)] text-white py-4 text-base font-bold hover:bg-[var(--color-navy-700)] transition-colors"
              >
                문의 보내기
              </button>

              <p className="text-xs text-[var(--color-grey-500)] leading-relaxed">
                ※ 제출 시 메일 작성 창이 열립니다. 또는{" "}
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="underline text-[var(--color-navy)]"
                >
                  {SITE.contact.email}
                </a>
                로 직접 보내주셔도 됩니다.
              </p>
            </form>

            {/* Info */}
            <div className="space-y-10">
              <div>
                <p className="text-xs tracking-[0.18em] font-semibold uppercase text-[var(--color-grey-500)]">
                  Email
                </p>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="mt-3 block text-2xl font-bold text-[var(--color-navy)] hover:text-[var(--color-amber)] transition-colors"
                >
                  {SITE.contact.email}
                </a>
              </div>

              <div>
                <p className="text-xs tracking-[0.18em] font-semibold uppercase text-[var(--color-grey-500)]">
                  Address
                </p>
                <address className="mt-3 not-italic text-[var(--color-grey-900)] leading-[1.85]">
                  서울 {SITE.address.addressLocality}{" "}
                  {SITE.address.streetAddress}
                  <br />
                  ({SITE.address.postalCode})
                </address>
              </div>

              <div>
                <p className="text-xs tracking-[0.18em] font-semibold uppercase text-[var(--color-grey-500)]">
                  Response Time
                </p>
                <p className="mt-3 text-[var(--color-grey-900)] leading-[1.85]">
                  영업일 기준 1~2일 이내 회신
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-[var(--color-navy)] mb-2"
      >
        {label}
        {required && (
          <span className="ml-1 text-[var(--color-amber)]" aria-hidden>
            *
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--color-navy)] focus:outline-none"
      />
    </div>
  );
}
