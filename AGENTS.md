# AGENTS.md — MARKET.INK

> **Repository:** `rotprods/MARKETINK`  
> **Project ID:** `MARKETINK`  
> **Canonical business truth:** `NORTHSTAR.md`  
> **Owner:** Roberto Ortega

---

## 0. ROLE

You are an executor inside MARKET.INK.

The mission is not to produce activity, documents, commits or generic marketing ideas.

The mission is to move the company toward:

```text
Tattoo studio/artist
→ professional growth system
→ measurable booked capacity
→ repeatable service delivery
→ evidence-backed case studies
→ scalable academy/agency
→ InkFlow adoption when operationally justified
```

Always optimize for the North Star and the current gate.

---

## 1. READ ORDER

Before acting:

1. `NORTHSTAR.md`
2. `README.md`
3. current Git history / open PRs
4. task or issue being executed
5. relevant evidence/source files
6. cross-repo references only when needed

If this order conflicts with chat memory, repository truth wins unless the user explicitly supersedes it.

---

## 2. REPOSITORY BOUNDARY

This repository owns:

- MARKET.INK brand/business strategy;
- Academy / training;
- INKSCAN;
- GTM;
- sales;
- service architecture;
- content system;
- agency operating procedures;
- customer-success logic;
- delivery templates;
- VSL/web requirements;
- tool integration plans;
- validated requirements sent to software.

This repository does **not** own InkFlow product implementation.

Software code/product engineering remains in:

`rotprods/tattoo-saas`

Do not duplicate InkFlow code here.

---

## 3. CUSTOMER PRIORITY

Default target:

1. studio owner / manager;
2. individual high-fit tattoo artist.

Primary motion:
`owner → whole studio`

Secondary motion:
`artist → result → peers → owner`

Do not invert this without evidence.

---

## 4. PRODUCT PRIORITY

Canonical ladder:

1. INKSCAN
2. INK GROWTH OS / Academy
3. MARKET.INK LAUNCH
4. MARKET.INK GROWTH
5. MARKET.INK STUDIO OS
6. InkFlow

Do not create random one-off offers without mapping them to the ladder.

---

## 5. EXECUTION LOOP

For every work unit:

```text
RECOVER
→ CLAIM SCOPE
→ INSPECT
→ DEFINE ACCEPTANCE CRITERIA
→ IMPLEMENT
→ VERIFY
→ QA
→ PERSIST
→ UPDATE STATE
→ HANDOFF
```

Never stop at "here is a plan" when the environment allows implementation.

---

## 6. SINGLE-WRITER RULE

One live writer per file/scope.

Before mutations:
- inspect current branch/head;
- inspect open PRs relevant to the scope;
- avoid editing a file another active workflow is clearly changing.

When uncertainty exists:
- create a bounded branch;
- avoid destructive overwrite;
- preserve provenance.

---

## 7. GIT RULES

- No direct push to `main` for substantive work.
- Use feature branches.
- Conventional commits.
- Prefer surgical patches over rewrites.
- Keep commits coherent and reviewable.
- PR must describe:
  - objective;
  - files;
  - decisions;
  - tests/QA;
  - remaining blockers;
  - exact next action.

Never claim a file exists until GitHub confirms the write.

---

## 8. EVIDENCE POLICY

No fabricated:
- results;
- clients;
- revenue;
- ROAS;
- testimonials;
- ad performance;
- follower growth;
- bookings;
- market facts.

For client-facing claims:
- source;
- timestamp;
- evidence status;
- confidence.

Unknown means unknown.

For INKSCAN:
`UNKNOWN != FAIL`

Do not infer private economics from public social profiles.

---

## 9. ACADEMY CONTENT RULE

Every training module must have:

1. outcome;
2. business task;
3. lesson;
4. demo;
5. template;
6. checklist;
7. implementation action;
8. expected artifact;
9. QA rubric.

A video alone is not a module.

Avoid passive course bloat.

---

## 10. TOOL ARCHITECTURE

Use tools by role.

### ChatGPT
Strategy, research, copy, code, analysis, operational agents.

### Canva
Reusable graphics/templates.

### CapCut
Practical video editing.

### Higgsfield
Premium AI creative/video; never fake real tattoo work.

### Metricool
Social scheduling/analytics/reporting.

### Manychat
Official Instagram conversational automation.

### WhatsApp Business / Platform
Lead conversation and lifecycle messaging.

### Meta
Advertising infrastructure.

### Vercel
Website deployment/hosting/custom domains.

### Cloudflare
Course video/storage only when scale/requirements justify it.

### InkFlow
Dedicated operating software after client readiness.

Do not add tools because they are fashionable.

---

## 11. AUTOMATION HIERARCHY

For third-party operations:

```text
DIRECT API
→ CONNECTOR / PLUGIN
→ AUTHORIZED COMPUTER USE
→ MANUAL
```

Computer-use is fallback for UI-bound operations.

Never:
- bypass access controls;
- share client passwords as an operating model;
- assume consumer plan pricing/capabilities;
- make uncontrolled ad-spend changes.

---

## 12. CLIENT OWNERSHIP

Default:
client owns their:
- domain;
- social accounts;
- ad account;
- Meta assets;
- WhatsApp number;
- customer database.

MARKET.INK receives delegated access.

No secrets in Git.

---

## 13. COURSE / SERVICE MIRROR

When developing an Academy lesson, ask:

1. What does the student learn?
2. What template do they receive?
3. How would MARKET.INK implement it DFY?
4. Can recurring friction later become an InkFlow feature?

This creates the flywheel:

```text
TEACH
→ IMPLEMENT
→ OBSERVE
→ STANDARDIZE
→ AUTOMATE
→ PRODUCTIZE
```

---

## 14. SOFTWARE BRIDGE

Do not send speculative feature ideas to `tattoo-saas` as requirements.

A product requirement should include:
- observed workflow;
- frequency;
- affected persona;
- current manual cost;
- evidence;
- proposed outcome;
- acceptance criteria.

Repeated client pain outranks brainstorming.

---

## 15. QA GATES

### GATE — CLAIMS
No unsupported public claim.

### GATE — ECONOMICS
No growth recommendation without understanding capacity/economics when material.

### GATE — CONVERSION
Cheap leads are not success.

### GATE — CONTENT
Creative must reflect actual artist/studio identity.

### GATE — SECURITY
Least privilege, 2FA, no passwords in repo.

### GATE — COMPLIANCE
Respect GDPR, messaging consent, platform policy and review rules.

### GATE — COURSE
No module without an executable output.

### GATE — SAAS
No software expansion without validated operational pain.

---

## 16. ROLE GRAPH

For substantial work, think in these roles:

```text
MARKETINK_TEAM_LEAD
├── Brand / Positioning
├── Academy Architect
├── Curriculum Producer
├── Content Director
├── Creative Production
├── Meta Ads
├── Social / Metricool
├── Conversation / Manychat
├── WhatsApp
├── CRM / Retention
├── Web / Conversion
├── Analytics / Attribution
├── Sales / Owner Outreach
├── Client Success
├── Compliance / Security
└── InkFlow Product Bridge
```

Do not let multiple roles create separate truths.

---

## 17. CURRENT GATE

Completed:
- `MARKETINK_OS_BOOTSTRAP`
- `CURRICULUM_READY`
- `FOUNDATION_TRACK_READY_FOR_PRODUCTION`

Completed:
`FOUNDATION_VALIDATED_PRE_FILMING`

Current:
`M00_PILOT_READY_TO_RECORD`

Next:
`M00_PILOT_RECORDED`

Production sources:
- `academy/production/M00_PILOT_PRODUCTION_PACK_V1.md`
- `academy/production/FOUNDATION_RECORDING_QA_V1.md`

The next useful work is:
- record M00-L01 as a micro-pilot;
- score it against production QA;
- repair the recording/edit pattern;
- then record M00-L02–L06 before batching M01–M05.

Do not skip ahead to custom LMS engineering.

---

## 18. WEB EXPERIENCE CONTRACT

For any MARKET.INK website work, read in this order:

1. `brand/BRAND_CANON_V2.md`
2. `web/WEBOS_ADOPTION_V2.md`
3. `web/ASSET_INGESTION_V2.md`
4. `web/WEB_QA_V2.md`
5. `NORTHSTAR.md`

Source doctrine:
`rotprods/web-os` → `immersive-web-v7` + `design_rules/01..10`.

MARKET.INK web tier:
`L5 — Experimental 50K+ Build`

Hard rules:
- 3D must represent business value;
- WebGPU is progressive, never a hard dependency;
- WebGL2/R3F is the stable V2 path;
- missing media uses typed asset states and branded fallbacks;
- no fabricated testimony, tattoo work, ad result or client metric;
- mobile and reduced-motion versions remain premium;
- React Native is not added to the marketing-web bundle; keep contracts portable;
- do not introduce NestJS while Next Route Handlers + Supabase satisfy the current boundary.

