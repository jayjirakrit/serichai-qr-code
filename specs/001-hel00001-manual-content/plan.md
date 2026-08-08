# Implementation Plan: HEL00001 Helmet Manual Page Content

**Branch**: `001-hel00001-manual-content` | **Date**: 2026-08-08 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-hel00001-manual-content/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

Update the existing `src/app/helmets/HEL00001/page.tsx` route with the reviewed helmet-manual
content and photography from `ballistichelmet/` (layered on top of the base
`CHP-Helmet-Manual.docx`): rename the product to "หมวกสนาม แบบ 2" / "...พร้อมรางติดตั้งอุปกรณ์",
reduce the P1 safety warnings from 4 to 3 (merged), split the capability section into two boxes,
restructure the donning and sizing sequences (merged steps, one standalone chin-strap section
removed), collapse the pre-use position check from 4 diagrams to 2, and replace placeholder image
blocks with real supplied photography wherever available. This is a content/JSX-only change to one
already-existing static route — no new route, no shared-component changes, no backend of any kind.

## Technical Context

**Language/Version**: TypeScript 5 (per `tsconfig.json`), React 19.2.4, Next.js 16.2.5 (App Router)

**Primary Dependencies**: Next.js (`next/image`, `next/link` not needed here), React, Tailwind CSS v4 (`@tailwindcss/postcss`, no `tailwind.config`)

**Storage**: N/A — fully static route, content and images are build-time imports, no database/API

**Testing**: N/A — no test suite in this repository; validation is `npm run lint`, `npm run build`, and manual spot-check per `quickstart.md` (Constitution → Development Workflow)

**Target Platform**: Web, mobile-first (primary access path is scanning a printed QR code with a phone), also desktop

**Project Type**: Single Next.js web app — this feature touches one existing route within it

**Performance Goals**: No explicit numeric targets; implicit goal is to stay consistent with sibling static pages (fast initial paint, Next.js Image optimization for all photography)

**Constraints**: Static-only (Constitution I) — no server-side data fetching, no runtime API dependency; must match established sibling-page structure/styling/asset conventions (Constitution IV); Thai-language content only

**Scale/Scope**: One route (`src/app/helmets/HEL00001/page.tsx`) + its `_assets/` folder; ~13 photos to bring in from `ballistichelmet/`; no new routes; no `README.md` change (HEL00001 is already listed)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Check | Result |
|---|---|---|
| I. Static-Only Architecture | Change is confined to JSX/content inside an existing static `page.tsx`; no `fetch`, server actions, or runtime API introduced | **PASS** |
| II. SKU Routing Is the Product Catalog | No new route created; HEL00001 already exists in `README.md`'s product list; folder shape (`layout.tsx`/`page.tsx`/`_assets/`) unchanged | **PASS** |
| III. Component Reuse Over Duplication | Page already imports the shared `StepCard`/`AdjustItem`/`WarningCard` (verified by reading the current file — the "local duplicate" note in CLAUDE.md/constitution describes a pre-`244b7d4` state); plan continues using these three, and reuses `VES00001`'s existing inline two-box pattern for the new capability/position-check layouts rather than inventing new components | **PASS** |
| IV. Match Existing File Conventions | Page already uses Tailwind arbitrary-value classes (`text-[#23425D]` etc.) and the same brand hex values; plan continues that convention, and asset filenames will follow the same `_assets`/`<sku>-<section>-<n>.jpg` pattern as `VES00001`/`VES00002` (also satisfies the user's explicit instruction) | **PASS** |
| V. Verify Next.js APIs Before Use (NON-NEGOTIABLE) | Checked `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md` for this repo's pinned Next.js 16.2.5 — static-import + `fill` behavior for `next/image` is current and undeprecated (see `research.md`) | **PASS** |

No violations — Complexity Tracking table is not needed.

## Project Structure

### Documentation (this feature)

```text
specs/001-hel00001-manual-content/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md         # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Skipped — see "Contracts" note below
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

**Contracts**: skipped. This feature has no external interface to document — it's a static
content page with no API, no CLI, and no new route (the "interface" is the existing URL
`/helmets/HEL00001`, already documented in `README.md`'s SKU table). Nothing here changes that
contract.

### Source Code (repository root)

```text
src/
├── app/
│   └── helmets/
│       └── HEL00001/
│           ├── layout.tsx        # unchanged — route metadata only
│           ├── page.tsx          # MODIFIED — content/structure per spec.md
│           └── _assets/          # MODIFIED — new photos added here
│               ├── hel00001-0-0.jpg      # base variant hero (was Pic 0-1.jpg)
│               ├── hel00001-0-1.jpg      # rail-equipped variant reference (was Pic 0-2.jpg)
│               ├── hel00001-3.1-1.jpg    # components interior photo (was Pic 3.1-1.jpg)
│               ├── hel00001-3.2-1.jpg    # donning step 1 (was Pic 3.2-1.jpg)
│               ├── hel00001-3.2-2.jpg    # donning step 2, merged (was Pic 3.2-2.jpg)
│               ├── hel00001-3.2-4.jpg    # donning step 3, merged: adjust side strap + re-lock buckle (was Pic 3.2-4.jpg; there is no separate rear-dial donning step)
│               ├── hel00001-3.3-1.jpg    # sizing step 1 (was Pic 3.3-1.jpg)
│               ├── hel00001-3.3-2.jpg    # sizing step 2 (was Pic 3.3-2.jpg)
│               ├── hel00001-3.3-3.jpg    # sizing step 3, merged (was Pic 3.3-3.jpg)
│               ├── hel00001-3.3-4.jpg    # sizing step 4 (was Pic 3.3-4.jpg)
│               ├── hel00001-3.4-1.jpg    # position check: front-back balance (was Pic 3.5-1.jpg)
│               └── hel00001-3.4-2.jpg    # position check: left-right balance (was Pic 3.5-2.jpg)
├── components/
│   ├── StepCard.tsx       # unchanged — reused as-is
│   ├── AdjustItem.tsx     # unchanged — reused as-is
│   └── WarningCard.tsx    # unchanged — reused as-is
README.md                  # unchanged — HEL00001 already listed, no routing change
```

**Structure Decision**: No structural change to the repository. This feature is a content update
to one file (`page.tsx`) plus its co-located `_assets/` folder, following the exact SKU-page shape
every other product route already uses (Constitution Principle II). No new files outside that one
route's folder are needed.

## Complexity Tracking

*No violations — table not applicable.*
