/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  images: {
    deviceSizes: [
      480, 768, 960, 1280, 1440, 1536, 1920, 2048, 2560, 2880, 3840,
    ],
  },
};

export default nextConfig;
