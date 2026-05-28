import { ImageResponse } from "next/og";

export const alt = "Roots N Wings — GEO와 데이터로 설계하는 브랜드 성장 전략";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #01A081 0%, #2BBE9E 45%, #2F6BFF 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              color: "#D9F2EC",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Roots N Wings
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: -1.4,
              maxWidth: 1000,
            }}
          >
            <span>GEO 시대, 브랜드가 발견되고</span>
            <span>선택되는 방식을 설계합니다</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.4,
              maxWidth: 920,
            }}
          >
            GEO 진단 · 데이터 분석 · 브랜드 전략 · 콘텐츠 설계 · 마케팅 실행
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(255,255,255,0.6)",
            letterSpacing: 1,
          }}
        >
          <span>rnw0221.com</span>
          <span>루츠앤윙스 · RnW</span>
        </div>
      </div>
    ),
    size
  );
}
