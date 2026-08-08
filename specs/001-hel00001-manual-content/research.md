# Phase 0 Research: HEL00001 Helmet Manual Page Content

**Feature**: `001-hel00001-manual-content` | **Date**: 2026-08-08

All Technical Context fields were resolvable directly from the existing repository (this is a
content update to an existing route, not a new subsystem), so no external research was required.
This document records the decisions and the evidence behind them, in place of open
"NEEDS CLARIFICATION" items.

## Decision: Image rendering approach (static import + `next/image` `fill`)

- **Decision**: Continue using the existing pattern — statically `import` each JPEG from
  `_assets/` at the top of `page.tsx`, then render it via the shared `StepCard`/`AdjustItem`
  components (which already accept `string | StaticImport`) or, for the hero image and the
  two-box grids (capability, position-check), a plain `<div className="relative ...">` wrapping
  `<Image fill style={{ objectFit: ... }} sizes="..." />`, exactly as `VES00001/page.tsx` already
  does for its own hero image and its 3.4 position-check boxes.
- **Rationale**: Verified against `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md`
  (Next.js 16.2.5, this repo's pinned version, per Constitution Principle V) — statically-imported
  images still auto-provide `width`/`height`/`blurDataURL`, and `fill` is still the documented way
  to have an image fill a sized parent container. Nothing in the current docs deprecates or changes
  this API. It is also already proven working in this exact codebase (`VES00001/page.tsx`,
  `StepCard.tsx`, `AdjustItem.tsx`), so there is no new risk surface.
- **Alternatives considered**: Dynamic `import()` per filename — rejected, unnecessary for a fixed,
  known set of ~13 images; plain `<img>` — rejected, loses Next.js's automatic sizing/layout-shift
  prevention and would diverge from every sibling page's convention (Constitution Principle IV).

## Decision: Component reuse — no new shared components needed

- **Decision**: Build the updated page using only the three existing shared components
  (`StepCard`, `AdjustItem`, `WarningCard` from `src/components/`) plus the plain-div/`Image`
  pattern already used inline on `VES00001/page.tsx` for hero images and multi-box grids. No new
  component is introduced.
- **Rationale**: Reading the current `src/app/helmets/HEL00001/page.tsx`, it already imports the
  three shared components (`@/components/StepCard`, `@/components/AdjustItem`,
  `@/components/WarningCard`) — the local-duplicate-components note in `CLAUDE.md` /
  the constitution (Principle III) describes a state that predates the most recent HEL00001 edits
  (see `244b7d4 [IMP][HELMETS] update HEL00001 page` in git history) and no longer matches the
  file on disk. The new two-box capability layout and two-box position-check layout are both
  already-established patterns on `VES00001/page.tsx` (its "1. ขีดความสามารถในการป้องกัน" and "3.4
  ตรวจสอบตำแหน่งก่อนใช้งาน" sections), so this feature reuses that same inline pattern rather than
  inventing a new one.
- **Alternatives considered**: Extracting a new shared `TwoBoxGrid`/`CapabilityBox` component —
  rejected as premature abstraction; the pattern only repeats twice within this one page, and the
  existing precedent (VES00001) implements it inline, so matching that precedent (Constitution
  Principle IV) takes priority over introducing a new abstraction the rest of the codebase doesn't
  use yet.

## Decision: Source-content precedence

- **Decision**: `ballistichelmet\Ballistic helmet manual_edit suggestion.docx` (plus its numbered
  photos) is treated as a revision layered on top of the base `CHP-Helmet-Manual.docx`, per the
  spec's Assumptions and Clarifications sections. Content the edit-suggestion document does not
  touch (features section, components list, all of maintenance section 4, footer) is carried
  forward unchanged from the base manual / the current implementation.
- **Rationale**: Already resolved during `/speckit-clarify` with the user (two targeted questions:
  product naming/variant scope, and the 4→3 warning-count merge). No further ambiguity remains
  that would block planning.
- **Alternatives considered**: N/A — this was a clarification-session output, not a new decision
  point at planning time.

## Decision: Asset naming convention

- **Decision**: New images go into `src/app/helmets/HEL00001/_assets/` named
  `hel00001-<section>-<n>.jpg` (e.g. `hel00001-0-0.jpg` for the base-variant hero shot,
  `hel00001-0-1.jpg` for the rail-equipped variant photo, `hel00001-3.1-1.jpg`,
  `hel00001-3.2-1.jpg`, etc.), mirroring `VES00001/_assets`'s `vesXXXXX-<section>-<n>.jpg`
  pattern exactly (per FR-017 and the user's explicit instruction that imagery follow the same
  format as the existing sibling pages).
- **Rationale**: This is the only naming convention actually in use across sibling SKU pages
  (`VES00001`, `VES00002`); inventing a different one would violate Constitution Principle IV.
- **Alternatives considered**: Keeping the source filenames as delivered (`Pic 0-1.jpg`, spaces and
  all) — rejected: spaces in import paths are workable but inconsistent with every sibling page,
  and the `Pic X-Y` numbering doesn't by itself indicate which manual section/step it belongs to
  the way `hel00001-3.2-2.jpg` does.

## Open items carried into Phase 1 (not blocking)

- One donning step ("adjust side strap length" — no supplied photo) will use the same
  string-placeholder branch already built into `StepCard` (`imgPlaceholder` as a `string` renders
  a text placeholder instead of an `<Image>`), so no new placeholder mechanism is needed.
