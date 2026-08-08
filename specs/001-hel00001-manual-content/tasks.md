---

description: "Task list for HEL00001 Helmet Manual Page Content"
---

# Tasks: HEL00001 Helmet Manual Page Content

**Input**: Design documents from `/specs/001-hel00001-manual-content/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: Not requested — this repository has no test suite (Constitution → Development Workflow); validation is `npm run lint` / `npm run build` / manual `quickstart.md` walkthrough only.

**Organization**: Tasks are grouped by user story (spec.md priorities P1–P4) for traceability and independent testability. **Important deviation from the usual parallel guidance**: this feature is almost entirely a single-file change (`src/app/helmets/HEL00001/page.tsx`), so tasks are consolidated by section/phase rather than split per micro-edit, and are NOT safely parallelizable across stories — see Notes at the end.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1–US4)
- Every task includes the exact file path

## Path Conventions

Single Next.js App Router project. All implementation happens in:
- `src/app/helmets/HEL00001/page.tsx` (the route)
- `src/app/helmets/HEL00001/_assets/` (new images)

---

## Phase 1: Setup

- [X] T001 Create `src/app/helmets/HEL00001/_assets/` and copy the following files into it from `ballistichelmet/`, renaming each to match the sibling-page (`VES00001`) `_assets` convention:
  - `Pic 0-1.jpg` → `hel00001-0-0.jpg` (base-variant hero)
  - `Pic 0-2.jpg` → `hel00001-0-1.jpg` (rail-equipped variant reference)
  - `Pic 3.1-1.jpg` → `hel00001-3.1-1.jpg`
  - `Pic 3.2-1.jpg` → `hel00001-3.2-1.jpg`
  - `Pic 3.2-2.jpg` → `hel00001-3.2-2.jpg`
  - `Pic 3.2-4.jpg` → `hel00001-3.2-4.jpg`
  - `Pic 3.3-1.jpg` → `hel00001-3.3-1.jpg`
  - `Pic 3.3-2.jpg` → `hel00001-3.3-2.jpg`
  - `Pic 3.3-3.jpg` → `hel00001-3.3-3.jpg`
  - `Pic 3.3-4.jpg` → `hel00001-3.3-4.jpg`
  - `Pic 3.5-1.jpg` → `hel00001-3.4-1.jpg` (position check, front-back — renumbered)
  - `Pic 3.5-2.jpg` → `hel00001-3.4-2.jpg` (position check, left-right — renumbered)

**Checkpoint**: `_assets/` contains all 12 renamed photos; nothing in `page.tsx` references them yet.

---

## Phase 2: Foundational (Blocking Prerequisites)

**⚠️ CRITICAL**: Complete before starting any user-story phase below — all of them edit the same file.

- [ ] T002 In `src/app/helmets/HEL00001/page.tsx`: add static `import` statements for all 12 images copied in T001 (mirror the import block at the top of `src/app/vests/VES00001/page.tsx`); update the header `<h2>` product name from "หมวกเกราะป้องกันกระสุน" to "หมวกสนาม แบบ 2" (FR-001); and replace the hero-image placeholder `<div>` (currently "🖼️ ภาพหมวกเกราะป้องกันกระสุน...") with a real `<Image fill style={{objectFit:"contain"}}>` using the `hel00001-0-0.jpg` import, matching `VES00001`'s hero-image block exactly (FR-002) — depends on T001

**Checkpoint**: Page loads with correct product name and a real hero photo; ready for section-level story work.

---

## Phase 3: User Story 1 - Read critical safety warnings before first use (Priority: P1) 🎯 MVP

**Goal**: Exactly 3 critical, visually distinct safety warnings appear before the detailed usage sections.

**Independent Test**: Open the page; confirm 3 warning items (not 4), legible and visually distinct, above all usage sections.

- [X] T003 [US1] In `src/app/helmets/HEL00001/page.tsx`, rewrite the "⏱ สิ่งสำคัญที่ต้องรู้ก่อนใช้งาน" `<ul>` from 4 `<li>` items to exactly 3: (1) fit/position unchanged, (2) merge the old items 2 ("ตรวจสอบระดับและขอบเขตการป้องกัน...") and 3 ("ตรวจสอบสภาพหมวก...") into one combined protection-level + condition warning, (3) no-continued-use-after-impact unchanged (renumbered from 4) — per FR-003 / Clarifications

**Checkpoint**: User Story 1 fully functional and independently testable — 3 warnings, correct content, correct position on page.

---

## Phase 4: User Story 2 - Follow step-by-step fitting and adjustment instructions (Priority: P2)

**Goal**: Donning, sizing, and pre-use position-check instructions reflect the merged/renumbered sequence and use real photography wherever supplied.

**Independent Test**: Using only the page content, follow donning → sizing → pre-use position check and confirm each step is unambiguous, correctly ordered, and matches spec.md FR-007/FR-008/FR-009/FR-010.

- [X] T004 [US2] In `src/app/helmets/HEL00001/page.tsx`, rewrite "3.2 วิธีสวมใส่และถอด" and "3.3 วิธีปรับขนาดให้พอดีกับผู้สวมใส่", and remove the now-redundant standalone "3.4 วิธีปรับสายรัดคาง" section entirely:
  - **3.2** (`StepCard` grid, 5→4 steps): (1) release chin-strap quick-release buckle → `hel00001-3.2-1.jpg`; (2) put helmet on head and lock the quick-release buckle (merged step) → `hel00001-3.2-2.jpg`; (3) adjust the side strap length to fit → keep as a text placeholder string (no photo supplied); (4) adjust rear dial for snugness → `hel00001-3.2-4.jpg`. Leave the "วิธีถอด" (doffing) note unchanged. Per FR-007
  - **3.3** (`AdjustItem` list, 5→4 steps): (1) choose correct size by head circumference → `hel00001-3.3-1.jpg`; (2) adjust/remove padding → `hel00001-3.3-2.jpg`; (3) merge old steps "ปรับสายรัดคางให้สมดุล" + "จัดตำแหน่งหมวก" into one combined position+chin-strap-balance step → `hel00001-3.3-3.jpg`; (4) adjust rear dial → `hel00001-3.3-4.jpg`. Keep the padding-removal `WarningCard` caution unchanged. Per FR-008
  - **Delete** the entire "3.4 วิธีปรับสายรัดคาง" `<h4>`/paragraph/diagram-placeholder/`StepCard` grid/note block — its content is now folded into the 3.3 merged step 3 — per spec.md Assumptions ("เอาออก หัวข้อ 3.4")
  - depends on T002
- [X] T005 [US2] In `src/app/helmets/HEL00001/page.tsx`, renumber and rewrite the position-check and accessory-mounting sections:
  - Renumber "3.5 ตรวจสอบตำแหน่งก่อนใช้งาน" → "3.4", and replace its 4-box grid (ด้านหน้า/ด้านข้าง/ด้านหลัง/แผ่นรองภายใน) with a 2-box grid: "สมดุลด้านหน้า–ด้านหลัง" (front edge 1–2cm above eyebrows, rear covers nape, rear dial snug) using `hel00001-3.4-1.jpg`, and "สมดุลด้านซ้าย–ขวา" (centered, not tilted, straps follow face, padding contacts evenly) using `hel00001-3.4-2.jpg` — use `<Image fill style={{objectFit:"contain"}}>` inside each box exactly like `VES00001`'s 3.4 section. Keep the unchanged 7-item "✅ ก่อนใช้งาน ตรวจสอบให้ครบ" checklist below it. Per FR-009
  - Renumber "3.6 การติดตั้งอุปกรณ์เสริม" → "3.5"; keep the existing front-accessory and side-rail guidance text unchanged, and add that this rail hardware belongs to the "หมวกสนาม แบบ 2 พร้อมรางติดตั้งอุปกรณ์" variant, showing the `hel00001-0-1.jpg` reference photo alongside it. Per FR-010
  - depends on T004 (must remove the old 3.4 before renumbering the position-check section to 3.4)

**Checkpoint**: User Stories 1 AND 2 both work independently — donning, sizing, position check, and accessory mounting all correct and self-consistent.

---

## Phase 5: User Story 3 - Understand protection capability and key features (Priority: P3)

**Goal**: Capability content is presented as two separated boxes with no unfilled blanks; components list uses a real photo.

**Independent Test**: Reading only the capability and components/features sections, confirm the two protection-capability boxes, the four features, and the components list are all present and correct, independent of any other section.

- [X] T006 [US3] In `src/app/helmets/HEL00001/page.tsx`: restructure "1. ขีดความสามารถในการป้องกัน" from one flat box into two separate boxes — a fragmentation-protection box ("การป้องกันสะเก็ด": MIL-STD-662F, V50 670 m/s — omit the source's unfilled "___ gr" FSP value entirely) and a ballistic-protection box ("การป้องกันกระสุน": NIJ STD 0108.01 level IIIA, 9mm FMJ FN, .44 Magnum Lead SWC), matching `VES00001`'s two-box capability layout (FR-004 / FR-015); and replace the "3.1 ส่วนประกอบของหมวก" placeholder diagram `<div>` ("🖼️ ภาพหมวกพร้อม callout...") with a real `<Image fill style={{objectFit:"contain"}}>` using `hel00001-3.1-1.jpg`, leaving the components bullet list unchanged (FR-006) — depends on T002

**Checkpoint**: All three of User Stories 1, 2, and 3 independently functional.

---

## Phase 6: User Story 4 - Find maintenance, cleaning, and storage guidance (Priority: P4)

**Goal**: Confirm maintenance content (untouched by the edit-suggestion source) still fully satisfies spec.md.

**Independent Test**: Reading only the maintenance section, confirm shell/padding cleaning instructions, the prohibited-actions list, and the storage checklist are all present with exactly one expiry-date reminder.

- [X] T007 [US4] Review section "4. การดูแลรักษาและข้อควรระวัง" in `src/app/helmets/HEL00001/page.tsx` against spec.md FR-011–FR-014: confirm the 6-item prohibited-actions grid, the shell vs. padding/strap cleaning split, the 5-item storage checklist, and the single (non-duplicated) "📅 ตรวจสอบวันที่ผลิตและวันหมดอายุ..." reminder are already correct. This section is untouched by the `ballistichelmet` source — no code change is expected; only edit if the review finds a discrepancy.

**Checkpoint**: All four user stories independently functional — feature-complete per spec.md.

---

## Phase 7: Polish & Cross-Cutting Concerns

- [X] T008 In `src/app/helmets/HEL00001/page.tsx`, review every `<Image>`/`imgPlaceholder`/`img` prop added in T002, T004, T005, T006 and ensure each has a specific, descriptive `alt` text (not a generic label) — depends on T002, T004, T005, T006
- [X] T009 Run `npm run lint` then `npm run build` from the repo root and fix any reported issues from either — depends on T008
- [X] T010 Run the full `specs/001-hel00001-manual-content/quickstart.md` validation checklist in `npm run dev` at both mobile (~375px) and desktop (~1280px) widths — depends on T009

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately.
- **Foundational (Phase 2)**: Depends on Setup (T001) — BLOCKS all user stories.
- **User Stories (Phase 3–6)**: All depend on Foundational (Phase 2) completion. Logically independent of each other (each owns a disjoint section of the page), but see the file-conflict note below.
- **Polish (Phase 7)**: Depends on all four user-story phases being complete.

### User Story Dependencies

- **US1 (P1)**: No dependency on US2/US3/US4.
- **US2 (P2)**: No dependency on US1/US3/US4. Internally, T005 depends on T004 (must remove the old 3.4 section before the position-check section is renumbered to 3.4).
- **US3 (P3)**: No dependency on US1/US2/US4.
- **US4 (P4)**: No dependency on US1/US2/US3 (review-only task).

### Parallel Opportunities

This feature is unusually low on real parallelism: **T002 through T008 all edit the same file**, `src/app/helmets/HEL00001/page.tsx`. Two agents editing that file concurrently will conflict regardless of which "story" they're nominally assigned to. Treat the user-story grouping above as an aid to **reviewing and testing sections independently**, not as a signal to parallelize the edits themselves.

- T001 (asset copy) has no [P] peer — it's the only Setup task, and it must finish before T002.
- Within Phase 7, T009's `lint`/`build` and T010's manual pass must run strictly in order — each gates the next.
- If a second person/agent is available, the only safe concurrent work is: one person doing the page.tsx edits (T002–T008) while another double-checks the `ballistichelmet` source material against `spec.md` / prepares T010's validation pass — not literal simultaneous file edits.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 (Setup) and Phase 2 (Foundational).
2. Complete Phase 3 (US1 — warnings).
3. **STOP and VALIDATE**: reload the page, confirm exactly 3 warnings, correctly worded, above the usage sections.
4. This alone is a shippable improvement (matches the P1 rationale in spec.md — warnings are the page's safety-critical core).

### Incremental Delivery

1. Setup + Foundational → header/hero correct.
2. Add US1 → validate → (optional) commit.
3. Add US2 → validate donning/sizing/position-check/accessory sections → (optional) commit.
4. Add US3 → validate capability boxes + components photo → (optional) commit.
5. Add US4 → confirm maintenance section needs no changes → (optional) commit.
6. Polish (Phase 7) → lint, build, full quickstart pass → done.

---

## Notes

- [P] is deliberately unused above — see "Parallel Opportunities."
- [Story] labels map tasks to spec.md's US1–US4 for traceability, per the required format.
- Commit after each phase checkpoint, not after every individual task.
- Avoid: editing `page.tsx` out of order within Phase 4 (T004 → T005 has a real ordering dependency), and skipping T001 before referencing any `hel00001-*.jpg` import.

---

## Post-Implementation Note (2026-08-08 sync)

After all tasks above were completed, `page.tsx` was hand-edited further, so the as-built page now
diverges from what T002/T005 describe:

- **Hero image (T002)**: both `hel00001-0-0.jpg` (base) and `hel00001-0-1.jpg` (rail-equipped) are
  shown side by side in the hero grid, not just the base-variant photo.
- **Accessory mounting (T005)**: section 3.5 references the rail-equipped variant by name only —
  `hel00001-0-1.jpg` is not rendered there (its only appearance is in the hero grid above).
- **Donning sequence (T004)**: ended up as 3 fully-photographed `StepCard`s (release → put on +
  lock → adjust side strap + re-lock), not 4 with a placeholder for "adjust side strap length."
  There is no separate rear-dial donning step; rear-dial adjustment is only in the sizing
  sequence (3.3, unchanged from T004).

`spec.md`, `data-model.md`, `plan.md`, and `quickstart.md` were updated to describe this final
as-built state as the source of truth. Task checkboxes above are left as a historical record of
what was implemented at the time and are not being retroactively rewritten.
