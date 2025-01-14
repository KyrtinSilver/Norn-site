'use client'

import { usePathname } from 'next/navigation'

const BaseSecurityHeaders = () => (
  <>
    <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
    <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
    <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
    <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
    <meta httpEquiv="Content-Security-Policy" 
      content="default-src 'self'; img-src 'self' data: https: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https://api.web3forms.com; frame-ancestors 'none'; form-action 'self'; base-uri 'self'; upgrade-insecure-requests;" 
    />
  </>
)

export function SecurityHeaders() {
  const pathname = usePathname()
  const isProtectedPath = pathname?.startsWith('/styles') || 
                         pathname?.startsWith('/examples') ||
                         pathname?.includes('preview')

  return (
    <>
      <BaseSecurityHeaders />
      {isProtectedPath && (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </>
  )
} 