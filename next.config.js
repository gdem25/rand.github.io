/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: '/rand.github.io',
  assetPrefix: '/rand.github.io',
}

module.exports = nextConfig
