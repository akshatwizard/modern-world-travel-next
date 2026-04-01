/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.modernworldtravel.com",
      },
    ],
  },
};

export default nextConfig;
