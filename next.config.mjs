/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Skip type validation
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint errors during build
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
