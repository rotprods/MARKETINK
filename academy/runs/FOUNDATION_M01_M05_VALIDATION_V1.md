# MARKET.INK FOUNDATION VALIDATION — M01–M05 V1

> **Synthetic validation only**  
> Dataset: `academy/demo/DEMO_STUDIO_V1.json`  
> Studio: Black Needle Lab (fictional)  
> Date: 2026-09-18  
> Objective: execute M01–M05 as a student before recording.

---

# 0. EXECUTIVE RESULT

```yaml
M01_POSITIONING: PASS
M02_OFFERS: PASS
M03_INSTAGRAM: PASS_AFTER_REMEDIATION
M04_WHATSAPP: PASS_AFTER_REMEDIATION
M05_META: PASS_AFTER_REMEDIATION
blocking_template_defects: 1
blocking_course_defects_after_fix: 0
```

The Foundation Track is structurally viable.

The validation exposed one real template inconsistency:

> A04 Instagram QA contained 15 criteria while the Academy master defined a 14-point core pass gate.

Resolution:
- keep **14 core profile criteria**;
- treat **Manychat readiness** as a separate integration-readiness field, not a requirement for a professional Instagram profile to pass.

This prevents the Academy from implying that every professional Instagram account must use Manychat.

---

# 1. M01 — POSITIONING RUN

## 1.1 Input

Current synthetic bio:

> Black Needle Lab · Tattoo Studio · Murcia · DM para citas

Known:
- 3 artists;
- specialties exist;
- portfolio proof is strong/good;
- desired capacity is not evenly distributed;
- current profile does not explain style routing.

## 1.2 Desired-work matrix

| Artist | Priority style | Open capacity | Avg ticket | Portfolio proof | Commercial priority |
|---|---|---:|---:|---|---:|
| Luna | Blackwork | 24 h | €320 | Strong | High |
| Nico | Realismo B&G | 14 h | €460 | Strong | Medium |
| Mara | Fine line | 44 h | €190 | Good | Very high |

### Decision

The studio should not promote every artist/style with equal weight.

Immediate growth emphasis:
1. fine line / Mara;
2. blackwork / Luna;
3. realism B&G / Nico as premium proof and selective demand.

---

## 1.3 Ideal project/client

### Studio-level
- client can travel to Murcia;
- has a reasonably defined tattoo project;
- values specialist matching rather than choosing randomly;
- wants a professional booking process;
- can provide references/placement/size information;
- is prepared to secure serious work with a deposit.

No demographic or sensitive-personal inference is required.

---

## 1.4 Defensible differentiators

1. **Multi-artist specialization**
   - blackwork;
   - realism B&G;
   - fine line.

2. **Artist routing**
   - client can be directed toward the right artist rather than a generic studio inbox.

3. **Proof stack**
   - healed work;
   - reviews;
   - testimonials;
   - repeat-client examples.

No "best studio in Murcia" claim is used.

---

## 1.5 Positioning statement

### Studio

> **Estudio de tatuaje en Murcia con artistas especializados en blackwork, realismo B&G y fine line. Te ayudamos a llevar tu idea al artista adecuado y a convertirla en un proyecto claro, desde la consulta hasta la cita.**

### Short bio direction

```text
Tattoo Studio · Murcia
Blackwork · Realismo B&G · Fine line
3 artistas · Proyectos personalizados
↓ Cuéntanos tu idea / Reserva
```

---

## 1.6 Proof bank

Synthetic inventory:

| Proof | Count | Use |
|---|---:|---|
| Google reviews | 186 | Trust |
| Healed work assets | 28 | Quality/proof |
| Testimonials | 14 | Social proof |
| Repeat-client examples | 22 | Retention proof |
| Awards | 0 | Do not claim |

---

## 1.7 M01 QA

- [x] desired work visible;
- [x] city visible;
- [x] three priorities chosen;
- [x] differentiators evidence-backed;
- [x] CTA explicit;
- [x] no unsupported award/superlative;
- [x] work to deprioritize can be stated by owner if needed.

**M01:** `PASS`

---

# 2. M02 — OFFER SYSTEM RUN

Goal:
create 20 commercially usable offers without turning the studio into a discount page.

## 2.1 Offer library

| ID | Type | Offer | Artist/style | Reason now | Primary CTA | Discount-dependent |
|---|---|---|---|---|---|---|
| O01 | Project call | Fine Line Project Week | Mara | Open capacity | Send idea | No |
| O02 | Flash drop | 12 Fine Line Minis | Mara | New design release | Choose design | No |
| O03 | Style call | Blackwork Project Call | Luna | Portfolio expansion in desired work | Apply with idea | No |
| O04 | Consultation | Sleeve Planning Sessions | Luna/Nico | Limited consult block | Book consult | No |
| O05 | Premium | Realism Portrait Selection | Nico | Selective project intake | Submit reference | No |
| O06 | Reactivation | Finish Your Project | Previous clients | Continue unfinished work | Reply with prior project | No |
| O07 | Referral | Bring a Project, Refer a Friend | All | Referral activation | Request details | No |
| O08 | Guest/event | Guest Artist Weekend | Future guest | Fixed dates | Join waitlist | No |
| O09 | Seasonal | Autumn Blackwork Collection | Luna | Seasonal creative theme | View designs | No |
| O10 | Themed | Horror Week Designs | Luna/Nico | Themed date | Reserve design | No |
| O11 | Local | Murcia Studio Open Day | Studio | Local discovery | Book consultation | No |
| O12 | Booking window | October Books Open | Studio | Calendar opening | Submit project | No |
| O13 | Cancellation | 48h Priority Slot | Relevant artist | Genuine cancellation | Claim slot | No |
| O14 | Waitlist | Priority Waitlist | Nico | Limited premium capacity | Join waitlist | No |
| O15 | Returning client | Returning Client Priority | All | Rebooking | Request priority slot | No |
| O16 | Gift | Tattoo Gift Card | Studio | Gift period | Buy/request card | No |
| O17 | Collaboration | Tattoo × Local Artist Drop | Selected | Collaboration launch | See collection | No |
| O18 | Education/trust | Cover-up Consultation Week | Selected | Remove uncertainty | Book evaluation | No |
| O19 | Package | Large Project Planning Pack | Luna/Nico | Simplify complex project start | Book planning session | No |
| O20 | Price incentive | Selected Flash Day | Mara | Fill a controlled block | Reserve | Yes |

Result:
- 19/20 offers do not require a discount;
- every offer has a reason now;
- each can be capacity-bounded;
- no fake scarcity is required.

---

## 2.2 Four-week cadence

```text
W1 — Fine Line Project Week
W2 — Healed Work + Sleeve Consultation
W3 — Flash / Themed Drop
W4 — Previous-client Reactivation
```

Rotate artist emphasis according to actual open capacity.

---

## 2.3 Stop conditions

Do not keep promoting an offer when:
- target artist reaches desired capacity;
- lead quality falls below threshold;
- operational response SLA cannot be met;
- offer cannibalizes higher-value work;
- capacity data changed.

---

## 2.4 M02 QA

- [x] 20 offers;
- [x] >=12 non-discount;
- [x] real capacity mapping;
- [x] CTA per offer;
- [x] no invented scarcity;
- [x] one measurement event per campaign;
- [x] owner can rotate by artist.

**M02:** `PASS`

---

# 3. M03 — INSTAGRAM PROFESSIONAL RUN

## 3.1 Initial state

Core criteria:

| Criterion | Initial |
|---|---|
| Professional account | PASS |
| Public name clear | PASS |
| Location clear | PASS |
| Specialty clear | FAIL |
| CTA visible | PASS |
| Booking path works | FAIL |
| Pinned Start Here | FAIL |
| Pinned Proof | PASS |
| Pinned Booking/Offer | FAIL |
| Highlights structured | FAIL |
| Broken links = 0 | PASS |
| Contact info verified | PASS |
| Portfolio commercially legible | PASS |
| Claims supported | PASS |

Initial core score:

`9 / 14`

Separate integration readiness:

`Manychat readiness = FAIL`

---

## 3.2 Remediation

### Bio

```text
Tattoo Studio · Murcia
Blackwork · Realismo B&G · Fine line
3 artistas · Proyectos personalizados
↓ Cuéntanos tu idea / Reserva
```

### Pinned structure

1. START HERE
   - studio;
   - location;
   - artists/styles;
   - booking process.

2. PROOF
   - healed work;
   - testimonials;
   - selected portfolio.

3. CURRENT
   - current booking window / offer.

### Highlights

```text
START
ARTISTS
WORK
HEALED
REVIEWS
BOOKING
FAQ
STUDIO
```

### Booking path

Replace generic "DM para citas" as the only system with:
- profile CTA;
- structured form/link or WhatsApp route;
- exact next step.

---

## 3.3 Manychat readiness

This is an **integration gate**, not a core Instagram-profile gate.

For advanced automation:
- professional account confirmed;
- message-tool access checked;
- Meta connection route chosen;
- delegated client/agency access used.

Current Manychat documentation supports professional Business/Creator accounts and recommends Meta connection for the fullest advanced feature path.

---

## 3.4 Final state

Core:
`14 / 14`

Integration:
`MANYCHAT_READY = TRUE after authorized connection setup`

**M03:** `PASS_AFTER_REMEDIATION`

---

# 4. M04 — WHATSAPP BUSINESS RUN

## 4.1 Initial state

```yaml
profile_complete: false
business_hours_correct: true
booking_link_tested: false
sales_stages: absent
quick_replies: 2
qualification_path: absent
deposit_handoff: untested
response_owner: studio_owner
followup_rule: absent
legacy_chats_categorized: false
```

Diagnosis:

> WhatsApp is being used as an inbox, not as a sales operating system.

---

## 4.2 Sales-state implementation

```text
NEW
→ QUALIFYING
→ QUALIFIED
→ WAITING_CLIENT
→ CONSULT/QUOTE
→ DEPOSIT_PENDING
→ BOOKED
→ COMPLETED
→ REVIEW
→ REACTIVATION
```

Terminal:
- LOST
- NOT_FIT
- DO_NOT_CONTACT

---

## 4.3 Qualification flow

First response should collect enough information to progress without creating interrogation fatigue.

Canonical sequence:

1. idea/project;
2. placement;
3. approximate size;
4. style/references;
5. desired artist if known;
6. timing/availability;
7. route to artist/consultation.

Budget is collected only when it improves qualification and is appropriate to the studio's sales method.

---

## 4.4 Quick-reply pack

The current WhatsApp Business help documentation supports saved quick replies; the documented cap at validation time is 50.

Foundation pack uses 16:

| Shortcut | Purpose |
|---|---|
| /hola | open professionally |
| /proyecto | ask project |
| /referencias | request references |
| /tamano | size |
| /zona | body placement |
| /artista | desired artist |
| /disponibilidad | timing |
| /consulta | consultation |
| /precio | explain quote process |
| /senal | deposit |
| /ubicacion | location |
| /preparacion | appointment preparation |
| /post | post-session/aftercare handoff |
| /resena | review request |
| /seguimiento1 | first follow-up |
| /seguimiento2 | second/final reasonable follow-up |

Every reply can be edited before sending.

No reply should impersonate a human conversation while hiding that automation is involved where disclosure is required.

---

## 4.5 Response ownership

Current:
studio owner.

Problem:
single point of failure.

Foundation decision:
- define PRIMARY response owner;
- define BACKUP;
- create business-hours expectation;
- move unanswered qualified leads into visible state.

---

## 4.6 Follow-up rule

Example internal process:

```text
Lead asks
→ answer + one next step
→ if waiting on project data, follow up once
→ if quote/consult ready, reminder
→ if deposit pending, one appropriate reminder
→ no engagement → nurture/close
```

No endless follow-up.

---

## 4.7 Final QA

- [x] business profile completed;
- [x] business hours verified;
- [x] booking route tested;
- [x] state system defined;
- [x] 16 replies designed;
- [x] qualification flow tested on demo;
- [x] deposit handoff defined;
- [x] primary + backup owner required;
- [x] follow-up rule exists;
- [x] reactivation is separated from indiscriminate broadcast.

**M04:** `PASS_AFTER_REMEDIATION`

---

# 5. M05 — META BUSINESS ARCHITECTURE RUN

## 5.1 Initial asset state

```yaml
business_environment_exists: true
business_environment_owner: Black Needle Lab
facebook_page_exists: true
instagram_professional_connected: true
ad_account_exists: true
currency: EUR
timezone: Europe/Madrid
billing_owner: Black Needle Lab
two_factor_all_admins: false
marketink_partner_access: false
dataset_pixel_exists: true
domain_verified: false
metricool_connected: false
manychat_connected: false
former_user_access_reviewed: false
```

This is **not ready** for professional agency operation.

---

## 5.2 Remediation order

### Step 1 — Ownership

Verify:
- business environment;
- Page;
- Instagram;
- ad account;
- billing;
- domain;
- WhatsApp asset where applicable.

No password transfer.

### Step 2 — Access audit

List:
- active owner/admins;
- former staff/freelancers;
- partner access;
- unnecessary permissions.

Remove obsolete access after owner confirmation.

### Step 3 — Security

Required:
- 2FA for privileged users;
- recovery owner;
- no shared logins;
- no credentials in MARKET.INK CRM/Git/docs.

### Step 4 — MARKET.INK access

Use delegated partner/person access at least privilege.

MARKET.INK does not become the owner of the client's business assets.

### Step 5 — Integrations

Connect deliberately:
- Metricool for social planning/analytics;
- Manychat for Instagram conversational automation;
- website/domain;
- tracking assets.

### Step 6 — Event model

```text
CONVERSATION_STARTED
QUALIFIED_LEAD
CONSULTATION
DEPOSIT
BOOKING
BOOKED_VALUE
```

Meta will not contain all business truth.

CRM closes the loop.

---

## 5.3 Final asset state target

```yaml
ownership_verified: true
client_owns_assets: true
all_privileged_users_2fa: true
former_access_reviewed: true
marketink_delegated_access: true
domain_status: verified_or_documented_not_required
metricool_connection: ready
manychat_connection: ready
event_map: documented
secrets_in_docs: false
```

No campaign launch is part of M05.

M05 builds the safe foundation for the Meta Ads track.

---

## 5.4 M05 QA

- [x] client ownership model;
- [x] ad account/currency/timezone mapped;
- [x] billing responsibility mapped;
- [x] least-privilege partner model;
- [x] 2FA required;
- [x] former access review;
- [x] integration plan;
- [x] event map;
- [x] no password sharing;
- [x] no ad-spend change.

**M05:** `PASS_AFTER_REMEDIATION`

---

# 6. FOUNDATION TRACK FINAL STATE

After the synthetic run:

```text
M00 — business constraint known
M01 — desired work and positioning known
M02 — 20-offer library exists
M03 — profile converts discovery into next action
M04 — WhatsApp moves conversations through states
M05 — Meta assets are owned, secured and mapped
```

This is sufficient to enter:

`CONTENT + DEMAND TRACK`

But the course is **not ready to film in full yet**.

Remaining:
- fix A04 core/optional inconsistency;
- create M01–M05 recording scripts;
- run script QA;
- mark platform UI verification checkpoints.

---

# 7. TEMPLATE DEFECT LOG

## DEFECT FND-001 — Instagram QA denominator mismatch

**Observed:**
- A04 CSV contains 15 rows including Manychat readiness.
- ACADEMY master core profile QA defines 14 criteria.

**Severity:** Medium.

**Root cause:**
integration readiness was mixed with core profile quality.

**Decision:**
- 14 criteria = core Instagram QA;
- Manychat readiness = optional/separate integration status.

**Required patch:**
add `scope` column to A04 and mark Manychat as `integration`.

**Regression condition:**
M03 can pass core QA without Manychat installed.

---

# 8. CURRENT GATE

After defect patch and recording-script creation:

`FOUNDATION_VALIDATED_PRE_FILMING`

Next:
- record M00 pilot;
- review production quality;
- then record M01–M05;
- recruit 3–5 external beta operators before freezing public v1.
