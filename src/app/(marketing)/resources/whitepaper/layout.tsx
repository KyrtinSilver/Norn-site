import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request Whitepaper | Norn.ai",
  description: "Request access to Norn.ai's comprehensive technical whitepaper.",
}

export default function WhitepaperLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 