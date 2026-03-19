import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // This creates the 'out' folder
  distDir: 'out',        // This confirms the folder name is 'out'
  images: {
    unoptimized: true,   // Required for static export
  },
};

export default nextConfig;