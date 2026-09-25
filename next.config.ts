import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  eslint: {
    // Avoid ESLint environment discrepancies failing Vercel production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
