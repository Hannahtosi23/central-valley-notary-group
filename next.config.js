/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.centralvalleynotarygroup.com" }],
        destination: "https://centralvalleynotarygroup.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
