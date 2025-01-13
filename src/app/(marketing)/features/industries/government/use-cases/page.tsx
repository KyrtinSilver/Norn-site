import { Container } from "@/components/ui/container"
import Image from "next/image"

export default function GovernmentUseCasesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Government Use Cases
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore detailed examples of how government agencies are implementing AI solutions to transform public services.
            </p>
          </div>
        </Container>
      </section>

      {/* Use Cases Detail Section */}
      <section className="py-16">
        <Container>
          <div className="space-y-24">
            {useCases.map((useCase) => (
              <div key={useCase.title} id={useCase.slug} className="scroll-mt-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">{useCase.title}</h2>
                    <p className="text-xl text-muted-foreground mb-6">{useCase.description}</p>
                    <ul className="space-y-4">
                      {useCase.benefits.map((benefit, index) => (
                        <li key={index} className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

const useCases = [
  {
    title: "Policy Analysis & Decision Support",
    slug: "policy-analysis",
    description: "Leverage AI to analyze complex policy scenarios and provide data-driven insights for better decision-making.",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Real-time analysis of policy impacts across different sectors",
      "Predictive modeling of policy outcomes",
      "Integration of public sentiment and stakeholder feedback",
      "Automated policy compliance checking"
    ]
  },
  {
    title: "Public Service Automation",
    slug: "service-automation",
    description: "Transform public service delivery through intelligent automation and predictive systems.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "24/7 automated citizen service platforms",
      "Intelligent document processing and routing",
      "Predictive service demand forecasting",
      "Automated case management and tracking"
    ]
  },
  {
    title: "Resource Optimization",
    slug: "resource-optimization",
    description: "Optimize allocation and management of public resources using AI-driven insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Smart budget allocation based on predictive analytics",
      "Resource utilization monitoring and optimization",
      "Automated procurement and inventory management",
      "Predictive maintenance for public infrastructure"
    ]
  },
  {
    title: "Regulatory Compliance",
    slug: "regulatory-compliance",
    description: "Ensure compliance and reduce risks with AI-powered monitoring and assessment systems.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Automated compliance monitoring and reporting",
      "Risk assessment and early warning systems",
      "Regulatory impact analysis",
      "Compliance training and guidance systems"
    ]
  }
] 