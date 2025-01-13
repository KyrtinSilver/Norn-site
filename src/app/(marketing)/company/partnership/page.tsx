import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Handshake, Lightbulb, Rocket } from "lucide-react"

export const metadata: Metadata = {
  title: "Partnership | Norn.ai",
  description: "Partner with Norn.ai to build innovative AI solutions and drive industry transformation.",
}

const partnershipBenefits = [
  {
    title: "Innovation Access",
    description: "Early access to cutting-edge AI technologies and research insights.",
    icon: <Lightbulb className="w-6 h-6 text-primary" />
  },
  {
    title: "Strategic Growth",
    description: "Collaborative opportunities to expand market reach and capabilities.",
    icon: <Rocket className="w-6 h-6 text-primary" />
  },
  {
    title: "Expert Support",
    description: "Direct access to our team of AI experts and technical resources.",
    icon: <Handshake className="w-6 h-6 text-primary" />
  }
]

export default function PartnershipPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                Partnership Opportunities
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Collaborate with Norn.ai to drive innovation and create transformative AI solutions for your business.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Partnership Benefits</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Discover the advantages of partnering with Norn.ai.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit) => (
                <div key={benefit.title} className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-[500]">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-[400]">{benefit.description}</p>
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
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Partner With Us</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Interested in exploring partnership opportunities? Let's discuss how we can work together.
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
                  <label htmlFor="partnership-type" className="text-sm font-[500]">Partnership Type</label>
                  <Input id="partnership-type" placeholder="e.g., Technology Integration, Research Collaboration" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-[500]">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your partnership interests and how we can collaborate."
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