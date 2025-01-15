"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import Image from "next/image"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function NavigationMenu() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 5)
    }

    const handleResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    // Check initial size
    handleResize()

    // Add event listeners
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Add escape key handler
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  if (!mounted) {
    return (
      <header className="fixed top-0 z-50 w-full border-b border-border/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container className="flex h-[--header-height] items-center">
          <div className="w-[80px] h-[24px]" />
        </Container>
      </header>
    )
  }

  return (
    <>
      <header className={cn(
        "fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-[border-color] duration-300 ease-in-out",
        scrolled ? "border-border" : "border-border/10"
      )}>
        <Container className="flex h-[--header-height] items-center">
          <Link href="/" className="flex items-center opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="relative w-[80px] h-[24px] flex items-center">
              <Image
                src="/brand/logo-light.svg"
                alt="Norn"
                width={80}
                height={24}
                priority
                className="absolute left-0 transition-opacity duration-300 dark:opacity-0"
              />
              <Image
                src="/brand/logo-dark.svg"
                alt="Norn"
                width={80}
                height={24}
                priority
                className="absolute left-0 transition-opacity duration-300 opacity-0 dark:opacity-100"
              />
            </div>
          </Link>
          <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
            <Link
              href="/features/industries"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Industries
            </Link>
            <Link
              href="/features"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Features
            </Link>
            <Link
              href="/research"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Research
            </Link>
            <Link
              href="/company"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Company
            </Link>
          </nav>
          <div className="flex items-center gap-4 md:ml-0 ml-auto">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[--header-border] bg-background dark:bg-accent/20 hover:bg-accent/10 dark:hover:bg-accent/60 hover:text-accent-foreground h-9 px-4 rounded-md opacity-60 hover:opacity-100"
            >
              Docs
            </Link>
            <ModeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </Container>
      </header>

      {isOpen && (
        <div className="fixed inset-0 top-[var(--header-height)] z-40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
          <nav className="flex flex-col items-center justify-center h-full py-8">
            <Link 
              href="/features/industries" 
              className="w-full text-center py-4 text-2xl font-medium opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </Link>
            <Link 
              href="/features" 
              className="w-full text-center py-4 text-2xl font-medium opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/research" 
              className="w-full text-center py-4 text-2xl font-medium opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Research
            </Link>
            <Link 
              href="/company" 
              className="w-full text-center py-4 text-2xl font-medium opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Company
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
