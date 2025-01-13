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

export default function NarrowAIPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-medium tracking-tight mb-6">
                Narrow AI Solutions
              </h1>
              <p className="text-xl font-normal text-muted-foreground">
                Enhance specific tasks and processes with Norn's specialized AI solutions. Our systems deliver focused, efficient results for targeted applications across industries.
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
                  <span>Task Optimization: Specialized process enhancement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Efficiency: Focused solutions for specific needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Integration: Seamless workflow incorporation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Scalability: Adaptable to growing demands</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Performance: Measurable outcome improvements</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Specialized Solutions Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Specialized Solutions</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Targeted AI solutions designed for specific tasks and processes across industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specializedSolutions.map((solution) => (
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

      {/* Implementation & Integration Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Implementation & Integration</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Seamlessly integrate narrow AI solutions into your existing workflows and systems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {implementationSolutions.map((solution) => (
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
                Common questions about implementing narrow AI solutions in your organization.
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

const specializedSolutions = [
  {
    title: "Process Automation",
    description: "Targeted automation for specific business processes.",
    benefits: [
      "Workflow optimization",
      "Error reduction",
      "Increased efficiency"
    ]
  },
  {
    title: "Data Analysis",
    description: "Focused analysis tools for specific data types.",
    benefits: [
      "Pattern recognition",
      "Predictive modeling",
      "Insight generation"
    ]
  },
  {
    title: "Decision Support",
    description: "Specialized decision-making tools for specific domains.",
    benefits: [
      "Expert knowledge integration",
      "Scenario analysis",
      "Recommendation systems"
    ]
  }
]

const implementationSolutions = [
  {
    title: "System Integration",
    points: [
      "Seamless integration with existing workflows and systems.",
      "Custom API development for specific needs.",
      "Scalable deployment options for growing demands."
    ]
  },
  {
    title: "Performance Optimization",
    points: [
      "Continuous monitoring and improvement of AI models.",
      "Regular updates based on performance metrics.",
      "Optimization for specific use cases."
    ]
  },
  {
    title: "Training & Support",
    points: [
      "Comprehensive training for system users.",
      "Ongoing technical support and maintenance.",
      "Regular updates and improvements."
    ]
  },
  {
    title: "Quality Assurance",
    points: [
      "Rigorous testing for specific applications.",
      "Performance validation against benchmarks.",
      "Regular quality assessments and updates."
    ]
  }
]

const faqs = [
  {
    question: "What makes narrow AI different from general AI?",
    answer: "Narrow AI is designed to excel at specific tasks rather than general problem-solving. This focused approach allows for higher efficiency and better performance in targeted applications, making it ideal for specific business processes."
  },
  {
    question: "How can narrow AI improve our specific processes?",
    answer: "Narrow AI can significantly improve efficiency and accuracy in specific tasks by automating repetitive processes, providing focused analysis, and supporting decision-making with specialized knowledge and data processing capabilities."
  },
  {
    question: "What kind of integration support do you provide?",
    answer: "We offer comprehensive integration support including system analysis, custom API development, deployment assistance, and ongoing technical support to ensure smooth implementation and operation."
  },
  {
    question: "How do you measure the success of narrow AI implementations?",
    answer: "We use specific performance metrics tailored to each implementation, tracking improvements in efficiency, accuracy, and other relevant KPIs. Regular performance reviews help optimize the system for better results."
  },
  {
    question: "Can narrow AI solutions scale with our needs?",
    answer: "Yes, our narrow AI solutions are designed to scale. We can adjust processing capacity, expand functionality, and adapt to growing demands while maintaining focused performance in specific applications."
  }
] 