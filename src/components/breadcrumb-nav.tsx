"use client"

import * as React from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight } from "lucide-react"
import { Container } from "@/components/ui/container"

export function BreadcrumbNav() {
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const getBreadcrumbText = (path: string) => {
    if (path === '/') return 'Home'
    if (path.startsWith('/docs')) return 'Documentation'
    return path.split('/').pop()?.replace(/-/g, ' ') || 'Home'
  }

  const getBreadcrumbItems = (pathname: string) => {
    if (pathname === '/') return [{ text: 'Home', href: '/' }]
    
    const segments = pathname.split('/').filter(Boolean)
    return segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/')
      return {
        text: getBreadcrumbText('/' + segment),
        href
      }
    })
  }

  // Prevent hydration mismatch by rendering a placeholder during SSR
  if (!mounted) {
    return (
      <div className="border-t border-border mt-16">
        <Container className="py-4">
          <div className="h-[14px] w-[14px]" />
        </Container>
      </div>
    )
  }

  return (
    <div className="border-t border-border mt-16">
      <Container className="py-4">
        <Breadcrumb>
          <BreadcrumbList className="text-xs">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-2">
                <Image
                  src="/icons/icon-light.svg"
                  alt="Norn Logo"
                  width={14}
                  height={14}
                  priority
                  className="opacity-80 hover:opacity-100 transition-opacity dark:hidden"
                />
                <Image
                  src="/icons/icon-dark.svg"
                  alt="Norn Logo"
                  width={14}
                  height={14}
                  priority
                  className="opacity-80 hover:opacity-100 transition-opacity hidden dark:block"
                />
              </BreadcrumbLink>
            </BreadcrumbItem>
            {getBreadcrumbItems(pathname).map((item) => (
              <React.Fragment key={item.href}>
                <BreadcrumbSeparator className="text-muted-foreground/40">
                  <ChevronRight className="h-3 w-3" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink 
                    href={item.href}
                    className="opacity-60 hover:opacity-100 transition-opacity capitalize"
                  >
                    {item.text}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
    </div>
  )
} 