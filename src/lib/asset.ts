// Base URL that root-relative static asset paths must be prefixed with so they
// still resolve correctly when this app is reverse-proxied under
// ch-paisarn.com/p/... (where the browser's origin is ch-paisarn.com, not this
// app's own Vercel deployment).
//
// Defaults to this app's own deployment (matching `assetPrefix` in
// next.config.ts) so the fix works without any Vercel dashboard
// configuration. NEXT_PUBLIC_ASSET_PREFIX can still override it — e.g. for a
// preview deployment that needs to point at a different URL.
export const ASSET_PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX || "https://serichai-qr-code.vercel.app";

// Use for any root-relative asset path that isn't already handled by
// next/image + the custom loader (see image-loader.ts) — e.g. a plain
// <img src>, a CSS url(), or a manifest/OG image path.
export const asset = (path: string) => `${ASSET_PREFIX}${path}`;
