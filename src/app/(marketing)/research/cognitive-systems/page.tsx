import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Shield, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cognitive Systems Research | Norn.ai",
  description: "Advanced research in cognitive architectures and bias detection for more reliable AI systems.",
}

export default function CognitiveSystemsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                Cognitive Systems Research
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Explore Norn.ai's research into advanced cognitive systems and artificial intelligence.
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
                Our comprehensive approach to developing advanced cognitive systems spans multiple key areas.
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
                Ongoing research initiatives in cognitive systems development.
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
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Real-World Applications</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                How our cognitive systems research translates into practical solutions.
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
                Join us in advancing cognitive systems research.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted/50 rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-[500] mb-4">Research Opportunities</h3>
                <p className="text-muted-foreground font-[400] mb-6">
                  We're always looking for talented researchers to join our team and contribute to groundbreaking cognitive systems research.
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
                  Interested in collaborating on cognitive systems research? We partner with academic institutions and research organizations.
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
    title: "Cognitive Architectures",
    description: "Developing advanced frameworks for human-like reasoning and decision-making.",
    icon: <Brain className="w-6 h-6 text-primary" />,
    points: [
      "Neural processing models",
      "Memory systems and retrieval",
      "Learning mechanisms",
      "Attention and focus control"
    ]
  },
  {
    title: "Bias Detection & Mitigation",
    description: "Creating systems to identify and address cognitive biases in AI decision-making.",
    icon: <Shield className="w-6 h-6 text-primary" />,
    points: [
      "Algorithmic bias detection",
      "Fairness metrics",
      "Bias correction methods",
      "Validation frameworks"
    ]
  }
]

const projects = [
  {
    title: "Neural Architecture Research",
    description: "Investigating novel neural network architectures for improved cognitive processing capabilities.",
    tags: ["Neural Networks", "Architecture", "Processing"]
  },
  {
    title: "Bias Detection Systems",
    description: "Developing advanced systems for real-time detection and mitigation of cognitive biases.",
    tags: ["Bias Detection", "Real-time", "AI Safety"]
  },
  {
    title: "Memory Systems",
    description: "Research into efficient memory systems for long-term knowledge retention and retrieval.",
    tags: ["Memory", "Knowledge", "Retrieval"]
  }
]

const applications = [
  {
    title: "Enterprise Decision Systems",
    description: "Implementing cognitive systems in enterprise-level decision-making processes.",
    benefits: [
      "Enhanced decision accuracy",
      "Reduced cognitive bias",
      "Improved efficiency",
      "Better risk assessment"
    ]
  },
  {
    title: "Research & Development",
    description: "Supporting scientific research with advanced cognitive processing capabilities.",
    benefits: [
      "Accelerated discovery",
      "Pattern recognition",
      "Hypothesis generation",
      "Data analysis"
    ]
  }
] 