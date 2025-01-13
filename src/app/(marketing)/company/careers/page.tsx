import { Metadata } from 'next'
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: 'Careers | Norn',
  description: 'Join us in advancing the frontiers of artificial intelligence.',
}

export default function CareersPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                Join Our Team
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Help shape the future of AI. We're looking for exceptional individuals who are passionate about advancing safe and ethical artificial intelligence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Secondary Hero Section */}
      <section className="relative pb-24">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <div className="grid grid-cols-2 gap-x-16 gap-y-6 font-[400]">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Cutting-edge AI research</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Global impact</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Competitive benefits</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Remote-first culture</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Open Positions</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Explore our current opportunities and find your perfect role.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openPositions.map((position) => (
                <div key={position.title} className="bg-background rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-[500] mb-2">{position.title}</h3>
                  <p className="text-muted-foreground font-[400] mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {position.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-[400]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="outline">
                    <Link href={position.applyLink}>
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Why Join Norn</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                We offer competitive benefits and a culture that supports your growth and well-being.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-[500] mb-4">{benefit.title}</h3>
                  <ul className="space-y-3">
                    {benefit.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 font-[400]">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

const openPositions = [
  {
    title: "Senior AI Research Scientist",
    description: "Lead research initiatives in advanced AI systems, focusing on safety and ethics.",
    tags: ["Research", "Full-time", "Remote"],
    applyLink: "/company/careers/senior-ai-research-scientist/apply"
  },
  {
    title: "Machine Learning Engineer",
    description: "Build and optimize machine learning systems and infrastructure.",
    tags: ["Engineering", "Full-time", "Remote"],
    applyLink: "/company/careers/machine-learning-engineer/apply"
  },
  {
    title: "AI Safety Researcher",
    description: "Research and develop approaches to ensure AI system safety and reliability.",
    tags: ["Research", "Full-time", "Remote"],
    applyLink: "/company/careers/ai-safety-researcher/apply"
  },
  {
    title: "Software Engineer",
    description: "Develop and maintain core infrastructure and applications.",
    tags: ["Engineering", "Full-time", "Remote"],
    applyLink: "/company/careers/software-engineer/apply"
  }
]

const benefits = [
  {
    title: "Health & Wellness",
    items: [
      "Comprehensive health insurance",
      "Mental health support",
      "Wellness programs",
      "Flexible time off"
    ]
  },
  {
    title: "Growth & Development",
    items: [
      "Learning & development budget",
      "Conference attendance",
      "Mentorship programs",
      "Career advancement paths"
    ]
  },
  {
    title: "Work-Life Balance",
    items: [
      "Remote-first environment",
      "Flexible working hours",
      "Home office setup",
      "Regular team events"
    ]
  }
] 