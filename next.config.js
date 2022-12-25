const compilerOptions = {
  removeConsole: {
    exclude: ['error'],
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  compiler: process.env.NODE_ENV === 'production' ? compilerOptions : {},
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
