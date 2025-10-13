import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["../../packages/components/Accordian"],
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
