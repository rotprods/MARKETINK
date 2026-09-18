# MARKET.INK — ASSET INGESTION CONTRACT V2

> Purpose: allow Roberto to drop real media into the site without changing layout architecture.

---

# 0. RULE

Every production asset has:

```yaml
id:
kind:
source_owner:
public_use:
status:
src:
alt:
credit:
evidence_ref:
dimensions:
duration:
notes:
```

Public proof additionally requires evidence approval.

---

# 1. BRAND SOURCE ASSETS

Required final files:

```text
logo-primary.svg
logo-mono-light.svg
logo-mono-dark.svg
isotype-signal.svg
isotype-rose.svg
```

Preferred:
SVG with paths, no linked font dependency.

Reference manual screenshots are not production logos.

---

# 2. VSL PACKAGE

## Video
Recommended:
managed adaptive streaming in production.

## Required package

```text
VSL_MASTER
VSL_POSTER
VSL_TRANSCRIPT
VSL_CAPTIONS_ES
VSL_CHAPTERS
VSL_DURATION
VSL_ANALYTICS_ID
```

Poster:
- 16:9;
- 1920×1080 source;
- compressed WebP/AVIF;
- no text smaller than mobile-readable size.

Transcript:
- semantic text;
- available for accessibility/SEO;
- never embedded only as image.

---

# 3. TESTIMONIAL PACKAGE

For each testimonial:

```text
testimonial/{ID}/portrait.webp
testimonial/{ID}/poster.webp
testimonial/{ID}/video-stream-id
testimonial/{ID}/audio.m4a
testimonial/{ID}/transcript.md
testimonial/{ID}/evidence.json
```

Minimum data:

```yaml
id:
speaker:
role:
client:
permission_public:
permission_video:
permission_audio:
quote_exact:
period:
evidence_ref:
```

No casual WhatsApp compliment becomes public proof without permission.

---

# 4. ARTIST / TATTOO PACKAGE

For each real artist:

```text
artists/{slug}/portrait.webp
artists/{slug}/hero-tattoo.webp
artists/{slug}/healed-01.webp
artists/{slug}/process-01.webp
artists/{slug}/studio-01.webp
```

Metadata:

```yaml
artist:
studio:
style:
asset_type:
photographer:
public_permission:
tattoo_is_real: true
ai_generated: false
alt:
```

If AI is used to stylize a campaign:
do not relabel it as actual tattoo work.

---

# 5. AD / CREATIVE PACKAGE

Per campaign:

```text
ads/{campaign-id}/creative-01.webp
ads/{campaign-id}/creative-02.mp4
ads/{campaign-id}/story-01.webp
ads/{campaign-id}/metadata.json
```

Metadata:

```yaml
campaign_id:
client_id:
format:
hook:
offer:
cta:
period:
public_use:
result_evidence_ref:
```

Creative can be shown without performance metrics if permission allows.

Performance can only render when evidence exists.

---

# 6. AUDIO REFERENCE PACKAGE

Use for:
- testimonial audio;
- founder VO reference;
- sonic identity;
- production notes.

Accepted delivery:
- WAV master;
- M4A/AAC web copy;
- MP3 fallback if necessary.

Never autoplay.

For public playback:
- transcript;
- speaker/permission;
- descriptive label;
- visible controls.

---

# 7. IMAGE SPECS

## Hero / editorial
Source:
- >= 1920px wide where practical.

Delivery:
- AVIF/WebP;
- responsive variants;
- optimized via Next/image once real files exist.

## Portrait
Suggested source:
- >= 1600px vertical.

Common crops:
- 3:4;
- 4:5;
- 9:16.

## Tattoo macro
Preserve:
- skin texture;
- ink color;
- detail;
- truthful crop.

Do not over-process until tattoo appearance becomes misleading.

---

# 8. VIDEO SPECS

Source master:
- high-quality 4K where available.

Web:
- streaming preferred;
- poster always;
- captions where dialogue exists;
- lazy below fold.

Do not make initial LCP depend on a full video download.

---

# 9. 3D ASSET SPECS

V2 does not require external 3D.

If later introduced:

```text
GLB/GLTF
<2MB ideal initial asset
<5MB only lazy / justified
Meshopt/Draco where validated
compressed textures
centered origin
normalized scale
named materials
no hidden geometry
```

Real tattoo imagery remains more important than 3D complexity.

---

# 10. INGESTION WORKFLOW

```text
UPLOAD
→ IDENTIFY
→ PERMISSION CHECK
→ METADATA
→ OPTIMIZE
→ REGISTER IN lib/assets.ts
→ DEV PREVIEW
→ MOBILE QA
→ EVIDENCE QA
→ APPROVE_PUBLIC
→ DEPLOY
```

No direct upload should skip registration.

---

# 11. CURRENT STATUS

Ready frames:
- VSL;
- 3 artist/craft slots;
- 3 ad/creative slots;
- 3 testimonial visual slots;
- audio listening room;
- proof methodology;
- hero procedural fallback.

Missing:
real production media.
