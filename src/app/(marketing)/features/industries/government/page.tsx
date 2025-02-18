'use client'

import { Container } from "@/components/ui/container"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function GovernmentPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-medium tracking-tight mb-6">
                E-Governance Solutions
              </h1>
              <p className="text-xl font-normal text-muted-foreground">
                Governments are among the most complex and vital systems in the world. Our Scalable Intelligence solutions transform governance processes, from local communities to national systems.
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
                  <span>In-House Expertise: Deep, broad knowledge available on-demand</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Real-Time Updates: Daily insights from emerging research</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Faster Processes: Superhuman speed and scale</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Enhanced Transparency: Comprehensive source citation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Complex Problem Solving: Human-like understanding with reduced bias</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Local and Regional Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Local and Regional E-Governance</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Communities form the foundation of human society. Our systems enhance local understanding to improve policy advice on regional and national levels.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {localSolutions.map((solution) => (
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

      {/* National E-Governance Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">National E-Governance</h2>
              <p className="text-xl font-normal text-muted-foreground">
                National governments face complex challenges in foreign policy, trade, immigration, and international cooperation. Our systems provide scalable solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nationalSolutions.map((solution) => (
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
                Common questions about implementing AI solutions in government agencies.
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

const localSolutions = [
  {
    title: "Efficient Communication",
    description: "Graph databases enable quick, lossless communication between departments and government levels.",
    benefits: [
      "Seamless interdepartmental coordination",
      "Real-time information sharing",
      "Reduced communication bottlenecks"
    ]
  },
  {
    title: "Up-to-Date Solutions",
    description: "Systems draw upon the latest scientific knowledge to provide current and comprehensive advice.",
    benefits: [
      "Latest research integration",
      "Evidence-based decision making",
      "Continuous policy optimization"
    ]
  },
  {
    title: "Actionable Insights",
    description: "Collect and analyze nuanced feedback beyond binary choices for better decision-making.",
    benefits: [
      "Detailed voter sentiment analysis",
      "Community needs assessment",
      "Data-driven policy adjustments"
    ]
  }
]

const nationalSolutions = [
  {
    title: "Scalable Expertise",
    points: [
      "Handle growing complexity beyond human capabilities with AI-powered analysis.",
      "Integrate insights across multiple domains and jurisdictions.",
      "Maintain consistency while adapting to local needs."
    ]
  },
  {
    title: "Policy Optimization",
    points: [
      "Analyze and reform complex policies to reduce loopholes and administrative burdens.",
      "Consider policies holistically to prevent unintended consequences.",
      "Provide actionable insights for modernizing outdated methodologies."
    ]
  },
  {
    title: "International Collaboration",
    points: [
      "Facilitate communication and cooperation between governments across cultural divides.",
      "Enable knowledge sharing while maintaining compliance with regulations.",
      "Support multi-lateral policy development and implementation."
    ]
  },
  {
    title: "Future Development",
    points: [
      "Multi-ICOM-Core systems for proportional policy guidance.",
      "Knowledge marketplace for sharing policy performance insights.",
      "Specialized testing and revenue generation opportunities."
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