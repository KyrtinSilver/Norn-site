/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  transpilePackages: ["geist"],
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_CUSTOM_DOMAIN ? '' : '/Norn-site',
  assetPrefix: process.env.NEXT_PUBLIC_CUSTOM_DOMAIN ? '' : '/Norn-site',
  images: {
    unoptimized: true,
    path: process.env.NEXT_PUBLIC_CUSTOM_DOMAIN ? '/_next/image' : '/Norn-site/_next/image',
  },
}

module.exports = nextConfig