Jio Arogya

Smithian Actor-Chain Analysis — Self-Interest, Layer by Layer
Member · Technology · Care Delivery · External Counterparties

April 2026
Working document. Validate with owners before circulation.

---

## What the system gets right (preserved in full)

Every part of the analysis below assumes the following load-bearing architectural choices are correct and are not under review. Critique is additive, not adversarial.

| # | Preserved | Why it is load-bearing |
|---|---|---|
| 1 | Four-tier hospital contract architecture (Tier 1 capitation, Tier 2 case-rate, Tier 3 envelope, Tier 4 liaison) | Substitutes for hospital ownership while preserving control gradient |
| 2 | CHW at 1:1000 as the front door, not a pod or clinic | Reaches the undiagnosed; signal is captured where signal is born |
| 3 | PII on the member device; Clinical AI stateless; Research Trust as separate legal entity | Privacy enforced in infrastructure, not in policy |
| 4 | Biobank with retrospective-assay architecture | Compounds the data asset at a unit cost the insurance book can carry |
| 5 | Access Rule (no CHW self-dispatch; ordered layer escalation) | The only structure in which the CHW cadre cost closes against the intervention budget |
| 6 | Data Dividend as the civilizational contract | Converts member consent from extraction to participation |
| 7 | Jio Allianz as wrapper, not the business | The insurance license is the rail; the operating system is the product |

---

# Part 1 · The Frame

## The question

Does the structure of Jio Arogya make selfish choices productive?

That is a Smithian question. Smith's insight is not that self-interest is bad. It is that systems work when self-interest and collective benefit point the same way, and break when they don't. The butcher does not feed you out of benevolence. He feeds you because feeding you pays him. The system works not because people are good but because the structure makes good behaviour profitable.

Every analysis of Jio Arogya so far has treated each stakeholder as a monolith: the CHW, the hospital, the insurer, the regulator. That framing misses the real dynamics. The CHW is not a monolith. She wakes up thinking about her income, her standing in the community she serves, the distance between visits, the supervisor's dashboard. Her supervisor wakes up thinking about utilisation rates, field incidents, the member-acquisition-cost line. Three layers inside a single stakeholder do not always want the same thing. In the joints between those layers is where most of the real decisions get made.

There is now a fourth layer. The AI — Personal Agent on the device, Clinical AI in Jio Brain, AI Scientist inside the Research Trust — sits between the member and every human in the system. The AI is not a tool. It is a mediating actor with its own objective function. Who sets the weights of that objective function is a political question inside Reliance, and the answer determines whether the system drives deflection, satisfaction, safety, or data capture. The answer cannot be "all of the above" in equal measure. Something is always traded against something else.

There is a second framing point this document makes explicit, against the dominant Western analytical habit. The member is not a solo actor. In India, a health decision is made by the family. The earning son decides what care his elderly parents receive; the husband decides whether the wife's symptom is worth a consultation; the mother-in-law decides whether the daughter-in-law's sick child goes to the pharmacy or the hospital. Treating the member as an autonomous individual misses the single most important informal network in the system.

## Method

For every actor chain, six questions in order.

1. **The individual.** Income, status, risk avoidance, career progression, time, autonomy.
2. **The layer immediately above.** Where does it align with the individual? Where does it diverge?
3. **The org's stated objective.** Mission, P&L, regulatory mandate.
4. **The AI in the room.** How does the AI intersect this actor? What does the AI optimise for?
5. **The escalation boundary.** The point where the workflow crosses to an entity Jio Arogya does not control.
6. **The value exchange that keeps synergy.** The specific mechanism — payment, information-asymmetry correction, reputation signal, career pathway, contractual term — that converts the default conflict into alignment.

## The 18 actors in four rings

The actor list has been reworked from a Western monolith-plus-AI set to an India-grounded register that adds the family, the pharmacy rail, and the government cadre, and that relocates the Research Trust to where its credibility actually requires it to sit.

### Ring 0 · The Principal (2)

- **The Member** — rational actor with bounded information; games, withholds, reassurance-seeks, opts out
- **The Family and Informal Network** — the earning decision-maker, the elder, the cousin-who-is-a-doctor, the neighbour who went to a non-network hospital. Primary co-decider in most health events and the most important referral source the system has no contract with

### Ring 1 · Technology Quasi-Actors (3)

AI sits between the member and every human actor. Each has an objective function; who sets the weights is a political question inside Reliance.

- **Personal Agent** — on-device, holds all PII, orchestrates downstream layers
- **Clinical AI** — stateless inference, accuracy/deflection/safety trade-off
- **AI Scientist** — autonomous research on Trust data, hypothesis speed vs rigour

### Ring 2 · Reliance-Controlled Human Actors (6)

- **CHW (Arogya Saathi)** — 1:1000, salaried, protocol-bound, most expensive minute in the access stack
- **CHW Supervisor / Ops** — utilisation, budget, enforces the Access Rule (no self-dispatch)
- **Navigation / Telehealth Doctor** — clinical authority, liability, throughput pressure
- **Jio Arogya Care Entity** — care delivery org, P&L, leadership reports to Reliance consolidated
- **Jio Allianz JV** — insurance wrapper, actuaries, loss ratio, IRDAI compliance
- **Netmeds / Pharmacy Rail** — dispensing, adherence data, GMV; the most regular data feed in the system and the P1 tying-risk surface

### Ring 3 · External Counterparties (7)

- **Tier 1 Preferred Hospitals** — capitation, embedded leadership, EHR integration, 60%+ of volume through 5% of the network
- **Tier 2–4 Hospital Network** — case-rate / volume envelope / uncontracted; decreasing control and data visibility
- **BioPharma Buyers** — specific pipeline needs (Lp(a), GLP-1, MASLD, pharmacogenomics)
- **Regulators (IRDAI, NMC, ICMR, DPDP Authority)** — four bodies, overlapping jurisdiction, no coordination mechanism
- **Research Trust** — separate legal entity in structure; the more it *is* independent the more value it produces; relocated to Ring 3 because credibility of pharma licensing and the Data Dividend both require the Trust to be seen as outside Reliance's direct control
- **State Health Missions and the ASHA cadre** — parallel public-sector frontline force; district health officer, block medical officer, state mission director; touchpoint at every Jio CHW deployment
- **Competitors** — can replicate care model in 12–18 months; data moat activates in 3–5 years

## The fifteen joints at a glance

The chains that follow each end in a named value exchange. The full specification of each mechanism is in Part 6. This table lets the senior reader pick the chains to read in detail.

| # | Joint | What the default does | Where it is specified |
|---|---|---|---|
| 1 | AI objective-function governance (weight-setting + inter-model handoff + audit) | Deflection wins the silent political fight; two models drift; member experiences incoherence | §2.1, §2.2, §6 |
| 2 | Doctor-AI liability and throughput (indemnity + declared review protocol) | Doctor rubber-stamps or bottlenecks; throughput collapses at scale | §2.2, §3.2, §6 |
| 3 | Research Trust science governance (ethics scope + licensing model) | Scientist broad, Board narrow; raw-data demands or too-public findings | §2.3, §4.3, §6 |
| 4 | CHW cadre economics (retention vs gig + utilisation tension) | Good CHWs exit for gig platforms; attachment over-service vs throughput under-service | §3.1, §6 |
| 5 | CHW · Hospital discharge | Discharge not routed; blind post-discharge visit | §3.1, §4.1, §6 |
| 6 | Hospital control gradient (capitation gaming + doctor-AI friction + specialist cascade) | Undertreat, cherry-pick, lemon-drop; doctor counters or ignores care plan; out-of-network cascade | §3.2, §4.1, §4.2, §6 |
| 7 | Care Entity · Allianz transfer price | Political weight wins; IRDAI reclassifies | §3.3, §6 |
| 8 | Care Entity · Clinical AI ownership | Ambiguous accountability; safety debt | §3.3, §6 |
| 9 | Allianz · novel-intervention pricing | Catalogue freezes; data ambition starves | §3.4, §6 |
| 10 | Netmeds · member choice-of-pharmacy | IRDAI flags disguised commission | §3.5, §6 |
| 11 | Regulators · joint veto at intersections | Four bodies; one CHW plasma draw triggers all four | §4.4, §6 |
| 12 | Research Trust · independence perception | Reliance-in-practice kills the franchise | §4.5, §6 |
| 13 | State Health Missions · parallel cadre | Political friction at every district | §4.6, §6 |
| 14 | Member · Family co-decision | System assumes solo rational actor; family decides | §5, §6 |
| 15 | Competitors · moat timing gap | Care model copied in 12–18 months; data moat activates in 3–5 years | §4.7, §6 |

Fifteen joints; six already in the plan; six implied but not named; three load-bearing and missing. The full designed-exchange specification is at §6.

---

# Part 2 · The Technology Ring

The technology ring is the section that does not exist in conventional healthcare incentive analyses, because conventional healthcare systems do not have an AI sitting between every human and every other human. In Jio Arogya, the AI does sit there. Treating it as "one of many stakeholders" understates what is happening. The Personal Agent is the most powerful actor in the entire system — it holds all the PII, it orchestrates downstream calls, and the member interacts with it daily. What it optimises for is what the system optimises for, regardless of what the org chart says.

One caveat runs across the whole ring. The analysis that follows is governance analysis. It assumes the three AI actors exist and work at clinical quality in eight Indian languages on a JioPhone (KaiOS) or Jio Bharat device. At the time of writing, no such product exists anywhere in the world. Governance design is correct but premature; in Year 1 the binding constraint is the build itself. The mechanisms below matter from Year 2 onward, and the plan should not present them as if they are Year 1 deliverables.

## 2.1 · Personal Agent

### The individual

There is no individual inside the Agent. There is the engineer who ships the feature, the product manager who writes the PRD, the applied scientist who trains the model, the red-teamer who tries to break it, and the ops engineer who keeps it up. Each one wakes up thinking about something different.

The engineer ships features. The PM ships adoption. The applied scientist ships accuracy. The red-teamer ships safety, and is rewarded for finding failures, which means the red-teamer is structurally pessimistic about the thing the rest of the team wants to launch. The ops engineer ships uptime and has the least visible job until something breaks.

### The layer above

Product leadership for the Agent reports up to Jio Arogya product, which reports to the Care Entity, which reports to Reliance consolidated. The layer above optimises for shipping velocity, adoption, retention. The layer above that optimises for member count and cost per member-year. The layer above that optimises for EBITDA and MDA visibility. Each escalation step trades a little nuance for a little speed.

### Who sets the weights

The Personal Agent has at least four competing objectives. There is no natural equilibrium between them.

| Objective | Who cares most | What happens if it wins |
|---|---|---|
| **Deflection** (member resolves without human) | CFO, insurer | Loss ratio holds; member gets reassurance-seeking from a bot |
| **Satisfaction** (member is happy) | Product, marketing | Retention holds; Agent becomes a concierge not a clinician |
| **Safety** (no clinical miss) | CMO, legal | Over-escalates; CHW cadre saturates; budget breaks |
| **Data capture** (fill the signal register) | Research Trust, discovery AI | Aggressive survey and sample; member feels surveilled |

Whoever controls the weights is effectively writing the operating plan for the system. If this is left to product engineering without explicit governance, the default is deflection-heavy — deflection is the number in the deck; satisfaction is softer; safety is slow to surface; data capture has no P&L owner until the Trust is self-funding.

### Build risk, stated once

The Agent must work in eight Indian languages, voice-first, on a JioPhone (KaiOS) or Jio Bharat device in intermittent-connectivity conditions. It must hold PII on-device in a way that satisfies DPDP auditors and not-so-technical members simultaneously. It must mediate a consent ledger that is legally novel. No product globally has shipped all of this at once. This is the largest build risk in the plan. The Year 1 question is "does it work"; the Year 2 question is "whose weights is it optimising for."

### Escalation boundary: the member

The Agent's only currency is the member's trust. The Agent cannot force compliance. It cannot make the member take a pill. It cannot prevent the member from going to a non-network hospital. Trust is earned through many small interactions where the Agent was right and small disclosures where it admitted it was guessing. Trust is lost in one large interaction where the Agent was confidently wrong, or one disclosure where the Agent passed data along in a way the member did not expect.

Every other actor has a contract, a regulation, or a payment relationship. The Agent has none. Its only hold on the member is that the member wakes up and opens the app.

## 2.2 · Clinical AI and the AI-to-AI handoff

### The individual

The Clinical AI is a stateless inference service on Jio Brain infrastructure. It is built by a different team than the Agent — this team optimises for accuracy benchmarks, latency, and avoiding the clinical incident that ends careers. The applied scientists in this team are closer to the medical literature than the Agent team. They write safety evaluations, they publish against HTA-In and ICMR, they are professionally embarrassed by hallucinations.

### The layer above

Jio Brain leadership optimises for model economics: GPU utilisation, inference cost per call, latency SLAs, accuracy on named benchmarks. The Care Entity's clinical governance layer — the CMO and her team — optimises for clinical safety and regulatory posture. Two different organisations, two different principals. Jio Brain can argue that it has delivered a 92% accuracy model and done its job. The CMO can argue that a 92% accuracy model at 100M members and seven clinical-triage queries per member per year means roughly 56 million wrong answers per year, and some of those kill people. Both are technically right. The tension is permanent.

### Build risk

A stateless clinical inference service across the top fifty Indian condition categories, validated against HTA-In and ICMR, in eight languages, with Physician CoPilot integrations at Tier-1 and Tier-2 partners — this is a three-to-four year build. The plan's Year 2 autonomous-operation horizon is optimistic even for the restricted task list. Assume human-in-the-loop through Year 3.

### Who sets the weights

The Clinical AI's objective function has its own three-way trade-off.

| Objective | The pressure |
|---|---|
| **Deflection rate** | Insurance economics; every consult avoided is a saved cost |
| **Accuracy** | Academic benchmark; the thing that gets published |
| **Safety** (avoidance of high-severity miss) | Regulatory and liability metric; the thing that gets the model pulled in a crisis |

Aggressive deflection lowers loss ratio and hits unit economics. Aggressive accuracy requires more tokens per query and more expensive models. Aggressive safety means over-escalation, which defeats deflection. The three pull apart, and the weights are again political.

### AI vs AI collision

The Personal Agent and the Clinical AI are different models with different objective functions. They can disagree. The Agent, closer to the member, may have said "you are probably fine, drink water, rest twenty-four hours." The Clinical AI, asked directly by a clinician, may say "this is a cardiac pattern, escalate." Whose recommendation wins at the handoff? If the Agent always defers, the Agent loses credibility with the member. If the Clinical AI defers, the clinical-grade inference layer is redundant.

This is a design decision, not a runtime decision. The rule must be drawn before the product ships: the Personal Agent is front-of-house triage; the Clinical AI is the source of truth at the point of clinical decision. When they disagree, the Clinical AI wins and the Agent updates. The member is told the updated position plainly: "we thought X; a closer look suggests Y." If that rule is not drawn, the two models will drift in ways the member will experience as incoherence, and trust will collapse.

### Escalation boundary: the doctor

The Clinical AI recommends. The doctor authorises. That is the plan's architecture, and it is the right one — until you ask whose liability is on the line. The MCI registration sits with the doctor. If the AI is wrong and the doctor signed, the doctor is sued. The AI is not sued. The AI has no registration to lose.

The rational doctor, faced with that asymmetry, has three stable behaviours, and none is good.

1. **Rubber-stamp.** Authorise everything. Works until the regulator audits. Destroys the "human-in-the-loop" premise.
2. **Bottleneck.** Actually review everything. Throughput collapses; deflection targets miss; cost per consult doubles; the insurer refuses to underwrite the next cohort.
3. **Selective review.** Real review for high-risk; algorithmic sign-off for low-risk. The only stable middle — but only if it is declared. An undeclared selective review is indistinguishable from rubber-stamping.

### The value exchange (Joint 1 + Joint 2)

**Joint 1 — AI objective-function governance:**

- **Independent clinical-safety auditor.** Not Reliance-internal, not Jio Brain-internal. An external auditor — HTA-In or an empanelled equivalent — samples deflected conversations monthly for missed escalations. The auditor reports to the Research Trust board quarterly and to IRDAI annually. A breach above threshold triggers a weight rebalance and a published correction.
- **Member override.** If the Agent recommends deflection and the member wants a human, a human is on the line within a declared latency. The override is free. The metric impact is absorbed by the system, not by denying the member.
- **Weight-change review board.** Any change to the Agent's deflection-safety-satisfaction-capture weights requires sign-off by a four-person board chaired by the CMO, including the clinical safety auditor, the Research Trust ethics chair, and an IRDAI-side observer. Weight changes are not shipped as quiet A/B tests.
- **Written handoff rule.** The Clinical AI is the authoritative voice at clinical decision points. Every time Agent and Clinical AI recommend differently, the disagreement is logged and analysed monthly.

**Joint 2 — Doctor-AI liability and throughput:**

- **Indemnity structure.** The Care Entity carries AI-originated liability. The individual doctor is indemnified on AI-recommended actions signed in good faith, within the declared review protocol. Without this, the doctor bottlenecks.
- **Declared risk-stratified review protocol.** Published to NMC and IRDAI. Specifies which query classes are real-reviewed by whom, and which are algorithmically signed with what audit sample. Fiction is replaced with a structure the regulator can inspect.
- **Throughput target defined at protocol-class level, not consult level** (X high-risk at real-review depth; Y medium at defined depth; Z low-risk signed with audit).

## 2.3 · AI Scientist

### The individual

The AI Scientist is an autonomous research system running on the Research Trust's de-identified longitudinal dataset. It compresses the traditional multi-year design-collect-publish cycle into shorter query-validate-publish loops. The data scientists on the Trust team have publication counts, citation counts, and career trajectories. The ones who matter professionally want to publish novel findings with high effect sizes. They want broad access to the data, unrestricted search space, minimal ethics-review friction.

### Build risk

No biobank has demonstrated autonomous AI hypothesis generation at the cadence assumed. UK Biobank's research pace is months-to-quarters; deCODE's drug-target validation is longer. The mechanism design that follows assumes the AI Scientist will compress cycle time materially — call it a Year 4 capability. Year 1–2 the Trust is doing human-led observational work against a small cohort. Year 3+ the cadence compresses. Governance has to cover both phases.

### The layer above

The Trust data science team reports to the Trust's CEO, who reports to the Trust board, which has an independent ethics board with veto over research activity. The ethics board's mandate is the opposite of the scientist's: restrict scope, protect consent boundaries, ensure scientific credibility by rejecting junk studies.

### Who sets the weights

| Objective | What it produces |
|---|---|
| **Hypothesis generation speed** | More findings, faster, better pharma demand |
| **Scientific rigour** (replication, effect sizes, pre-registration) | Fewer findings but defensible; pharma trusts them |
| **Consent scope discipline** | Stays within what the member agreed to; narrower findings; more trustworthy franchise |

Leaning toward speed generates a research machine that publishes a lot, gets cited, and degrades over time as findings fail to replicate. Leaning toward rigour generates slower output that pharma respects but that does not fill the Trust P&L. Leaning toward consent discipline is the thing that makes the Data Dividend credible. None of the three can dominate.

### AI vs Ethics Board tension

The AI Scientist does not know what it will find. It generates hypotheses from the data. Some will be outside the scope of the original research consent — for example, a pharmacogenomic vulnerability in a subgroup that was not the subject of the study. Is that a finding? Can it be published? Can it be licensed? The ethics board's default is not usable; the member did not consent. The scientist's default is publishable; it is novel. Between these defaults, the system either over-constrains (scientists leave, the Trust stops producing) or under-constrains (the member loses trust, the franchise breaks).

### Escalation boundary: the BioPharma buyer

The Trust sells access, not data. The buyer is not interested in "India data." She is interested in Lp(a) elevation in South Asian men aged 45–65 with a cardiovascular history, sized against a specific pipeline asset entering Phase II. Or pharmacogenomic response to clopidogrel across CYP2C19 variants, because her Phase III enrolment is failing on inclusion criteria. Or MASLD biomarker trajectories in a population with three times the Western prevalence. The questions are specific, named, and tied to pipeline money.

If the Trust cannot answer these questions, the buyer walks. If the Trust answers them in a published paper that everyone else can read, the buyer pays less. If the Trust answers them exclusively for one buyer, the Trust loses scientific credibility.

### The value exchange (Joint 3)

- **Tiered licensing.** Exclusive pipeline access (highest fee, 18-month embargo), non-exclusive early read (middle fee, 12-month embargo), published (free, post-embargo). Three prices, same data.
- **Pre-registered study ladder.** Year 1–2 observational, Year 2–3 pragmatic trials, Year 3–4 pharmacogenomic and biomarker, Year 4+ target discovery — all published in advance. Pharma buyers plan against it. Scientists plan against it. Ethics board reviews against it.
- **Incidental findings protocol.** When the AI Scientist discovers something clinically actionable that was not the subject of consented research, a pre-agreed route returns the finding to the member via the Care Entity, with care coverage for the downstream clinical response.
- **Data Dividend weighted by tenure and participation** — see §5 for why this is not weighted by disclosure completeness.

---

# Part 3 · The Reliance-Controlled Human Ring

## 3.1 · CHW (Arogya Saathi)

### The individual

The CHW covers about a thousand members, sees the high-risk ones monthly, the medium-risk quarterly, the low-risk semi-annually, catches the escalations in between. She is salaried, she is trained, she carries a point-of-care kit that cost more than she makes in a month, and she is the first human the member sees after the Personal Agent decides this needs a human.

What she wakes up wanting:

- A steady income. Her salary has to clear a hurdle every year: the gig-economy alternative. A CHW earning ₹18–22K per month is competing with Zomato, Swiggy, Urban Company, Rapido, and the beauty-and-wellness gig platforms, where full-time metro riders gross ₹25–38K per month (₹20–30K net of fuel and maintenance, per 2025–26 platform disclosures and TeamLease data). If the CHW salary falls materially below the top end of what a full-time gig worker in her city takes home, the good ones leave. This is the binding retention constraint, not the career ladder.
- Standing in the community she serves. She is known. Her visit is an event in the home she walks into.
- Time that is not wasted. A two-hour field traverse for a ten-minute measurement is a loss she feels.
- Not to be in trouble. The supervisor's dashboard is the thing she lives with every month.

### The supervisor

The supervisor runs a pod of about twenty CHWs. She watches visit completion rates, protocol adherence, data quality, escalation patterns, incidents. Her P&L owner is Care Entity operations, whose CFO is watching the most expensive line in the access stack. A CHW at 1:1000 and 100M members is ~100,000 CHWs. The unit cost of this cadre is the single biggest line in Care Entity's operating plan.

The supervisor's incentive is maximum utilisation on minimum-necessary visits. Her CHW's incentive is sometimes to visit the family she has become attached to — the elderly woman whose diabetic husband the CHW has been stabilising for six months — for one more visit beyond what the protocol requires. These are not the same incentive.

### The org's stated objective

Care Entity's stated objective for the CHW cadre is to deliver the field layer of the access stack at the density, protocol, and data-capture quality specified in the member plan. Underneath is an unstated objective: keep the unit cost of the cadre below the per-member intervention budget the actuarial loop releases. If the cadre costs more than the budget, the plan does not close.

### AI intersection

The CHW's dispatch is a decision made by the Personal Agent, escalated through the Clinical AI, routed by an ops copilot to her handheld. She does not dispatch herself. The Access Rule (no self-dispatch) is the structural feature that keeps the cadre inside the budget.

Two tensions at the CHW's point of work.

First, the deflection rate the AI is running at determines her workload. If the AI over-deflects to save cost, she is sent to fewer visits and her utilisation drops; the supervisor starts questioning whether the CHW is really needed. If the AI under-deflects, she is sent to too many visits and breaks. The CHW has no control over the AI's tuning — but her job depends on it.

Second, the AI knows the protocol. She knows the family. When they disagree — AI says stable, she sees the member looks worse than last month — who wins? If she always defers, her judgement becomes redundant. If she overrides frequently and is wrong, her reputation declines. If she overrides frequently and is right, she has information the system needs to absorb.

### Escalation boundary: the hospital

The CHW accompanies the member to the Tier 1 hospital on an acute escalation. She is not the clinician of record. She is not employed by the hospital. The admitting doctor outranks her, the nursing staff may tolerate her or not, and the discharge process may or may not route through her. She needs the discharge summary within twenty-four hours to close the loop via the post-discharge home visit. Without it, her next visit is blind.

At Tier 1, with the plan's proposed contract, she has rights. At Tier 2, she has a contractual path via HCX. At Tier 3 and 4, she has nothing beyond a liaison.

### The value exchange (Joint 4 + Joint 5)

**Joint 4 — CHW cadre economics:**

- **Salary benchmarked to the top-quartile gig-economy take-home in the CHW's own city, reviewed every six months.** Published inside the CHW cadre. This is the retention mechanism. The career ladder below matters only if this is solved first.
- **Shared-savings bonus pool for the cadre, pod-level.** A defined percentage (1–2%) of the intervention-budget-to-claims-savings delta is distributed annually, weighted by pod outcomes. This activates from Year 2 once claims-outcome data is available.
- **Career progression, named and dated.** CHW → Senior CHW → Supervisor → Navigator. Progression gate is a combination of tenure (minimum 24 months) and member outcomes in her pod.
- **Override review, graduating to reputation system from Year 3.** In Year 1, her AI override is a flag that the supervisor reviews daily. In Year 2, overrides are aggregated pod-level with human context. In Year 3 onward, when eighteen months of outcome data has accumulated, overrides are scored against outcome data and her override weight in the ops copilot is adjusted.

**Joint 5 — CHW-Hospital discharge handshake:**

- **Contractually binding hospital discharge handshake.** At Tier 1, non-negotiable. At Tier 2, via HCX. At Tier 3, via the licensed technology stack. At Tier 4, a twenty-four-hour liaison escalation. She never does a post-discharge visit blind.

## 3.2 · Navigation Doctor

### The individual

The Navigation Doctor is the clinical authority in the access stack. She takes the queries the CHW copilot and the Personal Agent escalate, and she authorises the clinical actions the AI recommends. She is an MBBS — possibly with a post-graduate — registered with NMC, carrying a registration number that the state medical council can suspend.

What she wakes up wanting:

- To practise good medicine.
- To not be sued. Her indemnity insurance has a deductible she would prefer not to pay, and her reputation in the medical community is fragile.
- Throughput that does not break her. Six-minute tele-consults do not feel like medicine. Twenty-minute tele-consults do, but they do not close the economics.
- Standing. A doctor who is signing off on AI recommendations in a high-volume tele-practice is careful about how her role is described.

### The layer above

The clinical lead runs the pool of navigation doctors, watches consult quality, override rates against AI recommendations, complaint rates, and throughput. She reports to the CMO. The clinical lead's operating pressure is throughput. The CMO's pressure is what she can show the state medical council.

### AI intersection

The AI recommends. The doctor authorises. In a clinic-volume of twenty consults a day this works — the doctor can review each case meaningfully. In the volume implied by a national member base and the declared deflection rates, this cannot work literally. Genuine review at that rate is impossible; literal rubber-stamp is illegal and will be caught. The only stable middle is declared risk-stratified review: high-risk queries get real review, low-risk queries get algorithmic sign-off with a sample audit, and the distinction is published to the regulator.

Everything downstream depends on the distinction being declared, not left implicit. An implicit selective review is a liability trap; a declared one is defensible.

### Escalation boundary: specialist referral

When the navigation doctor's protocol runs out, she refers. Specialist care is where control is lost. The specialist orders the cascade of tests, recommends the procedure, books the theatre. The navigation doctor does not follow the member into that room. She can see the outcome on the EHR feed if the specialist is in the Tier 1 network, not otherwise.

The member's expectations diverge at this boundary. The Personal Agent set them up to expect a care pathway of a certain shape. The navigation doctor confirmed it. The specialist may recommend something else entirely — more expensive, more invasive, less aligned with the plan. The member is now deciding between two authorities.

### The value exchange

Covered under Joint 2 (§2.2) and Joint 6 (§4.1). The navigation doctor's designed exchanges — indemnity, declared review protocol, throughput targets — are specified at those joints. The specialist-referral cascade is addressed via the preferred specialist network on outcome contracts in Joint 6.

## 3.3 · Care Entity

### The individual

The Care Entity is an organisation, not a person. But the individual who matters most is its CEO. This is the person who reports to Reliance consolidated and will stand in front of the apex group for the twelve-month, twenty-four-month, and thirty-six-month review gates.

What this person wakes up wanting:

- A plan that is credible at the first gate. Three gates in eighteen months. Missing any ends the project.
- Organisational integrity across three entities with three P&Ls.
- Single owner of the operating system, reporting into MDA's office.
- Time to build the team. First five hires matter disproportionately.

### The layer above: Reliance consolidated

The apex group cares about EBITDA, capital efficiency (crore of committed capital per member-year), strategic optionality (can this still pivot in eighteen months?), and MDA visibility. The Care Entity is one of many bets. Its political survival depends on demonstrating, at each gate, that it is uniquely positioned and on track.

### AI intersection

The Care Entity is the operating home of the CHW cadre, the navigation doctors, and the member experience layer. It is the customer — not the owner — of the Clinical AI, which sits in Jio Brain. This creates an immediate ownership ambiguity. Is Clinical AI a Jio Brain product with SLAs to the Care Entity (horizontal platform), or a Care Entity product that licenses Jio Brain infrastructure (vertical product)?

The difference is load-bearing. If horizontal, Care Entity is a client and quality is negotiated. If vertical, Care Entity owns accountability and has to staff the applied science team. The plan does not commit to either. On any specific failure, the two teams point at each other and neither is accountable.

The Care Entity wants AI to lower cost. The Clinical AI team wants data to improve. But the Care Entity's operating tempo is shipping fast. The Clinical AI team's tempo is shipping safe. Without explicit deconfliction, the default is that the Care Entity ships fast and the Clinical AI team privately documents the safety debt.

### Escalation boundary: Allianz

The Care Entity's revenue is Allianz's cost. That sentence is the transfer-pricing problem. No external PMPM benchmark exists for AI-first integrated care in India. Whatever number the transfer price lands at is defensible only internally; to the outside, it looks arbitrary.

If Care Entity wins the negotiation, Allianz's loss ratio suffers, IRDAI notices, the JV is reclassified. If Allianz wins, Care Entity is starved of intervention budget.

### The value exchange (Joint 7 + Joint 8)

**Joint 7 — Transfer price:**

- **Cost-plus pass-through with published margin, proactively disclosed to IRDAI.** This is the primary mechanism, not the independent-actuary alternative. The Institute of Actuaries of India has approximately 650 Fellows (as of April 2025); the subset qualified to price novel AI-first care products is a handful of individuals, most employed by the existing insurers. A published margin with proactive disclosure removes the negotiation entirely and gives IRDAI the transparency that makes reclassification unlikely.

**Joint 8 — Clinical AI ownership:**

- **Explicit ownership commitment on the Clinical AI.** Single decision: horizontal platform or vertical product. Either is defensible; both-at-once is not.
- **Declared care-vs-data time allocation.** x% of CHW minutes are for sample logistics, dietary recall, biobank consenting; y% are for clinical delivery. Without this, the Research Trust gets the leftovers.
- **Single owner of the operating system reporting into MDA's office.** The plan asks for this. Until it exists, the Care Entity CEO is holding three P&Ls and four reporting lines on force of personality.

## 3.4 · Allianz JV

### The individual

Inside Allianz, the person who matters operationally is the appointed actuary. Her career ends in two ways: if her priced product blows up, or if the regulator questions her method.

What the actuary wants:

- A predictable loss ratio.
- A regulatory filing that passes first review.
- Methodological defensibility.
- No surprises. The worst year is the one where claims came in forty per cent above the pricing model, and the root cause was an intervention that was allowed to ramp without actuarial review.

### The layer above

Allianz India leadership is optimising for premium growth, loss ratio discipline, and the operational relationship with Jio. Allianz global's audit committee watches the JV as a single line in an emerging-market portfolio and is comfortable as long as nothing surprises them.

### AI intersection

Allianz has little context for AI-driven care. The actuary looks at a new intervention and asks: what is the claims-cost elasticity? If the answer is "we will know in eighteen months", the actuary's default is to reject the intervention or price it at a level that assumes it does not work. The Care Entity's default is to add interventions because that is what data-driven care means. The two defaults pull apart, and the plan's dynamic intervention catalogue lives in the middle.

### Escalation boundary: IRDAI and Allianz global

IRDAI can reclassify the bundled structure as disguised commission, as unapproved clinical decision support, or as a consent-architecture violation. Allianz global can declare the JV a "problem child" if the loss ratio swings unexpectedly in Year 1.

### The value exchange (Joint 9)

- **Risk-corridor around AI-novel interventions.** For any intervention in the catalogue less than 24 months old, Allianz guarantees a loss ratio band. Breach the band and Care Entity absorbs the excess.
- **Catalogue cadence with pre-declared actuarial assumptions.** New interventions enter on a six-month window with an explicit hypothesis, a pre-registered metric, and an expected claims elasticity. Failed interventions retire on the eighteen-month actuarial loop.
- **Proactive IRDAI disclosure.** AI-in-the-loop mechanism, consent architecture, bundling structure, transfer-pricing method — all submitted proactively, not on request.

## 3.5 · Netmeds / Pharmacy Rail

Netmeds is inside Reliance Retail. Its relationship to the system is three-fold: it is the most regular data feed (every dispensation is a datapoint); it is the pharmacy component of the access stack; and it is the single largest regulatory-tying risk.

### The individual

Inside Netmeds, the individual who matters at the Smithian level is the head of the Jio Arogya integration — the person responsible for stitching Netmeds into the Personal Agent's prescription flow. Reporting to Netmeds leadership inside Reliance Retail, she is optimising for fulfilment rate, refill adherence, and GMV uplift from the Jio Arogya book of members.

### The layer above

Netmeds leadership optimises for margin and GMV growth. Reliance Retail above them optimises for footfall and category share. None of these are health-outcome objectives. Netmeds does not look at HbA1c. It looks at refill cadence.

### AI intersection

The Personal Agent recommends the prescription. The Clinical AI validates. The Navigation Doctor co-signs. The fulfilment flows to Netmeds. From the member's perspective, the path from "the Agent asked me a question" to "the tablet arrives at my door" is one continuous surface. This is precisely what makes IRDAI nervous.

### Escalation boundary: IRDAI

IRDAI's view on bundled recommendations with captive fulfilment is governed by the 2022 Insurance-Medical-Device guidelines and the longer-standing rules on disguised commission. A product where Jio Allianz pays the premium, the Personal Agent recommends the drug, and Netmeds fills the prescription — all inside Reliance — is the textbook definition of tying. The fact that each leg is defensible individually is exactly the problem. The mechanism must give the member a visible choice of pharmacy, not just the technical ability to choose.

### The value exchange (Joint 10)

- **Visible pharmacy choice at the point of fulfilment.** The Agent presents three options: Netmeds (default), a nearby Jio Arogya-licensed chemist, and the member's own preferred pharmacy. The choice persists. Netmeds wins on convenience and price; it does not win by default.
- **No revenue share from Netmeds to Care Entity on Jio Arogya member prescriptions.** Formalised in the master services agreement. Netmeds' economics come from the retail P&L and GMV, not from the member's premium. This removes the commercial incentive to steer.
- **Adherence data as the primary value exchange.** Netmeds' contribution to the system is the dispensing record, not the margin. Make adherence (not GMV) the primary KPI in the integration scorecard reported to the Care Entity CMO.
- **Pre-emptive engagement with IRDAI on the bundling structure.** Written filing, not waiting.

---

# Part 4 · The External Ring

## 4.1 · Tier 1 Hospital and the Hospital Control Gradient

### The individual

Inside a Tier 1 hospital the individual that matters most at the moment of care is the admitting doctor — the one on duty when the JioCare member walks in with a Personal Agent in their pocket and a care plan the Agent has already outlined.

What she wakes up wanting:

- Clinical autonomy. The patient is hers now.
- Procedure margin, directly or indirectly. Under capitation she does not personally earn on the surgery, but her hospital does, which affects utilisation targets, specialty allocation, department staffing.
- To not be second-guessed. A care plan that arrived before she saw the patient, authored by an AI and a tele-doctor she has not met, is an implicit challenge to her authority.
- To not carry liability for an AI-originated error.

### The layer above: admin and owner

The admin optimises for bed turnover, revenue per admission, length-of-stay, complaint rate. The owner optimises for capital return and local market positioning.

Under capitation the owner's incentive inverts. Fixed revenue per member-year means every marginal procedure is a cost, not a revenue. The rational response is to undertreat — not blatantly, but at the margin. Cherry-pick healthy members at renewal, lemon-drop complex ones. Readmission penalties exist in the contract, but they are discrete events; the reward for skimping is continuous.

### AI intersection

The Agent's care plan arrives with the member before the admitting doctor does. The member has read it, formed an expectation. The admitting doctor has three responses.

| Response | What happens |
|---|---|
| **Agree** | Doctor proceeds as the plan suggests. Member trust reinforces. |
| **Quietly ignore** | Doctor does what she would have done anyway. Member notices the delta. Trust erodes. |
| **Actively counter** | Doctor says the AI was wrong. Member is now in a three-way conflict. At least one trust relationship breaks. |

The AI care plan also becomes ammunition in the capitation tension: "the AI missed X, we need this procedure" (extracting from the envelope) or "you don't need what the AI said" (retaining capitation margin).

### Escalation boundaries

Two boundaries. First, the member inside the stay — if the three-way is resolved badly, trust in the Personal Agent is damaged, which damages every future interaction. Second, the discharge — if the hospital does not route through the CHW, readmission risk rises and capitation savings are eaten by the readmission. Third, the specialist referral — when the navigation doctor's protocol runs out, the specialist orders the cascade and control is lost.

### The value exchange (Joint 6)

- **Embedded Jio clinician on-site at Tier 1.** The counter-narrative has to go through someone who understands the care plan, not an unrelated hospital doctor.
- **Care plan framed as expectation, not instruction.** Labelled "Personal Agent's expectation of care for this member." A hospital that systematically deviates is answering to the member, not the plan.
- **Binding quality scorecard (NABH-linked) with capitation clawback.** Below threshold, a portion of the capitation payment is withheld. Undertreatment becomes mechanically less profitable than treatment.
- **Direct discharge protocol, non-negotiable at Tier 1.** CHW takes custody within 24 hours. The discharge summary flows through her handheld.
- **Preferred specialist network on outcome contracts, with two-way EHR.** The specialist cascade stays within sight.
- **Centres of Excellence as data-and-care joint investments.** Cardiometabolic, oncology, maternal-fetal, liver. The hospital's self-interest (brand, talent, research) aligns with Jio's self-interest (data, outcomes, biobank sites).

## 4.2 · Tier 2–4 Hospital Network

The tiering gradient is a gradient of control. The same game-theoretic patterns show up at each tier in diluted form.

At **Tier 2**, case-rate contracts produce DRG-style gaming: upcoding, cherry-picking, unbundling. Contractual response is outcome adjustments; analytical response is episode-level claims analytics flagging statistical anomalies against the network baseline.

At **Tier 3**, the pre-paid envelope creates a Q4 rationing cliff. Replenishment triggers tied to utilisation or risk-corridor sharing. The structural response is the technology uplift — the AI clinical scribe, ambient documentation, consent capture, patient communication module.

At **Tier 4**, there is no contract. The member chose out-of-network for a non-clinical reason (geography, family doctor, emergency). The system's job is damage control: collect the discharge summary, reconcile medications, send the CHW within 48 hours.

| Tier | Dominant game | Designed response |
|---|---|---|
| **1** | Capitation → undertreatment | Quality scorecard with clawback; embedded clinician; direct discharge |
| **2** | Case-rate → upcoding, cherry-picking | Episode analytics; member-services desk; readmission penalties |
| **3** | Envelope → Q4 rationing | Replenishment triggers; technology-stack uplift |
| **4** | Out-of-network → loop loss | 24-hour liaison; 48-hour CHW follow-up |

## 4.3 · BioPharma Buyer

### The individual

Inside a pharma company, the data buyer has a specific mandate. She is running a Phase III enrolment struggling on inclusion criteria, or post-market surveillance on a drug with South Asian under-representation, or translational science on a target her medicinal chemistry team has de-risked. Budget, deadline, not interested in "data assets" in the abstract.

What she wants:

- A specific cohort with specific markers, on her programme's timeline.
- Data quality that will pass the regulatory review she has to submit to.
- Confidence the provenance is legally clean.
- An exclusive edge, or at least a window.

### AI intersection

The Research Trust uses the AI Scientist to answer questions faster. But answers from AI on data she has not independently validated are not directly submittable to FDA. She wants access (or a defensible derivative) with enough reproducibility to verify findings internally.

### Escalation boundary

Her own regulator. If the data does not survive FDA or EMA review, the deal is a write-off.

### The value exchange

Covered under Joint 3 (§2.3): three-tier licensing, pipeline-specific deliverables, data clean-room, India-first access terms.

## 4.4 · Regulators

### The individual

Four regulatory bodies matter: IRDAI (insurance), NMC (medical council), ICMR (research and biobank), DPDP Authority (data protection). Inside each, the individual that matters is a mid-level officer whose career is built on not being the one who approved the thing that failed.

The officer's career mathematics is asymmetric. Approve and it works, nobody remembers. Approve and it fails, the failure is attached to her name forever. The rational default is to approve slowly, narrowly, with extensive documentation, and to prefer frameworks that have precedent elsewhere.

### The layer above

Department heads and political appointees. Credit for innovation is slow and distributed; blame for a scandal is fast and concentrated.

### AI intersection

Every regulator is looking at Jio Arogya and seeing one thing they have not regulated before: an AI making clinical and semi-clinical decisions at the point of care, at national scale. No framework exists. The career-safe default is to classify the AI triage platform as a Class B or C medical device, require CDSCO registration, require clinical trial evidence, require explainability. Each requirement individually reasonable; combined, uneconomic.

### Escalation boundary: each other

The regulatory boundary is between the regulators themselves, not between Jio and any one of them. A single CHW plasma draw touches all four simultaneously. Under NMC: who may draw blood, and is a CHW a registered medical professional? Under ICMR: is this sample for research, and what consent frame governs it? Under DPDP: is this personal health data, and what is the processing basis? Under IRDAI: is this an insured benefit, and is it bundled correctly? Each can individually permit the action; the risk is in the intersection, where any one can block and there is no coordination mechanism.

### The value exchange (Joint 11)

- **Bilateral engagement, not a four-party summit.** These four bodies have never co-convened on a single private-sector initiative. The realistic path is bilateral: separate engagement tracks for IRDAI, NMC, ICMR, and DPDP, each working off a common written framework submitted to all four simultaneously.
- **A political sponsor at the PMO or NITI Aayog level.** The intersection problem between four regulators is not solvable at the regulator level; it is a cabinet-office problem. Without a named sponsor who can convene deputies, the intersections stay unresolved.
- **Proactive disclosure, co-published where possible.** Co-publish the AI safety evaluation with HTA-In. Co-publish the biobank governance framework with ICMR. Co-publish the consent architecture with the DPDP Authority. The officer who gave her name to a co-published framework has political cover.
- **Regulatory sandbox language.** Limited-scope approvals with explicit review windows. The individual officer approves within the sandbox, not on her own judgement. "I approved under the sandbox, per the joint framework" is survivable; "I approved a novel Class C device on my own judgement" is not.
- **Precedent citation.** FDA AI/ML SaMD framework, MHRA medical-device adaptations, Singapore sandbox — cited not because Indian regulators are bound, but because the political cover of international precedent is load-bearing for the individual officer.

## 4.5 · Research Trust

The Research Trust is the credibility spine of the pharma-revenue thesis and the Data Dividend contract. It appears in Ring 3, not Ring 2, because the more it is *in fact* independent of Reliance, the more value it produces. A Reliance-controlled Trust is a legal fiction that pharma compliance teams will see through and that the DPDP Authority will treat as an arm of the data controller.

### The individual

The Trust's CEO is the person who owns the pharma licensing book and reports to the Trust board.

### The layer above

The Trust board has a fiduciary duty to the Trust's charter, which is separate from Reliance's corporate objectives. The board includes Reliance-nominated directors but also independent directors whose credibility is their professional reputation in science, law, and ethics. The ethics board sits beside, not under, the Trust board and has veto over research activity.

### AI intersection

The AI Scientist runs on the Trust's data (see §2.3). The governance tension between AI Scientist speed and Ethics Board scope is resolved at the Trust board.

### Escalation boundary: Reliance, in both directions

If the Trust is too close to Reliance, pharma buyers discount it and the DPDP Authority treats it as a data-controller extension. If the Trust is too far from Reliance, it cannot operate — data transfer from the Care Entity to the Trust requires coordinated workflow, and the Trust has no independent commercial muscle to sign deals at pharma-relevant magnitudes.

### The value exchange (Joint 12)

- **Independent majority on the Trust board.** Structured as a Section 8 company with a majority-independent board, including scientific, legal, and ethics figures of public standing. Reliance nominates minority directors.
- **Public quarterly governance report.** Access, consent, ethics approvals, licensing revenue disclosed.
- **Member representation on the protocol committee.** A member-elected seat with observer rights at the Ethics Board.
- **Data Dividend audit by the Trust, published annually.** Member-level statement plus aggregate distribution.
- **No sample export, no identity re-linking, no raw data sale** — already in the plan as exclusions. Preserve them in the Trust's charter, not in policy.

## 4.6 · State Health Missions and the ASHA cadre

Every Jio CHW deployment sits alongside the National Health Mission's ASHA cadre — a public-sector frontline cadre at a density of roughly 1 ASHA per 1,000 rural population, 1 per 2,500 urban (NHM norms; national rural average is 1 per 979 as of 2020–21). In the districts where Jio CHWs operate, the ASHA is already there. Two parallel cadres, two parallel reporting lines, one population.

### The individual

The ASHA worker. Central fixed monthly incentive of ₹3,500 (raised from ₹2,000 in March 2025), plus performance-based incentives and state top-ups; total take-home typically ₹5,500–₹10,000 depending on state and performance (source: Ministry of Health reply to Lok Sabha, July 2025). Tied to outcomes like immunisation completion, institutional delivery, TB case notification. Known in the community.

### The layer above

Block Medical Officer → District Health Officer → State Mission Director → State Health Secretary. Political appointees at the top; career civil service in the middle. The district machinery is the operational unit that matters.

### AI intersection

The ASHA is increasingly equipped with state-supplied digital tools (ANMOL, ASHA-Soft). The Jio CHW's copilot is better. Where the two visit overlapping households, the Jio CHW has better instrumentation, the ASHA has better social standing.

### Escalation boundary: the district health administration

If the Jio Arogya presence is perceived as competitive with or dismissive of the public cadre, the district administration can block operations via refusal of space at public health centres, refusal to share ANM cadre data, public criticism via the state Member of Legislative Assembly. The state has non-trivial veto power at the operational level.

### The value exchange (Joint 13)

- **ASHA-integration MoU as the plan proposes, with a named commercial term.** Where desirable, the Jio CHW visits are coordinated with ASHA visits, ASHA workers get priority access to the copilot at reduced cost, and state programmes (immunisation, maternal health, TB) get derivative data access under published governance.
- **State Health Mission seat at the regional governance layer.** A quarterly convening with the state's Health Secretary covering district-level operations.
- **Public-private-partnership framing where possible.** On specific programmes (maternal-fetal health, TB, NCD screening), explicit PPP contracts with state health missions.
- **No poaching of the ASHA cadre, stated publicly.** Jio CHW is a different cadre, recruited separately, compensated differently.

## 4.7 · Competitors

Apollo, Tata, PhonePe. The competitor analysis is short because the competitor's chain is short.

The care model is replicable in 12–18 months. Anyone with capital and scale can build the model. The data moat activates in 3–5 years. The gap is the strategic vulnerability.

### The value exchange (Joint 15)

- **Captive-cohort launch.** The Reliance-employee Jamnagar pilot is the short-term moat. Ten thousand families, forty thousand members, full architecture from Month 7. By the time a challenger is organising, Jio has a twelve-month cohort.
- **Single-disease exclusive with Tier 1 hospitals.** Exclusive outcome contracts on cardiometabolic, oncology, maternal-fetal at each Tier 1. The network becomes a contracted moat.
- **Pharma exclusivity in Year 1 on specific targets.** First-mover on specific named assets. Each is a small moat; together they raise the challenger's cost of entry.

---

# Part 5 · The Member and the Family

The member is the reason the system exists and the actor most often treated as passive. The member is not passive. She games the system the way rational actors game any system with misaligned incentives. And she rarely decides alone. In India, the health decision is made by the family. The earning son decides what care his elderly parents receive. The husband decides whether the wife's symptom is worth a consultation. The mother-in-law decides whether the daughter-in-law's sick child goes to the pharmacy or the hospital. The cousin-who-is-a-doctor is the second-opinion of record in every educated middle-class household.

### Member games

**Data withholding for premium advantage.** If disclosing triggers a premium step-up, the rational member withholds; if steep, she lies. The biobank biases toward the already-diagnosed.

**CHW as loneliness service.** An elderly member calls the CHW for company. Rational for her; uneconomic for the system.

**AI reassurance-seeking.** The member asks the Agent the same question ten times. Deflection metric looks excellent. Lived experience is worse than either number suggests.

**Biobank opt-out, Dividend opt-in.** Wants the financial upside without the consent cost. Logically inconsistent, emotionally coherent.

**Second-opinion shopping via the cousin who is a doctor.** The Navigator's recommendation is the starting point; the cousin's friend is the hospital. The Tier 4 episode is billed out-of-network.

**Navigator hopping.** Continuity does not accumulate; the Navigator trust-monetisation layer does not form.

### Family games

**Earning-son decision-making.** The son pays the premium and makes the routing call, but the Agent talks to the parent. The Agent may give Janaki sound advice; her son, relying on a friend's recommendation, routes her elsewhere anyway. The Agent's trust relationship is with the wrong family member.

**The cousin-who-is-a-doctor as parallel authority.** Cheap (a WhatsApp message), trusted (family), authoritative (MBBS). The Navigator is a name on a screen; the cousin is at the Diwali lunch. The cousin wins most tie-breaks.

**The mother-in-law as clinical gatekeeper.** In the daughter-in-law's health decisions, the mother-in-law has an effective veto. The Personal Agent on the daughter-in-law's phone will be asked for permission by the mother-in-law before the visit happens.

**Family premium gaming.** The ailing grandfather is added to a grandson's policy for better coverage, or removed during a high-risk year. Risk-pool composition shifts without any underwriting signal.

### The response is value exchange, not education (Joint 14)

Explaining to a rational actor why her rational choice is bad for the system does not change behaviour. Structure does.

- **Long-tenure premium cap.** A member enrolled more than N years does not see linear step-up with claims. Withholding becomes less valuable, disclosure becomes safer.
- **Data Dividend weighted by tenure and participation, not disclosure completeness.** A disclosure-weighted Dividend converts participation into surveillance, and a Dividend that varies by consent depth is one DPDP complaint away from being struck down. Tenure is behavioural and observable; participation (biobank opt-in, annual visit completion) is binary and legally clean.
- **Companion visits as a priced care benefit, funded by the Care Entity operating budget.** The elderly-loneliness use of the CHW is real. Pricing it into the premium invites IRDAI to ask whether this is a medical expense (it is not). Funding it out of the Care Entity's operating budget — and offering it as a care benefit to Premium and Comprehensive members — solves both problems.
- **Family-decision-maker identification.** At enrolment, the member identifies the primary decision-maker for each family member's health (often the earning son, sometimes the spouse, occasionally herself). The Agent addresses both parties where the decision-maker differs from the member. The CHW loops the decision-maker in at each visit.
- **Cousin-who-is-a-doctor integration.** If the family has a doctor in its network, offer a structured second-opinion channel — the Navigator shares the full clinical picture with the family doctor under explicit consent, and the family doctor's input is logged. Converts an adversarial parallel authority into a consulted advisor.
- **Agent empathy detection.** If reassurance-seeking is detected, the Agent routes to a human CHW for a short call.
- **No Navigator-continuity penalty.** Members are free to change Navigators without any financial consequence in the Dividend or anywhere else. Tying clinical continuity to a financial incentive is a regulatory grey area and is inconsistent with the civilizational contract.

---

# Part 6 · Synergy

## Where synergy holds naturally

Not every joint needs design. Some parts of the system have self-interest that already points the right way. Naming them matters because mechanism-design attention should go to the places that need it.

**Personal Agent and member.** Properly specified, the Agent's job is to help the member. The member wants help. The design work is in the weight-setting governance, not in the fundamental relationship.

**Netmeds and member.** The pharmacy rail is naturally aligned — Netmeds wants volume, the member wants medicine. The risk is tying, not underlying incentive. Fix the tying with visible pharmacy choice (§3.5) and the alignment is clean.

**Research Trust and Data-Dividend member.** The member who receives a Dividend is a co-owner of the asset the Trust is building. Her interest is in the Trust doing well. Easy to break — if the Dividend is token, late, or opaque, the alignment inverts.

**CHW and her assigned families.** The CHW knows the families. She cares about them. The system does not have to design this; it has to not break it, by keeping assignments stable, not rotating her away for ops convenience, and making her career progression depend on outcomes in those families.

**Allianz and long-tenure member.** A five-year-tenured member is statistically better-known and cheaper to underwrite than a new one. Allianz's interest and the member's align at renewal if the premium structure rewards tenure rather than penalising claims.

**Family and CHW (in most cases).** Where the CHW is accepted into the household, she becomes a minor family figure. The informal network the document names as a risk is, more often, an asset. The alignment holds as long as the CHW's cadence is respected as social as well as clinical.

## Where synergy requires designed value exchange

Fifteen joints across the actor chains where the default choices produce conflict, and the specific mechanism that converts each into alignment. The plan, in its current form, has most mechanisms implied; a few are named; several are load-bearing and missing.

| # | Joint | Natural default | Designed value exchange |
|---|---|---|---|
| 1 | AI objective-function governance (weight-setting + inter-model handoff) | Loudest P&L wins; deflection-heavy; two models drift | Independent clinical-safety auditor; weight-change board; member override; written handoff rule |
| 2 | Doctor-AI liability and throughput | Rubber-stamp or bottleneck | Reliance indemnity; declared risk-stratified review published to NMC/IRDAI; protocol-class throughput targets |
| 3 | Research Trust science governance (ethics scope + licensing) | Scientist broad, Board narrow; raw-data demands or too-public findings | Pre-registered study ladder; incidental-findings protocol; three-tier licensing; clean-room; pipeline-specific deliverables |
| 4 | CHW cadre economics (retention + utilisation) | Good CHWs exit for gig platforms; attachment over-service vs throughput under-service | Salary benchmarked to top-quartile gig take-home; pod-level shared-savings bonus from Year 2; override review graduating to reputation from Year 3 |
| 5 | CHW · Hospital discharge | Discharge not routed; blind visit | Contractually binding handshake by tier; 24h liaison at Tier 4 |
| 6 | Hospital control gradient (capitation + doctor-AI friction + specialist cascade) | Undertreat, cherry-pick, lemon-drop; doctor counters or ignores care plan; out-of-network cascade | Embedded Jio clinician; care plan as expectation; NABH-linked quality scorecard with clawback; preferred specialist network on outcome contracts |
| 7 | Care Entity · Allianz transfer price | Political weight wins; IRDAI reclassifies | Cost-plus pass-through with published margin; proactive IRDAI disclosure |
| 8 | Care Entity · Clinical AI ownership | Ambiguous accountability; safety debt | Single decision: horizontal platform or vertical product, committed in writing |
| 9 | Allianz · novel AI interventions | Catalogue freezes | 24-month risk corridor; 6-month catalogue cadence with pre-declared assumptions |
| 10 | Netmeds · member choice-of-pharmacy | IRDAI flags disguised commission | Visible pharmacy choice; no revenue share on Arogya Rx; adherence as primary KPI |
| 11 | Regulators · joint veto | Four bodies independently cautious | Bilateral engagement with common framework; PMO/NITI political sponsor; sandbox |
| 12 | Research Trust · independence perception | Reliance-in-practice kills franchise | Section 8 structure with majority-independent board; public governance report; member protocol seat |
| 13 | State Health Missions · parallel cadre | District blocks at operational level | ASHA-integration MoU with commercial terms; state seat at regional governance; no-poaching commitment |
| 14 | Member · Family · informal network | Agent talks to wrong decision-maker; cousin wins tie-breaks | Family decision-maker identification at enrolment; structured second-opinion channel |
| 15 | Competitors · moat timing gap | Care model copied before data moat activates | Captive-cohort launch; single-disease Tier 1 exclusives; Year 1 pharma exclusivity on named targets |

Fifteen mechanisms. Six the plan has already (5, 6 partially, and components of 3, 7, 9, 15). Six are implied but not named (1, 4, 8, 11 in part, 12, 13). Three are load-bearing and must be made explicit (2, 10, 14).

---

# Decisions to make in the next 90 days

The following decisions cannot wait until the business plan closes in July. Each has a named owner.

| # | Decision | Owner | Default if not made |
|---|---|---|---|
| **D1** | Is Clinical AI a Jio Brain horizontal platform, or a Care Entity vertical product? One answer in writing. | Care Entity CEO; co-signed by Jio Brain leadership | Ambiguous accountability; safety debt compounds invisibly |
| **D2** | What is the liability structure for AI-originated clinical decisions? Who indemnifies the navigation doctor? | Care Entity CMO; co-signed by Legal | Doctors bottleneck at scale; throughput collapses |
| **D3** | What is the Care Entity → Allianz transfer price mechanism? Cost-plus with published margin, or independent actuary? Pick one. | Care Entity CFO; co-signed by Allianz appointed actuary | Transfer-pricing war; IRDAI reclassification risk |
| **D4** | What is the Clinical AI vs Personal Agent handoff rule at clinical decision points? | CMO; co-signed by Head of Personal Agent | Two models drift; member trust collapses on first visible incoherence |
| **D5** | Is the Research Trust majority-independent, and under what legal structure (Section 8)? | Proposed Trust chair; Reliance Legal | Pharma discounts credibility; DPDP treats Trust as data-controller extension |
| **D6** | What is the Netmeds fulfilment choice UX, and what is the revenue-share commitment? | Netmeds leadership; Care Entity CMO | IRDAI disguised-commission complaint in Year 1 |
| **D7** | Who is the single owner of the operating system reporting into MDA's office? | MDA's office | Care Entity CEO holds three P&Ls and four reporting lines on force of personality |
| **D8** | Who is the political sponsor for the four-regulator framework (IRDAI, NMC, ICMR, DPDP)? PMO or NITI Aayog? | MDA's office; sponsor nominated externally | Intersections stay unresolved; first CHW plasma draw triggers a regulatory cascade |

Eight decisions. Six cost nothing to make — they are writing exercises. The two that are expensive (D5 on Trust independence, D8 on political sponsorship) are expensive in political capital, not in capital.

---

## Source documents

| Document | Role |
|---|---|
| [MDA Note_200426.md](MDA Note_200426.md) | The system being analysed |
| [(Shumeet Track) MDA Note_200426.md](\(Shumeet Track\) MDA Note_200426.md) | Shumeet-track variant |
| [260421_Strategic_Memo.md](final-email-docs/260421_Strategic_Memo.md) | Strategic pre-read to apex |
| [JioCare - Strategic Decision Layers.md](JioCare - Strategic Decision Layers.md) | 90-day sprint decision surface |
| [Shumeet-MDA-Verbal-Brief.md](final-email-docs/Shumeet-MDA-Verbal-Brief.md) | Verbal brief and Q-index |
