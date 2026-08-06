"use client";

import { ASSET_PREFIX } from "./src/lib/asset";

// next/image's built-in loader always requests the *root-relative*
// "/_next/image" path. That's fine on serichai-qr-code.vercel.app directly,
// but when this app is reverse-proxied at ch-paisarn.com/p/..., the browser's
// origin is ch-paisarn.com, so that request goes to
// ch-paisarn.com/_next/image instead of the app that can actually serve it.
// assetPrefix does NOT fix this on its own — it only prefixes JS/CSS
// <script>/<link> tags, not the URL next/image's loader builds. This custom
// loader prefixes the optimization request itself so it always resolves to
// the real deployment, regardless of which domain the page is viewed from.
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  return `${ASSET_PREFIX}/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}
