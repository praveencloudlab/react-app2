import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // CRITICAL: This creates the 'out' folder
  images: {
    unoptimized: true,   // Required for static export
  },
};

export default nextConfig;