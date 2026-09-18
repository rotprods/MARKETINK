type WordmarkProps = {
  light?: boolean;
  compact?: boolean;
  className?: string;
};

export function Wordmark({
  light = false,
  compact = false,
  className = "",
}: WordmarkProps) {
  return (
    <span
      className={["wordmark", compact ? "wordmark--compact" : "", className]
        .filter(Boolean)
        .join(" ")}
      aria-label="MARKET.INK"
    >
      <span style={{ color: light ? "#FBF8EF" : "#000000" }}>MARKET</span>
      <span className="wordmark__dot" aria-hidden="true">
        .
      </span>
      <span style={{ color: "#DE2727" }}>INK</span>
    </span>
  );
}

export function SignalGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role="img"
      aria-label="MARKET.INK signal mark fallback"
    >
      <path
        d="M10 18 56 6 44 52 33 37 21 49l-5-5 12-12L10 18Z"
        fill="#DE2727"
      />
      <path
        d="m17 38-8 8M22 43l-7 7M13 31l-7 7"
        stroke="#DE2727"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
