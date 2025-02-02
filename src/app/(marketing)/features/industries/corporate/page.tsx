'use client'

import { Container } from "@/components/ui/container"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function CorporatePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-medium tracking-tight mb-6">
                Corporate AI Solutions
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Discover how Norn.ai's AI solutions are transforming enterprise operations with intelligent automation and data-driven insights.
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
              <div className="grid grid-cols-2 gap-x-16 gap-y-6 font-normal">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Strategic Decision Support: Data-driven insights for better choices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Process Optimization: Streamlined workflows and operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Innovation Acceleration: Rapid prototyping and development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Knowledge Management: Centralized intelligence repository</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Risk Mitigation: Advanced analysis and prediction</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Enterprise Solutions Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Enterprise Solutions</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Our enterprise solutions are designed to scale with your business, providing comprehensive support across all operational areas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enterpriseSolutions.map((solution) => (
                <div key={solution.title} className="bg-background rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-medium mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground font-normal mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm font-normal">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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

      {/* Innovation & Growth Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Innovation & Growth</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Drive continuous improvement and sustainable growth with AI-powered innovation solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {innovationSolutions.map((solution) => (
                <div key={solution.title} className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-medium mb-4">{solution.title}</h3>
                  <div className="space-y-4">
                    {solution.points.map((point, index) => (
                      <p key={index} className="text-muted-foreground font-normal">{point}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Common questions about implementing AI solutions in corporate environments.
              </p>
            </div>
            <div className="max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-normal">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

const enterpriseSolutions = [
  {
    title: "Strategic Planning",
    description: "AI-powered analysis for informed strategic decision-making.",
    benefits: [
      "Market trend analysis and prediction",
      "Competitive intelligence gathering",
      "Resource allocation optimization"
    ]
  },
  {
    title: "Operations Management",
    description: "Streamline processes and enhance operational efficiency.",
    benefits: [
      "Workflow automation and optimization",
      "Supply chain intelligence",
      "Quality control enhancement"
    ]
  },
  {
    title: "Knowledge Integration",
    description: "Unified knowledge management across the organization.",
    benefits: [
      "Cross-departmental insights",
      "Best practices identification",
      "Institutional knowledge preservation"
    ]
  }
]

const innovationSolutions = [
  {
    title: "Research & Development",
    points: [
      "Accelerate innovation cycles with AI-assisted research and development.",
      "Identify emerging trends and opportunities in your industry.",
      "Rapid prototyping and testing of new ideas."
    ]
  },
  {
    title: "Market Intelligence",
    points: [
      "Real-time market analysis and consumer behavior insights.",
      "Predictive analytics for market trends and opportunities.",
      "Competitive landscape monitoring and analysis."
    ]
  },
  {
    title: "Digital Transformation",
    points: [
      "Modernize legacy systems and processes with AI integration.",
      "Enable data-driven decision making across all levels.",
      "Build scalable digital infrastructure for future growth."
    ]
  },
  {
    title: "Sustainability Initiatives",
    points: [
      "Environmental impact assessment and optimization.",
      "Sustainable practice implementation and monitoring.",
      "ESG compliance and reporting automation."
    ]
  }
]

const faqs = [
  {
    question: "How can Norn.ai integrate with our existing systems?",
    answer: "Our solutions are designed for seamless integration with your existing infrastructure. We provide flexible APIs and connectors for major enterprise systems, along with custom integration options for specific needs."
  },
  {
    question: "What kind of ROI can we expect from implementing AI solutions?",
    answer: "ROI varies by implementation, but our clients typically see significant improvements in efficiency (20-30%), decision accuracy (40-50%), and innovation speed (2-3x faster) within the first year of deployment."
  },
  {
    question: "How do you ensure data privacy and security?",
    answer: "We implement enterprise-grade security measures including encryption, access controls, and compliance with major security standards (SOC 2, ISO 27001). All data handling follows strict privacy protocols and regulatory requirements."
  },
  {
    question: "What support and training do you provide?",
    answer: "We offer comprehensive support including 24/7 technical assistance, regular training sessions, documentation, and dedicated account management for enterprise clients."
  },
  {
    question: "Can the AI solutions scale with our business growth?",
    answer: "Yes, our solutions are built to scale. The modular architecture allows for easy expansion, and our cloud-based infrastructure automatically scales to meet increasing demands."
  }
] 