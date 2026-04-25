# Jio Arogya — Smithian Analysis

Three interactive dashboards and seven source documents applying Smithian analysis to the Jio Arogya health operating system architecture.

## Dashboards

| # | Dashboard | Path | What It Shows |
|---|-----------|------|---------------|
| 01 | **Smithian Risk & Deal Dashboard** | `smithian-dashboard/` | 15 joints, 18 actors, 4 rings — the master claim-register view |
| 02 | **Incentive Alignment Dashboard** | `incentive-alignment/` | Journey steps × Actors × Self-interest heatmap |
| 03 | **Strategic Tensions Explorer** | `jio-arogya-tensions-dashboard/` | 4 levers × 5 operating layers — move a lever, see the cascade |

## Source Documents

All under `docs/`:

- **Jio-Bio-Care Proposal Memo** — MDA Note, 20 Apr 2026
- **Strategic Memo** — A Strategic View, 21 Apr 2026
- **Principles, Decisions & Operating Model** — Pre-Investment Validation
- **Data Strategy** — Pre-Investment Validation, Data
- **MDA Verbal Brief** — Speaker prep for MDA-2 pitch
- **Strategic Decision Layers** — JioCare, 90-day sprint
- **Smithian Actor-Chain Analysis** — Self-Interest, Layer by Layer

## Running Locally

Open `index.html` in a browser, or serve with any static server:

```bash
python3 -m http.server 8000
```

## Deployment

Configured for GitHub Pages via Jekyll (`_config.yml` + `_layouts/`). Push to `master` and enable Pages in repo settings.

## Structure

```
index.html                          ← Landing page / table of contents
smithian-dashboard/index.html       ← Dashboard 01
incentive-alignment/index.html      ← Dashboard 02
jio-arogya-tensions-dashboard/      ← Dashboard 03
  ├── index.html
  ├── data.js
  └── README.md
docs/                               ← Source documents (Jekyll-rendered)
_layouts/default.html               ← Jekyll layout for docs
_config.yml                         ← Jekyll config
```
