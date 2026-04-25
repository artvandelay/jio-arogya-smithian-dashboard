// ============================================================
// Jio Arogya Strategic Tensions Explorer — Data Model v2
// Three-state levers: proposed | moderate | degraded
// Sources: 260421 Strategic Memo, Principles/Decisions/Op Model,
// Data Strategy, Shumeet-MDA Verbal Brief, Shumeet Questions.
// ============================================================

const LAYERS = {
  insurance:  { id:"insurance",  label:"Insurance Base",              short:"Insurance",  question:"Does the model create a claims-reduction loop, or just another benefits wrapper?",       color:"#0f4c81" },
  engagement: { id:"engagement", label:"Proactive Engagement Stack",  short:"Engagement", question:"Does the member interact before illness, or only when already sick?",                    color:"#0f766e" },
  navigation: { id:"navigation", label:"Navigation Layer",            short:"Navigation", question:"Does Jio control the episode economics without owning hospitals?",                       color:"#92650a" },
  data:       { id:"data",       label:"Data Architecture + Biobank", short:"Data",       question:"Is biology captured by design, longitudinally, under trust?",                            color:"#6d28d9" },
  science:    { id:"science",    label:"Medical + Scientific Asset",  short:"Science",    question:"Does the cohort become a pharma-grade discovery asset?",                                 color:"#b91c1c" }
};

const LAYER_ORDER = ["insurance","engagement","navigation","data","science"];

const STATUS = {
  green: { id:"green", label:"Compounds", score:3 },
  amber: { id:"amber", label:"Degrades",  score:2 },
  red:   { id:"red",   label:"Breaks",    score:1 }
};

const LEVER_STATES = {
  proposed: { id:"proposed", label:"Full",      idx:0 },
  moderate: { id:"moderate", label:"Moderate",  idx:1 },
  degraded: { id:"degraded", label:"Degraded",  idx:2 }
};

const BASELINE = {
  insurance: {
    status:"green",
    headline:"Claims discipline funds care.",
    metric:"70% target loss ratio · quarterly actuarial loop · 18-month intervention proof bar",
    text:"Jio Allianz prices the member book and releases an intervention budget. The care entity must prove claims-cost elasticity or interventions are repriced or retired.",
    source:"Principles/Decisions/Op Model — Underwriting, intervention catalogue, actuarial loop"
  },
  engagement: {
    status:"green",
    headline:"Care starts before symptoms.",
    metric:"Personal Agent first · Clinical AI second · CHW only on escalation or protocol",
    text:"The member's default interface is a device-local Personal Agent, supported by stateless Clinical AI and a CHW cadence. This creates trust, retention, and repeated measurement.",
    source:"Strategic Memo — Proactive Engagement Stack; Operating Model — Access Rule"
  },
  navigation: {
    status:"green",
    headline:"Hospital control without hospital ownership.",
    metric:"Four hospital tiers · preferred partners move toward capitation within 24 months",
    text:"Jio Arogya controls the relationship, episode capture, discharge handshake, and quality governance through network contracts rather than fixed hospital assets.",
    source:"Strategic Memo — Navigation Layer; Operating Model — Escalation matrix"
  },
  data: {
    status:"green",
    headline:"Longitudinal biology compounds.",
    metric:"Day-1 biosample · ABHA read access · WGS · CGM/omics cadence · consent ledger",
    text:"The data layer is designed around consented member-years, not episodic claims. Personal Agent, care workflows, biobank, and Data Trust generate a continuous phenotype.",
    source:"Data Strategy — Focus on longitudinal data; Verbal Brief — Day-1 data collection"
  },
  science: {
    status:"green",
    headline:"Indian biology becomes the moat.",
    metric:"4 assets: metabolomics · proteomics/pQTL · CGM reference · pre-disease trajectory",
    text:"The Data Trust converts deep South Asian longitudinal biology into pharma-grade discovery assets, with Data Dividend returning value to participating members.",
    source:"Strategic Memo — Research monetization; Data Strategy — four data assets"
  }
};

const LEVERS = [
  {
    id:"ai",
    number:"01",
    title:"AI Autonomy + Investment",
    thesis:"How much to invest in AI autonomy, from clinical-grade agent to basic triage.",
    states:{
      proposed:{ button:"Level-3 AI", label:"Clinical-grade AI as operating spine",   short:"Level-3 agent · 70% first-layer closure · multilingual companion" },
      moderate:{ button:"Human Backstop", label:"Functional AI with human backstop",       short:"Level-2 agent · ~40-50% closure · slower iteration on clinical models" },
      degraded:{ button:"Basic Triage", label:"Basic triage / underfunded AI",           short:"Level-1 bot · <25% closure · call-center + CHW dispatch" }
    },
    impacts:{
      moderate:{
        insurance:  { status:"amber", headline:"PMPM envelope tightens.", metric:"40-50% deflection keeps the loop alive but with thinner margin for error.", text:"The care budget still closes, but there is less room to fund exploratory interventions. The actuarial loop works, but the intervention catalogue stays conservative.", source:"Operating Model — Access Rule; Verbal Brief Q7" },
        engagement: { status:"amber", headline:"Engagement becomes periodic, not continuous.", metric:"Members use the agent for episodes, not daily companionship.", text:"A Level-2 agent resolves queries but does not build the daily trust habit. Members return when sick, not between episodes. Preventive nudges land less often.", source:"Verbal Brief — Level-3 AI requirement; Shumeet Q8" },
        navigation: { status:"green", headline:"Navigation still functions.", metric:"Human coordinators absorb slightly more intake load.", text:"The network contracts and routing logic are unaffected. Marginally more cases reach human review, but the navigation layer was always designed for the 10% that escalate.", source:"Strategic Memo — Navigation Layer" },
        data:       { status:"amber", headline:"Behavioral signal weakens.", metric:"Fewer daily interactions = fewer context, adherence, and symptom signals.", text:"The longitudinal asset still grows through scheduled CHW visits and biobank draws, but the continuous behavioral layer — the differentiator — thins.", source:"Data Strategy — longitudinal, continuous data" },
        science:    { status:"green", headline:"Science assets are largely preserved.", metric:"Biobank, omics, and CGM pipelines are independent of AI maturity.", text:"The AI Scientist loop runs on Data Trust assets regardless. The loss is in linked behavioral signals, which enriches trajectory models but is not the primary scientific asset.", source:"Operating Model — AI Scientist" }
      },
      degraded:{
        insurance:  { status:"red",   headline:"The PMPM loop loses its deflection engine.", metric:"70% Agent closure → 20-30% → CHW/doctor cost rises before claims savings are proven.", text:"The insurer-funded care budget only closes if low-cost AI resolves most routine demand. Underfunded AI converts the model into high-touch service delivery with weak claims elasticity.", source:"Operating Model — Access Rule; Verbal Brief Q2/Q7" },
        engagement: { status:"red",   headline:"The member relationship becomes transactional.", metric:"Level-3 AI is the stated trust contract; Level-1/2 materially reduces daily use.", text:"The member opens the app only when sick if the agent is a triage bot. Honest data, habit formation, and preventive nudges depend on a companion that feels useful before illness.", source:"Verbal Brief — Level-3 AI requirement; Shumeet Q8" },
        navigation: { status:"amber", headline:"Navigation becomes a staffed concierge layer.", metric:"More cases move to human review, thinning the cost advantage of a 10% navigation layer.", text:"Without strong AI pre-work, coordinators and CHWs carry more intake, explanation, and routing load. The network still functions, but the cost advantage thins.", source:"Strategic Memo — Navigation Layer; Operating Model — Access Rule" },
        data:       { status:"red",   headline:"The longitudinal asset thins at the source.", metric:"Fewer daily interactions = fewer behavioral, symptom, adherence, and context signals.", text:"The data moat depends on repeated trusted interaction. Underfunded AI turns the dataset into periodic screenings plus claims, not a continuous phenotype.", source:"Data Strategy — longitudinal, continuous data; Verbal Brief — honest data posture" },
        science:    { status:"amber", headline:"Scientific value becomes delayed.", metric:"AI Scientist and clinical inference loops cannot mature without high-quality repeated signals.", text:"The science layer can still use biobank and omics assets, but the differentiator — linked behavior, care response, and outcomes over time — is materially weaker.", source:"Operating Model — AI Scientist; Data Strategy — trajectory assets" }
      }
    }
  },
  {
    id:"delivery",
    number:"02",
    title:"Delivery Capex + Access",
    thesis:"How much physical delivery capacity to build, from CHW-led home access to clinic-first rollout.",
    states:{
      proposed:{ button:"Home-Led", label:"CHW + home + thin physical",              short:"<15% capex on clinics · CHW home visits · Agent-first access" },
      moderate:{ button:"Hybrid", label:"Hybrid: CHW-led with visible clinics",    short:"25-35% capex on branded points · CHW still primary · clinics for trust" },
      degraded:{ button:"Clinic-Led", label:"Asset-heavy clinic/pod rollout",           short:">50% capex on clinics · pod-first access · walk-in economics" }
    },
    impacts:{
      moderate:{
        insurance:  { status:"amber", headline:"Capex pull creates utilization pressure.", metric:"25-35% capex on physical assets creates organizational pressure to fill them.", text:"Clinics can coexist with the CHW model, but once built they compete for management attention and budgets. The insurer P&L wants avoided episodes; the clinic P&L wants footfall.", source:"Principles — No fixed healthcare supply" },
        engagement: { status:"green", headline:"Engagement is preserved if CHWs remain primary.", metric:"Clinics supplement home access rather than replacing it.", text:"As long as the CHW cadre stays the primary engagement channel and clinics serve as trust-building and data-collection points, the proactive model holds.", source:"Strategic Memo — primary care inside the OS" },
        navigation: { status:"green", headline:"Navigation benefits from visible physical points.", metric:"Local clinics can aid routing and serve as escalation points.", text:"A moderate physical presence actually helps navigation by giving the system a visible anchor. The risk is only if physical assets become the organizing principle.", source:"Operating Model — Escalation matrix" },
        data:       { status:"amber", headline:"Data capture skews toward visitors.", metric:"Clinic encounters enrich the dataset but do not replace continuous home measurement.", text:"Clinics generate structured encounter data, but the longitudinal value requires between-episode measurement. A hybrid model can work if the CHW cadence is preserved.", source:"Data Strategy — longitudinal continuous biological data" },
        science:    { status:"green", headline:"Scientific assets are preserved.", metric:"Biobank and omics pipelines are unaffected by delivery format.", text:"The science layer depends on enrollment, consent, and biological depth — not on whether the member was enrolled at home or at a clinic.", source:"Data Strategy — four data assets" }
      },
      degraded:{
        insurance:  { status:"red",   headline:"Fixed assets push the insurer toward volume economics.", metric:"Plan guardrail: less than 15% of total capex on clinics/buildings/pods.", text:"Once large fixed assets exist, the organization must fill them. That is the opposite of an insurer P&L that wants avoided episodes, lower admissions, and retired interventions.", source:"Principles — No fixed healthcare supply; Strategic Memo — Insurance Base" },
        engagement: { status:"red",   headline:"The system sees walk-ins, not the silent majority.", metric:"Home + CHW model targets members who will not present to pods.", text:"Clinic-led access waits for the member to arrive. Prevention requires witnessed human commitment and proactive outreach inside the household.", source:"Principles — Trust at individual level; New healthcare workforce" },
        navigation: { status:"amber", headline:"Navigation narrows to clinic catchments.", metric:"Four-tier hospital contracting is meant to substitute for owning facilities.", text:"A clinic footprint can help local routing, but it weakens the asset-light position: Jio Arogya should orchestrate across hospitals, not become another provider.", source:"Operating Model — Escalation matrix; Strategic Memo — Navigation Layer" },
        data:       { status:"red",   headline:"Data becomes episodic and facility-biased.", metric:"Strategic asset requires longitudinal member-years, not encounter records.", text:"Clinic records capture people who show up and the disease states they present with. The data strategy requires continuous pre-disease measurement across retained members.", source:"Data Strategy — longitudinal continuous biological data" },
        science:    { status:"amber", headline:"The cohort loses retention depth.", metric:"Longitudinal value comes from care relationship, not walk-in OPD.", text:"A clinic asset may generate useful clinical data, but pharma-grade trajectory assets require retained cohorts measured between episodes.", source:"Principles — How to capture Longitudinal Data; Data Strategy — pre-disease trajectory" }
      }
    }
  },
  {
    id:"dataDepth",
    number:"03",
    title:"Data Acquisition Depth",
    thesis:"How much biological depth to capture, from longitudinal omics to routine claims and labs.",
    states:{
      proposed:{ button:"Deep Biology", label:"Deep baseline + longitudinal biology",     short:"Day-1 WGS · metabolomics · proteomics · CGM · dietary annotation" },
      moderate:{ button:"Selective Depth", label:"Selective depth with biobank storage",     short:"Day-1 biosample stored · WGS deferred · CGM for T2D only · selective assays" },
      degraded:{ button:"Claims/Labs", label:"Claims/labs only to save cost",            short:"Routine labs · claims data · no biobank · no omics" }
    },
    impacts:{
      moderate:{
        insurance:  { status:"green", headline:"Insurance economics are unaffected.", metric:"Claims data and routine monitoring still feed the actuarial loop.", text:"The insurer does not depend on deep biology for its core P&L. Selective CGM for diabetics still supports the cardiometabolic intervention thesis.", source:"Operating Model — actuarial loop" },
        engagement: { status:"green", headline:"Member value exchange holds.", metric:"Biobank consent and future Data Dividend remain part of the story.", text:"The member still participates in a consent-based longitudinal relationship. The promise of future returns from stored biology is credible if the biobank is real.", source:"Operating Model — Data Dividend; Verbal Brief Q9" },
        navigation: { status:"green", headline:"Navigation is unaffected.", metric:"Routing uses clinical and engagement signals, not deep omics.", text:"The navigation layer does not depend on molecular data for its core function. Risk stratification from engagement data and CGM is sufficient for the pilot.", source:"Strategic Memo — Minimum Viable Proof" },
        data:       { status:"amber", headline:"The dataset is defensible but not yet premium.", metric:"Stored samples are an option on future depth; the 43x premium is deferred, not lost.", text:"Biobank-first with selective sequencing can reduce per-member cost by 50-90%. The depth premium activates when assays are run — it is a timing choice, not a permanent loss.", source:"Data Strategy — §1.8 biobank alternative" },
        science:    { status:"amber", headline:"Pharma timeline extends by 12-18 months.", metric:"LOIs depend on demonstrable depth; stored-but-unassayed samples are options, not products.", text:"Metabolomics and pQTL work requires completed assays. Selective depth means the first pharma LOIs shift from Y1 to Y2-3, but the thesis is not abandoned.", source:"Data Strategy — four data assets, Y1/Y2 inflection" }
      },
      degraded:{
        insurance:  { status:"amber", headline:"Pricing remains backward-looking.", metric:"Claims and labs show disease after signal; deep biology captures trajectory before disease.", text:"The insurer still gets claims and engagement data, but loses forward-looking risk stratification needed to personalize interventions before high-cost episodes.", source:"Data Strategy — pre-disease trajectory; Operating Model — actuarial loop" },
        engagement: { status:"amber", headline:"The member value exchange weakens.", metric:"Data Dividend depends on licensing proceeds from scarce biology, not routine claims.", text:"If the underlying asset is routine data, the dividend story becomes thin and the consumer contract feels less credible.", source:"Operating Model — Data Dividend; Verbal Brief Q9" },
        navigation: { status:"amber", headline:"Navigation loses biological context.", metric:"Risk stratification that changes intervention is one of the five MVP proof legs.", text:"The network can still route episodes, but the system cannot identify enough pre-disease or high-risk states early enough to change the episode mix.", source:"Strategic Memo — Minimum Viable Proof" },
        data:       { status:"red",   headline:"The dataset becomes ordinary.", metric:"Roughly 43x per-participant depth premium for deep WGS-plus-clinical linkage versus shallow data.", text:"Routine data can be bought, partnered for, or scraped from normal care systems. The scarce asset is linked South Asian molecular biology over time.", source:"Data Strategy — 23andMe vs deCODE depth premium" },
        science:    { status:"red",   headline:"Pharma monetization thesis collapses.", metric:"Four named assets — metabolomics, proteomics/pQTL, CGM reference, pre-disease trajectory — all require depth.", text:"Global biopharma does not need another hospital-record dataset. It will pay for target discovery, endpoint qualification, and South Asian biology that competitors cannot replicate quickly.", source:"Strategic Memo — research partnership revenue; Data Strategy — four assets" }
      }
    }
  },
  {
    id:"governance",
    number:"04",
    title:"Governance + Trust Architecture",
    thesis:"How strongly to separate member data governance, from independent trust to shared operating data.",
    states:{
      proposed:{ button:"Hard Trust", label:"Independent Trust + hard privacy walls",    short:"Three entities · consent ledger · ethics board veto · two-key re-identification" },
      moderate:{ button:"Shared Infra", label:"Functional separation with shared infra",  short:"Separate P&Ls · shared tech stack · contractual walls · internal ethics review" },
      degraded:{ button:"Commingled", label:"Commingled operating data",                 short:"Single data lake · contractual access controls · no independent Trust" }
    },
    impacts:{
      moderate:{
        insurance:  { status:"amber", headline:"Member perception is the binding constraint.", metric:"Contractual walls may satisfy IRDAI but may not satisfy the member.", text:"If the member sees shared infrastructure and does not trust the contractual separation, sharing degrades. The risk is behavioral, not legal.", source:"Verbal Brief Q7; Operating Model — regulatory frame" },
        engagement: { status:"amber", headline:"Honest data depends on perceived independence.", metric:"Companion posture works only if the member trusts the boundary.", text:"Functional separation may be sufficient if the consent ledger is visible and the member can see exactly what flows where. But any breach or perception of leakage is catastrophic.", source:"Verbal Brief — honest data and companion posture" },
        navigation: { status:"green", headline:"Navigation is unaffected.", metric:"Clinical routing does not depend on Trust independence.", text:"The navigation layer operates on clinical signals and network contracts. Governance architecture does not change routing decisions.", source:"Operating Model — Escalation matrix" },
        data:       { status:"amber", headline:"Regulatory risk is manageable but present.", metric:"DPDP compliance depends on purpose limitation and consent architecture.", text:"Shared infrastructure with strong contractual walls can satisfy regulators if the consent ledger and audit trails are robust. But the system is one audit finding away from structural remediation.", source:"Verbal Brief — Threat 1; Operating Model — Data Architecture" },
        science:    { status:"amber", headline:"Pharma applies a governance discount.", metric:"Buyers prefer independently governed assets; shared-infra trusts get lower valuations.", text:"Pharma will still engage, but deal terms will reflect the governance risk. Expect lower per-participant pricing and more restrictive access requirements.", source:"Strategic Memo — Data Trust; Verbal Brief — Research Trust boundaries" }
      },
      degraded:{
        insurance:  { status:"red",   headline:"Member sharing collapses if insurer visibility is suspected.", metric:"Hard boundary: insurer never sees identifiable clinical data.", text:"The underwriting model needs better data, but the member will only share it if insurer access is architecturally impossible, not just contractually restricted.", source:"Verbal Brief Q7; Operating Model — regulatory frame" },
        engagement: { status:"red",   headline:"Honest data becomes impossible.", metric:"Companion posture fails if the system feels like insurer surveillance.", text:"A strict-parent model invites hiding. If the agent is perceived as an insurer intake channel, the longitudinal record becomes strategically contaminated.", source:"Verbal Brief — honest data and companion posture" },
        navigation: { status:"amber", headline:"Clinical independence becomes contestable.", metric:"Guardrail: no insurer override of clinical protocol.", text:"Commingled governance makes hospital partners and regulators question whether routing is clinical, financial, or intra-group steering.", source:"Operating Model — regulatory frame; Verbal Brief — IRDAI threat" },
        data:       { status:"red",   headline:"DPDP and genomic re-identification risk become binding.", metric:"Genomics is non-anonymisable; two-key gating and consent ledger are required.", text:"A commingled data lake is the failure mode regulators will understand fastest. Consent, purpose limitation, and re-identification controls must be structural.", source:"Verbal Brief — Threat 1; Operating Model — Data Architecture" },
        science:    { status:"red",   headline:"Pharma discounts the asset as captive and risky.", metric:"Trust must sell models or governed access, not raw rows; samples stay in India.", text:"Global buyers will not treat a Reliance-controlled operating dataset as equivalent to an independently governed research asset.", source:"Strategic Memo — Data Trust; Verbal Brief — Research Trust boundaries" }
      }
    }
  }
];

const SCENARIOS = [
  { id:"intended",       label:"Full Architecture",        activeLevers:{},                                                          description:"All four levers at their full target state. The system compounds." },
  { id:"aiModerate",     label:"AI: Cautious Start",       activeLevers:{ ai:"moderate" },                                           description:"Fund AI but start with human backstop. Defensible but slower." },
  { id:"aiUnderfunded",  label:"AI Underfunded",           activeLevers:{ ai:"degraded" },                                           description:"The most common false economy: reduce AI ambition to control near-term spend." },
  { id:"clinicDrift",    label:"Clinic Drift",             activeLevers:{ delivery:"degraded" },                                     description:"The visible-asset temptation: spend into branded physical supply." },
  { id:"hybridDelivery", label:"Hybrid Delivery",          activeLevers:{ delivery:"moderate" },                                     description:"CHW-led with visible branded clinics for trust. Manageable if discipline holds." },
  { id:"selectiveDepth", label:"Selective Data Depth",     activeLevers:{ dataDepth:"moderate" },                                    description:"Store samples, defer expensive assays. The depth premium is delayed, not lost." },
  { id:"cheapData",      label:"Cheap Data",               activeLevers:{ dataDepth:"degraded" },                                    description:"No biobank, no omics. The pharma thesis collapses." },
  { id:"trustShortcut",  label:"Trust Shortcut",           activeLevers:{ governance:"degraded" },                                   description:"Commingled data. Members, regulators, and pharma all push back." },
  { id:"deadOnArrival",  label:"Dead-on-Arrival Pattern",  activeLevers:{ ai:"degraded", dataDepth:"degraded", governance:"degraded" }, description:"AI underfunded, data shallow, governance simplified. The model is healthcare activity, not an operating system." }
];

const SOURCE_DOCUMENTS = [
  "260421_Strategic_Memo.md",
  "260421_Principles_Decisions_Op_Model.md",
  "260421_Data_Strategy.md",
  "Shumeet-MDA-Verbal-Brief.md",
  "Shumeet-questions after read through in meeting.md"
];
