"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"

export function Footer() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by rendering a placeholder during SSR
  if (!mounted) {
    return null
  }

  return (
    <footer className="relative z-10">
      <Container className="py-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-8">
          <div>
            <div className="invisible h-6">Placeholder</div>
          </div>
          <div>
            <div className="invisible h-6">Placeholder</div>
          </div>
          <div>
            <div className="invisible h-6">Placeholder</div>
          </div>
          <div>
            <div className="invisible h-6">Placeholder</div>
          </div>
        </div>
        <div className="mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>Copyright © {new Date().getFullYear()} Norn.ai - All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}