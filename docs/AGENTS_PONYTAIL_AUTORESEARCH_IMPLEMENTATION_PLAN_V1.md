# MARKET.INK — AGENTS.md × PONYTAIL × AUTORESEARCH IMPLEMENTATION PLAN V1

> **Repository:** `rotprods/MARKETINK`  
> **Owner:** Roberto Ortega  
> **Status:** PLAN ONLY — NO AGENTS.md MUTATION YET  
> **Base:** `main @ 0fde011ae5c07d4050713db5e17b5a73d07c2609`  
> **Upstream references:** `DietrichGebert/ponytail`, `karpathy/autoresearch`  
> **Purpose:** integrate a permanent simplicity/build law and a governed experimentation loop without allowing self-modification to corrupt the North Star, safety gates, brand, claims or production truth.

---

# 0. EXECUTIVE DECISION

Do **not** copy both repos wholesale into `AGENTS.md`.

Use them for two different jobs:

```text
PONYTAIL / "BONNIE"
= CONSTITUTIONAL BUILD LAW
= how an agent should construct/fix/review

KARPATHY AUTORESEARCH
= CONTROLLED EXPERIMENT RUNTIME
= how an agent may try improvements repeatedly
```

The two systems are complementary.

Ponytail answers:

> What is the smallest correct thing we should build?

Autoresearch answers:

> Given a bounded hypothesis and objective evaluation, did this mutation actually improve the system?

They must not be merged into one unrestricted self-improving constitution.

---

# 1. TERMINOLOGY — "BONNIE"

Within our prior MARKET.INK / ecosystem usage, **"Bonnie" refers to the Ponytail-style simplicity critic / lazy senior-developer doctrine**.

Current upstream `DietrichGebert/ponytail` does not expose a canonical rule set literally named `Bonnie`; therefore MARKET.INK should avoid claiming that "Bonnie" is an upstream artifact.

Canonical internal naming:

```text
BONNIE/PONYTAIL BUILD LAW
```

This preserves our shorthand while keeping source attribution precise.

---

# 2. UPSTREAM RULES WORTH ADOPTING

The current Ponytail upstream rule is extremely compatible with MARKET.INK:

```text
1. Does this need to exist?              → skip if not
2. Already exists in codebase?           → reuse it
3. Standard library?                     → use it
4. Native platform feature?              → use it
5. Installed dependency?                 → use it
6. One line?                             → one line
7. Only then                             → minimum code that works
```

But the important part is the constraint that comes after it:

```text
UNDERSTAND FIRST.
THEN BE LAZY.
```

The upstream also correctly preserves as non-negotiable:

- trust-boundary validation;
- data-loss protection;
- security;
- accessibility;
- real-world/hardware calibration;
- anything explicitly requested;
- one runnable check for non-trivial logic.

Root-cause rule:

```text
BUG REPORT = SYMPTOM
FIX = SHARED ROOT CAUSE
```

Complexity preferences:

```text
deletion > addition
boring > clever
reuse > rewrite
fewest files
no speculative abstraction
no dependency without demonstrated need
shortest correct diff
```

These should become permanent MARKET.INK agent law.

---

# 3. WHAT SHOULD ENTER AGENTS.md

`AGENTS.md` should remain a short, stable constitution.

It should receive only three new sections.

## A. BUILD LAW — BONNIE/PONYTAIL

Proposed contract:

```text
## BUILD LAW — BONNIE/PONYTAIL

Before creating code, files, abstractions, dependencies or workflows:

UNDERSTAND
→ TRACE REAL FLOW
→ ASK IF IT NEEDS TO EXIST
→ REUSE EXISTING
→ STDLIB
→ NATIVE PLATFORM
→ INSTALLED DEPENDENCY
→ ONE-LINE / DIRECT FIX
→ MINIMUM NEW IMPLEMENTATION

Rules:
- root cause over symptom patches;
- deletion over addition;
- boring/proven over clever;
- no speculative abstractions;
- no scaffolding "for later";
- fewest files possible;
- shortest correct diff wins only after understanding the flow.

Never simplify away:
- explicit requirements;
- security;
- trust-boundary validation;
- data-loss prevention;
- accessibility;
- privacy/compliance;
- regression coverage required by the current gate.

Non-trivial logic leaves at least one runnable regression check.

If a deliberate simplification has a known ceiling, mark:
`ponytail: <ceiling> → <upgrade condition>`
```

## B. EXPERIMENTATION AUTHORITY BOUNDARY

Proposed contract:

```text
## EXPERIMENTATION AUTHORITY

Autonomous experimentation MAY mutate only an explicitly claimed experimental scope.

It MUST NOT autonomously redefine:
- NORTHSTAR;
- AGENTS.md;
- pricing;
- positioning;
- public claims;
- legal/privacy policy;
- brand canon;
- security gates;
- production data schemas;
- client access policy;
- InkFlow product boundary.

Those surfaces require a separate proposal + evidence + human/team-lead approval.
```

## C. IMPROVEMENT LOOP ROUTER

AGENTS.md should not contain the full loop.

It should route experimental work to a separate skill/protocol:

```text
For bounded optimization work, use:
`agentic/AUTORESEARCH_LOOP_V1.md`

Do not improvise an infinite self-improvement loop inside normal execution.
```

This keeps the constitution readable and prevents instruction bloat.

---

# 4. WHAT SHOULD NOT ENTER AGENTS.md

Do **not** paste Karpathy's full `program.md` into `AGENTS.md`.

Especially do not import these literally:

```text
LOOP FOREVER
NEVER STOP
do not ask the human
everything is fair game
```

Those rules are valid inside Karpathy's deliberately constrained research sandbox because it has:

- one mutable file;
- one GPU;
- one fixed 5-minute budget;
- one ground-truth metric;
- a read-only evaluation harness;
- no business/legal/customer consequences.

MARKET.INK does not have those properties globally.

An unrestricted `NEVER STOP` loop here could optimize the wrong proxy, create CI churn, rewrite product behavior, mutate brand decisions, or accumulate unnecessary complexity.

Therefore:

```text
AUTORESEARCH PRINCIPLES = YES
AUTORESEARCH PERMISSIONS = NO
```

We adapt the method, not the authority model.

---

# 5. MARKET.INK CONTROLLED AUTORESEARCH LOOP

Create a dedicated protocol:

`agentic/AUTORESEARCH_LOOP_V1.md`

Canonical state machine:

```text
RECOVER
→ CLAIM EXPERIMENT SCOPE
→ READ CURRENT TRUTH
→ ESTABLISH BASELINE
→ DEFINE ONE HYPOTHESIS
→ DEFINE FIXED BUDGET
→ DEFINE FITNESS + HARD GATES
→ MUTATE ONE THING
→ COMMIT EXPERIMENT
→ RUN
→ MEASURE
→ KEEP | REVERT | CRASH
→ LOG
→ NEXT EXPERIMENT
→ CONVERGENCE GATE
→ HANDOFF
```

The important addition to Karpathy is:

```text
ONE BOUNDED HYPOTHESIS PER EXPERIMENT
```

Without this, causal attribution becomes weak.

---

# 6. KEEP / REVERT LAW

Karpathy uses a scalar metric: `val_bpb`.

MARKET.INK requires a fitness vector.

Generic decision:

```text
KEEP only if:
  ALL hard gates pass
  AND
  (
    primary objective improves beyond epsilon
    OR
    objective is equivalent within epsilon
    AND complexity decreases materially
  )

otherwise:
  REVERT
```

Ponytail becomes the complexity regularizer inside the Karpathy loop.

Equivalent performance + less complexity = improvement.

---

# 7. FITNESS MODEL BY DOMAIN

## WEB / CODE

Hard gates:

```text
typecheck
build
unit/contract checks
Playwright
Chromium
Firefox
WebKit
accessibility gates
security gates
no data-loss regression
no production-source divergence
```

Soft/objective metrics may include:

```text
LCP
INP
CLS
bundle weight
runtime errors
test flake rate
accessibility violations
LOC delta
dependency delta
number of files touched
render cost
RAF activity offscreen
conversion event integrity
```

Complexity penalty:

```text
+ dependency
+ file
+ abstraction
+ LOC
+ state surface
+ operational dependency
```

Do not optimize a web change solely for visual novelty.

## COPY / UX

Automation can measure:

```text
readability
CTA visibility
interaction completion
layout stability
accessibility
message hierarchy
```

But brand quality, positioning and persuasion remain partially human-reviewed.

Do not auto-promote copy based only on click proxies.

## BUSINESS / MARKETING

Do not apply rapid code-style keep/discard to delayed business outcomes.

Experiments require:

```text
fixed audience definition
fixed measurement window
minimum evidence threshold
predeclared event
confounder log
attribution strength
```

Examples:

```text
offer → qualified inquiries
follow-up rule → deposits
reactivation → booked value
landing variant → qualified INKSCANs
```

No experiment may claim causality beyond its evidence strength.

## AGENT RULES / PROMPTS

This is the most protected class.

A change to `AGENTS.md` or any core agent rule must never self-promote from one live task.

Required:

```text
proposal
→ replay benchmark
→ compare baseline
→ adversarial review
→ simplicity review
→ safety review
→ human/team-lead approval
→ merge
```

---

# 8. AUTORESEARCH SCOPE MODEL

Every experiment gets an immutable manifest:

```yaml
experiment:
  run_id:
  goal_id:
  agent_id:
  base_sha:
  branch:
  claimed_scope:
  protected_scopes:
  hypothesis:
  baseline:
  mutable_files:
  read_only_files:
  primary_metric:
  secondary_metrics:
  hard_gates:
  budget:
    max_iterations:
    max_wall_time:
    max_cost:
  epsilon:
  status:
```

The experiment cannot expand `mutable_files` silently.

If the hypothesis requires larger scope:

```text
STOP CURRENT EXPERIMENT
→ RE-SCOPE
→ NEW EXPERIMENT ID
```

---

# 9. DEFAULT BUDGET

Unlike upstream `NEVER STOP`, MARKET.INK should converge by default.

Initial default:

```yaml
max_iterations: 8
max_wall_time: 60m
plateau_stop: 3 consecutive non-improvements
crash_stop: 3 failed repair attempts on same hypothesis
```

These are defaults, not permanent truth.

Longer autonomous runs require an explicit experiment-level budget.

This prevents an agent from converting "self improvement" into indefinite compute / CI churn.

---

# 10. PROTECTED SURFACES

Default auto-mutation denylist:

```text
NORTHSTAR.md
AGENTS.md
brand/BRAND_CANON*
legal/privacy surfaces
pricing/offer canon
public proof / case-study approvals
production secrets
client credentials
Supabase destructive migrations
InkFlow boundary contracts
CI branch protection
security policy
```

An experiment may **read** them.

It may not mutate them without an explicit higher-authority work unit.

---

# 11. BRANCH + COLLISION MODEL

Reuse current MARKET.INK single-writer law.

Experiment branch convention:

```text
autoresearch/<scope>/<run-id>
```

Example:

```text
autoresearch/web-lcp/AR-20260922-001
```

Rules:

```text
one writer per claimed scope
exact base SHA recorded
no direct main mutation
one experiment commit per hypothesis
discard = reset to previous kept commit
keep = advance experiment branch
final result = normal reviewable PR
```

Do not let the experiment branch become a permanent development branch.

---

# 12. EXPERIMENT LEDGER

Create:

`agentic/experiments/results.tsv`

Schema inspired by Karpathy but generalized:

```text
run_id
experiment_id
commit
scope
metric_before
metric_after
complexity_before
complexity_after
hard_gates
status
hypothesis
notes
```

Status:

```text
KEEP
DISCARD
CRASH
INVALID
PLATEAU
```

Do not commit huge raw logs.

Store concise measurements and pointers to CI/artifacts.

---

# 13. PONYTAIL REVIEW AS PRE-PROMOTION CRITIC

Before an experimental `KEEP` is promoted into a normal PR:

```text
CORRECTNESS REVIEW
→ SECURITY REVIEW
→ ACCESSIBILITY REVIEW
→ PONYTAIL COMPLEXITY REVIEW
→ REGRESSION
→ PROMOTION DECISION
```

Ponytail review is **not** the correctness reviewer.

Its single responsibility:

> What can we delete, reuse, inline or avoid?

This mirrors the upstream `ponytail-review` boundary and prevents a simplicity critic from accidentally approving incorrect code.

---

# 14. DIFF ENTROPY GATE

Add a simple experiment metric:

```text
diff_entropy =
  files_added
  + dependencies_added × high_penalty
  + abstractions_added
  + config_surface_added
  + state_surface_added
```

This does not replace engineering judgment.

It forces the agent to explain why a supposedly better solution required a dramatically larger surface.

Rule:

```text
If objective gain is marginal and diff entropy rises sharply:
DISCARD unless explicitly justified.
```

---

# 15. SELF-MODIFYING AGENTS POLICY

MARKET.INK agents may improve implementation.

They may propose improvements to their operating rules.

They may **not** directly self-modify their constitution.

Canonical flow:

```text
AGENT OBSERVES FAILURE
→ RULE CHANGE PROPOSAL
→ EVIDENCE
→ HISTORICAL REPLAY
→ ADVERSARIAL TEST
→ PONYTAIL REVIEW
→ HUMAN / TEAM-LEAD GATE
→ AGENTS.md PR
```

This is the critical boundary.

Otherwise a locally successful hack can mutate the global rules and create policy drift.

---

# 16. AGENT-RULE REPLAY BENCHMARK

Before changing `AGENTS.md`, replay representative historical MARKET.INK tasks.

Initial benchmark corpus should include at least:

```text
1. root-cause web loading bug
2. cross-browser regression
3. simple copy/content change
4. new service/page requirement
5. security-sensitive INKSCAN change
6. performance optimization
7. architecture decision where YAGNI should reject scope
8. creative requirement where excessive minimalism would damage the explicit brief
```

Evaluate:

```text
task success
regressions
security
accessibility
files changed
LOC
dependencies
time
unnecessary scope
North-Star alignment
```

The rule set is promoted only when it improves the benchmark without creating safety/product regression.

---

# 17. CREATIVE-WORK EXCEPTION

Ponytail must not become:

> "make every creative output boring."

For explicit MARKET.INK creative/WebOS work:

```text
MINIMAL IMPLEMENTATION
!=
MINIMAL EXPERIENCE
```

If the user explicitly requires:

```text
award-grade
immersive
Three.js
GSAP
WebGPU
cinematic motion
```

those are requirements, not speculative complexity.

Ponytail then optimizes:

```text
the smallest architecture that satisfies the ambitious experience
```

not:

```text
remove the experience
```

This exception must be explicit in AGENTS.md because WebOS/creative work is a major MARKET.INK capability.

---

# 18. FAILURE MODES WE MUST PREVENT

The combined system must defend against:

```text
A. YAGNI used to ignore an explicit requirement
B. tiny diff applied at symptom instead of root cause
C. autoresearch optimizing a proxy instead of business outcome
D. experiment changing several variables at once
E. infinite experiment loop with no budget
F. agent changing its own constitution after one success
G. test/evaluation harness being modified to make score improve
H. complexity accumulating because every successful experiment adds code
I. safety/accessibility sacrificed for speed
J. multiple agents experimenting in same scope
K. rejected experiment leaving hidden state/files behind
L. business experiment promoted before enough evidence exists
```

Each becomes either a hard gate or a test.

---

# 19. IMPLEMENTATION WAVES

| Wave | Change | Output | Gate |
|---|---|---|---|
| 0 | Baseline current agent behavior | current AGENTS snapshot + benchmark tasks | reproducible baseline |
| 1 | Add Bonnie/Ponytail build law | surgical AGENTS.md patch | no conflict with current gates |
| 2 | Add authority boundary | protected-scope rules in AGENTS.md | AGENTS cannot self-modify |
| 3 | Create autoresearch protocol | `agentic/AUTORESEARCH_LOOP_V1.md` | fixed scope/budget/fitness |
| 4 | Create experiment schema/ledger | manifest schema + `results.tsv` | replayable decisions |
| 5 | Add complexity critic | pre-promotion Ponytail review | no correctness authority leak |
| 6 | Build historical replay set | 8 representative tasks | old behavior reproducible |
| 7 | Run rules A/B evaluation | baseline vs new rules | quality ↑, complexity ≤ |
| 8 | Adversarial gauntlet | scope creep, safety, infinite loop attacks | all hard gates pass |
| 9 | Patch AGENTS.md on dedicated PR | exact diff only | owner/team-lead review |
| 10 | Pilot controlled loop on web performance | 5–8 bounded experiments | keep/revert works |
| 11 | Pilot on code simplification | deletion/reuse experiment | no regression |
| 12 | Decide promotion to reusable skill | ecosystem-level pattern only after evidence | no premature abstraction |

---

# 20. EXACT AGENTS.md CHANGE BUDGET

Do not turn `AGENTS.md` into a 1,000-line manual.

Target:

```text
+ BUILD LAW section
+ EXPERIMENTATION AUTHORITY section
+ LOOP ROUTER section
```

Target size:

```text
~40–70 lines added
```

All detailed mechanics belong in the dedicated protocol.

This is itself a Ponytail requirement.

---

# 21. IMPLEMENTATION FILE GRAPH

Target architecture:

```text
AGENTS.md
│
├── permanent build law
├── authority / protected surfaces
└── route to controlled improvement loop

agentic/
├── AUTORESEARCH_LOOP_V1.md
├── EXPERIMENT_MANIFEST.schema.json
├── experiments/
│   └── results.tsv
└── evals/
    └── AGENT_RULE_REPLAY_V1.md
```

Do not add a framework, service or database for this.

Git + Markdown + JSON Schema + TSV are enough for V1.

Ponytail says so.

---

# 22. FIRST PILOT

Use a low-risk, measurable MARKET.INK problem.

Recommended first scope:

```text
WEB PERFORMANCE / COMPLEXITY
```

Why:

- metrics are immediate;
- tests already exist;
- exact-head CI exists;
- rollback is easy;
- no client data;
- no pricing/brand mutation;
- Ponytail and autoresearch both have obvious value.

Pilot objective example:

```text
reduce hero runtime/render cost
while:
- visual contract remains;
- 54/54 production E2E stays green;
- no accessibility regression;
- no dependency increase.
```

Experiment examples:

```text
remove unnecessary postprocessing
lower particle count adaptively
pause renderer earlier
reuse CSS/native effect
delete redundant motion layer
```

One at a time.

---

# 23. WHAT SUCCESS LOOKS LIKE

The integration is successful when agents become:

```text
more informed before editing
less eager to create architecture
better at root-cause fixes
more empirical about "improvements"
faster to revert bad experiments
better at deleting failed ideas
unable to silently weaken safety
unable to silently rewrite governance
```

Not when they merely produce fewer lines.

---

# 24. FINAL RECOMMENDATION

Adopt:

```text
PONYTAIL = ALWAYS-ON BUILD PHILOSOPHY
AUTORESEARCH = EXPLICIT BOUNDED MODE
PONYTAIL-REVIEW = PRE-PROMOTION COMPLEXITY CRITIC
HUMAN/TEAM-LEAD = CONSTITUTIONAL AUTHORITY
```

Do not adopt:

```text
GLOBAL NEVER-STOP
GLOBAL SELF-MODIFICATION
SINGLE PROXY OPTIMIZATION
AUTO-EDITING AGENTS.md
UNBOUNDED SCOPE
```

Canonical improvement loop:

```text
UNDERSTAND
→ BASELINE
→ HYPOTHESIS
→ MINIMUM MUTATION
→ FIXED BUDGET
→ HARD GATES
→ MEASURE
→ KEEP / REVERT
→ SIMPLIFY
→ LOG
→ CONVERGE
```

This gives MARKET.INK the part of Karpathy's model that is scientifically useful while preserving our existing Mission Control, single-writer, exact-head, evidence and North-Star controls.

---

# 25. NEXT EXECUTION

If this plan is approved, the next implementation wave is:

```text
WAVE 0
→ snapshot current AGENTS.md
→ create 8-task replay benchmark
→ define expected outputs/gates
→ NO rule changes yet

WAVE 1
→ apply the 40–70 line AGENTS.md constitutional patch
→ add AUTORESEARCH_LOOP_V1.md
→ add experiment manifest + ledger
→ run replay benchmark
→ adversarial gauntlet
→ revise
→ exact-head PR
```

Do not install a Ponytail plugin or build an autonomous runner before these two waves prove the rule contract itself.
