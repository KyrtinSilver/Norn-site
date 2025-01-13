import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import '@/app/globals.css'
import type { Metadata } from 'next'

interface RootLayoutProps {
  children: React.ReactNode
}

const basePath = process.env.NEXT_PUBLIC_BASEPATH || ''

export const metadata: Metadata = {
  title: {
    template: '%s | Norn.ai',
    default: 'Norn.ai - Scaling Intelligence',
  },
  description: 'Next-generation AI technology that transforms your organization',
  icons: [
    {
      rel: "icon",
      url: `${basePath}/icons/icon-dark.svg`,
      type: "image/svg+xml",
      media: "(prefers-color-scheme: dark)"
    },
    {
      rel: "icon",
      url: `${basePath}/icons/icon-light.svg`,
      type: "image/svg+xml",
      media: "(prefers-color-scheme: light)"
    }
  ]
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${basePath}/icons/icon-light.svg`}
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${basePath}/icons/icon-dark.svg`}
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
