import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Scale, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Safety Research | Norn.ai",
  description: "Leading research in AI safety and ethics to ensure responsible AI development.",
}

export default function AISafetyPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                AI Safety Research
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Explore Norn.ai's commitment to developing safe and ethical AI systems.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Research Overview */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Research Focus</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Our comprehensive approach to ensuring safe and ethical AI development.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchFocus.map((focus) => (
                <div key={focus.title} className="bg-background rounded-lg shadow-sm p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {focus.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-[500] mb-2">{focus.title}</h3>
                      <p className="text-muted-foreground font-[400]">{focus.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {focus.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 font-[400]">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Current Projects */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Current Projects</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Ongoing research initiatives in AI safety and ethics.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.title} className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-[500] mb-4">{project.title}</h3>
                  <p className="text-muted-foreground font-[400] mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-[400]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Real-World Impact</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                How our AI safety research influences practical AI development and deployment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((application) => (
                <div key={application.title} className="bg-background rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-[500] mb-4">{application.title}</h3>
                  <p className="text-muted-foreground font-[400] mb-6">{application.description}</p>
                  <ul className="space-y-3">
                    {application.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 font-[400]">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Zap className="w-3 h-3 text-primary" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Get Involved */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Get Involved</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Join us in advancing AI safety research.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted/50 rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-[500] mb-4">Research Opportunities</h3>
                <p className="text-muted-foreground font-[400] mb-6">
                  We're looking for researchers passionate about AI safety and ethics to join our team.
                </p>
                <Button asChild>
                  <Link href="/company/careers">
                    View open positions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-muted/50 rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-[500] mb-4">Research Collaboration</h3>
                <p className="text-muted-foreground font-[400] mb-6">
                  Interested in collaborating on AI safety research? We partner with academic institutions and research organizations.
                </p>
                <Button asChild>
                  <Link href="/company/contact">
                    Contact our team <ArrowRight className="ml-2 h-4 w-4" />
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

const researchFocus = [
  {
    title: "Safety Protocols",
    description: "Developing robust safety protocols and validation frameworks for AI systems.",
    icon: <Shield className="w-6 h-6 text-primary" />,
    points: [
      "Risk assessment frameworks",
      "Safety validation methods",
      "Failure mode analysis",
      "Robustness testing"
    ]
  },
  {
    title: "Ethical Guidelines",
    description: "Creating comprehensive ethical guidelines and governance models for AI development.",
    icon: <Scale className="w-6 h-6 text-primary" />,
    points: [
      "Ethical frameworks",
      "Governance models",
      "Policy development",
      "Impact assessment"
    ]
  }
]

const projects = [
  {
    title: "Safety Validation",
    description: "Developing advanced methods for validating AI system safety and reliability.",
    tags: ["Validation", "Testing", "Safety"]
  },
  {
    title: "Ethical Framework",
    description: "Creating comprehensive ethical guidelines for AI development and deployment.",
    tags: ["Ethics", "Guidelines", "Governance"]
  },
  {
    title: "Risk Assessment",
    description: "Research into methods for identifying and mitigating AI system risks.",
    tags: ["Risk", "Assessment", "Mitigation"]
  }
]

const applications = [
  {
    title: "Safe AI Development",
    description: "Implementing safety protocols in AI system development and deployment.",
    benefits: [
      "Enhanced system reliability",
      "Risk mitigation",
      "Ethical compliance",
      "Transparent operation"
    ]
  },
  {
    title: "Policy & Governance",
    description: "Influencing AI policy and governance frameworks for responsible development.",
    benefits: [
      "Policy guidance",
      "Regulatory compliance",
      "Industry standards",
      "Best practices"
    ]
  }
] 