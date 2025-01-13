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
  metadataBase: new URL('https://norn.ai'),
  title: {
    template: '%s | Norn.ai',
    default: 'Norn.ai - Scaling Intelligence',
  },
  description: 'Human-like Intelligence, scalable and dynamic, powered by the ICOM cognitive architecture. Our SaaS solution pioneers breakthrough capabilities in concept learning, motivation, understanding, and reasoning.',
  keywords: 'AI, artificial intelligence, ICOM, cognitive architecture, machine learning, concept learning, recursive self-improvement, IoT integration, API integration, SaaS, e-governance, digital government, public sector technology, graph-based architecture, knowledge graphs, semantic networks, policy analysis, government automation, regulatory compliance, civic technology, smart governance, public administration, government modernization, distributed systems, scalable architecture, enterprise solutions, secure computing, ethical AI, responsible innovation',
  authors: [{ name: 'Norn.ai' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://norn.ai',
    siteName: 'Norn.ai',
    title: 'Norn.ai - Scaling Intelligence',
    description: 'Human-like Intelligence, scalable and dynamic, powered by the ICOM cognitive architecture. Our SaaS solution pioneers breakthrough capabilities in concept learning, motivation, understanding, and reasoning.',
    images: [
      {
        url: `${basePath}/images/og-image-1.jpg`,
        width: 1200,
        height: 630,
        alt: 'Norn.ai - Pioneering Human-like Intelligence with ICOM Technology',
      },
      {
        url: `${basePath}/images/og-image-2.jpg`,
        width: 1200,
        height: 630,
        alt: 'ICOM Cognitive Architecture - Revolutionary AI Understanding and Reasoning',
      },
      {
        url: `${basePath}/images/og-image-3.jpg`,
        width: 1200,
        height: 630,
        alt: 'Next-Generation AI - Real-time Learning and Scalable Intelligence',
      },
      {
        url: `${basePath}/images/og-image-4.jpg`,
        width: 1200,
        height: 630,
        alt: 'Safe and Ethical AI Development - Shaping the Future of Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Norn.ai - Scaling Intelligence',
    description: 'Human-like Intelligence, scalable and dynamic, powered by the ICOM cognitive architecture. Our SaaS solution pioneers breakthrough capabilities in concept learning, motivation, understanding, and reasoning.',
    images: [
      `${basePath}/images/og-image-1.jpg`,
      `${basePath}/images/og-image-2.jpg`,
      `${basePath}/images/og-image-3.jpg`,
      `${basePath}/images/og-image-4.jpg`
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <meta 
          name="google-site-verification" 
          content="FBAnxcGjlVPcFnsCen-rLryTbhaqAoI6Yl_gufpmw-w" 
        />
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
