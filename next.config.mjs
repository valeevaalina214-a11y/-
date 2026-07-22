/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern formats where possible (real blogger photos should be WebP/AVIF).
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
