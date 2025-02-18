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