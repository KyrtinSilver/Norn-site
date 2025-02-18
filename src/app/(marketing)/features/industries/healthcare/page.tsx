'use client'

import { Container } from "@/components/ui/container"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function HealthcarePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-medium tracking-tight mb-6">
                Healthcare AI Solutions
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Discover how Norn.ai's AI solutions are revolutionizing healthcare with advanced diagnostics and personalized medicine.
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
                  <span>Enhanced Diagnostics: AI-powered medical analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Research Acceleration: Faster breakthrough discoveries</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Patient Care: Personalized treatment optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Data Integration: Unified health information systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Compliance: Regulatory standards adherence</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Clinical Solutions Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Clinical Solutions</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Enhance patient care and clinical outcomes with AI-powered diagnostic and treatment tools.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clinicalSolutions.map((solution) => (
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

      {/* Research & Development Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Research & Development</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Accelerate medical research and drug development with advanced AI capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchSolutions.map((solution) => (
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
                Common questions about implementing AI solutions in healthcare settings.
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

const clinicalSolutions = [
  {
    title: "Diagnostic Support",
    description: "AI-enhanced medical imaging and diagnostic tools.",
    benefits: [
      "Improving image analysis",
      "Pattern recognition in medical data",
      "Early disease detection"
    ]
  },
  {
    title: "Treatment Planning",
    description: "Personalized treatment recommendations and monitoring.",
    benefits: [
      "Evidence-based treatment paths",
      "Patient response prediction",
      "Real-time monitoring and adjustment"
    ]
  },
  {
    title: "Clinical Workflow",
    description: "Streamlined healthcare delivery and management.",
    benefits: [
      "Automated documentation",
      "Resource optimization",
      "Care coordination improvement"
    ]
  }
]

const researchSolutions = [
  {
    title: "Drug Discovery",
    points: [
      "Accelerate drug discovery through AI-powered molecular modeling.",
      "Predict drug interactions and side effects with advanced simulations.",
      "Optimize clinical trial design and participant selection."
    ]
  },
  {
    title: "Medical Research",
    points: [
      "Analyze vast medical datasets to identify patterns and insights.",
      "Support hypothesis generation and testing in research.",
      "Enable cross-disciplinary research collaboration."
    ]
  },
  {
    title: "Genomics Analysis",
    points: [
      "Process and analyze complex genomic data at scale.",
      "Identify genetic markers and disease associations.",
      "Support personalized medicine initiatives."
    ]
  },
  {
    title: "Healthcare Analytics",
    points: [
      "Population health analysis and trend prediction.",
      "Healthcare resource utilization optimization.",
      "Evidence-based practice development."
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