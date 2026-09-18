# MARKET.INK ACADEMY — FOUNDATION MASTER V1

> **Project:** MARKET.INK  
> **Repo:** `rotprods/MARKETINK`  
> **Artifact:** `ACADEMY_MASTER_V1.md`  
> **Version:** 1.0.0  
> **Date:** 2026-09-18  
> **Parent:** `NORTHSTAR.md`  
> **Current gate:** `CURRICULUM_READY`  
> **Target gate after this artifact:** `FOUNDATION_TRACK_READY_FOR_PRODUCTION`

---

# 0. PURPOSE

This is the canonical production specification for the first MARKET.INK Academy release.

It converts the business thesis into an implementation-based training product.

The Foundation Track contains:

- M00 — Tattoo Growth Economics
- M01 — Positioning
- M02 — Offer Architecture
- M03 — Instagram Professional
- M04 — WhatsApp Business
- M05 — Meta Business Architecture

A student does not complete this track by watching videos.

They complete it by producing a working commercial foundation.

The final output of the track is:

```text
BUSINESS BASELINE
+ POSITIONING
+ OFFER LIBRARY
+ PROFESSIONAL INSTAGRAM
+ WHATSAPP SALES SYSTEM
+ META ASSET MAP
= READY FOR CONTENT + DEMAND
```

---

# 1. COURSE PRODUCT PRINCIPLES

## 1.1 Implementation over information

Every lesson must produce one of:

- a decision;
- a configured account;
- a document;
- a template;
- a live workflow;
- a measured baseline;
- an asset ready to use.

No lesson exists only because the information is interesting.

## 1.2 Studio-owner first

Examples should default to the studio owner because one owner can affect:
- multiple artists;
- shared demand;
- lead routing;
- ad spend;
- brand;
- content;
- booking operations.

Where behavior differs for individual artists, include an `INDIVIDUAL ARTIST` adaptation.

## 1.3 One operating language

Use these canonical terms throughout the Academy:

- `LEAD` — person expressing commercial interest.
- `QUALIFIED LEAD` — lead whose project fits minimum commercial criteria.
- `CONSULTATION` — structured evaluation before quote/deposit when needed.
- `DEPOSIT` — payment securing an appointment.
- `BOOKING` — confirmed tattoo appointment.
- `SELLABLE HOURS` — tattoo hours realistically available for sale.
- `BOOKED CAPACITY` — sellable hours already assigned to economically viable bookings.
- `REACTIVATION` — commercial re-engagement of an existing/past customer with a valid messaging basis.
- `OFFER` — reason + framing + conditions that make a desired tattoo project easier to buy now.
- `CAMPAIGN` — coordinated message, creative, audience and CTA intended to produce a defined business event.

## 1.4 No permanent-discount positioning

The Academy teaches promotions and offers, but:

> **offer ≠ discount**

Examples:
- limited booking window;
- flash drop;
- guest artist availability;
- themed collection;
- priority consultation;
- gift card;
- project bundle;
- event-specific release;
- continuation/rebooking opportunity;
- referral mechanism.

Discounting is one tool, not the brand strategy.

## 1.5 Platform UI is volatile

For Meta, Instagram and WhatsApp:

- teach stable concepts first;
- screen recordings use a `UI_VERIFIED_AT` date;
- re-check critical menus before recording or updating;
- do not hard-code a lesson around a button label if the underlying concept can be taught independently.

Each platform lesson begins with:

```yaml
platform_version_lock:
  verified_at: YYYY-MM-DD
  account_type:
  region:
  device:
  critical_paths_tested:
```

---

# 2. CANONICAL MODULE TEMPLATE

Every MARKET.INK Academy module follows this exact contract.

```yaml
module:
  id: MXX
  title:
  track:
  status: DRAFT|SCRIPT_READY|RECORDED|EDITED|QA|PUBLISHED
  version:
  target_persona:
  estimated_total_minutes:
  prerequisites:
  business_outcome:
  final_artifact:
  qa_gate:
```

## 2.1 Module anatomy

### A — WHY THIS MATTERS
One concise business explanation.

### B — BASELINE
Student records current state before changing anything.

### C — CORE MODEL
Teach the durable mental model.

### D — DEMO
Real implementation on a sandbox/test account where possible.

### E — DO IT NOW
Student performs the work.

### F — TEMPLATE
Provide a reusable system.

### G — QA
Student checks work against a binary rubric.

### H — HANDOFF
Explain what downstream module now becomes possible.

## 2.2 Lesson anatomy

Every lesson has:

```yaml
lesson:
  id: MXX-LYY
  title:
  target_minutes: 4-12
  objective:
  input:
  action:
  output:
  demo_required: true|false
  downloadable_asset:
  qa_question:
```

## 2.3 Recording package

Before recording:

- final lesson outline;
- prepared demo account;
- test data;
- finished example;
- failure example;
- screen resolution standardized;
- notifications disabled;
- personal/customer data removed;
- browser tabs minimized;
- script or bullet beats prepared;
- version-lock metadata filled.

During recording:
- show outcome first;
- explain why;
- demonstrate;
- stop and let student execute.

After recording:
- captions;
- chapter labels;
- callouts;
- download link;
- action card;
- QA check;
- platform date;
- version number.

---

# 3. ASSET NAMING

```text
MKTINK-ACA-M00-ECONOMICS-BASELINE-V1
MKTINK-ACA-M01-POSITIONING-ONEPAGER-V1
MKTINK-ACA-M02-OFFER-LIBRARY-V1
MKTINK-ACA-M03-IG-QA-V1
MKTINK-ACA-M04-WA-SALES-SYSTEM-V1
MKTINK-ACA-M05-META-ASSET-MAP-V1
```

Files:

```text
{ASSET_ID}.xlsx
{ASSET_ID}.csv
{ASSET_ID}.md
{ASSET_ID}.pdf
{ASSET_ID}.json
```

Version bump when:
- workflow materially changes;
- platform capabilities change;
- fields change;
- QA logic changes.

Cosmetic corrections do not require a major template redesign.

---

# 4. FOUNDATION TRACK DEFINITION OF DONE

A student passes the Foundation Track when:

- [ ] sellable capacity is known;
- [ ] average ticket is known or explicitly unknown;
- [ ] lead→booking baseline is known or data collection is installed;
- [ ] positioning statement is written;
- [ ] desired tattoo categories/styles are prioritized;
- [ ] offer library contains at least 12 usable non-duplicative offers;
- [ ] Instagram is professional and commercially legible;
- [ ] booking CTA is visible;
- [ ] WhatsApp Business profile is complete;
- [ ] sales labels/lists are configured where available;
- [ ] quick replies are active;
- [ ] inquiry qualification path exists;
- [ ] Meta assets are mapped;
- [ ] ownership and delegated access are correct;
- [ ] 2FA is active where applicable;
- [ ] no passwords have been shared as an agency operating method.

Passing means:
`FOUNDATION_READY = TRUE`

Only then should the student move into content production and paid demand.

---

# 5. M00 — TATTOO GROWTH ECONOMICS

```yaml
id: M00
title: Tattoo Growth Economics
track: Foundation
business_outcome: Know exactly what growth means economically for the business.
final_artifact: STUDIO_GROWTH_BASELINE
estimated_total_minutes: 50-70
qa_gate: ECONOMICS_BASELINE_COMPLETE
```

## 5.1 Why

Most marketing becomes irrational when the studio does not know:

- how much capacity exists;
- what that capacity is worth;
- how many inquiries become bookings;
- what a new customer can economically cost;
- where the actual bottleneck sits.

The goal is not perfect accounting.

The goal is enough commercial truth to decide what to fix next.

---

## 5.2 Lessons

### M00-L01 — The growth equation

Teach:

```text
AVAILABLE CAPACITY
× DEMAND QUALITY
× CONVERSION
× AVERAGE ECONOMIC VALUE
× RETENTION
= BUSINESS OUTPUT
```

Key insight:

If there is zero available capacity, acquisition is not the next action.

If demand is high but conversion is poor, more ads amplify waste.

If conversion is strong but nobody sees the artist, demand is the bottleneck.

**Output:** identify current suspected constraint.

---

### M00-L02 — Sellable hours

Define:

```text
SELLABLE_HOURS =
realistic working tattoo hours
- blocked/non-commercial time
- planned absence
```

Do not count:
- editing;
- cleaning;
- consultation;
- lunch;
- setup;
- admin;

unless that time is genuinely billed as tattoo time.

For studios calculate per artist.

Template columns:

| Field | Meaning |
|---|---|
| Artist | artist name/id |
| Available workdays | realistic days |
| Sellable tattoo hours/day | tattoo hours |
| Sellable hours/month | capacity |
| Already booked hours | committed |
| Open hours | capacity gap |
| Booked-capacity % | booked / sellable |

**Output:** capacity table.

---

### M00-L03 — Average ticket and hourly economics

Record:
- small tattoo average;
- medium;
- large/project work;
- effective hourly revenue where meaningful;
- average deposit;
- gross booked value.

Avoid false precision.

If data is absent:
- mark `UNKNOWN`;
- start measuring from now.

Do not invent industry benchmarks as business truth.

**Output:** ticket baseline.

---

### M00-L04 — Lead funnel

Canonical funnel:

```text
INQUIRY
→ QUALIFIED
→ CONSULTATION / QUOTE
→ DEPOSIT
→ BOOKED
→ COMPLETED
```

Required fields:

| Stage | Monthly Count | Conversion |
|---|---:|---:|
| Inquiry | | |
| Qualified | | |
| Consultation/Quote | | |
| Deposit | | |
| Booked | | |
| Completed | | |

Formulas:

```text
qualification_rate = qualified / inquiries
deposit_rate = deposits / qualified
booking_rate = booked / inquiries
show_rate = completed / booked
```

**Output:** funnel baseline.

---

### M00-L05 — Acquisition ceiling

Teach:

```text
MAX_ACQUISITION_COST
!= average_ticket
```

It depends on:
- gross profit;
- repeat behavior;
- capacity;
- cash flow;
- strategic value;
- cancellation/no-show;
- agency/media cost.

MARKET.INK Academy does not issue a universal CAC.

Student defines a conservative acceptable range using actual economics.

**Output:** `CAC_GUARDRAIL`.

---

### M00-L06 — Find the bottleneck

Decision tree:

```text
No capacity?
→ optimize pricing/capacity/operations.

Capacity + weak demand?
→ content/search/ads.

Demand + poor qualification?
→ message/offer/intake.

Qualified leads + weak deposits?
→ sales/follow-up/trust/booking.

Bookings + high no-show?
→ deposit/reminders.

Completed work + no repeat/referral?
→ retention/reputation.
```

**Final output:**
`STUDIO_GROWTH_BASELINE`

---

## 5.3 Asset schema — STUDIO_GROWTH_BASELINE

```yaml
studio:
  name:
  period:
artists:
  - artist:
    sellable_hours:
    booked_hours:
    open_hours:
    booked_capacity_rate:
economics:
  average_ticket:
  average_deposit:
funnel:
  inquiries:
  qualified:
  consultations_quotes:
  deposits:
  bookings:
  completed:
rates:
  qualification:
  deposit:
  booking:
  show:
acquisition:
  current_spend:
  current_cost_per_lead:
  acceptable_acquisition_range:
constraint:
  primary:
  evidence:
  confidence:
```

## 5.4 QA

Pass only if:
- no blank value is silently treated as zero;
- date period is defined;
- studio vs artist metrics are not mixed incorrectly;
- suspected bottleneck has evidence;
- capacity is measured before recommending more acquisition.

## 5.5 DFY mirror

MARKET.INK uses this exact baseline during:
- INKSCAN full audit;
- discovery;
- onboarding;
- monthly business review.

## 5.6 InkFlow bridge

Validated repeated data becomes later:
- capacity dashboard;
- lead funnel;
- revenue per artist;
- no-show;
- source attribution.

---

# 6. M01 — POSITIONING

```yaml
id: M01
title: Build a Tattoo Positioning People Can Understand
business_outcome: Make the desired work, client and reason-to-choose legible.
final_artifact: POSITIONING_ONE_PAGER
estimated_total_minutes: 50-65
qa_gate: POSITIONING_CLEAR
```

## 6.1 Why

A portfolio can contain excellent tattoos and still be commercially confusing.

The customer must quickly understand:
- what kind of work you want;
- whether you are right for their idea;
- where you are;
- what makes you different;
- how to start.

Positioning is not a slogan.

It is a decision system.

---

## 6.2 Lessons

### M01-L01 — Artist vs studio positioning

Artist positioning:
```text
I specialize in [work/style/project]
for [client/project type]
in [location],
with [distinctive approach/proof].
```

Studio positioning:
```text
We are a studio in [location]
with specialists across [priority styles]
for clients who value [experience/proof],
with a clear path to the right artist.
```

**Output:** draft statement.

---

### M01-L02 — Desired work matrix

Create:

| Work type/style | Want more? | Ticket | Portfolio proof | Capacity | Priority |
|---|---:|---:|---:|---:|---:|
| | | | | | |

Do not promote every style equally.

Use:
- strategic fit;
- skill;
- profitability;
- portfolio proof;
- artist desire;
- available capacity.

**Output:** top 3 commercial priorities.

---

### M01-L03 — Ideal client

Define by buying behavior and project fit, not stereotypes.

Fields:
- geography;
- type of project;
- budget reality;
- desired experience;
- research behavior;
- booking friction;
- concern;
- trust trigger.

Do not infer sensitive personal characteristics.

**Output:** `IDEAL_PROJECT_CLIENT`.

---

### M01-L04 — Differentiation

Source differentiation from actual evidence:

- recognized specialization;
- artist style;
- process;
- experience;
- studio environment;
- speed/availability where real;
- multi-artist routing;
- custom design;
- healed-result proof;
- customer experience;
- location;
- cultural/community relevance;
- portfolio consistency.

Forbidden:
- fake awards;
- fake "best studio";
- unverified superlatives.

**Output:** three defensible differentiators.

---

### M01-L05 — Proof stack

Create proof inventory:

```text
PORTFOLIO
REVIEWS
HEALED WORK
TESTIMONIALS
REPEAT CLIENTS
PRESS/AWARDS — VERIFIED ONLY
PROCESS
ARTIST EXPERIENCE
```

Each proof item needs source/evidence.

**Output:** `PROOF_BANK_V1`.

---

### M01-L06 — Positioning one-pager

Final sections:
1. desired work;
2. ideal project/client;
3. service area;
4. why choose us/me;
5. proof;
6. what we do not prioritize;
7. booking CTA;
8. brand language.

---

## 6.3 QA

A stranger should answer in 10–15 seconds:
- what tattoos are most desired;
- where;
- who;
- what to do next.

If not, fail.

---

# 7. M02 — OFFER ARCHITECTURE

```yaml
id: M02
title: Create Offers Without Turning Your Brand Into a Discount Page
business_outcome: Maintain a reliable calendar of commercially useful reasons to book.
final_artifact: OFFER_LIBRARY_20
estimated_total_minutes: 60-80
qa_gate: OFFER_SYSTEM_READY
```

## 7.1 Offer equation

```text
OFFER =
DESIRED PROJECT
+ REASON NOW
+ CLEAR CONDITIONS
+ PROOF
+ CTA
```

Possible value levers:
- access;
- exclusivity;
- convenience;
- artist availability;
- design release;
- project packaging;
- priority;
- themed relevance;
- experience;
- genuine financial incentive.

---

## 7.2 Lessons

### M02-L01 — Offer vs discount

Examples of offers without discount:
- 8-design flash drop;
- one-day booking window;
- guest artist dates;
- sleeve consultation week;
- cover-up consultation slots;
- fine-line collection;
- anime drop;
- blackwork project call;
- "finish your project" reactivation;
- gift-card campaign.

**Output:** classify 20 sample offers.

---

### M02-L02 — Offer types

Canonical library:

1. style campaign;
2. flash drop;
3. booking window;
4. guest artist;
5. seasonal;
6. themed date;
7. referral;
8. reactivation;
9. gift;
10. consultation;
11. large-project call;
12. portfolio-building call where transparent;
13. collaboration;
14. local event;
15. artist launch;
16. new-style focus;
17. last-minute cancellation slot;
18. waitlist activation;
19. returning-client priority;
20. premium experience.

---

### M02-L03 — Offer economics

Before publishing:
- capacity;
- minimum acceptable ticket;
- actual margin;
- duration;
- artist;
- limits;
- expiry;
- channel;
- operational load.

A promotion that fills low-value work while displacing premium demand can be negative.

---

### M02-L04 — Weekly campaign cadence

Weekly offers do not mean permanent "sale".

Example 4-week cycle:

```text
W1 — STYLE / PROJECT CALL
W2 — PROOF / CONSULTATION
W3 — FLASH / THEMED DROP
W4 — REACTIVATION / REFERRAL
```

Studio can rotate artists.

---

### M02-L05 — Annual opportunity calendar

Every thematic date receives:
- relevance;
- selected artist/style;
- design theme;
- asset deadline;
- publish date;
- offer;
- CTA;
- stop condition.

Do not exploit:
- tragedies;
- protected/sensitive events irresponsibly;
- unrelated observances merely for engagement.

---

### M02-L06 — Write the 20-offer library

For each:

```yaml
offer_id:
name:
target_artist:
target_style:
audience:
reason_now:
value:
conditions:
capacity_limit:
start:
end:
creative_needed:
cta:
followup:
measurement:
```

---

## 7.3 QA

Pass when:
- 20 offers exist;
- at least 12 do not depend on price discount;
- every offer maps to capacity;
- conditions are clear;
- no fake scarcity;
- CTA is explicit;
- measurement event is selected.

---

# 8. M03 — INSTAGRAM PROFESSIONAL

```yaml
id: M03
title: Turn Instagram Into a Professional Booking Surface
business_outcome: Make profile discovery convert into the correct commercial next step.
final_artifact: IG_PROFILE_QA_PASS
estimated_total_minutes: 60-90
qa_gate: IG_PROFESSIONAL_READY
```

## 8.1 Version lock

Before recording:

```yaml
verified_at: 2026-09-18
required_for_manychat: professional account
supported_types: Business or Creator
agency_preference: connect through Meta architecture when advanced automations/ads are required
```

The exact app menus can change.

Teach the durable end state.

---

## 8.2 Lessons

### M03-L01 — Professional account architecture

Decision:
- Artist may use Creator or Business depending on operational needs.
- Studio normally uses Business.
- Advanced agency/automation workflows should use proper Meta asset connectivity.

Do not make "Business always wins" a universal claim.

---

### M03-L02 — Profile conversion stack

Profile must expose:
1. searchable display name;
2. specialization/category;
3. location;
4. proof/differentiator;
5. CTA;
6. link/booking path;
7. contact methods where appropriate.

Bio formula:

```text
[WHAT / STYLE]
[LOCATION]
[WHY / PROOF]
[CTA]
```

---

### M03-L03 — Pinned posts

Recommended three roles:

1. **START HERE**
   - who;
   - style;
   - studio/location;
   - booking.

2. **PROOF**
   - portfolio / best projects / healed work / testimonials.

3. **BOOKING / CURRENT OFFER**
   - availability;
   - project call;
   - process.

Do not pin three random viral posts just because they got reach.

---

### M03-L04 — Highlights

Suggested:
- Start;
- Work;
- Healed;
- Reviews;
- Process;
- FAQ;
- Booking;
- Artists;
- Studio;
- Aftercare where appropriate.

For individual artist:
reduce to the minimum useful set.

---

### M03-L05 — Content/profile hierarchy

New visitor path:

```text
REEL/POST
→ PROFILE
→ PROOF
→ FIT
→ CTA
→ DM / WHATSAPP / BOOKING
```

Every surface should support this journey.

---

### M03-L06 — Manychat readiness

Before advanced Instagram automation:
- account is professional;
- connection method is chosen deliberately;
- access to messages is available/configured;
- Meta permissions are correct;
- agency access is delegated rather than password-shared.

Manychat currently supports multiple connection paths; via Meta is the preferred advanced path because it enables the fullest feature surface.

---

## 8.3 Instagram QA rubric

Score binary:

- [ ] professional account;
- [ ] correct public name;
- [ ] location clear;
- [ ] specialty legible;
- [ ] CTA visible;
- [ ] booking path works;
- [ ] pinned START HERE;
- [ ] proof pinned;
- [ ] booking/current offer pinned;
- [ ] highlights structured;
- [ ] broken links = 0;
- [ ] contact info verified;
- [ ] current work visually consistent enough to understand;
- [ ] no unsupported claims.

Pass:
`>= 12/14` and booking path must work.

---

# 9. M04 — WHATSAPP BUSINESS

```yaml
id: M04
title: Build a WhatsApp Sales System
business_outcome: Convert inquiries into organized, fast and professional booking conversations.
final_artifact: WHATSAPP_SALES_SYSTEM
estimated_total_minutes: 75-100
qa_gate: WHATSAPP_READY
```

## 9.1 Version lock — verified behavior

As verified 2026-09-18 in WhatsApp Help Center:

- WhatsApp Business app supports quick replies.
- Quick replies can use shortcuts and can include media on supported mobile surfaces.
- The app currently supports up to 50 stored quick replies.
- Labels/lists can organize conversations; availability and UI are rolling/changing.
- Broadcast behavior has recipient/contact constraints.
- WhatsApp Business supports business profiles and service/product catalog functionality.
- WhatsApp Business Platform/API is a separate advanced layer.

UI may change; teach the workflow first.

---

## 9.2 Lessons

### M04-L01 — Account architecture

Three maturity levels:

```text
LEVEL 1 — WhatsApp Business app
LEVEL 2 — WhatsApp Business app + disciplined CRM handoff
LEVEL 3 — WhatsApp Business Platform/API / InkFlow
```

Do not force API complexity onto a small operator before needed.

---

### M04-L02 — Business profile

Complete:
- studio/artist name;
- category;
- description;
- address where appropriate;
- opening hours;
- website;
- email;
- catalog/services if useful.

Test from another phone.

---

### M04-L03 — Conversation taxonomy

Canonical stages:

```text
NEW
QUALIFYING
QUALIFIED
WAITING_CLIENT
QUOTE/CONSULT
DEPOSIT_PENDING
BOOKED
COMPLETED
REVIEW
REACTIVATION
LOST
```

Map into labels/lists where available or CRM.

---

### M04-L04 — Qualification questions

Do not interrogate the lead with 20 messages.

Minimum useful data:
- idea/project;
- placement;
- approximate size;
- style;
- reference images;
- preferred artist if any;
- availability;
- city/travel constraint;
- budget only when commercially useful.

For studios:
route to artist/style.

---

### M04-L05 — Quick replies

Canonical quick-reply pack:

```text
/hola
/proyecto
/referencias
/tamano
/artista
/precio
/consulta
/senal
/disponibilidad
/ubicacion
/preparacion
/post
/resena
/seguimiento1
/seguimiento2
/noencaja
```

Each quick reply:
- sounds human;
- advances state;
- answers the actual question;
- has one next action;
- can be edited before sending.

Never build robotic walls of text.

---

### M04-L06 — Response SLA

Define owner and maximum internal response target.

Recommended operating goal:
- active inbound during business hours → as fast as practically sustainable;
- priority leads clearly visible;
- no "someone thought someone else answered".

Studio must define:
`RESPONSE_OWNER`.

---

### M04-L07 — Follow-up

Not every unanswered lead is dead.

Example internal cadence:
- initial response;
- follow-up when awaiting core info;
- quote/consult reminder;
- deposit reminder where appropriate;
- close/nurture state.

Do not spam.

Respect channel rules, consent and customer signals.

---

### M04-L08 — Broadcast / reactivation boundary

Broadcasts are not a substitute for a CRM or consent strategy.

Before reactivation:
- identify basis for contacting;
- segment;
- use relevant message;
- honor opt-out;
- avoid mass generic pushes.

---

## 9.3 WhatsApp quick-reply template

```yaml
reply_id:
shortcut:
stage:
trigger:
message:
required_personalization:
next_state:
next_action:
owner:
```

## 9.4 QA

- [ ] profile complete;
- [ ] business hours correct;
- [ ] booking link tested;
- [ ] conversation stages defined;
- [ ] 12+ useful quick replies;
- [ ] qualification path tested;
- [ ] deposit handoff tested;
- [ ] response owner known;
- [ ] follow-up rule exists;
- [ ] old chats can be categorized;
- [ ] no passwords or sensitive notes stored in template docs.

---

# 10. M05 — META BUSINESS ARCHITECTURE

```yaml
id: M05
title: Build the Meta Foundation Before Spending on Ads
business_outcome: Own, secure and connect the assets required for professional advertising and automation.
final_artifact: META_ASSET_MAP
estimated_total_minutes: 90-120
qa_gate: META_FOUNDATION_READY
```

## 10.1 Principle

Never build an agency operation around:
- client password sharing;
- unclear ownership;
- personal ad accounts as the permanent structure;
- random pages/accounts created by freelancers;
- one person being the only admin.

The client business owns its assets.

MARKET.INK gets authorized delegated access.

---

## 10.2 Stable conceptual asset graph

```text
CLIENT / STUDIO
│
├── Meta Business Portfolio / business environment
│   ├── Facebook Page
│   ├── Instagram Professional Account
│   ├── Ad Account
│   ├── dataset/pixel/event assets where applicable
│   ├── people
│   └── partners
│
├── Billing
├── Domain / Website
├── WhatsApp asset where applicable
└── External tools
    ├── Metricool
    └── Manychat
```

Exact product naming/UI may change.

Teach ownership and permission relationships.

---

## 10.3 Lessons

### M05-L01 — Asset inventory

Before touching settings:

```yaml
meta_inventory:
  business_environment:
  facebook_page:
  instagram:
  ad_account:
  billing:
  dataset_pixel:
  domain:
  whatsapp:
  current_admins:
  external_partners:
  2fa_status:
```

If an asset does not exist:
mark `MISSING`.

If ownership is unknown:
mark `OWNERSHIP_UNVERIFIED`.

---

### M05-L02 — Ownership

Client must be able to answer:
- who owns Page?
- who owns Instagram?
- who owns ad account?
- who pays?
- what Business environment controls assets?
- which people have access?
- which partners have access?

Do not proceed to serious ad spend with unresolved ownership.

---

### M05-L03 — Access and roles

Principle:
least privilege.

MARKET.INK should receive only what delivery requires.

Do not grant every contractor full control by default.

Create access matrix:

| Person/Partner | Page | IG | Ads | Billing | Data | Full control |
|---|---|---|---|---|---|---|

Review quarterly or at offboarding.

---

### M05-L04 — Security

Required:
- 2FA;
- unique accounts;
- no credential sharing;
- recovery methods;
- remove former staff;
- verify payment methods;
- know escalation/contact owner;
- document asset IDs where useful, never secrets.

Security incident examples:
- unknown admin;
- unfamiliar spend;
- compromised personal profile;
- Page removed;
- ad account restriction.

Student needs a recovery owner.

---

### M05-L05 — Connect Instagram/Page/business assets

Demonstrate with a sandbox/test setup.

Required outcome:
- professional Instagram;
- business asset relationship understood;
- Page connection where required by chosen tool architecture;
- tools can be authorized without password sharing.

Manychat's current agency/advanced setup supports connection via Meta/Business infrastructure; exact screens must be verified during recording.

---

### M05-L06 — Ad account + billing

Teach:
- identify/create correct ad account;
- timezone;
- currency;
- payment;
- spending policy;
- account IDs;
- who can publish;
- who can change billing.

Warning:
timezone/currency choices can create operational pain; verify before finalizing.

No learner launches campaigns in M05.

---

### M05-L07 — Measurement foundation

Before ads:
define events you care about.

MARKET.INK event hierarchy:

```text
CONTENT_VIEW
PROFILE_VISIT
LANDING_VIEW
CONVERSATION_STARTED
QUALIFIED_LEAD
CONSULTATION
DEPOSIT
BOOKING
BOOKED_VALUE
```

Not every event is available directly inside Meta.

CRM closes the loop.

---

### M05-L08 — Agency handoff

Client-facing handoff package:

```yaml
client_meta_handoff:
  client_owner:
  business_environment:
  page_id:
  instagram_handle:
  ad_account_id:
  billing_owner:
  dataset_id:
  domain:
  whatsapp_asset:
  marketink_partner_access:
  metricool_connected:
  manychat_connected:
  2fa_verified:
  recovery_owner:
  review_date:
```

Never include:
- password;
- recovery codes;
- card number;
- access token;
- API secret.

---

## 10.4 QA

Mandatory:
- [ ] owner identified;
- [ ] Instagram professional;
- [ ] Page relationship verified where required;
- [ ] ad account identified;
- [ ] timezone/currency confirmed;
- [ ] billing responsibility clear;
- [ ] 2FA active;
- [ ] at least two recovery/admin paths where appropriate;
- [ ] MARKET.INK delegated access documented;
- [ ] unknown former users removed/reviewed;
- [ ] Manychat connection method planned;
- [ ] Metricool connection planned;
- [ ] tracking event map created;
- [ ] no secrets in documentation.

Fail if:
- ownership unknown;
- password sharing is required as normal operation;
- client cannot recover key assets;
- ads would launch from the wrong account.

---

# 11. FOUNDATION ASSET PACK V1

This pack is produced before course filming finishes.

## A01 — Economics baseline

`MKTINK-ACA-M00-ECONOMICS-BASELINE-V1`

Fields:
- studio;
- artists;
- monthly capacity;
- booked capacity;
- average ticket;
- inquiries;
- qualification;
- deposits;
- bookings;
- completed;
- spend;
- primary bottleneck.

---

## A02 — Positioning one-pager

`MKTINK-ACA-M01-POSITIONING-ONEPAGER-V1`

Fields:
- preferred work;
- excluded/deprioritized work;
- ideal project;
- service area;
- differentiators;
- proof;
- CTA;
- words we use;
- words we avoid.

---

## A03 — Offer library

`MKTINK-ACA-M02-OFFER-LIBRARY-V1`

Minimum:
20 offers.

Columns:
- ID;
- type;
- artist;
- style;
- audience;
- start;
- end;
- reason now;
- value;
- conditions;
- capacity;
- CTA;
- creative;
- metric;
- result;
- retrospective.

---

## A04 — Instagram QA

`MKTINK-ACA-M03-IG-QA-V1`

Fields:
- profile type;
- public name;
- bio;
- location;
- CTA;
- link;
- pinned posts;
- highlights;
- Manychat readiness;
- score;
- defects;
- next actions.

---

## A05 — WhatsApp sales system

`MKTINK-ACA-M04-WA-SALES-SYSTEM-V1`

Contains:
- stage map;
- quick replies;
- qualification questions;
- follow-up rules;
- response owner;
- escalation path;
- booking/deposit handoff;
- reactivation boundary.

---

## A06 — Meta asset map

`MKTINK-ACA-M05-META-ASSET-MAP-V1`

Contains:
- asset IDs;
- owner;
- permission matrix;
- billing owner;
- security status;
- integrations;
- tracking map;
- recovery owner.

No secrets.

---

# 12. COURSE QA RUBRIC

Each module receives a release score.

```text
CONTENT ACCURACY      20
IMPLEMENTABILITY      20
DEMO QUALITY          15
TEMPLATE QUALITY      15
QA CLARITY            10
PLATFORM FRESHNESS    10
COMPLIANCE/SECURITY   10
-------------------------
TOTAL                 100
```

Release threshold:
`>= 90`

Hard failures:
- unsupported claim;
- broken setup path;
- unsafe credential behavior;
- missing student action;
- no final artifact;
- deceptive marketing technique;
- incorrect platform requirement that blocks implementation.

---

# 13. BETA TEST PROTOCOL

Foundation Track should be tested with 3–5 operators before being considered production-final.

For each tester capture:

```yaml
beta_session:
  tester_type: studio_owner|artist
  module:
  started_at:
  completed_at:
  completion:
  blockers:
  unclear_steps:
  ui_drift:
  template_defects:
  questions:
  time_to_artifact:
  artifact_quality:
  support_needed:
  revision_required:
```

Primary beta KPI:
`TIME_TO_WORKING_ARTIFACT`

Secondary:
- completion rate;
- support requests;
- defect count;
- self-reported confidence.

Do not optimize for watch time.

---

# 14. PRODUCTION PRIORITY

Record in this order:

1. M00
2. M01
3. M02
4. M04
5. M03
6. M05

Reason:
- business truth before tools;
- positioning before content;
- offers before campaigns;
- WhatsApp conversion can immediately improve existing inbound;
- Instagram profile then aligns discovery;
- Meta architecture comes last before paid-demand modules.

The curriculum IDs remain M00–M05; recording order can differ.

---

# 15. STEP-BY-STEP BUILD PLAN FOR ROBERTO

## Step 1 — Build the templates before filming

Create A01–A06.

Do not record until the templates are usable.

## Step 2 — Create one demo studio

Use a fictional/sandbox studio with:
- 3 artists;
- 3 styles;
- fake but clearly synthetic operational data;
- no real private client data.

Use it consistently across modules.

## Step 3 — Complete the entire track yourself

Run M00–M05 as if you were the student.

Record:
- friction;
- ambiguity;
- missing decisions;
- unnecessary complexity.

## Step 4 — Script only after implementation works

Scripts describe the verified path.

They do not invent the path first.

## Step 5 — Record operationally

Per lesson:
- 4–12 minutes default;
- open with result;
- one task;
- one demo;
- one action.

## Step 6 — Edit

CapCut or the current production pipeline:
- cut dead time;
- zoom only when needed;
- captions;
- chapter/title;
- cursor emphasis where useful;
- no excessive motion.

## Step 7 — Upload beta

Do not build a custom LMS yet.

## Step 8 — Beta with 3–5 operators

Observe them.

Do not only ask "did you like it?"

Measure whether they produced the expected artifact.

## Step 9 — Revision

Fix:
- wrong UI;
- missing steps;
- weak examples;
- confusing templates;
- repeated questions.

## Step 10 — Freeze Foundation v1

Tag:
`ACADEMY_FOUNDATION_V1`

Then proceed to Content Track.

---

# 16. DFY MIRROR — FOUNDATION DELIVERY

Every Academy module has an agency service equivalent.

```text
M00 Economics
→ MARKET.INK baseline + business review

M01 Positioning
→ positioning workshop

M02 Offers
→ monthly campaign/offer strategy

M03 Instagram
→ profile optimization

M04 WhatsApp
→ sales-system implementation

M05 Meta
→ business/ad-account architecture
```

This is how training becomes lead generation for service without artificially withholding knowledge.

Academy teaches the full system.

DFY sells:
- speed;
- execution;
- expertise;
- accountability;
- ongoing optimization.

---

# 17. SALES BRIDGE FROM ACADEMY

At the end of each module:

### Path A — DIY
"Implement the checklist and pass QA."

### Path B — REVIEW
"Submit your artifact for review."

### Path C — DFY
"MARKET.INK can implement this system for your studio."

Never sabotage DIY usefulness to force the upsell.

---

# 18. INKFLOW BRIDGE FROM FOUNDATION

Foundation modules should generate structured product research.

Potential future InkFlow mappings:

| Academy artifact | Possible InkFlow surface |
|---|---|
| Economics baseline | owner dashboard |
| Positioning | studio/artist profile config |
| Offer library | campaign/offer manager |
| IG QA | external integration health |
| WhatsApp sales stages | native CRM/conversation states |
| Meta asset map | integration settings |

Rule:
do not implement these in InkFlow because this table exists.

Only promote a requirement when repeated real clients prove the pain.

---

# 19. SOURCE FRESHNESS NOTES

Verified during this specification on 2026-09-18:

## WhatsApp Business
Current official WhatsApp Help Center confirms:
- quick replies remain a Business app feature;
- current documented cap is 50 saved quick replies;
- labels/lists are used to organize conversations, with rollout/UI variation;
- broadcast lists have delivery constraints;
- catalog supports business products/services;
- Business Platform/API is a distinct advanced route.

## Manychat / Instagram
Current Manychat documentation (updated 2026-08-27) confirms:
- Instagram connection requires a Professional account;
- Business or Creator accounts are supported;
- connecting via Meta is the recommended advanced option;
- advanced Meta path requires appropriate business asset setup;
- agency/client access can be delegated.

## Meta
Meta UI and naming remain volatile.
Do not teach navigation from memory.
Re-verify Business/Ads UI before recording M05.

---

# 20. CURRENT STATE

Completed in this artifact:

- [x] canonical module template;
- [x] lesson template;
- [x] asset naming;
- [x] Foundation DoD;
- [x] M00 fully specified;
- [x] M01 fully specified;
- [x] M02 fully specified;
- [x] M03 fully specified;
- [x] M04 fully specified;
- [x] M05 fully specified;
- [x] A01–A06 asset schemas;
- [x] course QA rubric;
- [x] beta protocol;
- [x] recording priority;
- [x] exact build sequence;
- [x] DFY mirror;
- [x] InkFlow bridge;
- [x] platform freshness notes.

Not yet complete:

- [ ] create A01–A06 actual downloadable files;
- [ ] create fictional demo studio dataset;
- [ ] script M00;
- [ ] execute M00 as student;
- [ ] QA template;
- [ ] repeat through M05;
- [ ] recruit beta operators.

---

# 21. NEXT EXACT GATE

Current:

`FOUNDATION_TRACK_READY_FOR_PRODUCTION`

Next:

`FOUNDATION_ASSET_PACK_READY`

Exact next work unit:

```text
CREATE A01–A06
→ CREATE DEMO_STUDIO_V1
→ RUN M00 END-TO-END
→ FIX DEFECTS
→ WRITE M00 RECORDING SCRIPT
```

Do not start Content Track before at least M00–M05 asset templates exist.
