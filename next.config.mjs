/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF is deliberately left out. Encoding it is an order of magnitude more
    // expensive than WebP, and this app self-hosts the /_next/image optimizer
    // (Cloud Run), so every AVIF request burns container CPU and memory rather
    // than a CDN's. The source assets are already WebP, so the gain is marginal.
    formats: ["image/webp"],
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
