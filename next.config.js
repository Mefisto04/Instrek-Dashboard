/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove experimental appDir if you're using Next.js 13.4+
  // Remove distDir: "dist" as it may cause issues
  swcMinify: true,
  output: 'standalone', // Try adding this
};

module.exports = nextConfig;
