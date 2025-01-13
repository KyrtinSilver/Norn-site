import { Metadata } from "next"
import { MarketingComingSoon } from "@/components/marketing-coming-soon"

export const metadata: Metadata = {
  title: "Guides & Tutorials | Norn.ai",
  description: "Comprehensive guides and tutorials for using Norn.ai",
}

export default function GuidesPage() {
  return (
    <MarketingComingSoon
      title="Guides & Tutorials"
      description="We're working on comprehensive guides and tutorials to help you get the most out of Norn.ai. Check back soon for step-by-step instructions, best practices, and implementation examples."
      backLink="/resources"
      backText="Back to Resources"
    />
  )
} 