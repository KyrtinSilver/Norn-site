import { Metadata } from "next"
import { FullWidthSection } from "@/components/full-width-section"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Industries | Norn.ai",
  description: "See how Norn.ai adapts to different industries, providing specialized AI solutions for your unique needs.",
}

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      <FullWidthSection background="heroGradient">
        <Container className="py-16">
          <h1 className="text-4xl font-bold mb-8">
            Industry Solutions
          </h1>
          <p className="text-xl max-w-2xl text-muted-foreground">
            See how Norn.ai adapts to different industries, providing specialized AI solutions for your unique needs.
          </p>
        </Container>
      </FullWidthSection>
    </div>
  )
} 