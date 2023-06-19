/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "cdn.shopify.com"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // webpack5: false,
};

module.exports = nextConfig;
