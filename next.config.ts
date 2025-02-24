import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  assetPrefix: isProd ? "/MrThanakritt-Portfolio/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
