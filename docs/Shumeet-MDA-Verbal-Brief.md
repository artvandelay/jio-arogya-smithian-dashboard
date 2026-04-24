---
title: "MDA Verbal Brief"
subtitle: "Speaker prep for the 10–15 min MDA-2 pitch · Consumer lens · Data asset · CHW-led Health OS · 90-day ask"
---

# Jio Arogya — MDA Verbal Brief

Speaker prep for the 10–15 min MDA-2 pitch · Consumer lens · Data asset · CHW-led Health OS · 90-day ask

23 Apr 2026
Working document. Validate figures against source notes before investment approval.

---

## How to use this brief

Shumeet is delivering the pitch verbally. This document is optimised to be **scannable on one screen and liftable out loud**, not to be read aloud. Each section is headed by the original Shumeet questions it answers (from `Shumeet-questions after read through in meeting.md`, line-ordered as Q1–Q14). Anyone rewiring the brief — Ishaan or a future agent — can trace every paragraph back to the question it is solving.

**Sentences marked in bold are pre-formed for verbal delivery.** Appendices are backup one-pagers to pull out only if MDA probes; the main body stays positive.

---

## Q-index — source question to section map

| Q# | Shumeet's question (paraphrased from source) | Answered in |
|---|---|---|
| Q1 | Elevator pitch — flipped, from the consumer lens, crisp | §A |
| Q2 | Minor ailment — do I contact, or does it contact me? | §B |
| Q3 | Need a clinic — where? whose? affiliated? or anywhere? | §B |
| Q4 | Escalation — in-network vs other; payment delta; what if I ignore CHW / Agent advice? | §B |
| Q5 | On first enrollment — what data do you collect; what do you do with it? | §C |
| Q6 | Where and how stored; whose capex? | §C |
| Q7 | Underwriting — new style? members willing to share? insurers receptive? do we have to re-educate them? | §E |
| Q8 | Hardwired consumer change — "what is the beast"? | §A |
| Q9 | "What are the most value…" _(truncated in source — interpreted as "most valuable elements of this system")_ | §D, §F |
| Q10 | Top 3 ways authorities can kill this — how do we design around each? | §H |
| Q11 | Privacy boundaries | §C, §H |
| Q12 | What data is most valuable to Global Biopharma? | §D |
| Q13 | Time-to-trust — how quickly do I prove value; when is it demonstrated? | §F |
| Q14 | Cost over 5 years; next 3 months; what do I need now? | §G |

Source file: [Shumeet-questions after read through in meeting.md](Shumeet-questions%20after%20read%20through%20in%20meeting.md)

---

## §A · The opening 90 seconds — elevator and the beast `[Q1, Q8]`

**The one-line pitch, for the consumer.**

> **"Your family's health system. Knows you before you're sick. Walks with you through the worst. Pays you back when your data helps someone else live."**

Three promises in one sentence, in the order a customer will feel them. Pre-disease knowing comes first because that is what is missing in India today.

**The beast — the one behaviour change that makes this business real.** `[Q8]`

> **"We are replacing the Indian family's relationship with healthcare. Today it is episodic, transactional, fear-driven. We make it continuous, relational, data-driven — and the AI makes it feel like a loving older sibling who happens to know biology."**

That is the hardwired change. Not a new insurance SKU. Not a clinic chain. **A new default interaction between the Indian family and their health.** Every architectural choice that follows serves that one thing.

**The bridge line Shumeet already used in the read-through** (from the Strategic Memo — re-use verbatim):

> **"Trust is the entry. Data is the flywheel. Outcomes are the proof."**

**Why only Reliance can credibly build this.** A pharma firm cannot — it is a buyer of the data. A hospital chain cannot — it is a seller of procedures. A foreign actor cannot — it cannot return value to Indian members. The same civilizational contract that made Indians trust Reliance with their digital life now asks them to trust Reliance with their biology, in exchange for better outcomes and a Data Dividend. **Only we can ask this and be believed.**

---

## §B · A year in Janaki's life — the consumer journey `[Q2, Q3, Q4]`

Janaki, 52, Jamnagar. Pre-diabetic, undiagnosed hypertension, two adult children, one elderly parent at home. Representative Core-plan family.

**Day 1 — Enrollment.** Her Jio MyHealth app activates a Personal Agent in Gujarati. It reads her ABHA record. It schedules a baseline CHW home visit for week 1. Nothing else is asked of her. She did not fill a form.

**Day 7 — First CHW visit.** The CHW screens the whole household in 30 minutes. Blood pressure on the grandmother is 160/100 — she "feels fine." Her father's fasting glucose is 142. The son's SpO2 is clean. A Strand biobank sample is collected under research consent. The Personal Agent narrates each finding in Gujarati, with what happens next.

**Minor ailment (Day 40) — "who contacts whom?"** `[Q2]`

> **"She talks to the Personal Agent first. The Agent answers in 90 seconds on roughly 70% of minor ailments. If it can't, it calls the Clinical AI. If the Clinical AI needs a human, it dispatches the CHW. She never self-dispatches the CHW. The system escalates to the person; the person does not chase the system."**

This order is load-bearing. CHW time is the most expensive minute in the access stack. If the member could summon a CHW directly, the unit economics would not close and the cadre would saturate. Layer 1 answers; Layer 2 escalates; Layer 3 visits.

**Clinic need (Day 120) — "where, whose, affiliated?"** `[Q3]`

> **"For elective care, the Agent routes her to our Tier-1 anchor in Jamnagar. If the member prefers another hospital, the Agent routes her there and carries her record with her. We do not lock members in. We make in-network visibly better, not out-of-network visibly worse."**

Four contract tiers sit behind this, and the member never sees the tier structure. She sees a routed appointment, an on-site member-services desk if we have one there, and a CHW at her door within 48 hours of discharge regardless of which tier she went to.

**Escalation (Day 210) — cardiac scare; in-network vs out-of-network** `[Q4]`

| What happens | In-network (Tier 1) | Out-of-network (Tier 4) |
|---|---|---|
| Who coordinates | Embedded Jio Arogya clinical leadership on-site | 24×7 Jio member liaison reaches her within 24 hours |
| Her co-pay | Zero on the admit; capped on procedures per plan | Tariff at point of service; plan still pays the covered share |
| Record follows her | Two-way EHR integration | Liaison collects and uploads discharge docs |
| Post-discharge | CHW within 24 hours | CHW within 48 hours |
| Data asset | Full encounter into her longitudinal record | Discharge summary into her record |

> **"Going off-network costs her more out of pocket and gives us less visibility. Both sides feel the delta. Nobody is fined."**

**If Janaki ignores the CHW or the Agent.** No punishment. Re-engagement. The CGM still talks to us. The Personal Agent still talks to her. Two things change at the boundary — she **loses the Data Dividend** for the non-consented period, and at renewal her premium may step up within the plan band if risk markers worsened without mitigation. Both are disclosed at Day 1 and on every nudge.

> **"We don't compel. We make compliance visibly cheaper and non-compliance visibly worse — through her own numbers, not through our policy."**

---

## §C · The Day-1 data contract `[Q5, Q6, Q11]`

**What we ask for at enrolment.** `[Q5]` Four things, in this order:

1. ABHA read-access — pulls her existing records into the Personal Agent.
2. A baseline CHW home visit — BP, glucose, waist, SpO2, medication reconcile, mental-health screen.
3. A Strand biobank sample under research-scoped consent — blood, urine, stool, saliva.
4. A wearable pair (included in Standard tier and above) + Jio MyHealth activation.

She is not asked to fill a multi-page form. **Consent is granular, reversible, and visible in the app at all times.**

**Where it lives — three entities, three boundaries, three capex owners.** `[Q6, Q11]`

| Layer | Entity | Holds | Capex owner |
|---|---|---|---|
| 1 — Personal | Personal Agent on her device + per-member encrypted cloud locker | All member PII, consent ledger, medication list | Jio (uses existing JioPhone / Jio Cloud surface) |
| 2 — Clinical inference | Jio Brain Clinical AI, stateless | No member state | Jio Brain (existing) |
| 3 — Research | TechBio Research Trust — separate legal entity, independent ethics board | De-identified, linked longitudinal dataset + biobank | Research Trust; jointly funded in Year 1, self-funded by pharma LOIs from Year 2 |

> **"Privacy is built into the walls, not written into the policy. PII never leaves her device without a logged consent event. The Clinical AI is stateless — it cannot become a honeypot. Re-identification of research data requires two keys — the Research Trust's and hers. No single party can re-link."**

The net capex ask is smaller than it sounds. The phone is hers. The Jio network is ours. The biobank is the only new physical asset, and it sits inside the Research Trust — which by Year 2 is pharma-funded, not a drag on our P&L.

**Privacy boundaries, in plain English.** `[Q11]`

- **The insurer never sees identifiable clinical data.** Jio Allianz sees claims, aggregate loss ratios, and actuarial-tagged intervention outcomes. It does not see Janaki's HbA1c, her CGM trace, or her biobank result.
- **The care entity never sees insurer-held personal finance data.** The two books are legally separated.
- **The Research Trust never sells raw data.** It licenses access under approved protocols, ships models not rows, and cannot export samples outside India.
- **The member can revoke research consent at any time.** Revocation stops future use; samples already assayed remain in de-identified aggregates.

---

## §D · What pharma actually buys `[Q9, Q12]`

Pharma does not buy clinical records. Every hospital chain in India has those, and they are commoditised. **Pharma buys biology that does not exist elsewhere.** Four named assets, each with a priced deal-shape comparable:

| Asset | What pharma gets | Deal-shape comparable |
|---|---|---|
| **South-Asian metabolomics reference** | Indian dietary metabolite baseline absent from every Western reference | UK Biobank consortium tranches ₹40–120 Cr each |
| **South-Asian proteomics + pQTL** | Target validation for drugs being developed against South-Asian disease biology (Lp(a), thin-fat phenotype, MASLD) | deCODE–Amgen, deCODE–Roche in the ₹1,000–3,000 Cr range |
| **CGM glycaemic reference** | Continuous glucose dynamics in the world's largest pre-diabetic population (~100M Indians) | Abbott, Dexcom, Novo Nordisk multi-year licence |
| **Pre-disease trajectory cohort** | Molecular changes 2–5 years before clinical T2D / CVD onset | 23andMe–GSK at ~₹2,500 Cr; Tempus–AstraZeneca foundation-model co-dev at $200M |

**The 43x depth premium, stated once.** `[Q12]` 23andMe — shallow genetics, self-reported phenotypes — implied ~$60 per participant. deCODE — deep WGS with rich clinical linkage — implied ~$2,600 per participant. **That 43x is the entire data business model.** Our job is to be on the deCODE side of that line, and to do it at South Asian scale that no other actor can reach.

**Why the same effort that delivers care also delivers this.** Owning the instrumentation where the data is born — the Personal Agent's conversations, the wearable, the CHW's vitals kit, the CGM, the EHR feed, the post-discharge follow-up — means care delivery and data capture are **the same workflow**, not two budgets. The CHW visit that reduces Janaki's BP is also the visit that adds a month of linked longitudinal depth to the Research Trust's asset. One motion, two paybacks.

> **"Care is consent. Insurance is the economic engine. Data is the dividend."**

---

## §E · Underwriting, reframed `[Q7]`

**State it plainly.** This is a new mode of underwriting, and Jio Allianz's actuaries do not yet have a muscle for it. We should not pretend otherwise to MDA.

**The two specific muscles Allianz has to absorb.**

1. **Intervention budget priced against a claims-elasticity loop.** Each plan has an operating envelope per member per year. Every intervention — CHW cadence, CGM, BP cuff, air-quality sensor — is actuarially tagged and repriced quarterly against observed claims. **No intervention stays in the catalogue without demonstrated claims effect within 18 months.** This is a new accounting primitive; we will co-design it with the appointed actuary.
2. **Linked claims-and-care data feed.** Allianz sees the actuarial view; the care entity sees the clinical view; a purpose-limited, consent-ledger-gated feed links them. **Neither entity sees what it does not need.** DPDP-compliant by construction.

**Will members share if they think insurers get access?** `[Q7]`

> **"They will share if — and only if — they can see that the insurer cannot see their clinical data. The architecture decides that, not the privacy policy."**

Transparency is also an economic feature, not an ethics feature. **If the AI behaves like a strict parent, members lie.** If members lie, HbA1c does not move. If HbA1c does not move, the insurer loses money. **Honest data is the precondition for the business model closing.** See Appendix 4.

**Do we have to teach insurers a new way?** Yes. Three discrete deliverables in the 90-day sprint:

- Joint pricing workbook for the first two plan tiers (Core and Standard), with bottoms-up intervention budgets and quarterly reprice calendar.
- IRDAI filing plan for the Jamnagar launch product.
- An appointed-actuary protocol for the quarterly claims-elasticity review.

---

## §F · Proof — when the member sees value, when MDA does `[Q13, Q9]`

Value has to be visible quickly. Members rarely give a health system twelve months of rope.

| Horizon | What the member feels | What MDA sees |
|---|---|---|
| **Day 1** | Free baseline + an AI companion that already knows her ABHA record | Enrolment conversion rate; Personal Agent install rate |
| **Day 7** | Grandmother's undiagnosed hypertension caught in her kitchen | First discovery per family — headline metric |
| **Day 30** | First minor ailment resolved by the Agent in under 90 seconds | Time-to-first-resolution under 90 sec; NPS trending 60+ |
| **Month 3** | Diabetic members see CGM trajectory improving | HbA1c cohort check-in; CGM continuous-wear 70%+ |
| **Month 6** | First avoidable hospital admission averted in cohort | Avoidable admissions −20% vs matched control |
| **Month 12** | Family premium offset by Data Dividend for Comprehensive-tier households | Loss ratio under 72%; 2+ pharma LOIs signed; biobank 30K+ samples |
| **Year 3–4** | Premium stability despite ageing cohort; visible research return | First pharma partnership converted to revenue; first South-Asian-validated biomarker IP |

**The most valuable elements** — Q9 answered directly: `[Q9]`

1. The first family discovery in the first week. It is the moment trust forms.
2. The discharge-to-home CHW visit within 24 hours of any hospital admission. It is the moment trust is repaid.
3. The Data Dividend line on the annual member statement. It is the moment the civilizational contract becomes literal cash in the member's hand.

Each is designed to be the felt proof at a specific stage. **Members do not need to understand the architecture to trust it. They need to feel these three moments.**

---

## §G · Cost envelope and the 90-day ask `[Q14]`

**5-year planning envelope — three operating-model choices.**

| Build option | 5-year spend | What it owns end-to-end |
|---|---|---|
| **Asset-light platform** | ₹800–1,200 Cr | Data spine, Personal Agent, navigator, Research Trust; partners everything clinical |
| **Asset-medium (base case)** | ₹1,400–1,800 Cr | Data spine + CHW cadre + thin physical footprint; partners labs, primary care, most hospitals |
| **Asset-heavy** | ₹3,500–5,000 Cr | Delivery chain end-to-end at capex and complexity implied |

Natural anchor for the conversation: the Nilesh plan's pod-network spend is ~₹1,400 Cr over 5 years for 1,500 Type A pods. **Our asset-medium base case fits inside the same envelope and — deployed against CHWs instead of pods — touches 7.2x more people per day at identical spend.** See Appendix 2 for the arithmetic. The build-vs-partner choice is the single most material decision we are asking MDA to validate in the sprint.

**Next 90 days — one sprint, six work-streams.**

| Work-stream | Deliverable by end-July 2026 |
|---|---|
| Operating plan | Unified five-layer spec + bottoms-up financials, reviewed with Jio Allianz |
| Data Trust legal structure | Filed; ethics board constituted |
| Pharma LOIs | 2–3 signed against named assets (metabolomics, proteomics, CGM, pre-disease) |
| Beachhead | One chosen, priced, ready to launch (urban affluent cardiometabolic / performance-longevity / employer group) |
| Build option | One of the three above, chosen with conviction |
| Clinical AI + Personal Agent | Working prototype in Gujarati and Hindi, HTA-In safety evaluation drafted |

**The ask today, in three lines.**

1. **Endorsement** of the approach — data-centric, CHW-led, AI-as-companion, asset-light-to-medium.
2. **A named owner** for the operating system, reporting into MDA's office.
3. **An authorised 90-day sprint** at a small funded scope to deliver the six work-streams above.

---

## §H · Top-3 ways authorities can kill this, and how we design around each `[Q10, Q11]`

Three live threats. Each is named, each has a design response, each is tested in the 90-day sprint.

**Threat 1 — DPDP breach or genomic re-identification.**
A single incident where member PII or genomic data is traced back to a named individual ends the programme politically.

> **"Compliance-by-architecture, not compliance-by-policy."**

PII never leaves the member's device without a logged consent event. Re-identification of research data requires two keys (Research Trust + member). The consent ledger is immutable, cryptographically signed, audited quarterly. The ethics board is independent with veto power and public reporting. Legal counsel (Rahul Matthan) has confirmed genomic data is effectively impossible to anonymise in theory — so we do not rely on anonymisation, we rely on two-key gating.

**Threat 2 — CDSCO classifies the Clinical AI as an unregistered medical device.**
India's forthcoming AI-clinical-decision-support framework follows the Feb 2026 SAHI strategy.

> **"We file under the framework before the framework files on us."**

From Day 1, the Clinical AI is scoped to the top 50 Indian condition categories, with a published safety evaluation co-concurred by HTA-In and ICMR. Human-in-the-loop on all prescriptions and clinical escalations through at least Year 2. Autonomous operation later, only on a restricted task list, only under a published benchmark, only with regulator concurrence. Our L1–L3 autonomy model maps cleanly to SAHI's risk-proportionate governance — we will be mapped-and-filed, not retrofitted.

**Threat 3 — ICMR + AI-safety + insurance-regulatory pushback on data flows.**
If IRDAI views the linked claims-and-care feed as commingling, or ICMR views the Research Trust as offshoring biology, the programme stalls.

> **"Every cross-entity request carries a linked consent token. Every sample stays in India. No insurer signal overrides a clinical protocol."**

Two entities, two books, DPDP-gated purpose-limited data flows, no offshore sample processing, annual public governance report, member representation on the clinical protocol committee. These are contractual primitives, not aspirations.

---

# Appendices — backup one-pagers, pull out only if MDA probes

## Appendix 1 · Three levels of AI — where our bet must sit

Software has three levels of build. This is the lens to distinguish "has AI" from "is an AI business."

| Level | What it is | Revenue shape | Where a Nilesh-style plan sits | Where we must sit |
|---|---|---|---|---|
| **1 — Namesake / compliance** | "A small research lab's cybersecurity." Ticks the box. Buys credibility. Does not generate revenue or differentiation. | None | Default level for operational AI in an ops-first plan | Nowhere |
| **2 — Market-competitive** | Good enough that someone pays for it. Performance parity with vendors in the category. | Indirect — retention, conversion | Most of the AI surface in an ops-first plan | Most of our AI surface — scheduling, claims auto-docs, CHW copilot |
| **3 — State-of-the-art** | Industry leader on the feature. Revenue generator. Differentiator. What customers actually come for. | Direct — usage, licensing, outcomes | Not present | **Three features, non-negotiable** |

**The three features where we must be Level 3.**

1. **Personal Agent as ambient companion** — voice and text, 8 languages, lives on the device, holds PII, mediates every data flow. If this is Level 2, the trust contract fails.
2. **Clinical AI good enough that members use it for all their health questions — including with our competitors.** If Janaki asks our Agent about her friend's cancer that is being treated at a non-network hospital, and our Agent gives her the best answer in Gujarati, we still win. **She is still using our instrument. We still collect the interaction. The competitor does not.** Level 3 here is the single most important moat in the consumer layer.
3. **AI Scientist on the cohort** — autonomous hypothesis generation, cohort design, primary analysis, compressing the research loop from 5 years to 6 weeks. This is what converts the longitudinal asset into pharma revenue at the pace the market values it.

**Why Level 3 matters for the business model specifically.** The two biggest revenue levers in any health platform plan are (a) tertiary-care push-down and (b) consumer and provider behaviour change. Both require AI that is good enough to actually carry the interaction, not just log it. **Level 2 AI does not push an admission down to the CHW; it routes a record. Level 2 AI does not change what a diabetic eats; it reminds them. Level 3 does.** This is the acceleration lever on the legacy-healthcare transformation, and without it the 5-year claims curve does not bend as promised.

---

## Appendix 2 · Why the front door is a person, not a pod

Source: `Notes/Nilesh-apex-initial-draft/Week3 /Distribution-Architecture-Note.md`.

**The clinical kit is identical.** Every device in a Type A pod fits in a bag. There is no on-site doctor. There is no non-portable equipment. The only thing the pod adds over a CHW with the same kit is a 50-square-foot room — the pod shell is dead cost.

**Dollar-for-dollar, over 5 years, at the same budget.**

| | Type A Pods (Nilesh plan) | CHWs (same 5-year budget) |
|---|---|---|
| Units | 1,500 pods | ~16,500 CHWs |
| Daily reach | 57,000 sick walk-ins | ~412,000 people — sick and healthy |
| Reach multiple | 1x | **7.2x** |
| Preventive screenings / day | 0 | ~309,000 |
| Family health graphs / day | 0 | ~75,000 |
| Cost per person in catchment | ₹700 | ₹215 |
| Deployment per unit | 3–6 months | 4–6 weeks |

**The pod sees zero healthy people.** The pod waits for someone to decide they are sick and walk in. **Half of India's hypertensives are undiagnosed. None of them are walking into a 50-square-foot pod.** The CHW walks into their kitchen.

> **"A pod is a room that waits for the sick. A CHW is a person who finds the undiagnosed."**

**Why this matters for the data asset.** The instrumentation has to be where the signal is born. The Agent captures the conversation; the wearable captures physiology; the CHW captures vitals and samples; the insurance feed captures encounters; the post-discharge Agent captures recovery. **Every one of these surfaces is ours.** A pod-first plan owns exactly one of them. A CHW-first plan owns all of them, for the same budget.

---

## Appendix 3 · The data asset — twin payback, one instrumentation

Owning the instrumentation pays back twice — once into the insurance book, once into the pharma book. **Same effort. Two P&Ls.**

**Near-term — care and insurance.** The CHW who catches grandmother's BP at 160/100 does three things at once: she adds a data point to the Research Trust, she starts a ₹5-a-day medication that avoids a ₹3-lakh cardiac event, and she creates a retention moment for the plan. This is the tertiary-care push-down engine. **AI is the lever: without Level-3 Clinical AI the CHW cannot triage with confidence, and without the Personal Agent the member does not stay in the loop between visits.**

**Long-term — pharma discovery platform.** Same visits, same samples, same conversations — compounded over 5 years — become the first population-scale South-Asian longitudinal asset in the world outside UK Biobank and deCODE. Value is **Depth × Breadth × Time**. A cohort of 100K members at 5 years of continuous multi-omic + behavioural + clinical linkage cannot be replicated for a decade by any competitor, domestic or foreign.

**The scale ladder, stated once.**

| Scale | What we own | Annual licensing | Strategic value |
|---|---|---|---|
| 10K members, Year 1 | Research-grade cohort with early multi-omics | ₹15–50 Cr | First paid pharma access |
| 50K members, Year 2 | Discovery-ready dataset with early outcomes | ₹100–400 Cr | Consortium formation, recurring licensing |
| 200K members, Year 3 | Tempus-scale multimodal platform | ₹300–1,000 Cr | Major co-development, semi-exclusive deals |
| 500K+ members, Year 5 | Non-replicable national longitudinal asset | ₹2,000–12,000 Cr asset value | Acquisition-worthy platform; sovereign strategic value |

Anchors: Tempus ~$316M/yr licensing revenue at 7M records; Flatiron $1.9B acquisition on 2.2M linked records; Tempus–AZ $200M foundation-model co-dev; deCODE–Amgen $415M on 160K participants. **The category exists. The magnitudes are real. The question is whether we build the cohort fast enough to be the Indian leader before someone else is.**

---

## Appendix 4 · The AI as Birbal — why the companion posture is load-bearing

The Personal Agent is not an app. It is the character the member talks to. The design choice is literary, and it has an economic consequence.

**The three postures the Agent could take.**

| Posture | What it does | What happens to data quality | Business consequence |
|---|---|---|---|
| **Strict parent** | Tells the member what to do, flags non-compliance, reports upward | Member lies about meals, skips the CGM, hides symptoms | HbA1c does not move; claims do not drop; insurer loses money |
| **Yes-man** | Reassures, never challenges, always agrees | Member feels supported; no behaviour change | No clinical value; member churns when they notice |
| **Birbal — loving older sibling** | Has its own mind; pushes back where the member is wrong; holds the member's long-term interest above short-term comfort | Member tells the truth about the second samosa; data is honest; AI adapts | Behaviour changes; outcomes move; claims drop; premium stays defensible |

> **"An AI that is a strict parent gets lied to. An AI that is Birbal hears the truth. Honest data is the precondition for the business model closing."**

**The feature that enforces this posture.** Full member-side transparency on every data flow. Every consent event, every query, every research licence is visible to the member in the Agent. Revocation is one tap. The Data Dividend is itemised on her annual statement. **We are asking her to trust us; we give her the receipts.**

This is why Level-3 AI matters in the consumer layer specifically. Level-2 AI can simulate a helpful assistant. Only Level-3 can sustain a relationship — memory across years, tone across moods, judgement across edge cases — that a member chooses to keep.

---

## Appendix 5 · Two paths, one page — pull out only if MDA compares

Not for unsolicited delivery. If MDA asks directly how this compares to the Nilesh plan, read across.

| Axis | Nilesh plan (26 Mar 2026) | This plan |
|---|---|---|
| **Front door** | 1,500 Type A pods + 220 B / 60 C / 20 D | Personal Agent + CHW cadre at 1 per 1,000; under 15% of total capex on physical sites |
| **AI depth** | Operational — triage, SOAP copilot, claims auto-docs (Level 2 at best) | Level 3 on three features: Personal Agent, Clinical AI, AI Scientist; Level 2 elsewhere |
| **Data philosophy** | Data as by-product of clinical ops | Data as the primary asset; own the instrumentation where signal is born |
| **Biological layer** | None specified | Strand multi-omic at enrolment; biobank with retrospective-assay architecture |
| **Insurance relationship** | Shared-savings on sick walk-ins | Co-designed intervention budget; quarterly claims-elasticity reprice |
| **Pharma revenue** | Deferred to Wave 5+ | LOIs signed inside 90 days; four named assets with deal-shape comparables |
| **Regulatory posture** | DPDP + ABDM checklist | Compliance-by-architecture; SAHI-mapped; two-key consent; independent Research Trust |
| **Cost envelope (5 yr)** | ~₹1,400 Cr on pod network alone | ₹1,400–1,800 Cr total (asset-medium), 7.2x daily reach for the same spend |
| **Unique moat** | Physical network density | Patient-years of consented longitudinal multi-omic phenotype linked to decisions and outcomes |

One takeaway sentence, if Shumeet has time for nothing else from this page:

> **"The two plans spend similar money over five years. One builds a clinic chain that can be copied in a decade. The other builds a population-scale longitudinal biology asset that cannot."**

---

## Source documents

| Citation | File |
|---|---|
| Shumeet 14 questions | `Notes/MDA Meeting 2/Shumeet -MDA Meeting Brief /final-email-docs/Shumeet-questions after read through in meeting.md` |
| Strategic Memo (21 Apr 2026) | `Notes/MDA Meeting 2/Shumeet -MDA Meeting Brief /final-email-docs/260421_Strategic_Memo.md` |
| Operating-Model Note (20 Apr 2026) | `Notes/MDA Meeting 2/Shumeet -MDA Meeting Brief /(Shumeet Track) MDA Note_200426.md` |
| Gap Analysis — Nilesh Plan | `Notes/Nilesh-apex-initial-draft/Gaps-Analysis-Jio-Arogya-Plan.md` |
| Distribution Architecture Note — CHW vs pod | `Notes/Nilesh-apex-initial-draft/Week3 /Distribution-Architecture-Note.md` |
| Data Business Brief (silica / quartz) | `Notes/MDA Meeting 2/Independent Response drafts (v1)/New-brief-v2_Shared_JD.md` |
| Claw Architecture | `Notes/Architectures/Jio_Claw_Architecture.md` |
| SAHI Strategy (Feb 2026) | `Related work/SAHI-ABDM-strategy-document.md` |
| Legal — Rahul Matthan meeting notes | `Notes/Legal/Rahul Matthan/Meeting Notes Rahul Matthan.md` |
| Project history | `PROJECT_HISTORY.md` |
