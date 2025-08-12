/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is default in Next.js 14
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

module.exports = nextConfig
