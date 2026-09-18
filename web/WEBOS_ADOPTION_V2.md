# MARKET.INK — WEBOS ADOPTION V2

> Source framework: `rotprods/web-os`
> Skill: `.agents/skills/immersive-web-v7/SKILL.md`
> Design protocol: `design_rules/01..10`
> MARKET.INK target: L5 Experimental / 50K+ Build
> Production repo: `rotprods/MARKETINK`

---

# 0. OPERATING DECISION

Use WebOS as the **design/engineering doctrine source**.

Do not:
- embed MARKET.INK inside web-os;
- copy its entire monorepo;
- import unrelated shells blindly;
- inherit its dark-control-room aesthetic automatically.

MARKET.INK remains a dedicated Next.js production application in its own repository.

---

# 1. COMMERCIAL TRUTH

> We do not sell social media management. We turn tattoo artistry, capacity and reputation into a measurable growth system.

The website must prove:
1. MARKET.INK understands the studio operating problem.
2. MARKET.INK has a specific system.
3. The system has multiple entry points: learn / done-for-you / software.
4. Proof is evidence-gated.
5. The next step is low friction: INKSCAN.

---

# 2. EXPERIENCE TIER

`L5 — Experimental 50K+ Build`

Activated systems:
- cinematic auto reveal;
- giant editorial typography;
- GSAP + Lenis scroll choreography;
- Framer Motion interface transitions;
- R3F / Three.js narrative object;
- post-processing desktop only;
- capability-aware graphics quality;
- mobile condensed edition;
- reduced-motion edition;
- spatial proof/media surfaces;
- typed asset registry;
- evidence-safe conversion.

---

# 3. CENTRAL METAPHOR — INK ENGINE

MARKET.INK is presented as a living ink/signal machine.

The central red signal object represents:

```text
creative work
→ distribution signal
→ qualified conversation
→ booked capacity
```

Visual system:
- red directional/extruded signal core;
- liquid black ink mass / droplet;
- line-art tattoo motifs;
- real artist/testimonial/ad media orbiting the system;
- UI only where it explains an operating layer.

No floating "AI dashboard" panels without business purpose.

---

# 4. NARRATIVE MAP

## P0 — 0–4s AUTO REVEAL

Paper world starts almost blank.

A thin red line enters like a tattoo stroke.
It accelerates and folds into the signal core.
Black ink forms below it.
MARKET / INK resolves.

First message:
**AGENDA LLENA. MARCA CON TINTA.**

Then:
**El sistema de crecimiento para estudios de tatuaje.**

Reduced-motion:
instant editorial composition + subtle opacity.

---

## P1 — HERO

Promise:
> Tu arte no necesita más likes. Necesita un sistema que convierta atención en citas.

Actions:
- INKSCAN
- Ver cómo funciona

Hero visual:
INK ENGINE procedural 3D / branded fallback.

---

## P2 — THE OWNER PROBLEM

Oversized typographic scroll:
```text
TATUAR
CREAR
RESPONDER
VENDER
SEGUIR
MEDIR
```

Then:
> Un estudio no debería depender de que el dueño haga seis trabajos a la vez.

---

## P3 — SYSTEM

Six connected stages:
Position → Offer → Content → Demand → Convert → Retain/Measure.

Motion:
GSAP sticky sequence.
No scroll-jacking on mobile.

---

## P4 — MEDIA / VSL

Large cinematic VSL frame.

Required asset slots:
- poster;
- Stream/video ID;
- captions/transcript;
- audio reference;
- chapter markers.

Fallback:
branded VSL frame + playable "coming asset" state hidden from public production until video exists.

---

## P5 — PROOF ORBIT

Evidence objects:
- testimonial video;
- testimonial audio;
- quote;
- screenshot;
- metrics card;
- case-study timeline;
- tattoo artist portrait;
- creative/ad example.

No proof item renders publicly unless its evidence state permits it.

---

## P6 — SERVICES / THREE PATHS

### Learn
INK GROWTH OS.

### Implement
MARKET.INK Growth.

### Scale
Studio OS → InkFlow.

Spatial choreography should make these feel like different routes through one system.

---

## P7 — ARTIST / CRAFT SURFACE

Real tattoo visuals.

Frame architecture supports:
- artist portrait;
- healed tattoo;
- process macro;
- studio;
- detail;
- before/after only if truthful;
- style tag;
- artist credit.

No AI image may masquerade as a tattoo actually produced by a real artist.

---

## P8 — CREATIVE / ADS LAB

Show real campaigns:
- ad image/video;
- offer;
- hook;
- format;
- result only if verified.

Use as capability proof.

---

## P9 — TESTIMONIAL LISTENING ROOM

Allow:
- video;
- audio;
- text;
- waveform visualization.

Audio never autoplay.

---

## P10 — CTA / INKSCAN

Editorial dark-to-red close.

> Descubre qué parte del sistema está frenando tu agenda.

Form → existing Supabase CRM intake.

---

# 5. TECHNICAL PATH

## Stable production path
- Next.js App Router
- React 19
- TypeScript
- R3F / Three.js WebGL2
- Drei
- GSAP + ScrollTrigger
- Lenis
- Framer Motion
- maath/easing
- postprocessing

## WebGPU
Progressive enhancement only.

Policy:
- detect `navigator.gpu`;
- record capability;
- never make conversion dependent on WebGPU;
- WebGL2 remains stable canvas path in V2;
- optional WebGPU renderer experiment stays isolated behind a feature flag after compile/perf validation.

## React Native
Do not add React Native to the marketing-web bundle.

Instead:
- keep brand tokens/content contracts pure TypeScript;
- make them portable for a future React Native client/companion app.

## Backend
Do not introduce NestJS just to satisfy stack density.

Current correct backend:
- Next Route Handlers for web boundary;
- Supabase/Postgres as CRM runtime.

A NestJS service is justified only if future orchestration/API complexity outgrows this boundary.

---

# 6. PERFORMANCE CONTRACT

Targets, not guarantees:

- stable 60fps desktop scene where hardware allows;
- adaptive DPR;
- draw calls ideally <45 in hero scene;
- initial 3D lazy-loaded;
- no hero GLB dependency in V2;
- textures compressed when introduced;
- post FX disabled/reduced mobile;
- Canvas paused/offscreen where possible;
- CSS/editorial fallback remains complete;
- CLS target <0.05;
- LCP monitored with real assets.

---

# 7. ACCESSIBILITY CONTRACT

Required:
- semantic H1/H2 structure;
- selectable text;
- focus-visible;
- keyboard CTA;
- reduced-motion;
- canvas decorative semantics where appropriate;
- visible video controls;
- transcripts;
- audio controls;
- high-contrast text;
- no critical information only inside WebGL.

---

# 8. ASSET STRATEGY

No fake paths.

All external media goes through typed asset registry with status:

```text
MISSING
REFERENCE
READY
VERIFIED
APPROVED_PUBLIC
BLOCKED
```

If missing:
- render branded structural frame in development;
- hide unsupported proof in public production;
- never generate fake testimonial/tattoo results.

---

# 9. QUALITY GATES

Internal 1–10:
- memorability;
- commercial clarity;
- brand fidelity;
- originality;
- 3D utility;
- motion;
- hierarchy;
- conversion;
- technical realism;
- mobile.

No dimension below 8 before production approval.

Additional MARKET.INK gates:
- exact colors;
- no generic AI look;
- no fabricated proof;
- tattoo craft remains human-led;
- first frame unmistakably MARKET.INK.
