# MARKET.INK — WEB V7 REGRESSION CONTRACT

> **Status:** CANONICAL  
> **Date:** 2026-09-18  
> **Production merge:** `6bd48afe250fda1e1f6c493baeb4044daaf68a87`  
> **Source PR:** #14

---

# 0. RULE

No future website iteration may be considered releasable because it "looks better".

A web change must preserve:

1. interaction stability;
2. accessibility/reflow;
3. mobile operability;
4. performance behavior;
5. production build integrity;
6. intake/API contract.

New human interaction → new regression test.

---

# 1. STANDALONE REFERENCE

Artifact:
`MARKETINK_DIRECTORS_CUT_V7_A11Y_PERF_HARDENED.html`

Regression status:

- legacy human-interaction suite: **89 / 89 PASS**
- deep accessibility/performance suite: **27 / 27 PASS**
- combined standalone reference: **116 / 116 PASS**

Measured V7 improvements:
- ~0.91 MiB standalone HTML after media dedupe;
- 0 duplicate embedded large-media occurrences;
- 0 small-text contrast failures in tested matrix;
- 0 text nodes under 12px in tested reference;
- 0 horizontal overflow from 320px through 1440px test matrix;
- text-spacing override: PASS;
- touch targets: PASS;
- canvas offscreen scheduling: PASS;
- inactive film scenes hidden from accessibility tree on desktop;
- responsive scene accessibility restored on mobile.

The standalone reference is a **design/regression reference**, not the production source of truth.

---

# 2. PRODUCTION SOURCE OF TRUTH

Repository:

`rotprods/MARKETINK`

Production runtime:
- Next.js 16.3.3;
- React 19.2;
- TypeScript;
- R3F / Three.js;
- GSAP;
- Lenis;
- Framer Motion;
- Supabase/Postgres intake.

Production code is authoritative.

Do not ship fixes only into a generated HTML preview.

---

# 3. PRODUCTION CI GATE

GitHub Actions:

`MARKET.INK Web CI`

Exact-head gate for PR #14:

- dependency install: PASS;
- TypeScript: PASS;
- Next production build: PASS;
- Playwright browser install: PASS;
- production E2E: **15 / 15 PASS**.

The tests run against the built Next.js application, not static source inspection alone.

---

# 4. CURRENT PRODUCTION E2E CONTRACT

Playwright currently verifies:

## Runtime
- no page errors;
- no console errors.

## Semantics
- one main target;
- keyboard skip link;
- decorative WebGL canvas semantics.

## Navigation
- System;
- Academy;
- INKSCAN;
- smooth-scroll convergence under fixed navigation.

## Responsive matrix
- 320×568;
- 390×844;
- 768×1024;
- 1440×900;
- zero horizontal page overflow.

## Conversion
- primary INKSCAN CTA;
- required intake fields;
- native email validation;
- native URL validation;
- valid FormData contract.

## Intake API
- malformed business type rejected before CRM;
- honeypot discarded through neutral thank-you route;
- valid submission fails closed when CRM server secrets are absent.

## Motion / device
- reduced-motion path remains usable;
- primary small-screen controls satisfy 44×44 touch gate.

---

# 5. RUNTIME HARDENING MERGED

V7 production includes:

- skip link;
- main focus target;
- 44px touch controls;
- operational microtype floor;
- stronger accessible red text variants;
- reflow/min-width guards;
- form autocomplete/input-mode hints;
- Lenis disabled for touch/coarse pointer and reduced-motion users;
- IntersectionObserver around hero;
- R3F Canvas uses `frameloop="demand"` when hero is offscreen;
- Canvas DOM explicitly receives decorative semantics.

---

# 6. REQUIRED NEXT TEST EXPANSION

Before calling the web "production complete":

## Cross-browser
- Chromium;
- WebKit;
- Firefox.

## Accessibility
- axe/ARIA automation;
- 200–400% reflow;
- WCAG text-spacing override;
- forced colors;
- keyboard-only complete journey.

## Visual
- desktop hero snapshot;
- mobile hero snapshot;
- critical section snapshots;
- regression threshold.

## Performance
- Web Vitals / Lighthouse budget;
- Canvas offscreen regression;
- bundle/asset budget;
- LCP media guard.

## API/security
- rate-limit contract;
- schema validation;
- hostile payload;
- origin policy;
- UTM/referrer attribution contract.

---

# 7. STOP CONDITIONS

Do not merge when:
- typecheck fails;
- production build fails;
- existing Playwright regression fails;
- new interaction lacks a test;
- small-screen horizontal overflow appears;
- a hidden/decorative visual becomes essential information;
- intake silently accepts malformed payloads;
- service-role secrets can reach browser code;
- reduced-motion blocks access to content.

---

# 8. NEXT GATE

Current:

`WEB_V7_PRODUCTION_REGRESSION_GREEN`

Next:

`WEB_V7_CROSS_BROWSER_AND_DATA_HARDENED`
