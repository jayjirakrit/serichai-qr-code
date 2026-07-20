# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

A Next.js site that serves as the landing page for QR codes printed on Ch.Paisarn (ช.ไพศาล) military equipment (bulletproof vests, helmets). Scanning a product's QR code opens its route here, showing a Thai-language usage/maintenance manual for that specific SKU. There is no backend, database, or API — every page is static content.

The canonical list of product SKUs (and their routes) is kept in `README.md` under "Serichai Product Code".

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # run a production build
npm run lint     # eslint (flat config, eslint.config.mjs)
```

There is no test suite configured.

## Architecture

**Routing = product catalog.** Each product SKU is its own route under `src/app/<category>/<SKU>/`, e.g. `src/app/vests/VES00001/`, `src/app/vests/VES00002/`, `src/app/helmets/HEL00001/`. Every SKU folder follows the same shape:

- `layout.tsx` — sets `metadata` (title/description) for the route; otherwise a passthrough (`<>{children}</>`).
- `page.tsx` — the full manual page (header, product image, numbered sections for capabilities/features/usage/maintenance).
- `_assets/` — the product's photos, imported directly into `page.tsx` (underscore prefix excludes the folder from routing).

To add a new product page, copy this pattern (route folder + `layout.tsx` + `page.tsx` + `_assets/`) and add the SKU to `README.md`'s product list.

**Shared vs. inline components.** `src/components/` (`StepCard`, `AdjustItem`, `WarningCard`) are the canonical presentational building blocks used by the vest pages — `StepCard`/`AdjustItem` accept either an imported image (`StaticImport`) or a placeholder string. `src/app/helmets/HEL00001/page.tsx` currently defines its own local copies of these same components inline instead of importing the shared ones — be aware of this divergence when editing helmet pages so fixes don't silently apply only to one copy.

**Styling.** Tailwind CSS v4 via `@tailwindcss/postcss` (see `postcss.config.mjs`), no `tailwind.config` — theme is inlined in `src/app/globals.css`. Brand colors are not centralized as design tokens; they're repeated as literal hex values across pages/components: `#23425D` (navy/headings), `#0360AE` (blue/accents), `#FBCC11` (gold highlights). Some pages use Tailwind arbitrary-value classes (`text-[#23425D]`), others (older/HEL pages) use inline `style={{ color: "#23425D" }}` — match whichever convention the surrounding file already uses rather than mixing both.

**Import alias.** `@/*` maps to `./src/*` (`tsconfig.json`).

## Working in this repo

This Next.js version (16.2.5) has behavior that differs from your training data — `AGENTS.md` (imported above) directs you to check `node_modules/next/dist/docs/` before using any App Router API you're not certain about.
