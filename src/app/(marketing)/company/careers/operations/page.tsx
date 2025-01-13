import { Metadata } from "next"
import { MarketingComingSoon } from "@/components/marketing-coming-soon"

export const metadata: Metadata = {
  title: "Operations Positions | Norn.ai",
  description: "Operations career opportunities at Norn.ai",
}

export default function OperationsPage() {
  return (
    <MarketingComingSoon
      title="Operations Positions"
      description="Join our operations team and help scale our AI solutions. We're looking for talented individuals to drive growth, optimize processes, and ensure smooth execution across the organization."
      backLink="/company/careers"
      backText="Back to Careers"
    />
  )
} 