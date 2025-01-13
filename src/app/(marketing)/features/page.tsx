'use client'

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FeaturesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-medium tracking-tight mb-6">
                Core Features & Capabilities
              </h1>
              <p className="text-xl font-normal text-muted-foreground">
                Explore Norn.ai's comprehensive suite of AI capabilities, from advanced language processing to specialized industry solutions.
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
                  <span>Advanced Language Models: State-of-the-art NLP</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Industry Solutions: Specialized AI tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Research Integration: Latest AI developments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Enterprise Scale: Built for growth</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Categories Grid */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Feature Categories</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Discover our comprehensive range of AI capabilities and solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featureCategories.map((category) => (
                <Link 
                  href={category.href} 
                  key={category.title}
                  className="group"
                >
                  <div className="bg-background rounded-lg shadow-sm p-6 h-full hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">{category.title}</h3>
                    <p className="text-muted-foreground font-normal mb-4">{category.description}</p>
                    <div className="flex items-center text-sm text-primary">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Industry Solutions */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Industry Solutions</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Specialized AI solutions tailored for specific industry needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industrySolutions.map((solution) => (
                <Link 
                  href={solution.href} 
                  key={solution.title}
                  className="group"
                >
                  <div className="bg-muted/50 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-medium mb-4 group-hover:text-primary transition-colors">{solution.title}</h3>
                    <p className="text-muted-foreground font-normal mb-4">{solution.description}</p>
                    <div className="flex items-center text-sm text-primary">
                      Explore solutions <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

const featureCategories = [
  {
    title: "Product",
    description: "Explore our core product features including cognitive architecture, safety framework, and knowledge integration.",
    href: "/features/product"
  },
  {
    title: "Language Processing",
    description: "Advanced natural language processing capabilities for understanding and generating human-like text.",
    href: "/features/language-processing"
  },
  {
    title: "Knowledge Integration",
    description: "Seamlessly integrate and leverage vast knowledge bases for enhanced decision-making.",
    href: "/features/knowledge-integration"
  },
  {
    title: "Enterprise Solutions",
    description: "Scalable AI solutions designed for enterprise-level implementation and growth.",
    href: "/features/enterprise"
  }
]

const industrySolutions = [
  {
    title: "Government",
    description: "AI solutions for policy analysis, public service automation, and efficient governance.",
    href: "/features/industries/government"
  },
  {
    title: "Corporate",
    description: "Enterprise-scale AI implementation for business process optimization and growth.",
    href: "/features/industries/corporate"
  },
  {
    title: "Healthcare",
    description: "Specialized AI tools for medical research, patient care, and healthcare management.",
    href: "/features/industries/healthcare"
  },
  {
    title: "Finance",
    description: "AI solutions for risk assessment, market analysis, and financial decision-making.",
    href: "/features/industries/finance"
  },
  {
    title: "Narrow AI",
    description: "Focused AI solutions for specific tasks and process optimization.",
    href: "/features/industries/narrow-ai"
  }
] 