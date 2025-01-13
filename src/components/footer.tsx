"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Container } from "@/components/ui/container"

const footerLinks = {
  features: [
    { title: "Overview", href: "/features" },
    { title: "Product", href: "/features/product" },
    { title: "Industries", href: "/features/industries" },
    { title: "Research", href: "/research" },
  ],
  resources: [
    { title: "Docs", href: "/docs" },
    { title: "Public Docs", href: "/resources/docs" },
    { title: "White Paper", href: "/resources/whitepaper" },
    { title: "Roadmap", href: "/resources/roadmap" },
  ],
  collaboration: [
    { title: "Investors", href: "/collaboration/investors" },
    { title: "Partnership", href: "/collaboration/partnership" },
    { title: "Press", href: "/collaboration/press" },
    { title: "Community", href: "/collaboration/community" },
  ],
  company: [
    { title: "About", href: "/company" },
    { title: "Team", href: "/company/team" },
    { title: "Careers", href: "/company/careers" },
    { title: "Contact", href: "/company/contact" },
  ],
}

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
            <h4 className="mb-4 text-sm font-medium">Features</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.features.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium">Resources</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium">Collaboration</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.collaboration.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium">Company</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Norn. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
