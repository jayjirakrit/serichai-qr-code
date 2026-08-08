# Phase 1 Data Model: HEL00001 Helmet Manual Page Content

**Feature**: `001-hel00001-manual-content` | **Date**: 2026-08-08

This page has no database, API, or runtime data — "data model" here means the static content
entities from `spec.md`'s Key Entities section, and the concrete shape each takes as inline JSX /
component props in `page.tsx`. There are no state transitions; every entity is fixed content
rendered once at build time.

## Critical Warning

Rendered as `<li>` items inside the warnings `<section>` (not a component — matches current
inline pattern). Exactly 3 instances (see Clarifications).

| Field | Type | Notes |
|---|---|---|
| `order` | `1 \| 2 \| 3` | Fixed display order |
| `leadIn` | Thai text (bold) | Short imperative, e.g. "ปรับหมวกให้กระชับและอยู่ในตำแหน่งที่ถูกต้องก่อนใช้งานทุกครั้ง" |
| `body` | Thai text | Fuller explanation following the lead-in |

Fixed instances:
1. Fit/position before every use.
2. Protection-level check **and** physical-condition check, merged into one warning.
3. No continued use after ballistic impact or severe damage.

## Product Variant

Not a rendered list — a naming/imagery concern applied at two specific points in the page.

| Field | Type | Notes |
|---|---|---|
| `name` | Thai text | "หมวกสนาม แบบ 2" (base) / "หมวกสนาม แบบ 2 พร้อมรางติดตั้งอุปกรณ์" (rail-equipped) |
| `heroImage` | `StaticImport` | Base variant — left image in the 2-up hero grid |
| `variantImage` | `StaticImport` | Rail-equipped variant — right image in the same hero grid; **not** repeated in the accessory-mounting section, which references this variant by name only |

## Protection Capability

Two fixed instances, each rendered as its own bordered box (mirrors `VES00001`'s two-box
capability layout — plain `<div>`, not a shared component).

| Field | Type | Notes |
|---|---|---|
| `category` | Thai text | "การป้องกันสะเก็ด" \| "การป้องกันกระสุน" |
| `standard` | text | e.g. "MIL-STD-662F", "NIJ STD 0108.01" |
| `level` | text? | e.g. "IIIA" (ballistic box only) |
| `metric` | text? | e.g. "V50 670 m/s" (fragmentation box only) |
| `threats` | text[]? | e.g. ["9 mm FMJ", ".44 Magnum Lead SWC"] (ballistic box only) |

Note: the source's unfilled `___ gr` FSP fragment-size value has no field here — FR-015 requires
it be omitted entirely, not rendered as a blank.

## Key Feature

Unchanged from current implementation — 4 fixed instances, each an icon + title + one-line
description (plain `<div>` grid, not a shared component).

| Field | Type | Notes |
|---|---|---|
| `icon` | emoji | 🛡 / 🧽 / 🪢 / ⚙ |
| `title` | Thai text | e.g. "ระบบปรับกระชับด้านหลัง" |
| `description` | Thai text | One line |

## Usage Step

Rendered via the shared `StepCard` (donning section) or `AdjustItem` (sizing section) components.

| Field | Type | Notes |
|---|---|---|
| `number` / `title` | text | `StepCard` takes `number: string`; `AdjustItem` takes `title: string` (its own leading number baked into the title, e.g. "1. เลือกขนาดที่เหมาะสม") |
| `desc` | Thai text | Instruction body |
| `image` | `string \| StaticImport` | A supplied photo, or a placeholder string when none was supplied (`StepCard`'s `imgPlaceholder` / `AdjustItem`'s `img`) |

Fixed sequences:
- **Donning** (`StepCard`, 3 steps, all photographed — no placeholder): release buckle
  (`hel00001-3.2-1.jpg`) → put on head + lock buckle (merged, `hel00001-3.2-2.jpg`) → adjust side
  strap length + re-secure buckle (`hel00001-3.2-4.jpg`). Rear-dial adjustment is not repeated here
  — it's covered by the sizing sequence's step 4.
- **Sizing** (`AdjustItem`, 4 steps): choose size → adjust/remove padding → position + balance
  chin strap (merged, photographed) → adjust rear dial.

## Position Check Item

Two fixed instances (was four before the edit-suggestion merge), rendered as a 2-column grid of
bordered boxes with a real photo each (mirrors `VES00001`'s 3.4 section — plain `<div>` +
`<Image fill>`, not a shared component).

| Field | Type | Notes |
|---|---|---|
| `axis` | text | "ด้านหน้า–ด้านหลัง" (front-to-back) \| "ด้านซ้าย–ขวา" (left-to-right) |
| `image` | `StaticImport` | Supplied photo |
| `description` | Thai text | What "balanced" looks like for that axis |

## Maintenance Item

Unchanged from current implementation.

| Field | Type | Notes |
|---|---|---|
| `kind` | `"prohibited" \| "cleaning" \| "storage"` | Determines which subsection it renders in |
| `title` | Thai text | `WarningCard`'s `title` prop (prohibited items only) |
| `description` | Thai text | Body text |

## Relationships

```
Page
├── Hero image area                → Product Variant base + rail-equipped photos, side by side
├── 3× Critical Warning            (fixed order, before usage sections)
├── 2× Protection Capability box   (fragmentation, ballistic)
├── 4× Key Feature
├── Components list (static text, unchanged)
├── 3× Usage Step (donning)        → StepCard, all photographed, no placeholder
├── 4× Usage Step (sizing)         → AdjustItem
├── 2× Position Check Item         → front-back, left-right
├── Accessory mounting guidance    → references Product Variant (rail-equipped) by name only, no photo
└── Maintenance Items              → 6 prohibited (WarningCard) + 2 cleaning + 5 storage (unchanged)
```

No entity has a lifecycle or persisted state; this table exists purely to keep `page.tsx`
consistent with `spec.md` while writing `tasks.md`.
