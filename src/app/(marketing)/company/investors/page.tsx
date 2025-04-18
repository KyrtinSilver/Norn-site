import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Building2, LineChart, Handshake } from "lucide-react"

export const metadata: Metadata = {
  title: "Investors | Norn.ai",
  description: "Connect with Norn.ai for investment opportunities in advanced AI technology.",
}

const investmentHighlights = [
  {
    title: "Market Leadership",
    description: "Pioneering safe and ethical AI development with breakthrough technologies.",
    icon: <LineChart className="w-6 h-6 text-primary" />
  },
  {
    title: "Strong Foundations",
    description: "Backed by world-class research and development team with proven expertise.",
    icon: <Building2 className="w-6 h-6 text-primary" />
  },
  {
    title: "Strategic Vision",
    description: "Clear roadmap for scaling AI solutions and expanding market presence.",
    icon: <Handshake className="w-6 h-6 text-primary" />
  }
]

export default function InvestorsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                Investor Relations
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Join us in shaping the future of AI technology. Learn about investment opportunities with Norn.ai.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Investment Highlights */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Investment Highlights</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Discover why Norn.ai represents a compelling investment opportunity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {investmentHighlights.map((highlight) => (
                <div key={highlight.title} className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-[500]">{highlight.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-[400]">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Connect With Us</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Interested in learning more about investment opportunities? Get in touch with our team.
              </p>
            </div>
            <div className="max-w-2xl bg-background rounded-lg shadow-sm p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-[500]">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-[500]">Email</label>
                    <Input id="email" type="email" placeholder="you@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-[500]">Company / Organization</label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-[500]">Role</label>
                  <Input id="role" placeholder="Your role" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-[500]">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your investment interests and any specific questions you have."
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full md:w-auto">
                  Submit Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
} 