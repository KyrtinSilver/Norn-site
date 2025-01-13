/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  transpilePackages: ["geist"],
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_CUSTOM_DOMAIN ? '' : '/norn-site',
  assetPrefix: process.env.NEXT_PUBLIC_CUSTOM_DOMAIN ? '' : '/norn-site',
  images: {
    unoptimized: true,
    path: process.env.NEXT_PUBLIC_CUSTOM_DOMAIN ? '/_next/image' : '/norn-site/_next/image',
  },
}

module.exports = nextConfig