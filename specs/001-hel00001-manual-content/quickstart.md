# Quickstart: Validate HEL00001 Helmet Manual Page Content

**Feature**: `001-hel00001-manual-content` | **Date**: 2026-08-08

This is a content-only change to an existing static route — no build/environment setup beyond
what the repo already requires (see root `CLAUDE.md` → Commands). This guide is the manual
validation pass for `spec.md`'s acceptance scenarios and success criteria; there is no automated
test suite (Constitution → Development Workflow).

## Prerequisites

- Dependencies installed: `npm install` (only needed once).
- New photos copied into `src/app/helmets/HEL00001/_assets/`, named per `data-model.md` /
  `research.md`'s convention (`hel00001-<section>-<n>.jpg`), sourced from
  `ballistichelmet\Pic *.jpg`.

## Run

```bash
npm run dev
```

Open `http://localhost:3000/helmets/HEL00001`.

## Validation checklist (maps to spec.md Acceptance Scenarios / Success Criteria)

1. **Header & identity** (FR-001) — page shows "CH.PAISARN · HIGH QUALITY MILITARY EQUIPMENT",
   "คู่มือการใช้งาน", and product name "หมวกสนาม แบบ 2".
2. **Hero image area** (FR-002) — both the base-variant and rail-equipped-variant photos render
   side by side (no broken image, no leftover placeholder text).
3. **Safety warnings, US1** (FR-003, SC-002) — exactly 3 warning items, above the usage sections,
   visible within the first two mobile-viewport scrolls (use browser devtools device toolbar at
   ~375px width). Warning 3's text makes clear a struck/damaged helmet must be taken out of
   service, not just visually re-checked.
4. **Capability boxes, US3** (FR-004) — two separate boxes: fragmentation (MIL-STD-662F, V50 670
   m/s — no stray "___ gr" blank) and ballistic (NIJ STD 0108.01 IIIA, 9mm FMJ, .44 Magnum).
5. **Features, US3** (FR-005) — 4 features each with icon + title + one-line description.
6. **Components list** (FR-006) — unchanged bullet list, still present under 3.1.
7. **Donning sequence, US2** (FR-007) — 3 steps in order (release buckle → put on + lock buckle →
   adjust side strap length + re-secure buckle), each with a real supplied photo (no placeholder
   image remains in this section); reverse/doffing note still present.
8. **Sizing sequence, US2** (FR-008) — 4 steps in order, ending with the merged
   position+chin-strap-balance step; padding-removal caution note (`WarningCard`) still present.
9. **Pre-use position check, US2** (FR-009) — 2 boxes (front-to-back, left-to-right balance),
   each with a real photo; the full pre-use checklist (6 items) still present underneath.
10. **Accessory mounting** (FR-010) — front/side accessory guidance present; rail-equipped variant
    named ("...พร้อมรางติดตั้งอุปกรณ์") in text only (its reference photo appears earlier in the hero
    area, not duplicated in this section), not implying a separate page.
11. **Maintenance, US4** (FR-011–FR-013) — prohibited-actions grid (6 `WarningCard`s), shell vs.
    padding/strap cleaning instructions, storage checklist with exactly one expiry-date reminder
    (not duplicated at the bottom — SC-006).
12. **Footer** (FR-014) — company name, address, phone/fax, unchanged.
13. **No unfilled placeholders** (FR-015, SC-006) — visually scan the page for any literal
    bracketed text or blank value; there should be none.
14. **Responsive check** (SC-005) — resize/devtools-toggle between a common mobile width (~375px)
    and a desktop width (~1280px); no horizontal scroll, no overlapping/cut-off content at either.

## Build & lint gate (Constitution → Development Workflow)

```bash
npm run lint
npm run build
```

Both must succeed with no errors before the change is considered complete.
