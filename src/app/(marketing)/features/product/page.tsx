import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Shield, Network, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Product | Norn.ai",
  description: "Explore Norn.ai's core product features including cognitive architecture, safety framework, and knowledge integration."
}

export default function ProductPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                Core Product Features
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Discover how Norn.ai's advanced AI technology combines cognitive architecture, safety frameworks, and knowledge integration to deliver powerful, reliable solutions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Product Features Grid */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Key Features</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Our core technology combines several innovative features to deliver exceptional AI capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productFeatures.map((feature) => (
                <div key={feature.title} className="bg-background rounded-lg shadow-sm p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-[500] mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground font-[400] mb-6">{feature.description}</p>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>
                        <span className="text-sm font-[400] text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto text-center">
            <h2 className="text-3xl font-[500] tracking-tight mb-4">Ready to Get Started?</h2>
            <p className="text-xl font-[400] text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the power of Norn.ai's advanced AI technology for your organization.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/docs">
                  View Documentation
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

const productFeatures = [
  {
    title: "Cognitive Architecture",
    description: "Our advanced cognitive architecture enables human-like reasoning and decision-making capabilities.",
    icon: <Brain className="h-6 w-6 text-primary" />,
    benefits: [
      "Advanced reasoning and problem-solving",
      "Contextual understanding and adaptation",
      "Natural language processing and generation",
      "Memory and learning capabilities"
    ]
  },
  {
    title: "Safety Framework",
    description: "Built-in safety measures ensure reliable and ethical AI operation at all times.",
    icon: <Shield className="h-6 w-6 text-primary" />,
    benefits: [
      "Comprehensive safety protocols",
      "Ethical decision-making guidelines",
      "Bias detection and mitigation",
      "Transparent operation and monitoring"
    ]
  },
  {
    title: "Knowledge Integration",
    description: "Seamlessly integrate and leverage vast knowledge bases for enhanced decision-making.",
    icon: <Network className="h-6 w-6 text-primary" />,
    benefits: [
      "Real-time knowledge access",
      "Cross-domain expertise integration",
      "Continuous learning and updates",
      "Structured knowledge representation"
    ]
  },
  {
    title: "Performance Optimization",
    description: "Advanced optimization techniques ensure efficient and scalable operation.",
    icon: <Zap className="h-6 w-6 text-primary" />,
    benefits: [
      "Resource-efficient processing",
      "Scalable architecture",
      "Real-time performance monitoring",
      "Automated optimization"
    ]
  }
] 