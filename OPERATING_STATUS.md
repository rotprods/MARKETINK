# MARKET.INK — LIVE OPERATING STATUS

> Updated: 2026-09-18

This file is an operational snapshot.  
Canonical strategic truth remains `NORTHSTAR.md`.

---

# GREEN — COMPLETE

## Control plane
- [x] `NORTHSTAR.md`
- [x] `AGENTS.md`
- [x] product ladder
- [x] owner-first GTM
- [x] MARKET.INK ↔ InkFlow boundary

## Academy
- [x] Foundation M00–M05 curriculum
- [x] A01–A06 templates
- [x] synthetic demo studio
- [x] M00 synthetic run
- [x] M01–M05 synthetic validation
- [x] M00–M05 scripts
- [x] first curriculum defect found/fixed
- [x] M00 pilot production pack
- [x] Foundation recording QA

## CRM / INKSCAN runtime
- [x] MARKET.INK Supabase namespace
- [x] ICP / INKSCORE functions
- [x] evidence ledger
- [x] outreach gate
- [x] web intake RPC
- [x] idempotence test
- [x] synthetic test data removed
- [x] MARKET.INK search-path hardening
- [x] MARKET.INK queue view changed to security invoker

## InkFlow bridge
- [x] current owner corrected
- [x] Academy separated from product repo
- [x] machine-readable product requirement schema
- [x] readiness-gated adoption model

## Website V2
- [x] brand manual translated into `brand/BRAND_CANON_V2.md`
- [x] WebOS `immersive-web-v7` doctrine adopted
- [x] L5 / award-grade architecture
- [x] Next.js 16.3.3 + React 19.2
- [x] R3F / Three.js procedural INK ENGINE
- [x] GSAP + Lenis + Framer Motion
- [x] stable WebGL2 path + WebGPU capability detection
- [x] mobile condensed edition
- [x] reduced-motion edition
- [x] VSL / artist / tattoo / ad / testimonial / audio frames
- [x] evidence-gated public media registry
- [x] INKSCAN → private Supabase CRM
- [x] TypeScript exact-head CI PASS
- [x] production build exact-head CI PASS
- [x] PR #12 merged to `main` at `b7bcf0eee2bfc02c7c24b4020c207bcf0c6e78ba`
- [x] legacy PR #4 closed as superseded

---

# AMBER — BUILT BUT NOT RELEASED

## Production media

The web architecture is complete, but the final public asset package is still incomplete.

Required / strongly preferred:
- standalone primary logo SVG;
- monochrome logo SVGs;
- red signal/isotype SVG;
- rose SVG;
- licensed webfont source/files for TAN Tangkiwood and Garet;
- VSL master + poster + transcript/captions;
- approved artist/tattoo/process media;
- approved testimonials/video/audio;
- approved ad/creative examples;
- evidence references for any public performance result.

The supplied brand-manual pages remain canonical **visual references**, not production logo files.

Asset ingestion contract:
`web/ASSET_INGESTION_V2.md`

## Package reproducibility

Current CI uses a clean `npm install` and has passed twice.

A committed `package-lock.json` is still desirable before long-term production hardening so dependency resolution becomes fully deterministic.

This is engineering debt, not a current compile blocker.

---

# RED — EXTERNAL BLOCKERS

## Vercel preview / production

Only remaining website infrastructure blocker tracked as issue #6.

Previous direct preview attempt returned:

`402 resource_creation_blocked`

Reason:
Vercel Pro workspace is suspended until billing/payment is reactivated.

Code status is independent and GREEN:
- clean install PASS;
- typecheck PASS;
- Next.js 16.3.3 production build PASS;
- GitHub Actions issue #7 resolved/closed.

Required after Vercel reactivation:
1. preview current `main`;
2. configure server-side Supabase secret;
3. set production site URL;
4. set asset debug false;
5. desktop + mobile visual QA;
6. synthetic INKSCAN smoke test;
7. idempotence check;
8. remove synthetic data;
9. attach custom domain only after QA.

---

# CURRENT ACADEMY GATE

`M00_PILOT_READY_TO_RECORD`

Next:
Roberto records M00-L01 micro-pilot.

Then:
- production QA;
- pattern correction;
- M00-L02–L06;
- M01–M05 recording;
- 3–5 beta operators.

---

# CURRENT WEB GATE

`WEB_V2_BUILD_GREEN → PREVIEW_DEPLOYMENT`

Code and CRM boundary are ready.

External blocker:
Vercel billing/reactivation (issue #6).

Separate content gate:
production brand/media assets.

---

# NEXT HIGHEST-ROAS EXECUTION

1. Supply standalone MARKET.INK SVG/logo/isotype assets and licensed font source.
2. Ingest VSL / tattoo / artist / testimonial / ad assets through `lib/assets.ts`.
3. Reactivate Vercel.
4. Deploy current `main` as preview.
5. Configure Supabase server secret and production site URL.
6. Run desktop/mobile/reduced-motion visual QA.
7. Smoke-test INKSCAN → Supabase and delete synthetic data.
8. Attach custom domain after preview QA.
9. In parallel, record M00-L01 micro-pilot.
10. Continue beta-fit review without sending unapproved outreach.


---

# BETA OPERATOR WAVE 001

Private CRM state:
- 15 Murcia operators registered;
- 5 enriched with public evidence;
- 5 provisional ICP assessments;
- highest provisional score = 66 / Tier B;
- max evidence coverage = 44.44%;
- 0 outreach sent;
- 0 hard gates cleared.

Current beta gate:
`BETA_DECISION_MAKER_RESOLUTION`

Rule:
No prospect-specific outreach until identity/contact route and hard-gate review are complete.


## Beta runtime separation

Private Supabase now includes:
`marketink_beta_candidates`

Purpose:
separate cohort-learning fit from normal commercial ICP.

Current aggregate:
- 15 cohort candidates;
- 5 in REVIEW;
- 10 DISCOVERED;
- 1 public decision-maker resolved;
- 1 public founder role identified;
- 3 general routes;
- 0 ready to invite.

Next beta gate:
`BETA_FIT_REVIEW`


## Beta routing delta

Current private state:
- 10 DISCOVERED;
- 4 REVIEW;
- 1 NURTURE benchmark;
- 3 evidence-safe routing drafts prepared, not sent;
- 0 READY_TO_INVITE;
- 0 outbound messages sent.

External send remains gated.
