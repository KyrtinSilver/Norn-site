import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Circle, Clock, Shield, Network, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Product Roadmap | Norn.ai",
  description: "Explore our vision for the future and upcoming features in development.",
}

export default function RoadmapPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                Product Roadmap
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Discover what's next for Norn.ai. Our roadmap outlines upcoming features, improvements, and our vision for the future of AI technology.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Our Vision</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                We're building the future of safe and ethical AI, with a focus on scalable intelligence that benefits humanity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {visionPoints.map((point) => (
                <div key={point.title} className="bg-background rounded-lg shadow-sm p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-[500]">{point.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-[400]">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Development Timeline</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Our planned features and improvements for the coming months.
              </p>
            </div>
            <div className="space-y-12">
              {timelinePhases.map((phase) => (
                <div key={phase.title} className="bg-muted/50 rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    {phase.status === 'completed' && <CheckCircle2 className="w-6 h-6 text-primary" />}
                    {phase.status === 'in-progress' && <Clock className="w-6 h-6 text-primary" />}
                    {phase.status === 'planned' && <Circle className="w-6 h-6 text-primary" />}
                    <div>
                      <h3 className="text-xl font-[500]">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground font-[400]">{phase.timeline}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {phase.features.map((feature, index) => (
                      <div key={index} className="bg-background rounded-lg p-6">
                        <h4 className="text-lg font-[500] mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground font-[400] mb-4">{feature.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {feature.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-[400]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Get Involved */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Get Involved</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Help shape the future of Norn.ai by getting involved in our development process.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-[500] mb-4">Join Our Community</h3>
                <p className="text-muted-foreground font-[400] mb-6">
                  Participate in discussions, provide feedback, and help us prioritize future features.
                </p>
                <Button asChild>
                  <Link href="/collaboration/community">
                    Join Community <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-background rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-[500] mb-4">Early Access Program</h3>
                <p className="text-muted-foreground font-[400] mb-6">
                  Get early access to upcoming features and help us test and refine new capabilities.
                </p>
                <Button asChild>
                  <Link href="/company/contact">
                    Request Access <ArrowRight className="ml-2 h-4 w-4" />
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

const visionPoints = [
  {
    title: "Safety First",
    description: "Building AI systems with robust safety measures and ethical considerations at their core.",
    icon: <Shield className="w-6 h-6 text-primary" />
  },
  {
    title: "Scalable Intelligence",
    description: "Developing AI that can efficiently scale across different use cases and requirements.",
    icon: <Network className="w-6 h-6 text-primary" />
  },
  {
    title: "Human-Centric",
    description: "Creating AI solutions that enhance human capabilities and improve decision-making.",
    icon: <Users className="w-6 h-6 text-primary" />
  }
]

const timelinePhases = [
  {
    title: "Phase 1: Foundation",
    timeline: "Q1 2024",
    status: "completed",
    features: [
      {
        title: "Core AI Engine",
        description: "Advanced cognitive processing capabilities with built-in safety protocols.",
        tags: ["Core", "Safety", "Processing"]
      },
      {
        title: "Knowledge Integration",
        description: "Sophisticated knowledge representation and integration systems.",
        tags: ["Knowledge", "Integration"]
      }
    ]
  },
  {
    title: "Phase 2: Enhancement",
    timeline: "Q2 2024",
    status: "in-progress",
    features: [
      {
        title: "Advanced Safety Features",
        description: "Enhanced safety protocols and validation frameworks.",
        tags: ["Safety", "Validation"]
      },
      {
        title: "Scalability Improvements",
        description: "Optimizations for enterprise-scale deployments.",
        tags: ["Scaling", "Performance"]
      }
    ]
  },
  {
    title: "Phase 3: Innovation",
    timeline: "Q3-Q4 2024",
    status: "planned",
    features: [
      {
        title: "Next-Gen Architecture",
        description: "Revolutionary improvements to our core AI architecture.",
        tags: ["Architecture", "Innovation"]
      },
      {
        title: "Advanced Integration",
        description: "New capabilities for seamless system integration.",
        tags: ["Integration", "Enterprise"]
      }
    ]
  }
] 