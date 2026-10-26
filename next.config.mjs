/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // legacy slugs redirect to the new ones (formerly handled by <Navigate> in the SPA)
      { source: '/product', destination: '/how-it-works', permanent: true },
      { source: '/why', destination: '/why-invest', permanent: true },
    ];
  },
};

export default nextConfig;
