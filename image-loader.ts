export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? 'https://serichai-qr-code.vercel.app';

  const params = new URLSearchParams({
    url: src,
    w: width.toString(),
    q: (quality ?? 75).toString(),
  });

  return `${prefix}/_next/image?${params.toString()}`;
}
