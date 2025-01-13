'use client'

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
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
              <p className="text-xl font-normal text-muted-foreground">
                Revolutionize patient care and medical research with Norn's advanced AI solutions. Our systems enhance diagnostic accuracy, accelerate research, and improve healthcare delivery.
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
      "Advanced image analysis",
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
    question: "How does Norn.ai ensure patient data privacy and security?",
    answer: "We implement HIPAA-compliant security measures and follow strict medical data privacy protocols. Our systems use end-to-end encryption, secure access controls, and maintain detailed audit trails for all data interactions."
  },
  {
    question: "Can your AI solutions integrate with existing healthcare systems?",
    answer: "Yes, our solutions are designed to integrate seamlessly with major EHR systems and healthcare IT infrastructure. We support standard medical data formats and protocols (HL7, FHIR, DICOM) and provide custom integration options."
  },
  {
    question: "What validation has been done for clinical applications?",
    answer: "Our clinical solutions undergo rigorous validation processes, including peer review, clinical trials where applicable, and compliance with regulatory requirements. We maintain transparency in our validation methodologies and results."
  },
  {
    question: "How do you handle regulatory compliance?",
    answer: "We maintain compliance with healthcare regulations including HIPAA, GDPR, and FDA requirements where applicable. Our systems are designed with regulatory compliance in mind and undergo regular audits and updates."
  },
  {
    question: "What training is provided for healthcare staff?",
    answer: "We provide comprehensive training programs including hands-on workshops, online modules, and ongoing support. Training is customized for different roles and skill levels within healthcare organizations."
  }
] 