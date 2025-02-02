"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { DocsSearch } from "@/components/docs/search"
import { docsConfig } from "@/config/docs"
import { ModeToggle } from "@/components/mode-toggle"
import Image from "next/image"
import * as React from "react"

interface AppSidebarProps {
  className?: string
}

export function AppSidebar({ className }: AppSidebarProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className={cn("h-screen flex-col", className)}>
        <div className="container flex h-14 items-center">
          <div className="w-[80px] h-[24px]" />
        </div>
      </nav>
    )
  }

  return (
    <nav className={cn("h-screen flex-col", className)}>
      <div className="container flex h-14 items-center justify-start">
        <Link href="/" className="flex items-center opacity-85 hover:opacity-100 transition-opacity duration-300">
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
      </div>
      <div className="flex-1 overflow-y-auto py-6">
        <div className="container space-y-6">
          <div className="space-y-1">
            <h4 className="px-2 py-1 text-sm font-semibold tracking-tight">
              Main Navigation
            </h4>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {docsConfig.mainNav.map((item, index) => (
                <Link
                  key={index}
                  href={item.href ?? "#"}
                  className={cn(
                    "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                    item.disabled && "cursor-not-allowed opacity-60"
                  )}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="px-2 py-1 text-sm font-semibold tracking-tight">
              Documentation
            </h4>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {docsConfig.sidebarNav.map((item, index) => (
                <div key={index} className="space-y-1">
                  <h5 className="px-2 py-1 text-sm font-medium">{item.title}</h5>
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href ?? "#"}
                      className={cn(
                        "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                        subItem.disabled && "cursor-not-allowed opacity-60"
                      )}
                      target={subItem.external ? "_blank" : undefined}
                      rel={subItem.external ? "noreferrer" : undefined}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container flex items-center gap-2 py-4">
        <DocsSearch />
        <ModeToggle />
      </div>
    </nav>
  )
} 