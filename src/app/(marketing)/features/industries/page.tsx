import { Metadata } from "next"
import { FullWidthSection } from "@/components/full-width-section"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Industries | Norn.ai",
  description: "Discover how Norn.ai serves different industries with tailored AI solutions",
}

export default function IndustriesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-medium tracking-tight mb-6">
                Industry Solutions
              </h1>
              <p className="text-xl font-normal text-muted-foreground">
                Norn&apos;s Scalable Intelligence adapts to the unique challenges and requirements of different industries, delivering transformative AI solutions that drive innovation and efficiency.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="relative pb-24">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <Link 
                  key={industry.slug} 
                  href={`/features/industries/${industry.slug}`}
                  className="group relative bg-muted/50 rounded-lg p-6 hover:bg-muted/70 transition-colors shadow-sm"
                >
                  <div className="relative h-48 mb-6 overflow-hidden rounded-md">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h2 className="text-2xl font-medium mb-3">{industry.name}</h2>
                  <p className="text-muted-foreground font-normal mb-4">{industry.description}</p>
                  <div className="flex items-center text-primary font-normal">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Success Stories</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Discover how organizations across different industries are leveraging Norn&apos;s AI solutions to transform their operations and achieve breakthrough results.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/features/industries/case-studies">
                    View Case Studies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

const industries = [
  {
    name: "Government",
    slug: "government",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1200&q=90",
    description: "Transforming public sector operations with AI-powered solutions for enhanced governance and citizen services."
  },
  {
    name: "Corporate",
    slug: "corporate",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=90",
    description: "Empowering businesses with intelligent solutions for strategic decision-making and operational excellence."
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=90",
    description: "Advancing patient care and medical research through innovative AI applications and data analysis."
  },
  {
    name: "Finance",
    slug: "finance",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=90",
    description: "Revolutionizing financial services with AI-driven insights and automated decision-making processes."
  },
  {
    name: "Narrow AI",
    slug: "narrow-ai",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=90",
    description: "Specialized AI solutions designed for specific tasks and industries, delivering focused and efficient results."
  }
] 