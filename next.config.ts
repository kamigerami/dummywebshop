import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.sageappliances.com",
      },
      {
        protocol: "https",
        hostname: "assets.breville.com",
      },
      {
        protocol: "https",
        hostname: "www.breville.com",
      },
      {
        protocol: "https",
        hostname: "assets.icanet.se",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "johanochnystrom.se",
      },
      {
        protocol: "https",
        hostname: "breville-production-aem-assets.s3.us-west-2.amazonaws.com",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
