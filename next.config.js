const nextBuildId = require("next-build-id");

/** @type {import('next').NextConfig} */
module.exports = {
  generateBuildId: async () => {
    const buildID = await nextBuildId({ dir: __dirname });
    return `tec-frontend-${buildID.substring(0, 6)}`;
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-DNS-Prefetch-Control",
          value: "on",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
      ],
    },
  ],
  i18n: {
    locales: ["en-US", "th-TH"],
    defaultLocale: "en-US",
  },

  images: {
    // TODO: Add domain into this array
    domains: ["localhost"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  pageExtensions: ["mdx", "md", "tsx", "ts"],
  compress: false,
  poweredByHeader: false,
  reactStrictMode: true,
};
