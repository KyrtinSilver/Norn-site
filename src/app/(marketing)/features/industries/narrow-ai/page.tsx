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
                  <span>Taking the guesswork out of Prompting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Efficiency: Getting more value from less data and hardware</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Integration: Making your AI tools look better</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Scalability: Adapting to market demands</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Performance: In the KPIs you have, and the KPIs that you need</span>
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
              Improving performance and adding capacities to your favorite tools.
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

     

const specializedSolutions = [
  {
    title: "Enhancing AI Tools",
    description: "Improving performance and adding capacities to your favorite tools.",
    benefits: [
      "Reducing wasted compute by learning the quirks of each tool",
      "Troubleshooting of errors",
      "Dynamically improving prompting, tailored to each tool"
    ]
  },
  {
    title: "Data Analysis",
    description: "Integrating human-like contextual awareness, scientific processes, and subsequent insights into your workflows, automatically, on-demand, and at scale.",
    benefits: [
      "Pattern and Anomaly Detection",
      "Prediction and Validation",
      "Insights Utilizing Current Global Research"
    ]
  },
  {
    title: "Decision Support",
    description: "Supporting less biased, more robust, and more agile decision-making across organizations and governments, at any level of complexity.",
    benefits: [
      "Domain expertise, fully updated, integrated, and available on-demand",
      "Scenario Analysis and development, utilizing strategy domain expertise",
      "Recommended options, with full transparency for pros, cons, and sources"
    ]
  }
]

const implementationSolutions = [
  {
    title: "System Integration",
    points: [
      "Improve the performance of existing tooling with seamless integration.",
      "Customize your workflow to match the needs of your business.",
      "Scale up or down, adding the modules you need, when you need them."
    ]
  },
  {
    title: "Performance Optimization",
    points: [
      "Monitoring of AI model versioning and anomalies.",
      "Dynamically updated prompting of tool AI systems, with performance metrics of improvements over time and by tool version.",
      "Iteratively improving contextually aware optimization for specific use cases."
    ]
  },
  {
    title: "Augmenting Human Performance",
    points: [
      "Systems that automatically learn to work with and adapt to individual users.",
      "Proactive interactions and recommendations.",
      "Monitoring and analysis of new AI tools, versions, news, and research."
    ]
  },
  {
    title: "Validation and Cybersecurity",
    points: [
      "Rigorous vetting of information, code, and any proposed processes.",
      "Monitoring, Testing, and Analysis of benchmark and KPI improvements.",
      "Risk Analysis, Mitigation, Monitoring, and Active Intervention."
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