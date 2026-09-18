# MARKET.INK

**Tattoo Growth OS — Academy + Done-For-You + Software Bridge**

MARKET.INK is a specialist growth company for tattoo studios and tattoo artists.

The operating thesis is:

```text
LEARN
→ IMPLEMENT
→ DONE-FOR-YOU
→ STANDARDIZE
→ AUTOMATE
→ INKFLOW
```

## Start here

1. **`NORTHSTAR.md`** — canonical business model, Academy curriculum, service architecture, stack, goals, subgoals and convergence plan.
2. **`AGENTS.md`** — operating contract for agents and contributors.

## Core customer

Primary:
- tattoo studio owner / manager.

Secondary:
- individual tattoo artist as a bottom-up land-and-expand route.

## Product ladder

```text
INKSCAN
→ INK GROWTH OS / Academy
→ MARKET.INK LAUNCH
→ MARKET.INK GROWTH
→ MARKET.INK STUDIO OS
→ InkFlow
```

## North Star

**Profitable Booked Capacity Rate**

MARKET.INK optimizes for profitable booked tattoo capacity, not vanity social metrics.

## Repo boundary

This repository is the control plane for:
- strategy;
- education;
- sales/GTM;
- agency services;
- client delivery;
- content systems;
- operational playbooks;
- evidence-backed requirements for software.

The dedicated tattoo software lives separately at:

`rotprods/tattoo-saas`

Do not duplicate product code here.

## Current gate

`FOUNDATION_VALIDATED_PRE_FILMING → M00_PILOT_RECORDED`

Current:
- `ACADEMY_MASTER_V1.md` defines M00–M05;
- A01–A06 templates exist under `academy/templates/`;
- the synthetic demo studio has been run through M00–M05;
- recording scripts exist for the complete Foundation Track;
- the first curriculum defect found during validation has been repaired.

Next:
record and QA the M00 pilot before batch-recording the rest of Foundation.


## Production status

Academy Foundation is validated pre-filming.

Current gate:
`M00_PILOT_READY_TO_RECORD`

Operational snapshot:
`OPERATING_STATUS.md`

The first recording pattern is defined in:
`academy/production/M00_PILOT_PRODUCTION_PACK_V1.md`


## Website V2

The canonical MARKET.INK website is now implemented in `main`.

Architecture:
- WebOS `immersive-web-v7` / L5 doctrine;
- Next.js 16.3.3 + React 19.2;
- Three.js / React Three Fiber / Drei;
- GSAP + Lenis + Framer Motion;
- procedural INK ENGINE hero;
- stable WebGL2 production path;
- WebGPU capability detection for future progressive enhancement;
- responsive + reduced-motion editions;
- typed asset registry for VSL, artists, tattoo work, ads, testimonials and audio;
- INKSCAN connected server-side to the private Supabase CRM.

Brand sources:
- `brand/BRAND_CANON_V2.md`
- `web/WEBOS_ADOPTION_V2.md`
- `web/ASSET_INGESTION_V2.md`
- `web/WEB_QA_V2.md`

Build evidence:
- GitHub Actions exact-head typecheck: PASS
- Next.js production build: PASS
- merged via PR #12

Deployment is not yet public because Vercel billing remains blocked in issue #6.
