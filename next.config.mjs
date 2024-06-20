/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/home/search",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
