import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable image optimization for App Runner compatibility
  // (App Runner doesn't support Next.js image optimization service)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
