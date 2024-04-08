/** @type {import('next').NextConfig} */

const nextConfig = {
  api: {
    externalResolver: true,
  },
  runtime: "nodejs",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
