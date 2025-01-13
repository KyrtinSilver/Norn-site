import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Lock, FileCheck, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Data Privacy | Norn.ai",
  description: "Our commitment to protecting your data and privacy with industry-leading standards and practices.",
}

const privacyPrinciples = [
  {
    title: "Data Protection",
    description: "We implement industry-leading security measures to protect your data, including end-to-end encryption and secure data storage practices.",
    icon: <Shield className="w-6 h-6 text-primary" />
  },
  {
    title: "Privacy by Design",
    description: "Privacy is built into our systems from the ground up, not added as an afterthought. We follow privacy-by-design principles in all our development.",
    icon: <Lock className="w-6 h-6 text-primary" />
  },
  {
    title: "Compliance",
    description: "We adhere to global privacy regulations and standards, including GDPR, CCPA, and other relevant data protection laws.",
    icon: <FileCheck className="w-6 h-6 text-primary" />
  },
  {
    title: "User Control",
    description: "We believe in giving users full control over their data, with clear options for data management and deletion.",
    icon: <Users className="w-6 h-6 text-primary" />
  }
]

const dataHandlingPractices = [
  {
    title: "Data Collection",
    items: [
      "Only collect essential data needed for service operation",
      "Transparent about what data is collected and why",
      "Clear opt-in/opt-out mechanisms",
      "Regular review of data collection practices"
    ]
  },
  {
    title: "Data Storage",
    items: [
      "Secure, encrypted storage systems",
      "Regular security audits and updates",
      "Redundant backup systems",
      "Geographic data residency options"
    ]
  },
  {
    title: "Data Usage",
    items: [
      "Strict internal access controls",
      "No unauthorized data sharing",
      "Clear data retention policies",
      "Regular compliance reviews"
    ]
  }
]

export default function DataPrivacyPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                Data Privacy
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                At Norn.ai, we prioritize the protection of your data and privacy. Our commitment to security and transparency guides everything we do.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Privacy Principles */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Our Privacy Principles</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                We follow strict principles to ensure your data is protected and your privacy is respected.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {privacyPrinciples.map((principle) => (
                <div key={principle.title} className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-[500]">{principle.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-[400]">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Data Handling Practices */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Data Handling Practices</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                We implement comprehensive practices to ensure the security and proper handling of your data.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dataHandlingPractices.map((practice) => (
                <div key={practice.title} className="bg-background rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-[500] mb-4">{practice.title}</h3>
                  <ul className="space-y-3">
                    {practice.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 font-[400]">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Have Questions?</h2>
              <p className="text-xl font-[400] text-muted-foreground mb-8">
                We're committed to transparency. If you have any questions about our privacy practices or how we handle data, we're here to help.
              </p>
              <Button asChild>
                <Link href="/company/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
} 