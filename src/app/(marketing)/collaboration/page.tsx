import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Handshake, Building2, Newspaper, Users, Rocket, Globe, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Collaboration | Norn.ai",
  description: "Explore opportunities to collaborate with Norn.ai through investments, partnerships, and more.",
}

const collaborationHighlights = [
  {
    title: "Global Impact",
    description: "Join a network of partners working to shape the future of AI technology worldwide.",
    icon: <Globe className="w-6 h-6 text-primary" />
  },
  {
    title: "Innovation Focus",
    description: "Access cutting-edge AI research and development opportunities.",
    icon: <Rocket className="w-6 h-6 text-primary" />
  },
  {
    title: "Ethical Development",
    description: "Be part of our commitment to safe and responsible AI advancement.",
    icon: <Shield className="w-6 h-6 text-primary" />
  }
]

const collaborationAreas = [
  {
    title: "Investors",
    description: "Join us in shaping the future of AI technology. Learn about investment opportunities and connect with our team.",
    href: "/collaboration/investors",
    icon: <Building2 className="w-6 h-6 text-primary" />,
    features: [
      "Early access to breakthrough technologies",
      "Strategic growth opportunities",
      "Direct engagement with leadership"
    ]
  },
  {
    title: "Partnerships",
    description: "Collaborate with us to drive innovation and create transformative AI solutions for your business.",
    href: "/collaboration/partnership",
    icon: <Handshake className="w-6 h-6 text-primary" />,
    features: [
      "Technology integration opportunities",
      "Joint research initiatives",
      "Custom solution development"
    ]
  },
  {
    title: "Press & Media",
    description: "Access press resources and connect with our communications team for media inquiries.",
    href: "/collaboration/press",
    icon: <Newspaper className="w-6 h-6 text-primary" />,
    features: [
      "Press kit and brand resources",
      "Expert commentary access",
      "Event coverage opportunities"
    ]
  },
  {
    title: "Community",
    description: "Join our growing community of developers, researchers, and AI enthusiasts.",
    href: "/collaboration/community",
    icon: <Users className="w-6 h-6 text-primary" />,
    features: [
      "Developer resources and support",
      "Knowledge sharing platforms",
      "Networking opportunities"
    ]
  }
]

export default function CollaborationPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                Collaborate With Us
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Discover opportunities to work with Norn.ai and be part of our mission to develop safe and ethical AI technology.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Secondary Hero */}
      <section className="relative pb-24">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-6 font-[400]">
                {collaborationHighlights.map((highlight) => (
                  <div key={highlight.title} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{highlight.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Collaboration Areas */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Ways to Collaborate</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Explore different ways to engage and partner with Norn.ai.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collaborationAreas.map((area) => (
                <div key={area.title} className="bg-background rounded-lg shadow-sm p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-[500]">{area.title}</h3>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {area.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 font-[400]">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={area.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Vision Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Our Collaborative Vision</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                We believe in the power of collaboration to accelerate the development of safe and ethical AI technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collaborationHighlights.map((highlight) => (
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
    </div>
  )
} 