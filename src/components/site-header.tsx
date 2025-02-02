"use client"

import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"

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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/features" className={navigationMenuTriggerStyle()}>
                  Features
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/features/industries" className={navigationMenuTriggerStyle()}>
                  Industries
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/research" className={navigationMenuTriggerStyle()}>
                  Research
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/company/team" className={navigationMenuTriggerStyle()}>
                  Team
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/company/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex-1 flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
