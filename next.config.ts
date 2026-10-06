import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Las fotos reales se guardan en /public/images (no se enlazan desde el CDN de Instagram:
    // esas URLs caducan y requieren sesión).
  },
};

export default nextConfig;
