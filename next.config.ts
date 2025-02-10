import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillni.valureach.com",
        pathname: "/defaults/**",
      },
      {
        protocol: "https",
        hostname: "skillni.valureach.com",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
