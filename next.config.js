/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
