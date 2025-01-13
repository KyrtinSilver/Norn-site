import { Metadata } from "next"
import { MarketingComingSoon } from "@/components/marketing-coming-soon"

export const metadata: Metadata = {
  title: "Research Positions | Norn.ai",
  description: "Research career opportunities at Norn.ai",
}

export default function ResearchPage() {
  return (
    <MarketingComingSoon
      title="Research Positions"
      description="Join our research team and push the boundaries of AI technology. We're seeking researchers passionate about advancing the field while prioritizing safety and ethical considerations."
      backLink="/company/careers"
      backText="Back to Careers"
    />
  )
} 