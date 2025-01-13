import { Metadata } from "next"
import { MarketingComingSoon } from "@/components/marketing-coming-soon"

export const metadata: Metadata = {
  title: "Engineering Positions | Norn.ai",
  description: "Engineering career opportunities at Norn.ai",
}

export default function EngineeringPage() {
  return (
    <MarketingComingSoon
      title="Engineering Positions"
      description="We're building a world-class engineering team to develop cutting-edge AI technology. Check back soon to explore our engineering opportunities across frontend, backend, ML infrastructure, and more."
      backLink="/company/careers"
      backText="Back to Careers"
    />
  )
} 