"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/brand/logo-light.svg"
              alt="Norn"
              width={80}
              height={24}
              className="dark:hidden"
            />
            <Image
              src="/brand/logo-dark.svg"
              alt="Norn"
              width={80}
              height={24}
              className="hidden dark:block"
            />
          </Link>
          <Link href="/docs" className={navigationMenuTriggerStyle()}>
            Docs
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}