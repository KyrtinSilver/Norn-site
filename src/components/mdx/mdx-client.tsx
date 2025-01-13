'use client'

import { useEffect } from 'react'

export function ClientMDXContent({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('ClientMDXContent mounted')
  }, [])

  return (
    <div className="mdx-content">
      {children}
    </div>
  )
} 