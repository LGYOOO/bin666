/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['neeko-copilot.bytedance.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'neeko-copilot.bytedance.net',
        port: '',
        pathname: '/api/text_to_image/**',
      },
    ],
  },
}

module.exports = nextConfig
