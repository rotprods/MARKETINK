export type AssetStatus =
  | "MISSING"
  | "REFERENCE"
  | "READY"
  | "VERIFIED"
  | "APPROVED_PUBLIC"
  | "BLOCKED";

export type AssetKind =
  | "logo"
  | "isotype"
  | "vsl"
  | "video"
  | "audio"
  | "testimonial"
  | "artist"
  | "tattoo"
  | "ad"
  | "case-study"
  | "image"
  | "model"
  | "texture";

export type MarketInkAsset = {
  id: string;
  kind: AssetKind;
  status: AssetStatus;
  src?: string;
  poster?: string;
  alt: string;
  width?: number;
  height?: number;
  durationSeconds?: number;
  publicUse?: boolean;
  evidenceRef?: string;
  artistCredit?: string;
  note?: string;
};

function asset(value: MarketInkAsset): MarketInkAsset {
  return value;
}

export const assetSlots = {
  brand: {
    logoPrimary: asset({
      id: "brand-logo-primary",
      kind: "logo",
      status: "MISSING",
      alt: "MARKET.INK",
      note: "Awaiting standalone production SVG. Brand-manual screenshot is reference only.",
    }),
    logoMonoLight: asset({
      id: "brand-logo-mono-light",
      kind: "logo",
      status: "MISSING",
      alt: "MARKET.INK monochrome light",
    }),
    signalArrow: asset({
      id: "brand-signal-arrow",
      kind: "isotype",
      status: "MISSING",
      alt: "MARKET.INK red signal isotype",
      note: "Procedural 3D interpretation renders until source SVG is supplied.",
    }),
    rose: asset({
      id: "brand-rose",
      kind: "isotype",
      status: "MISSING",
      alt: "MARKET.INK rose line-art isotype",
    }),
  },
  vsl: {
    master: asset({
      id: "vsl-master",
      kind: "vsl",
      status: "MISSING",
      alt: "MARKET.INK video sales letter",
      note: "Frame is implemented; public playback waits for approved media.",
    }),
    poster: asset({
      id: "vsl-poster",
      kind: "image",
      status: "MISSING",
      alt: "MARKET.INK VSL cover",
    }),
  },
  testimonial: [
    asset({
      id: "testimonial-01",
      kind: "testimonial",
      status: "MISSING",
      alt: "Verified MARKET.INK client testimonial",
      publicUse: false,
    }),
    asset({
      id: "testimonial-02",
      kind: "testimonial",
      status: "MISSING",
      alt: "Verified MARKET.INK client testimonial",
      publicUse: false,
    }),
    asset({
      id: "testimonial-03",
      kind: "testimonial",
      status: "MISSING",
      alt: "Verified MARKET.INK client testimonial",
      publicUse: false,
    }),
  ],
  artists: [
    asset({
      id: "artist-01",
      kind: "artist",
      status: "MISSING",
      alt: "Tattoo artist portrait / work reference",
      publicUse: false,
    }),
    asset({
      id: "artist-02",
      kind: "artist",
      status: "MISSING",
      alt: "Tattoo artist portrait / work reference",
      publicUse: false,
    }),
    asset({
      id: "artist-03",
      kind: "artist",
      status: "MISSING",
      alt: "Tattoo artist portrait / work reference",
      publicUse: false,
    }),
  ],
  ads: [
    asset({
      id: "ad-01",
      kind: "ad",
      status: "MISSING",
      alt: "MARKET.INK campaign creative example",
      publicUse: false,
    }),
    asset({
      id: "ad-02",
      kind: "ad",
      status: "MISSING",
      alt: "MARKET.INK campaign creative example",
      publicUse: false,
    }),
    asset({
      id: "ad-03",
      kind: "ad",
      status: "MISSING",
      alt: "MARKET.INK campaign creative example",
      publicUse: false,
    }),
  ],
  audio: [
    asset({
      id: "audio-ref-01",
      kind: "audio",
      status: "MISSING",
      alt: "MARKET.INK testimonial or sonic-reference audio",
      publicUse: false,
    }),
  ],
};

export function canRenderPublicly(value: MarketInkAsset) {
  return (
    value.status === "APPROVED_PUBLIC" &&
    value.publicUse === true &&
    Boolean(value.src)
  );
}
