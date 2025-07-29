/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizePackageImports: ["@tabler/icons-react", "react-icons"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
