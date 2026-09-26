import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

// Auto sync generated assets into public directory
try {
  const brainDir = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\d7ac31b6-3e1a-4d1f-8622-3ba4c2a1ec17";
  const deskSrc = path.join(brainDir, "takniser_workstation_logo_1790414408271.jpg");
  const pubDir = path.join(process.cwd(), "public");

  if (fs.existsSync(deskSrc)) {
    fs.copyFileSync(deskSrc, path.join(pubDir, "takniser_workstation_desk.jpg"));
    const rootPub = path.join(process.cwd(), "..", "public");
    if (fs.existsSync(rootPub)) {
      fs.copyFileSync(deskSrc, path.join(rootPub, "takniser_workstation_desk.jpg"));
    }
  }
} catch (e) {
  // Silent catch
}

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image configuration
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Security and performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Cache static brand assets aggressively
        source: "/brand/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/admin/dashboard",
        destination: "/admin",
        permanent: true,
      },
    ];
  },

  // Proxy API requests to backend
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
