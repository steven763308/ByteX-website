/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ 跳过 ESLint 检查
  },
};

module.exports = nextConfig;
