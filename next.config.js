/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], //allow load unsplash images
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ 跳过 ESLint 检查
  },
};

module.exports = nextConfig;
