import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Investors | Norn.ai",
  description: "Explore investment opportunities in Norn.ai and help shape the future of AI technology.",
}

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 