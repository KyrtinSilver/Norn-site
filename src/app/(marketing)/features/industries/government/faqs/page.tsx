import { Container } from "@/components/ui/container"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function GovernmentFAQsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions about implementing AI solutions in government agencies.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>
    </div>
  )
}

const faqs = [
  {
    question: "How does Norn.ai ensure data security in government implementations?",
    answer: "Our solutions adhere to the highest security standards, including FedRAMP compliance, end-to-end encryption, and secure data handling protocols. We implement multiple layers of security measures, including access controls, audit logging, and regular security assessments. All data is processed in compliance with relevant government regulations and security requirements."
  },
  {
    question: "What kind of training is provided for government staff?",
    answer: "We provide comprehensive training programs tailored to different user roles within government agencies. This includes hands-on workshops, detailed documentation, video tutorials, and ongoing support. Our training covers both technical aspects and best practices for AI implementation in government contexts."
  },
  {
    question: "Can the AI solutions be customized for specific agency needs?",
    answer: "Yes, our solutions are highly customizable and can be tailored to meet the unique requirements of different government agencies and departments. We work closely with each agency to understand their specific needs, workflows, and objectives to deliver customized solutions that integrate seamlessly with existing systems."
  },
  {
    question: "How do you handle data privacy and compliance requirements?",
    answer: "We maintain strict compliance with all relevant data privacy regulations and government standards. This includes GDPR, CCPA, and agency-specific requirements. Our systems are designed with privacy-by-design principles, ensuring data minimization, purpose limitation, and transparent processing."
  },
  {
    question: "What is the implementation timeline for government projects?",
    answer: "Implementation timelines vary based on project scope and complexity. Typically, initial deployment can be completed within 3-6 months, followed by a period of optimization and refinement. We work with agencies to develop realistic timelines that account for their specific needs and constraints."
  },
  {
    question: "How do you ensure AI decisions are transparent and explainable?",
    answer: "Our AI systems are designed with explainability in mind, providing clear documentation of decision-making processes and data sources. We implement tools for audit trails and decision explanations, ensuring transparency and accountability in all AI-driven processes."
  },
  {
    question: "What support is available after implementation?",
    answer: "We provide ongoing support through multiple channels, including dedicated support teams, regular check-ins, and system monitoring. This includes technical support, performance optimization, updates, and continuous improvement recommendations based on usage patterns and feedback."
  },
  {
    question: "How do you handle integration with legacy systems?",
    answer: "Our solutions are designed to integrate seamlessly with existing government systems through standard APIs and custom connectors. We have experience working with various legacy systems and can develop appropriate integration strategies while ensuring data integrity and system security."
  }
] 