/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      noTurbo: true,
    },
  },
};

export default nextConfig;

