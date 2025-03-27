/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // This ensures Next.js knows to look in src/app
  distDir: "dist",
  reactStrictMode: true,
};

module.exports = nextConfig;
