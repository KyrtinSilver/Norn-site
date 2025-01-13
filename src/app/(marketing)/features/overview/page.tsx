import { Metadata } from "next"
import { FullWidthSection } from "@/components/full-width-section"

export const metadata: Metadata = {
  title: "Features Overview | Norn.ai",
  description: "Overview of Norn.ai's core features and capabilities",
}

export default function FeaturesOverviewPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <FullWidthSection background="heroGradient">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Core Features
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Explore the comprehensive suite of AI-powered features that make Norn.ai your ideal development companion.
          </p>
        </div>
      </FullWidthSection>
    </div>
  )
} 