'use client'

import { usePathname } from 'next/navigation'

export function SecurityHeaders() {
  const pathname = usePathname()
  const isProtectedPath = pathname?.startsWith('/styles') || 
                         pathname?.startsWith('/examples') ||
                         pathname?.includes('preview')

  if (!isProtectedPath) return null

  return <meta name="robots" content="noindex, nofollow" />
} 