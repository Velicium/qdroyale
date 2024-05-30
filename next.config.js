/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        domains: ['qdroyale.xyz'],
      },
    ],
  },
};

module.exports = nextConfig;
