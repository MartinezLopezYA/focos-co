import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "focosco.com",
      },
      {
        protocol: "https",
        hostname: "focosco.co",
      },
      {
        protocol: "https",
        hostname: "focosco.netlify.app",
      }
    ]
  }
};

export default nextConfig;
