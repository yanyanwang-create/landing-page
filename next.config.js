import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Set base path for repository-based hosting (e.g., /landing-page/)
  // Only use this if you're not using a custom domain
  basePath: "/landing-page",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
