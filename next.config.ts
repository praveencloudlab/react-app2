import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/react-app2',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;