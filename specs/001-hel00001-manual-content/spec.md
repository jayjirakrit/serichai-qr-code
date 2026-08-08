# Feature Specification: HEL00001 Helmet Manual Page Content

**Feature Branch**: `001-hel00001-manual-content`

**Created**: 2026-08-06

**Status**: Draft

**Input**: User description: "Create a spec for src\app\helmets\HEL00001 page using this as content C:\Users\Lenovo\Desktop\Serichai\source_code\serichai-qr-code\CHP-Helmet-Manual.docx follow same style as current qr code page."

## Clarifications

### Session 2026-08-08

- Q: Should the page adopt the new source's specific product name "หมวกสนาม แบบ 2" and cover the rail-equipped variant "...พร้อมรางติดตั้งอุปกรณ์" in place of the current generic header "หมวกเกราะป้องกันกระสุน"? → A: Adopt the new name as the primary product name; hero image uses the plain (no-rail) variant; the rail-equipped variant is introduced by name with its own photo inside the accessory-mounting section. Single HEL00001 page continues to cover both.
- Q: Should the four critical safety warnings be reduced to three, per the edit-suggestion document's merge of the "check protection level" and "check helmet condition" warnings into one? → A: Adopt the 3-warning version (merge protection-level check and condition check into a single warning); update User Story 1 / FR-003 / SC-002 accordingly.
- Q: (implementation note, applied directly) Supplied real photography from `ballistichelmet/` must be organized the same way sibling pages organize theirs → A: Follow the `_assets` per-section numbered filename convention used by VES00001/VES00002 (e.g. `hel00001-<section>-<n>.jpg`) when real photography is brought into the page; placeholders remain only for the specific steps no photo was supplied for.
- Q: (implementation note, applied directly — 2026-08-08 sync) The as-built page diverged further from the plan above during hands-on editing: the hero image area shows both variant photographs side by side instead of only the base variant (with the rail-equipped photo deferred to the accessory-mounting section), and the donning sequence (3.2) ended up as 3 fully-photographed steps rather than 4 with one placeholder — the rear-dial adjustment is covered only within the sizing sequence (3.3), not repeated in donning. → A: This spec, `data-model.md`, and `quickstart.md` are updated to describe this final as-built layout as the source of truth; no further code change was requested.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Read critical safety warnings before first use (Priority: P1)

A soldier or equipment handler scans the QR code printed on a ballistic helmet and, before doing
anything else, needs to see the handful of safety rules that determine whether the helmet is safe
to wear right now (fit check, combined protection-level/condition inspection, and the rule against
reusing a helmet that has taken a hit).

**Why this priority**: These three warnings are the only content on the page that can prevent
immediate physical harm. Every other section (capability specs, fitting steps, maintenance) is
useful but not safety-critical in the same way — this story alone justifies the page's existence.

**Independent Test**: Open the page and confirm the three warning items are present, legible, and
visually distinct (icon + bold lead-in) near the top of the page, above the detailed usage
sections. Value is delivered even if every other section were missing.

**Acceptance Scenarios**:

1. **Given** a user has just scanned the QR code, **When** the page loads, **Then** a highlighted
   warnings section appears before the detailed usage instructions, containing exactly the three
   warnings from the source manual (fit/position before every use; protection-level and physical
   condition checked together before every use; no-reuse-after-impact).
2. **Given** the warnings section is visible, **When** the user reads warning 3, **Then** the text
   makes clear that a helmet struck by a projectile or fragment, or one with cracks, swelling,
   delamination, or a damaged retention system, must be taken out of service and sent for
   inspection — not simply visually re-checked by the wearer.

---

### User Story 2 - Follow step-by-step fitting and adjustment instructions (Priority: P2)

A user putting the helmet on for the first time (or issuing it to someone else) needs to know how
to don it, size it, adjust the chin strap and rear dial, and confirm it's correctly positioned
before relying on it.

**Why this priority**: Incorrect fit directly undermines the protection the helmet is designed to
provide, even though it's a step below the P1 warnings in urgency (it's about doing it right,
rather than a stop/go safety gate).

**Independent Test**: Follow the on-page instructions for donning, sizing, chin-strap adjustment,
and the pre-use position check using only the page content (no external manual), and confirm each
step is unambiguous and in a workable order.

**Acceptance Scenarios**:

1. **Given** the user is putting the helmet on for the first time, **When** they follow the
   numbered donning steps, **Then** they end with the chin strap fastened and the rear dial
   adjusted snug, and can find the reverse (removal) sequence in the same section.
2. **Given** the user has adjusted the padding, chin strap, and rear dial, **When** they check the
   "before use" checklist, **Then** every item they need to verify (position, padding, all 4 strap
   points, buckle/dial engagement, no rocking motion, no visible damage) is listed in one place.
3. **Given** the user is tempted to remove all interior padding for a looser fit, **When** they
   read the sizing section, **Then** a caution note explains why full padding removal is not
   allowed (unstable fit, discomfort, reduced impact protection).

---

### User Story 3 - Understand protection capability and key features (Priority: P3)

A user (or someone issuing/inspecting the equipment) wants to know what threats the helmet is
rated to stop and what its main functional parts do, before or independent of putting it on.

**Why this priority**: This is reference/confidence-building information — useful for
understanding the equipment, but not required to use it correctly in the moment the way P1/P2
content is.

**Independent Test**: Read only the capability and features sections and confirm a reader can
state which standards the helmet is tested against, which threats it's rated for, and name its
four key functional parts, without reading any other section.

**Acceptance Scenarios**:

1. **Given** the user opens the capability section, **When** they read it, **Then** they can see
   two visually separated boxes — a fragmentation-protection box (MIL-STD-662F, V50 670 m/s) and a
   ballistic-protection box (NIJ STD 0108.01, level IIIA, with the two named supported threats:
   9mm FMJ, .44 Magnum).
2. **Given** the user opens the features section, **When** they scan it, **Then** they can
   identify the four key features (head coverage area, padding system, 4-point chin strap, rear
   dial adjustment) each with a one-line explanation of its purpose.

---

### User Story 4 - Find maintenance, cleaning, and storage guidance (Priority: P4)

A user who has finished using the helmet needs to know how to clean it, what to avoid doing to it,
and how to store it so it stays serviceable until next use.

**Why this priority**: This is after-use care — it affects the helmet's longevity and future
reliability, but has no bearing on safety during the current use, so it ranks last.

**Independent Test**: Read only the maintenance section and confirm a user can clean the shell,
clean the padding/straps, and store the helmet correctly without consulting any other source.

**Acceptance Scenarios**:

1. **Given** the user wants to clean the helmet, **When** they read the cleaning subsection,
   **Then** they find separate instructions for the shell (damp cloth or mild soap, no bleach/
   solvents/alcohol) and for the padding/chin strap (hand-wash, air-dry, no heat/tumble-dry/
   ironing).
2. **Given** the user is done using the helmet, **When** they read the storage guidance, **Then**
   they find the full list of prohibited actions (dropping/impact, heat/sunlight, chemicals,
   modification, use without padding, use while damaged) and the storage checklist (clean and dry
   before storage, shaded/dry/ventilated location, nothing stacked on top, check production/
   expiry date on the product label).

---

### Edge Cases

- Are there any steps without supplied photography? No — every donning and sizing step, plus both
  position-check boxes, has real supplied photography; no placeholder image blocks remain anywhere
  on the published page. The placeholder mechanism already built into the shared
  `StepCard`/`AdjustItem` components (a `string` passed instead of a `StaticImport`) remains
  available for any future step where photography is still pending.
- How does the page handle the two named product variants (base "หมวกสนาม แบบ 2" and the
  accessory-rail-equipped "...พร้อมรางติดตั้งอุปกรณ์") sharing one route? Both variant photographs are
  shown together, side by side, in the page's hero image area; the accessory-mounting section
  introduces the rail-equipped variant by name only, in text, without a separate photo there — it
  does not imply a separate page or SKU.
- How does the page handle the source material's unfilled fragmentation-test blank (the "___ gr"
  FSP fragment-size value)? The published page must omit that unfilled value rather than showing a
  literal blank, the same way it must not display any other unfilled bracketed instruction from
  the source material.
- How does the page handle the source manual's duplicated production/expiry-date reminder
  (appearing both as a storage-checklist bullet and as a standalone closing note)? The published
  page must not show the same reminder twice.
- What happens if the page is viewed on a narrow mobile screen (the primary real-world scenario,
  since it's reached by scanning a QR code with a phone)? All sections, especially the P1 warnings
  and the multi-column step/photo grids, must remain readable without horizontal scrolling.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The page MUST display a header identifying the brand ("CH.PAISARN · HIGH QUALITY
  MILITARY EQUIPMENT"), the document title ("คู่มือการใช้งาน"), and the product name ("หมวกสนาม แบบ 2").
- **FR-002**: The page MUST display a main product image area for the helmet showing the supplied
  base-variant photograph alongside the supplied rail-equipped-variant photograph, side by side;
  for any step or angle where real photography has not been supplied, a clearly-marked placeholder
  MUST be shown instead of broken or missing imagery.
- **FR-003**: The page MUST display exactly the three critical safety warnings from the source
  material (fit/position before every use; protection-level and physical condition checked
  together before every use; no continued use after ballistic impact or severe damage) in a
  visually distinct section that appears before the detailed usage instructions.
- **FR-004**: The page MUST display the protection capability section as two visually separated
  boxes: a fragmentation-protection box (MIL-STD-662F, V50 670 m/s) and a ballistic-protection box
  (NIJ STD 0108.01 level IIIA, with the named supported threats 9 mm FMJ and .44 Magnum Lead
  SWC).
- **FR-005**: The page MUST display the four key features (head coverage, padding system, 4-point
  chin strap, rear dial adjustment), each with a short description of its purpose.
- **FR-006**: The page MUST list the helmet's main components (shell, padding, front/rear chin
  straps, quick-release buckle, rear adjustment dial, accessory rails, front accessory mount,
  hook-and-loop patch area).
- **FR-007**: The page MUST provide numbered, sequential step-by-step instructions for donning the
  helmet, in this order: release the chin-strap quick-release buckle; put the helmet on the head
  and lock the chin-strap quick-release buckle; adjust the side strap length to fit and re-secure
  the quick-release buckle — each of the three steps illustrated with a real supplied photograph —
  and a separate instruction for the reverse removal sequence (loosen the rear dial slightly,
  release the quick-release buckle, remove the helmet carefully). Rear-dial adjustment for snugness
  is not repeated as its own donning step; it is covered by the sizing sequence (FR-008).
- **FR-008**: The page MUST provide numbered, sequential step-by-step instructions for sizing/fit
  adjustment, in this order: choose the correct size by head circumference (Size M / Size L);
  adjust or remove padding as needed; position the helmet (front edge 1–2 cm above the eyebrows,
  balanced on the head) and balance the chin strap on both sides in the same step; adjust the rear
  dial for snugness — including a caution against removing all padding.
- **FR-009**: The page MUST provide a pre-use position check covering two balance checks
  (front-to-back balance: front edge 1–2 cm above the eyebrows, rear covers the nape appropriately;
  left-to-right balance: helmet centered and not tilted, both straps follow the face, interior
  padding contacts the head evenly with no pressure points) plus a consolidated checklist of items
  to verify before use (position, padding, all four straps, buckle/dial engagement, no rocking, no
  visible damage).
- **FR-010**: The page MUST provide guidance for mounting front-facing accessories (e.g.
  night-vision devices) and side-rail accessories, including balance/weight considerations, and
  MUST identify this rail hardware as belonging to the "หมวกสนาม แบบ 2 พร้อมรางติดตั้งอุปกรณ์" variant
  by name. The rail-equipped variant's product photograph is shown alongside the base variant in
  the page's hero image area rather than repeated inside this section.
- **FR-011**: The page MUST list the prohibited actions / things to avoid (drop/impact, heat and
  sun exposure, chemical exposure, modification, use without padding, use while damaged) that
  shorten the helmet's usable life.
- **FR-012**: The page MUST provide separate cleaning instructions for the shell and for the
  padding/chin straps, including explicitly prohibited cleaning methods for each (no bleach/
  solvent/alcohol on the shell; no heat/ironing/direct sun-drying on padding and straps).
- **FR-013**: The page MUST provide storage guidance as a checklist (clean and dry before storing,
  air-dry fully if wet, store in a shaded/dry/ventilated place, nothing stacked on top, avoid
  humidity/heat/direct sun/chemicals) and a single reminder to check the production/expiry date on
  the product label — shown once, not duplicated.
- **FR-014**: The page MUST display the manufacturer's footer contact information (company name,
  address, phone and fax numbers), matching the format used on sibling product pages.
- **FR-015**: The page MUST NOT display any unfilled content placeholder from the source material
  (e.g. a bracketed instruction, or a blank value such as the fragmentation section's "___ gr" FSP
  size) to the end user.
- **FR-016**: The page MUST remain a fully static route with no backend, database, or runtime API
  dependency, consistent with every other product page on this site.
- **FR-017**: The page's visual structure and styling (header card, warning callout, numbered
  content sections with the shared heading style, footer) MUST match the established pattern used
  by this page's existing implementation and its sibling product pages (e.g. VES00001, VES00002),
  including organizing any supplied real photography into the same `_assets` folder convention
  with per-section numbered filenames used by those sibling pages (e.g. `hel00001-<section>-<n>.jpg`,
  mirroring VES00001's `vesXXXXX-<section>-<n>.jpg` pattern).

### Key Entities

- **Critical Warning**: One of the three fixed pre-use safety rules; has a short bold lead-in and a
  fuller explanation.
- **Product Variant**: One of the two named forms of this product — the base helmet ("หมวกสนาม แบบ 2")
  and the accessory-rail-equipped helmet ("...พร้อมรางติดตั้งอุปกรณ์") — sharing all page content.
  Both variants' photographs appear together, side by side, in the page's hero image area; the
  accessory-mounting section introduces the rail-equipped variant by name only, in text, with no
  separate photo there.
- **Protection Capability**: One of two grouped categories (fragmentation protection, ballistic
  protection), each with a named standard (e.g. NIJ STD 0108.01), the protection level it certifies
  (e.g. IIIA), and the list of threats it covers.
- **Key Feature**: A named functional part of the helmet (e.g. rear adjustment dial) with a short
  description of what it does for the wearer.
- **Usage Step**: One numbered instruction within a procedure (donning, sizing); has a sequence
  number and an instruction description, and may reference a supporting image.
- **Position Check Item**: One of the two balance checks (front-to-back, left-to-right) used to
  confirm correct fit before use.
- **Maintenance Item**: Either a prohibited action, a cleaning instruction for a specific part, or
  a storage rule.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A user who scans the helmet's QR code reaches a fully-readable manual page with no
  login, app install, or additional navigation step required.
- **SC-002**: All three critical safety warnings are visible within the first two screen-scrolls on
  a standard mobile phone viewport, ahead of capability/feature/maintenance content.
- **SC-003**: 100% of the content sections present in the source material (the three safety
  warnings, both protection-capability boxes, key features, all five usage subsections — components,
  donning/doffing, sizing, pre-use position check, accessory mounting — all three maintenance
  subsections, footer contact info) are represented on the page.
- **SC-004**: A user with no prior familiarity with this helmet model can correctly describe, using
  only the page content, how to don it, adjust it to fit, and verify it's correctly positioned
  before use.
- **SC-005**: The page displays with no horizontal scrolling and no overlapping or cut-off content
  at both common mobile widths and desktop widths.
- **SC-006**: None of the known source-material inconsistencies are visible to the end user on the
  published page: the unfilled FSP fragment-size blank ("___ gr") in the fragmentation-protection
  box, and the duplicated production/expiry-date reminder.

## Assumptions

- Two content sources now apply, layered together: `CHP-Helmet-Manual.docx` is the base manual, and
  `ballistichelmet\Ballistic helmet manual_edit suggestion.docx` (plus its accompanying numbered
  photos) is a set of reviewed revisions applied on top of it. Where the edit-suggestion document
  changes a section (safety warnings, capability layout, donning sequence, sizing/chin-strap
  sequence, position-check layout, product naming), that revision is treated as the intended final
  content. Sections it does not touch (key features, the components list, all of section 4
  maintenance, and the footer) retain the base manual's content unchanged.
- The helmet's product name and variants are now specified: "หมวกสนาม แบบ 2" (base) and "หมวกสนาม แบบ 2
  พร้อมรางติดตั้งอุปกรณ์" (accessory-rail-equipped). This resolves the earlier open question about an
  unspecified model/variant; both are covered by this single HEL00001 page rather than split into
  separate routes.
- Real product photography is now supplied for every section that displays a photo (hero shots for
  both variants, shown side by side; components; donning; sizing; position check) via
  `ballistichelmet\Pic *.jpg`; no placeholder image blocks remain on the published page. The
  placeholder mechanism already built into the shared `StepCard`/`AdjustItem` components remains
  available for any future step where photography is still pending.
- Content is Thai-language only, consistent with the rest of the site — no localization/i18n is in
  scope.
- No changes to routing, `layout.tsx` metadata, or the SKU folder structure are implied by this
  spec; the page continues to live at `src/app/helmets/HEL00001/page.tsx`.
- Whether this page's locally-duplicated `StepCard`/`AdjustItem`/`WarningCard` components are
  refactored to import the shared versions in `src/components/` is an existing, separately-tracked
  piece of tech debt and is out of scope for this content spec.
