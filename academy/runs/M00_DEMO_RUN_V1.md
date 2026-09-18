# M00 DEMO RUN V1 — Black Needle Lab

> **Synthetic training exercise**  
> This is fictional data. It must never be used as a MARKET.INK client result, testimonial or case study.

## 1. Period

`2026-08`

## 2. Capacity

| Artist | Sellable h | Booked h | Open h | Booked capacity |
|---|---:|---:|---:|---:|
| Luna | 96 | 72 | 24 | 75.0% |
| Nico | 112 | 98 | 14 | 87.5% |
| Mara | 88 | 44 | 44 | 50.0% |
| **Studio** | **296** | **214** | **82** | **72.3%** |

### Finding

The studio still has **82 sellable tattoo hours open**, but the gap is not evenly distributed.

Mara alone owns 44 open hours, more than half of the studio's total open capacity.

Therefore a studio-level "we need more leads" conclusion would be incomplete.

The first commercial question is:

> Can current demand be converted and routed more effectively toward Mara / fine-line capacity before increasing aggregate acquisition?

---

## 3. Funnel

| Stage | Count | Stage conversion |
|---|---:|---:|
| Inquiries | 142 | — |
| Qualified | 93 | 65.5% of inquiries |
| Consultation / quote | 72 | 77.4% of qualified |
| Deposit | 45 | 62.5% of consultations/quotes |
| Booking | 43 | 95.6% of deposits |
| Completed | 39 | 90.7% of bookings |

Overall:

```text
inquiry → booking = 30.3%
booking → completed = 90.7%
```

## 4. Acquisition

Known:
- monthly media spend: €540;
- Meta Ads inquiries: 46.

Possible diagnostic:

```text
€540 / 46 = €11.74 per Meta-attributed inquiry
```

But this is **not CAC**, **not cost per booking**, and **not ROAS**.

Why:
- booked revenue is not linked back to source;
- campaign/creative attribution is missing;
- qualified rate per source is unknown.

### QA decision

Do **not** claim:

> "Meta is generating bookings at €X."

That is not supported by the dataset.

---

## 5. Economics

Blended average ticket:
`€338`

Observed bookings:
`43`

Illustrative booked value if the blended ticket applies:

```text
43 × €338 = €14,534
```

This is a synthetic training calculation, not a real business claim.

It also cannot be used to calculate Meta ROAS because bookings are not source-linked.

---

## 6. Constraint diagnosis

### Candidate constraint A — Demand

Evidence against this being the only constraint:
- 142 inquiries already exist;
- 82 hours remain open;
- funnel leakage exists after inquiry;
- capacity gap is concentrated in one artist.

### Candidate constraint B — Qualification / conversion

Evidence:
- 93 of 142 inquiries qualify;
- 45 of 93 qualified leads produce a deposit;
- follow-up is described as manual/inconsistent.

This is a meaningful constraint.

### Candidate constraint C — Artist routing / positioning

Evidence:
- Nico: 87.5% booked;
- Luna: 75.0%;
- Mara: 50.0%;
- studio-level acquisition can hide style/artist imbalance.

This is also a meaningful constraint.

### Candidate constraint D — Attribution

Evidence:
- source recorded at inquiry;
- booked revenue not tied to campaign/creative.

This prevents confident budget optimization.

---

# 7. M00 DECISION

Primary growth constraint:

> **Conversion + demand routing by artist/style.**

Secondary operational constraint:

> **Attribution gap.**

Not recommended yet:

> Increase Meta spend indiscriminately.

Recommended next sequence:

```text
1. Improve lead-state tracking.
2. Identify qualification/deposit leakage.
3. Route fine-line demand explicitly to Mara.
4. Build style-specific offer for Mara's open capacity.
5. Link source/campaign/creative to deposit and booking.
6. Reassess acquisition after 2–4 weeks of clean data.
```

---

# 8. STUDENT OUTPUT

```yaml
period: 2026-08
sellable_hours: 296
booked_hours: 214
open_hours: 82
booked_capacity_rate: 72.30
average_ticket: 338
average_deposit: 60
funnel:
  inquiries: 142
  qualified: 93
  consultations_quotes: 72
  deposits: 45
  bookings: 43
  completed: 39
rates:
  qualification_rate: 65.49
  qualified_to_consult_rate: 77.42
  consult_to_deposit_rate: 62.50
  inquiry_to_booking_rate: 30.28
  show_rate: 90.70
acquisition:
  meta_spend: 540
  meta_inquiries: 46
  cost_per_meta_inquiry: 11.74
  verified_meta_cac: null
  verified_meta_roas: null
constraint:
  primary: conversion_and_artist_routing
  secondary: attribution
recommended_next_action: repair_conversion_and_route_demand_before_scaling_spend
```

---

# 9. M00 QA RESULT

- [x] Unknown values were not treated as zero.
- [x] Capacity measured before recommending acquisition.
- [x] Artist-level imbalance identified.
- [x] Funnel conversion calculated.
- [x] Cost per inquiry not mislabeled CAC.
- [x] No unsupported ROAS claim.
- [x] Primary constraint supported by evidence.
- [x] Next action follows from constraint.

**Result:** `PASS`

**M00 template defect found:** no blocking structural defect in the first synthetic run.

**Improvement for production:** add explicit source-level qualified/deposit/booking fields to future baseline iterations so channel quality can be compared without waiting for the full attribution module.
