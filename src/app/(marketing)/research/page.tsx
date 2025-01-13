'use client'

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Network, Lightbulb, Microscope, Code, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ResearchPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                Research & Innovation
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Advancing the frontiers of artificial intelligence through groundbreaking research in safety, ethics, and scalable intelligence.
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
                  <span>Pioneering AI Safety Research</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Ethical AI Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Academic Collaborations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Open Source Contributions</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Research Areas */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Research Areas</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Our multidisciplinary approach to advancing safe and ethical AI technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {researchAreas.map((area) => (
                <Link 
                  href={area.href} 
                  key={area.title}
                  className="group"
                >
                  <div className="bg-background rounded-lg shadow-sm p-6 h-full hover:shadow-md transition-shadow">
                    <div className="mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center ring-1 ring-primary/10 transition-colors group-hover:bg-primary/20 group-hover:ring-primary/20">
                        {area.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-[500] mb-2 group-hover:text-primary transition-colors">{area.title}</h3>
                    <p className="text-muted-foreground font-[400] mb-4">{area.description}</p>
                    <ul className="space-y-2 mb-6">
                      {area.focus.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm font-[400]">
                          <div className="h-1 w-1 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-sm text-primary">
                      Explore research <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Publications & Papers */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Latest Publications</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Peer-reviewed research papers and technical publications from our team.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {publications.map((publication) => (
                <div key={publication.title} className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Microscope className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[500] mb-2">{publication.title}</h3>
                      <p className="text-sm text-muted-foreground font-[400]">{publication.authors}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-[400] mb-4">{publication.abstract}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {publication.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-[400]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="link" asChild className="font-[400]">
                      <Link href={publication.href}>
                        Read paper <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Research Impact */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Research Impact</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Our research directly influences the development of safer, more ethical AI systems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {researchImpact.map((impact) => (
                <div key={impact.title} className="bg-background rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-[500] mb-4">{impact.title}</h3>
                  <p className="text-muted-foreground font-[400] mb-6">{impact.description}</p>
                  <div className="flex items-center gap-2 text-sm font-[400] text-primary">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      {impact.stat}
                    </div>
                    {impact.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

const researchAreas = [
  {
    title: "Cognitive Systems",
    description: "Advanced research in cognitive architectures and bias detection for more reliable AI systems.",
    href: "/research/cognitive-systems",
    icon: <Brain className="w-8 h-8 text-primary" />,
    focus: [
      "Bias detection & mitigation",
      "Decision-making systems",
      "Cognitive architectures",
      "Neural processing"
    ]
  },
  {
    title: "Knowledge Integration",
    description: "Developing sophisticated systems for knowledge representation and integration.",
    href: "/research/knowledge-integration",
    icon: <Network className="w-8 h-8 text-primary" />,
    focus: [
      "Knowledge graphs",
      "Semantic networks",
      "Information retrieval",
      "Data synthesis"
    ]
  },
  {
    title: "AI Safety & Ethics",
    description: "Ensuring the development of safe and ethical AI systems through rigorous research.",
    href: "/research/ai-safety",
    icon: <Shield className="w-8 h-8 text-primary" />,
    focus: [
      "Safety protocols",
      "Ethical frameworks",
      "Risk assessment",
      "Governance models"
    ]
  }
]

const publications = [
  {
    title: "Solving the Abstraction and Reasoning Corpus for Artificial General Intelligence (ARC-AGI) AI Benchmark with ICOM",
    authors: "David Kelley, Kyrtin Atreides",
    abstract: "A novel approach to solving the ARC-AGI benchmark using the Independent Core Observer Model cognitive architecture, demonstrating advanced reasoning capabilities.",
    date: "March 2024",
    tags: ["AGI", "ICOM", "Reasoning"],
    href: "https://www.researchgate.net/publication/386734256_Solving_the_Abstraction_and_Reasoning_Corpus_for_Artificial_General_Intelligence_ARC-AGI_AI_Benchmark_with_ICOM"
  },
  {
    title: "Cognitive biases in natural language: Automatically detecting, differentiating, and measuring bias in text",
    authors: "David Kelley, Kyrtin Atreides",
    abstract: "A comprehensive framework for detecting and measuring cognitive biases in natural language text, providing tools for bias analysis and mitigation.",
    date: "February 2024",
    tags: ["Cognitive Bias", "NLP", "Text Analysis"],
    href: "https://www.researchgate.net/publication/385395195_Cognitive_biases_in_natural_language_Automatically_detecting_differentiating_and_measuring_bias_in_text"
  },
  {
    title: "Problem-Solving and Learning Strategies within the Independent Core Observer Model (ICOM) Cognitive Architecture",
    authors: "David J Kelley",
    abstract: "An exploration of problem-solving methodologies and learning mechanisms within the ICOM cognitive architecture framework.",
    date: "January 2024",
    tags: ["ICOM", "Cognitive Architecture", "Learning"],
    href: "https://www.researchgate.net/publication/381375310_Problem-Solving_and_Learning_Strategies_within_the_Independent_Core_Observer_Model_ICOM_Cognitive_Architecture"
  },
  {
    title: "Non-Logical Simulation Model-based Decision-making Systems to Drive Self-Motivation in Software Systems",
    authors: "David J Kelley",
    abstract: "A novel approach to implementing self-motivated decision-making in software systems using non-logical simulation models.",
    date: "January 2024",
    tags: ["Decision Systems", "Self-Motivation", "Software"],
    href: "https://www.researchgate.net/publication/381397960_Non-Logical_Simulation_Model-based_Decision-making_Systems_to_Drive_Self-Motivation_in_Software_Systems"
  },
  {
    title: "The Complex Chaos of Cognitive Biases and Emotional Observers",
    authors: "Kyrtin Atreides",
    abstract: "An investigation into the intricate relationships between cognitive biases and emotional processing in artificial intelligence systems.",
    date: "March 2024",
    tags: ["Cognitive Bias", "Emotions", "AI Systems"],
    href: "https://www.researchgate.net/publication/386596301_The_Complex_Chaos_of_Cognitive_Biases_and_Emotional_Observers"
  }
]

const researchImpact = [
  {
    title: "Publications",
    description: "Peer-reviewed papers published in leading AI research journals and conferences.",
    stat: "40+",
    metric: "Research Papers"
  },
  {
    title: "Citations",
    description: "Our research is frequently cited and built upon by the global AI research community.",
    stat: "180+",
    metric: "Academic Citations"
  },
  {
    title: "Collaborations",
    description: "Active research partnerships with leading academic institutions and organizations.",
    stat: "15+",
    metric: "Research Partners"
  }
] 