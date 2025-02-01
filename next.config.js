// Suppress punycode deprecation warning
process.removeAllListeners('warning')
process.on('warning', (warning) => {
  if (warning.name === 'DeprecationWarning' && warning.message.includes('punycode')) {
    return
  }
  console.warn(warning)
})

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
  webpack: (config, { isServer }) => {
    // Handle punycode deprecation
    config.resolve.fallback = {
      ...config.resolve.fallback,
      punycode: false,
    }
    return config
  }
}

module.exports = nextConfig