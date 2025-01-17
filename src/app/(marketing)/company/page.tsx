'use client'

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Briefcase, Shield, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CompanyPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-medium tracking-tight mb-6">
                About Norn.ai
              </h1>
              <p className="text-xl font-normal text-muted-foreground">
                We're building the future of artificial intelligence, focusing on safe and ethical AI development that benefits humanity.
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
                  <span>Mission: Safe AI development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Values: Ethics and transparency</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Team: World-class experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Impact: Global AI solutions</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Company Sections */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Company Overview</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Learn more about our mission, team, and opportunities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link 
                href="/company/team"
                className="group bg-background rounded-lg shadow-sm p-8 hover:shadow-md transition-all hover:scale-[1.02] duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-[500] mb-3 group-hover:text-primary transition-colors">Our Team</h3>
                <p className="text-muted-foreground font-[400] mb-6">Meet the experts and innovators behind Norn.ai's development.</p>
                <div className="flex items-center text-sm text-primary font-[500]">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              <Link 
                href="/company/careers"
                className="group bg-background rounded-lg shadow-sm p-8 hover:shadow-md transition-all hover:scale-[1.02] duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-[500] mb-3 group-hover:text-primary transition-colors">Careers</h3>
                <p className="text-muted-foreground font-[400] mb-6">Join us in building the future of artificial intelligence. Coming soon.</p>
                <div className="flex items-center text-sm text-primary font-[500]">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              <Link 
                href="/company/data-privacy"
                className="group bg-background rounded-lg shadow-sm p-8 hover:shadow-md transition-all hover:scale-[1.02] duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-[500] mb-3 group-hover:text-primary transition-colors">Data Privacy</h3>
                <p className="text-muted-foreground font-[400] mb-6">Learn about our commitment to protecting your data and privacy.</p>
                <div className="flex items-center text-sm text-primary font-[500]">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              <Link 
                href="/company/contact"
                className="group bg-background rounded-lg shadow-sm p-8 hover:shadow-md transition-all hover:scale-[1.02] duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-[500] mb-3 group-hover:text-primary transition-colors">Contact</h3>
                <p className="text-muted-foreground font-[400] mb-6">Get in touch with our team for inquiries and collaboration.</p>
                <div className="flex items-center text-sm text-primary font-[500]">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Our Values</h2>
              <p className="text-xl font-normal text-muted-foreground">
                The principles that guide our work and development.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyValues.map((value) => (
                <div key={value.title} className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                  <div className="space-y-4">
                    {value.points.map((point, index) => (
                      <p key={index} className="text-muted-foreground font-normal">{point}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Demo Request Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto text-center">
            <div className="max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-4">Experience Norn.ai</h2>
              <p className="text-xl font-normal text-muted-foreground">
                See the first AI system with independent motivation and emotional intelligence in action.
              </p>
            </div>
            <Button asChild size="lg" className="min-w-[200px]">
              <Link href="/company/demo">
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

const companySections = [
  {
    title: "Our Team",
    description: "Meet the experts and innovators behind Norn.ai's development.",
    href: "/company/team"
  },
  {
    title: "Careers",
    description: "Join us in building the future of artificial intelligence.",
    href: "/company/careers"
  },
  {
    title: "Contact",
    description: "Get in touch with our team for inquiries and collaboration.",
    href: "/company/contact"
  }
]

const companyValues = [
  {
    title: "Safety & Ethics",
    points: [
      "Commitment to developing safe and ethical AI systems.",
      "Rigorous testing and validation protocols.",
      "Transparent development processes and clear documentation."
    ]
  },
  {
    title: "Innovation & Research",
    points: [
      "Pushing the boundaries of AI capabilities.",
      "Investment in foundational research.",
      "Collaboration with academic institutions."
    ]
  },
  {
    title: "Accessibility & Impact",
    points: [
      "Making advanced AI accessible to organizations.",
      "Focus on real-world applications and solutions.",
      "Commitment to positive societal impact."
    ]
  },
  {
    title: "Collaboration & Growth",
    points: [
      "Building strong partnerships across industries.",
      "Supporting team growth and development.",
      "Fostering an inclusive and innovative culture."
    ]
  }
] 