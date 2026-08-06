import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: 'https://serichai-qr-code.vercel.app', // Set the asset prefix to the Vercel deployment URL
  images: {
    // The built-in loader always requests the root-relative "/_next/image"
    // path, which assetPrefix does not cover — breaks image loading when
    // proxied through ch-paisarn.com/p/.... This custom loader (image-loader.ts)
    // prefixes that request with NEXT_PUBLIC_ASSET_PREFIX so it always hits
    // this app's own deployment.
    loader: 'custom',
    loaderFile: './image-loader.ts',
  },
};

export default nextConfig;
