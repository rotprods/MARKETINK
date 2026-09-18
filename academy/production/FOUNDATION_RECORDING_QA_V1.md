# MARKET.INK Academy — Foundation Recording QA V1

> Applies to M00–M05.

## PRE-FLIGHT

### Source
- [ ] module script matches latest `main`
- [ ] validated demo/run exists
- [ ] required template exists
- [ ] platform UI reverified on recording day where applicable
- [ ] no stale screenshots

### Privacy
- [ ] synthetic/demo account
- [ ] no client messages
- [ ] no private email
- [ ] no payment details
- [ ] no tokens/keys
- [ ] notifications off

### Capture
- [ ] mic tested
- [ ] camera/framing tested
- [ ] screen readable at mobile playback
- [ ] capture resolution locked
- [ ] storage space checked

---

# PER-LESSON RELEASE CARD

```yaml
lesson_release:
  module:
  lesson:
  version:
  recorded_at:
  platform_verified_at:
  source_commit:
  runtime:
  assets:
  qa:
    business_accuracy:
    action_clarity:
    audio:
    screen_readability:
    pacing:
    template_handoff:
    visual_consistency:
    captions:
    privacy:
    completion_motivation:
  weighted_score:
  hard_failures: []
  defects: []
  status: BLOCKED|REVISION|PASS
```

---

# HARD FAILURES

Any one blocks release:

- factually incorrect platform instruction;
- wrong business calculation;
- unsupported performance claim;
- private data exposed;
- secret/credential exposed;
- broken download;
- student cannot know what to do;
- inaccessible critical text;
- core audio unintelligible;
- fake client result;
- deceptive marketing instruction.

---

# PLATFORM MODULE EXTRA QA

## M03 Instagram

- [ ] Professional-account terminology current
- [ ] Business vs Creator described contextually
- [ ] current profile path verified
- [ ] Manychat treated as optional integration
- [ ] pinned content behavior not overclaimed

## M04 WhatsApp

- [ ] current Business app UI checked
- [ ] quick-reply capability current
- [ ] any numerical cap reverified
- [ ] broadcast rules reverified
- [ ] consent/reactivation caveat included

## M05 Meta

- [ ] current Business/Portfolio terminology checked
- [ ] asset ownership path checked
- [ ] Page/IG/ad-account relationship checked
- [ ] 2FA/security behavior current
- [ ] no password-sharing instruction
- [ ] no live spend changed during training demo

---

# EDIT QA

- [ ] first useful idea < 20 sec
- [ ] no repeated intro
- [ ] chapter title correct
- [ ] captions manually checked
- [ ] numbers match source
- [ ] no decorative animation obscures screen
- [ ] silent gaps intentional
- [ ] lesson ends with DO IT NOW card
- [ ] resource link shown
- [ ] next lesson indicated

---

# EXPORT QA

Master:
- archive-quality H.264/H.265 or production master as chosen later

Delivery:
- platform-compatible MP4 unless Stream ingest workflow supersedes it

Before upload:
- [ ] full playback
- [ ] file opens
- [ ] audio synced
- [ ] no black tail
- [ ] filename canonical
- [ ] checksum/hash recorded if formal release pipeline exists

Filename:

`MKTINK-ACA-{MODULE}-{LESSON}-{VERSION}.mp4`

Example:

`MKTINK-ACA-M00-L01-V1.mp4`

---

# RELEASE THRESHOLD

- weighted QA >= 90/100
- P0 = 0
- P1 = 0
- P2 allowed only with explicit acceptance
- platform freshness current
