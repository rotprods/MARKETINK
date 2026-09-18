# MARKET.INK — Beta Wave 001 Aggregate Status

> **Public-safe aggregate only.**  
> Real prospect names, scores and outreach notes remain in private Supabase CRM.

## Snapshot — 2026-09-18

```yaml
geography: Murcia
raw_candidates_registered: 15
lifecycle_discovered: 10
lifecycle_enriched: 5
public_evidence_items_on_enriched_subset: 16
outreach_sent: 0
beta_acceptances: 0
hard_gate_reviews_completed: 0
provisional_scores_completed: 5
```

## Evidence sources used

- current first-party studio websites;
- current public booking/contact pages;
- structured public local-business surfaces;
- current tattoo directories only as secondary evidence.

## Rules applied

- no business was scored from rating alone;
- no missing private data was treated as failure;
- no "revenue leak" was invented;
- no owner identity was guessed;
- no candidate details are published in GitHub;
- enriched candidates remain uncontacted until qualification is complete.

## Observed product-research pattern

The first enrichment pass already shows meaningful variance in public conversion maturity:

- some studios expose detailed project-intake forms;
- some expose simpler contact/reservation forms;
- some clearly route by artist/style;
- review/reputation footprints vary;
- public surfaces do not reveal capacity, unit economics, follow-up or attribution.

This validates the Academy design decision:

> public marketing maturity and internal operating maturity must be measured separately.

## Provisional ICP result

Five enriched candidates were scored with explicit UNKNOWN/provisional treatment.

Aggregate:
- highest provisional ICP: 66 / Tier B;
- remaining provisional scores: Tier C/D;
- maximum evidence coverage: 44.44%;
- all hard gates: UNREVIEWED;
- outreach unlocked: 0.

This is intentional. Public evidence is currently sufficient for research prioritization, not for a strong client-facing diagnosis.

## Next gate

`BETA_DECISION_MAKER_RESOLUTION`

Required:
1. owner/manager resolution where public;
2. Instagram/professional-profile evidence;
3. hard-gate review;
4. raise evidence coverage for highest-fit candidates;
5. choose operators for invitation based on learning value + fit, not prestige;
6. generate prospect-specific messages only after the gate passes.


## Private beta-runtime resolution state

A dedicated private `marketink_beta_candidates` table now separates general ICP from cohort-specific fit/readiness.

Aggregate state:
- cohort rows: 15;
- decision-maker public/resolved: 1;
- public founder identified but current decision role unverified: 1;
- general studio route only: 3;
- unresolved contact/role: 10;
- strategic competitive-conflict flags: 1;
- public artist-availability signals: 1;
- READY_TO_INVITE: 0.

This prevents a high ICP score from automatically becoming a beta invitation.

Next:
`BETA_FIT_REVIEW`
