import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CaseStudiesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <Button
                variant="ghost"
                className="mb-8 hover:bg-transparent hover:-translate-x-1 transition-transform"
                asChild
              >
                <Link href="/features/industries" className="text-muted-foreground">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Industries
                </Link>
              </Button>

              <h1 className="text-7xl font-medium tracking-tight mb-6">
                Case Studies
              </h1>
              <p className="text-xl font-normal text-muted-foreground">
                We're currently preparing detailed case studies showcasing how Norn is transforming industries. Check back soon to explore real-world applications and success stories.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Coming Soon Section */}
      <section className="relative pb-24">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <div className="grid grid-cols-2 gap-x-16 gap-y-6 font-normal">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Implementation Success Stories</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>ROI & Performance Metrics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Industry-Specific Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Client Testimonials</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
} 