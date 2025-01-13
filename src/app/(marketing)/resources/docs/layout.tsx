import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation Access | Norn.ai",
  description: "Request access to Norn.ai's comprehensive API documentation, implementation guides, and SDK references.",
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 