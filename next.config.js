/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.yugometals.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable React strict mode for better error detection
  reactStrictMode: true,
}

module.exports = nextConfig

