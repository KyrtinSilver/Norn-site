import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Network, Database, GitBranch, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Knowledge Integration Research | Norn.ai",
  description: "Advanced research in knowledge representation and integration for AI systems.",
}

export default function KnowledgeIntegrationPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                Knowledge Integration Research
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Developing sophisticated systems for knowledge representation, integration, and retrieval to enhance AI understanding and reasoning capabilities.
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
                Our research focuses on developing advanced knowledge systems that can effectively process and utilize vast amounts of information.
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
                Ongoing research initiatives in knowledge integration and representation.
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
                How our knowledge integration research translates into practical solutions.
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
                Join us in advancing knowledge integration research.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted/50 rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-[500] mb-4">Research Opportunities</h3>
                <p className="text-muted-foreground font-[400] mb-6">
                  We're looking for researchers passionate about knowledge systems and semantic networks to join our team.
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
                  Interested in collaborating on knowledge integration research? We partner with academic institutions and research organizations.
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
    title: "Knowledge Representation",
    description: "Developing advanced frameworks for representing and organizing complex knowledge structures.",
    icon: <Network className="w-6 h-6 text-primary" />,
    points: [
      "Semantic networks",
      "Ontology development",
      "Knowledge graphs",
      "Concept mapping"
    ]
  },
  {
    title: "Data Integration",
    description: "Creating systems for seamless integration of diverse knowledge sources and data types.",
    icon: <Database className="w-6 h-6 text-primary" />,
    points: [
      "Multi-source integration",
      "Data harmonization",
      "Schema mapping",
      "Entity resolution"
    ]
  }
]

const projects = [
  {
    title: "Semantic Network Research",
    description: "Developing advanced semantic networks for improved knowledge representation and reasoning.",
    tags: ["Semantics", "Networks", "Knowledge Graphs"]
  },
  {
    title: "Integration Systems",
    description: "Building systems for efficient integration of heterogeneous knowledge sources.",
    tags: ["Integration", "Data Systems", "Scalability"]
  },
  {
    title: "Knowledge Retrieval",
    description: "Research into efficient methods for knowledge retrieval and utilization.",
    tags: ["Retrieval", "Efficiency", "Access"]
  }
]

const applications = [
  {
    title: "Enterprise Knowledge Management",
    description: "Implementing knowledge integration systems for enterprise-level information management.",
    benefits: [
      "Improved information access",
      "Enhanced decision support",
      "Knowledge preservation",
      "Efficient collaboration"
    ]
  },
  {
    title: "Research & Analytics",
    description: "Supporting research and analytics with advanced knowledge integration capabilities.",
    benefits: [
      "Data synthesis",
      "Pattern discovery",
      "Insight generation",
      "Knowledge sharing"
    ]
  }
] 