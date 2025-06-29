/**
 * next.config.ts
 * Configure Next.js for static export to GitHub Pages.
 */
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Use Next.js static export (replaces next export)
  output: 'export',

  // Since we're hosting at https://loujunel.github.io/blog,
  // ensure links and assets are prefixed correctly.
  basePath: '/blog',
  assetPrefix: '/blog/',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Emit directory-style URLs: /about/index.html, etc.
  trailingSlash: true,
};

export default nextConfig;
