import type { MarketInkAsset } from "@/lib/assets";
import { canRenderPublicly } from "@/lib/assets";

type AssetFrameProps = {
  asset: MarketInkAsset;
  eyebrow: string;
  title: string;
  ratio?: "landscape" | "portrait" | "square";
};

export function AssetFrame({
  asset,
  eyebrow,
  title,
  ratio = "landscape",
}: AssetFrameProps) {
  const canRender = canRenderPublicly(asset);
  const showDebug =
    process.env.NEXT_PUBLIC_MARKETINK_ASSET_DEBUG === "true";

  return (
    <article
      className={`asset-frame asset-frame--${ratio}`}
      data-asset-status={asset.status}
    >
      {canRender ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={asset.src} alt={asset.alt} loading="lazy" />
      ) : (
        <div className="asset-frame__fallback" aria-label={asset.alt}>
          <span className="asset-frame__cross" aria-hidden="true" />
          <span className="asset-frame__index">{asset.id}</span>
          <strong>{title}</strong>
          <small>{eyebrow}</small>
          <em>{showDebug ? asset.status : eyebrow}</em>
        </div>
      )}
    </article>
  );
}
