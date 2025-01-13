import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team | Norn.ai",
  description: "Meet the passionate individuals driving innovation in AI safety and ethics at Norn.ai."
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 