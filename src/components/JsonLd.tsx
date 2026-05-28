/**
 * JSON-LD 출력 컴포넌트 — 진단 #11 해결의 렌더링 진입점
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
