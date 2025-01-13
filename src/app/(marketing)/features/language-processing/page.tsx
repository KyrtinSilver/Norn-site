import { Metadata } from "next"
import { MarketingComingSoon } from "@/components/marketing-coming-soon"

export const metadata: Metadata = {
  title: "Language Processing | Norn.ai",
  description: "Advanced natural language processing capabilities from Norn.ai",
}

export default function LanguageProcessingPage() {
  return (
    <MarketingComingSoon
      title="Language Processing"
      description="We're building advanced natural language processing capabilities that will enable unprecedented understanding and generation of human-like text. Check back soon to explore our comprehensive NLP features."
      backLink="/features"
      backText="Back to Features"
    />
  )
} 