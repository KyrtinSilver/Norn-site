'use client'

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Book, FileText, Video, MessageSquare, FileIcon, Map } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                Resources & Documentation
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Comprehensive guides, documentation, and learning resources to help you get the most out of Norn.ai.
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
                  <span>Documentation: Detailed API references</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Guides: Step-by-step tutorials</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Examples: Real-world use cases</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Support: Community and help</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Resource Categories */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Resource Categories</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Find the resources you need to succeed with Norn.ai.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category) => (
                <Link 
                  href={category.href} 
                  key={category.title}
                  className="group"
                >
                  <div className="bg-background rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      {category.icon}
                      <h3 className="text-xl font-[500] group-hover:text-primary transition-colors">{category.title}</h3>
                    </div>
                    <p className="text-muted-foreground font-[400] mb-4">{category.description}</p>
                    <div className="flex items-center text-sm text-primary">
                      Explore resources <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Latest Guides */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Latest Guides</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Step-by-step tutorials and implementation guides.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestGuides.map((guide) => (
                <Link 
                  href={guide.href} 
                  key={guide.title}
                  className="group"
                >
                  <div className="bg-muted/50 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-[500] mb-2 group-hover:text-primary transition-colors">{guide.title}</h3>
                    <p className="text-muted-foreground font-[400] mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{guide.readTime}</span>
                      <div className="flex items-center text-sm text-primary">
                        Read guide <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Documentation Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Public Documentation</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Access our comprehensive API documentation, implementation guides, and SDK references.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-sm p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Book className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-[500] mb-2">Norn.ai Documentation</h3>
                  <p className="text-muted-foreground font-[400] mb-6">
                    Get access to our detailed API references, implementation guides, code samples, and SDK documentation. Start building powerful AI solutions with Norn.ai.
                  </p>
                  <Button asChild>
                    <Link href="/resources/docs">
                      Request Documentation Access <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Whitepaper Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Technical Whitepaper</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Download our comprehensive technical whitepaper to learn more about Norn.ai's technology and capabilities.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-sm p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileIcon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-[500] mb-2">Norn.ai Technical Whitepaper</h3>
                  <p className="text-muted-foreground font-[400] mb-6">
                    A detailed exploration of our technology stack, architecture, and implementation strategies. Learn how Norn.ai's advancing the frontiers of artificial intelligence.
                  </p>
                  <Button asChild>
                    <Link href="/resources/whitepaper">
                      Request Whitepaper <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

const resourceCategories = [
  {
    title: "Documentation",
    description: "Comprehensive API references and technical documentation for all Norn.ai features.",
    href: "/docs",
    icon: <Book className="h-6 w-6 text-primary" />
  },
  {
    title: "Guides & Tutorials",
    description: "Step-by-step tutorials and implementation guides for common use cases.",
    href: "/resources/guides",
    icon: <FileText className="h-6 w-6 text-primary" />
  },
  {
    title: "Video Resources",
    description: "Video tutorials and demonstrations of Norn.ai features and implementations.",
    href: "/resources/videos",
    icon: <Video className="h-6 w-6 text-primary" />
  },
  {
    title: "Community & Support",
    description: "Join our community, get help, and share your experiences with other users.",
    href: "/resources/community",
    icon: <MessageSquare className="h-6 w-6 text-primary" />
  },
  {
    title: "Product Roadmap",
    description: "Explore our vision for the future and upcoming features in development.",
    href: "/resources/roadmap",
    icon: <Map className="h-6 w-6 text-primary" />
  },
  {
    title: "Technical Whitepaper",
    description: "Download our comprehensive whitepaper detailing Norn.ai's technology and capabilities.",
    href: "/resources/whitepaper",
    icon: <FileIcon className="h-6 w-6 text-primary" />
  }
]

const latestGuides = [
  {
    title: "Getting Started with Norn.ai",
    description: "A comprehensive guide to setting up and implementing your first Norn.ai solution.",
    readTime: "15 min read",
    href: "/resources/guides/getting-started"
  },
  {
    title: "Advanced Integration Patterns",
    description: "Learn advanced techniques for integrating Norn.ai with existing systems.",
    readTime: "20 min read",
    href: "/resources/guides/advanced-integration"
  },
  {
    title: "Best Practices for Enterprise",
    description: "Enterprise-level implementation strategies and best practices.",
    readTime: "25 min read",
    href: "/resources/guides/enterprise-best-practices"
  }
] 