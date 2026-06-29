/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: produces a plain HTML/CSS/JS site in `out/` that can be
  // hosted on ANY provider (Netlify, Cloudflare Pages, GitHub Pages, Vercel).
  // If you deploy to Vercel and want server features later, remove this line.
  output: 'export',

  // Required for static export since we use plain <img> tags (no Image Optimization server).
  images: { unoptimized: true },

  // Cleaner URLs when statically hosted.
  trailingSlash: true,
};

export default nextConfig;
