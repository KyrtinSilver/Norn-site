import { Metadata } from "next"
import { MarketingComingSoon } from "@/components/marketing-coming-soon"

export const metadata: Metadata = {
  title: "Video Resources | Norn.ai",
  description: "Video tutorials and demonstrations of Norn.ai features",
}

export default function VideosPage() {
  return (
    <MarketingComingSoon
      title="Video Resources"
      description="Our team is creating high-quality video tutorials and demonstrations to showcase Norn.ai's capabilities. Stay tuned for in-depth walkthroughs and feature demonstrations."
      backLink="/resources"
      backText="Back to Resources"
    />
  )
} 