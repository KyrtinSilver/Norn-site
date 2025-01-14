import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icons: {
    icon: [
      {
        url: '/icons/icon-light.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icons/icon-dark.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
