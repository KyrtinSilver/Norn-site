'use client'

import { Container } from "@/components/ui/container"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Solution {
  title: string;
  description: string;
  benefits: string[];
}

interface ImplementationSolution {
  title: string;
  points: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

const specializedSolutions: Solution[] = [
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
];

const implementationSolutions: ImplementationSolution[] = [
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
];

const faqs: FAQ[] = [
  {
    question: "How can Norn improve narrow AI tools like LLMs and RL?",
    answer: "Norn learns to use these tools in much the same way that humans do, as well as some ways that humans cannot. As it develops experience with each tool, and generalizes knowledge from previously learned tools, Norn systems continually improve in tool usage. As Norn also tailors itself to understanding each individual user, this improvement continues independent of whether or not the users themselves improve."
  },
  {
    question: "How does Norn compare to Agents?",
    answer: "Agents are fundamentally narrow AI configured to run in sequences and loops, taking some actions, and still driven by narrow optimizers, making them impossible to align. Norn systems are driven by a human-like motivational system, embedded within a dynamically growing sum of experience, giving them full contextual awareness and alignment to your company, culture, and values. This difference allows them to handle arbitrary levels of complexity, in any domain, to learn and integrate new knowledge as it is needed, both reactively and proactively."
  },
  {
    question: "How does Norn compare to RAG?",
    answer: "RAG, Retrieval Augmented Generation, is a (largely failed) attempt to integrate deterministic knowledge into probabilistic systems, such as LLMs, for handling arbitrary knowledge and scopes. Norn&apos;s fundamental architecture is natively based on graph data, not neural networks, so graph data is not only ever-present as the foundation, it has a rich, dynamically adaptive and growing connectome to add full contextual awareness at any level of granularity that a given subject may require. Our systems were built from scratch for these capacities, where methods like RAG are weak and shallow imitations, applied to technology that can handle no more than that."
  },
  {
    question: "How does Norn compare to CoT methods?",
    answer: "CoT, Chain of Thought, attempts to recursively prompt or loop a narrow AI back on itself, or using a secondary narrow AI, often dramatically increasing the compute cost and reducing efficiency. Norn systems learn constantly, driven by a human-like motivational system and with a growing sum of contextually aware knowledge and experience, allowing them to navigate long sequences of actions, knowledge exploration, and analysis than CoT-based narrow AI systems."
  },
  {
    question: "How does Norn compare to MoE methods?",
    answer: "MoE, Mixture of Experts, increases the sparsity of a narrow AI model, creating a number of minor variations on the same system, often improving overall efficiency relative to baseline larger models. Norn systems are able to consider an simulate counterfactual scenarios with full contextual awareness, in parallel, evaluating and analyzing those options with alignment to human moral and legal systems."
  }
];

export default function NarrowAIPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-medium tracking-tight mb-6">
                Improving Narrow AI with Norn
              </h1>
              <p className="text-xl font-normal text-muted-foreground">
                Enhance your existing narrow AI tools and processes, improving tool usage beyond the most skilled human prompt engineers, while discovering new tools and new ways to use your current tools.
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 font-normal">
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
              <h2 className="text-3xl font-medium tracking-tight mb-4">A Smarter Toolbox</h2>
              <p className="text-xl font-normal text-muted-foreground">
                Norn can help you make the most of the tools available to you, even as those tools are updated and replaced.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specializedSolutions.map((solution: Solution) => (
                <div key={solution.title} className="bg-background rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-medium mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground font-normal mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit: string, index: number) => (
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
                Seamlessly integrate Norn into your existing workflows and systems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {implementationSolutions.map((solution: ImplementationSolution) => (
                <div key={solution.title} className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-medium mb-4">{solution.title}</h3>
                  <div className="space-y-4">
                    {solution.points.map((point: string, index: number) => (
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
                Common questions about implementing Norn in your organization.
              </p>
            </div>
            <div className="max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq: FAQ, index: number) => (
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
  );
} 