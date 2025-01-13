import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research & Innovation | Norn.ai",
  description: "Discover the latest breakthroughs in AI research that drive Norn.ai's innovative features and capabilities."
}

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 