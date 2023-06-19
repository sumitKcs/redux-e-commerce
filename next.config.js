/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "cdn.shopify.com"],
  },
  // webpack5: false,
};

module.exports = nextConfig;
