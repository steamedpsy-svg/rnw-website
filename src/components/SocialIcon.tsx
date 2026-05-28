export type SocialKind =
  | "naverblog"
  | "youtube"
  | "instagram"
  | "kakaotalk"
  | "facebook"
  | "tiktok"
  | "linkedin"
  | "meta";

const META: Record<
  SocialKind,
  { label: string; ariaLabel: string; bg: string; text: string }
> = {
  naverblog: { label: "b|", ariaLabel: "네이버 블로그", bg: "#03C75A", text: "#ffffff" },
  youtube:   { label: "▶",  ariaLabel: "YouTube",       bg: "#FF0000", text: "#ffffff" },
  instagram: { label: "IG", ariaLabel: "Instagram",     bg: "linear-gradient(135deg,#F58529 0%,#DD2A7B 50%,#8134AF 100%)", text: "#ffffff" },
  kakaotalk: { label: "TALK", ariaLabel: "카카오톡",   bg: "#FAE100", text: "#3A1D1D" },
  facebook:  { label: "f",  ariaLabel: "Facebook",      bg: "#1877F2", text: "#ffffff" },
  tiktok:    { label: "TT", ariaLabel: "TikTok",        bg: "#000000", text: "#ffffff" },
  linkedin:  { label: "in", ariaLabel: "LinkedIn",      bg: "#0A66C2", text: "#ffffff" },
  meta:      { label: "M",  ariaLabel: "Meta",          bg: "#0866FF", text: "#ffffff" },
};

export function SocialIcon({
  kind,
  size = 28,
}: {
  kind: SocialKind;
  size?: number;
}) {
  const m = META[kind];
  return (
    <span
      role="img"
      aria-label={m.ariaLabel}
      title={m.ariaLabel}
      style={{
        width: size,
        height: size,
        background: m.bg,
        color: m.text,
        fontSize: Math.round(size * 0.4),
        lineHeight: 1,
      }}
      className="inline-flex items-center justify-center rounded-md font-bold tracking-tight"
    >
      {m.label}
    </span>
  );
}
