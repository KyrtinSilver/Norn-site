'use client'

import { Container } from "@/components/ui/container"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FinancePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-medium tracking-tight mb-6">
                Financial AI Solutions
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Discover how Norn.ai's AI solutions are transforming the financial sector with advanced analytics and intelligent automation.
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
                  <span>Risk Management: Advanced predictive modeling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Trading Systems: Automated strategy execution</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Investment Analysis: Data-driven decision support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Compliance: Regulatory monitoring and reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Security: Enhanced fraud detection systems</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trading Solutions Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Trading Solutions</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Enhance trading operations with AI-powered analysis and automation tools.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tradingSolutions.map((solution) => (
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

      {/* Risk & Compliance Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Risk & Compliance</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Strengthen risk management and ensure regulatory compliance with AI-powered solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {riskSolutions.map((solution) => (
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
                Common questions about implementing AI solutions in financial services.
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

const tradingSolutions = [
  {
    title: "Market Analysis",
    description: "AI-powered market analysis and prediction tools.",
    benefits: [
      "Real-time market monitoring",
      "Pattern recognition in market data",
      "Predictive analytics for trends"
    ]
  },
  {
    title: "Trading Automation",
    description: "Automated trading systems with advanced execution.",
    benefits: [
      "Strategy automation",
      "Smart order routing",
      "Performance optimization"
    ]
  },
  {
    title: "Portfolio Management",
    description: "Intelligent portfolio optimization and rebalancing.",
    benefits: [
      "Risk-adjusted allocation",
      "Automated rebalancing",
      "Performance attribution"
    ]
  }
]

const riskSolutions = [
  {
    title: "Risk Assessment",
    points: [
      "Advanced risk modeling and scenario analysis.",
      "Real-time risk monitoring and alerts.",
      "Comprehensive risk reporting and visualization."
    ]
  },
  {
    title: "Compliance Monitoring",
    points: [
      "Automated regulatory compliance checking.",
      "Transaction monitoring for suspicious activity.",
      "Audit trail generation and reporting."
    ]
  },
  {
    title: "Fraud Detection",
    points: [
      "Real-time fraud detection and prevention.",
      "Pattern recognition for unusual activities.",
      "Advanced authentication systems."
    ]
  },
  {
    title: "Market Surveillance",
    points: [
      "Monitor trading activities for market abuse.",
      "Detect and prevent insider trading.",
      "Ensure fair trading practices."
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