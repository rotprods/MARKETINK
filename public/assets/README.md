# MARKET.INK — Production Asset Slots

Do not commit client-private assets without explicit permission.

## Brand

```text
/public/assets/brand/logo-primary.svg
/public/assets/brand/logo-mono-light.svg
/public/assets/brand/logo-mono-dark.svg
/public/assets/brand/isotype-signal.svg
/public/assets/brand/isotype-rose.svg
```

## VSL

```text
/public/assets/vsl/poster.webp
```

VSL video should use a managed streaming source when production-ready.
Do not ship a large raw MP4 in the initial page bundle.

## Artists

```text
/public/assets/artists/{artist-id}/portrait.webp
/public/assets/artists/{artist-id}/tattoo-01.webp
/public/assets/artists/{artist-id}/process-01.webp
```

Every real asset needs:
- permission state;
- artist credit;
- alt;
- public-use flag.

## Testimonials

```text
/public/assets/testimonials/{id}/portrait.webp
/public/assets/testimonials/{id}/audio.m4a
/public/assets/testimonials/{id}/poster.webp
```

Video can be streamed externally.

## Ads / Creative

```text
/public/assets/ads/{campaign-id}/creative-01.webp
/public/assets/ads/{campaign-id}/creative-02.mp4
```

Never display campaign performance without evidence reference.

## 3D / Textures

```text
/public/assets/models/
/public/assets/textures/
```

V2 has procedural 3D fallbacks and does not require a GLB to boot.

## Brand-manual screenshots

The screenshots supplied in chat are reference-only and should eventually live under:

```text
/public/assets/brand/reference/
```

Do not use flattened manual screenshots as final logos.
