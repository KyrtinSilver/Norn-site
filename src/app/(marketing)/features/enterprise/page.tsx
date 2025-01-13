import { Metadata } from "next"
import { MarketingComingSoon } from "@/components/marketing-coming-soon"

export const metadata: Metadata = {
  title: "Enterprise Solutions | Norn.ai",
  description: "Enterprise-grade AI solutions and features from Norn.ai",
}

export default function EnterprisePage() {
  return (
    <MarketingComingSoon
      title="Enterprise Solutions"
      description="Scalable AI solutions designed for enterprise-level implementation and growth. Our enterprise features will provide the security, control, and performance your organization needs."
      backLink="/features"
      backText="Back to Features"
    />
  )
} 