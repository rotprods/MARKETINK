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

---

# AMBER — BUILT BUT NOT RELEASED

## Website / VSL
Branch:
`web-vsl-v1`

PR:
`#4`

Built:
- Next.js web application
- VSL architecture/script
- INKSCAN form
- CRM route
- Supabase migrations persisted
- evidence-gated proof section
- responsive visual system

Not merged:
- real build/typecheck has not completed.

Rule:
**Do not merge PR #4 without a real build.**

---

# RED — EXTERNAL BLOCKERS

## Vercel

Preview deployment attempted and rejected by Vercel:

`resource_creation_blocked`

Reason:
workspace subscription suspended until a valid payment method reactivates Pro.

Impact:
- cannot create MARKET.INK preview/project via current Vercel team;
- no Vercel build validation available yet;
- no custom domain deployment yet.

Tracked as GitHub issue #6.

Resolution:
reactivate Vercel billing, then run preview deployment and inspect build logs.

## GitHub Actions

Web CI workflow is installed on `main`, but the current connector has not surfaced a pull-request workflow run for PR #4 after synchronization.

Do not interpret missing run as success.

Tracked as GitHub issue #7.

Resolution paths:
1. inspect Actions settings in GitHub UI;
2. trigger/observe a run once enabled;
3. alternatively use Vercel preview after billing reactivation.

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

`WEB_BUILD_VALIDATION_BLOCKED_EXTERNAL`

Backend/CRM is ready.

Frontend merge waits for build evidence.

---

# NEXT HIGHEST-ROAS EXECUTION

1. Record M00-L01 micro-pilot.
2. QA with `M00_PILOT_PRODUCTION_PACK_V1.md`.
3. Reactivate Vercel.
4. Build PR #4 as preview.
5. Fix build/visual defects.
6. Connect environment secret server-side.
7. Smoke-test INKSCAN → Supabase.
8. Only then merge/deploy.
9. Recruit first beta operators.
10. Start evidence-backed case-study capture immediately.


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
