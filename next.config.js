/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["freeiconshop.com"],
  },
};

module.exports = nextConfig;
