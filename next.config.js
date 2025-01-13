/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  transpilePackages: ["geist"],
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' 
    ? (process.env.NEXT_PUBLIC_CUSTOM_DOMAIN ? '' : '/Norn-site')
    : '',
  assetPrefix: process.env.NODE_ENV === 'production'
    ? (process.env.NEXT_PUBLIC_CUSTOM_DOMAIN ? '' : '/Norn-site')
    : '',
  images: {
    unoptimized: true,
    path: process.env.NODE_ENV === 'production'
      ? (process.env.NEXT_PUBLIC_CUSTOM_DOMAIN ? '/_next/image' : '/Norn-site/_next/image')
      : '/_next/image',
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig