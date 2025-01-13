"use client"

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from '@/components/theme-provider'
import { AppSidebar } from '@/components/ui/sidebar'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <ThemeProvider>
      <div className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen flex`}>
        <div className="fixed inset-y-0 z-30 hidden w-[280px] border-r border-border bg-background lg:block">
          <AppSidebar />
        </div>
        <div className="flex-1">
          <div className="lg:pl-[280px]">
            {children}
            <BreadcrumbNav />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
} 