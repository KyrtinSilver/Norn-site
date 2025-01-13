import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation | Norn.ai",
  description: "Technical documentation and API references for Norn's AI systems",
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 