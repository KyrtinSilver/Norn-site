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
                Discover how Norn.ai's solutions can transform enterprise operations with intelligent automation and data-driven insights.
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
                  <span>Strategic Decision Support: Truly Data-driven insights for less biased and more robust choices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Process Optimization: Iteration and innovation to improve workflows utilizing the latest research</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Innovation Acceleration: Accelerate prototyping and development with more intelligent software</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Knowledge Improvement: Full transparency and explainability into how your knowledge is turned into novel insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Risk Mitigation: Advanced analysis, prediction, testing, and potential real-time triage</span>
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
                Our enterprise solutions are designed to scale with your business, providing the unique advantages of human-like software.
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
                Drive continuous improvement and sustainable growth with unique and constantly improving technological and methodological advantages.
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
                Common questions about implementing Norn in corporate environments.
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
      "Market trend analysis and prediction, supported by up-to-date research",
      "Competitive intelligence gathering, in real-time, and potentially 24/7",
      "Resource allocation optimization, what you need, and only when you need it"
    ]
  },
  {
    title: "Operations Management",
    description: "Streamline processes and enhance operational efficiency.",
    benefits: [
      "Workflow automation and optimization, aligned to long-term company value",
      "Supply chain intelligence, solving more problems upstream",
      "Quality control enhancement, integrating UX data to understand the full lifecycle"
    ]
  },
  {
    title: "Knowledge Integration",
    description: "Unified knowledge management across the organization.",
    benefits: [
      "Cross-departmental insights, giving your company a mind that any employee may speak with",
      "Best practices identification, integrating the latest scientific and industry research",
      "Institutional knowledge preservation, with antifragile security"
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
    question: "Coming soon",
    answer: "Coming soon"
  },
  {
    question: "Coming soon",
    answer: "Coming soon"
  },
  {
    question: "Coming soon",
    answer: "Coming soon"
  },
  {
    question: "Coming soon",
    answer: "Coming soon"
  },
  {
    question: "Coming soon",
    answer: "Coming soon"
  }
] 