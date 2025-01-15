"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/docs/command-menu"
import { ModeToggle } from "@/components/mode-toggle"

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-border">
        <div className="p-4 flex items-center justify-between">
          <Link href="/" className="flex items-center w-[80px]">
            <div className="relative w-[80px] h-[24px] flex items-center opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <Image
                src="/brand/logo-light.svg"
                alt="Norn Logo"
                width={80}
                height={24}
                priority
                className="absolute left-0 transition-opacity duration-300 dark:opacity-0"
              />
              <Image
                src="/brand/logo-dark.svg"
                alt="Norn Logo"
                width={80}
                height={24}
                priority
                className="absolute left-0 transition-opacity duration-300 opacity-0 dark:opacity-100"
              />
            </div>
          </Link>
          <ModeToggle />
        </div>
        <div className="px-3 pb-4">
          <CommandMenu />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4 py-4">
          <div className="px-3">
            <h2 className="mb-2 text-lg font-semibold tracking-tight">
              Documentation
            </h2>
          </div>
          <div className="px-3">
            {docsConfig.sidebarNav.map((section) => (
              <div key={section.title} className="pb-4">
                <h4 className="mb-1 text-sm font-medium">
                  {section.title}
                </h4>
                {section.items.length > 0 && (
                  <div className="grid grid-flow-row auto-rows-max text-sm">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.disabled ? "#" : item.href!}
                        className={cn(
                          "group flex w-full items-center rounded-md border border-transparent px-4 py-1.5",
                          item.disabled && "cursor-not-allowed opacity-60",
                          pathname === item.href
                            ? "bg-accent font-medium text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        )}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                      >
                        {item.title}
                        {item.label && (
                          <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000]">
                            {item.label}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 