import { Metadata } from "next"
import { MarketingComingSoon } from "@/components/marketing-coming-soon"

export const metadata: Metadata = {
  title: "Knowledge Integration | Norn.ai",
  description: "Advanced knowledge integration capabilities from Norn.ai",
}

export default function KnowledgeIntegrationPage() {
  return (
    <MarketingComingSoon
      title="Knowledge Integration"
      description="Seamlessly integrate and leverage vast knowledge bases for enhanced decision-making. Our knowledge integration features will enable your AI systems to access and utilize structured and unstructured data effectively."
      backLink="/features"
      backText="Back to Features"
    />
  )
} 