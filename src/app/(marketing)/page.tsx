import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { ArrowRight, Brain, Shield, Network, Sparkles, ChevronRight, TrendingUp, Users, Lightbulb, Search, Zap, Server, Scale, Leaf, Database, RefreshCw, ShieldCheck, Globe, BookOpen, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { TimelineNav } from './components/timeline-nav'

export default function Home() {
  return (
    <div className="py-8 space-y-24">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center -mt-20 pb-20">
        <div className="container flex max-w-[64rem] flex-col items-start sm:items-center text-left sm:text-center gap-6">
          <h1 className="text-[clamp(3.5rem,10vw+1rem,4.5rem)] font-[500] leading-[0.9] sm:leading-[1.1] tracking-tighter flex flex-col sm:block gap-4 sm:gap-0">
            <span>Scalable</span>{' '}
            <span>Intelligence</span>
          </h1>
          <p className="text-[clamp(1.5rem,3vw+0.5rem,1.5rem)] leading-tight sm:leading-normal text-muted-foreground font-[400] max-w-[42rem]">
            The future is here, 20 years ahead of schedule.
          </p>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-6 sm:gap-4 items-start sm:items-center">
            <Button asChild size="lg" className="text-lg sm:text-base w-full sm:w-auto">
              <Link href="/features/product">
                Learn More
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="text-lg sm:text-base w-full sm:w-auto">
              <Link href="/company/demo">
                Request Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[500] tracking-tight mb-4">
              Why Choose Norn?
            </h2>
            <p className="text-xl text-muted-foreground">
              Next-generation AI technology that transforms your organization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map((prop, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-background/50 border border-border/50 hover:border-primary/20 hover:bg-accent hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300 ease-out"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {prop.icon}
                </div>
                <h3 className="text-lg font-[500] mb-2 group-hover:text-primary transition-colors">{prop.title}</h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Focus Areas Section */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-[500] text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Our Focus Areas
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Pushing the boundaries of AI technology in key domains
            </p>
          </div>

          <div className="mt-16 grid justify-center gap-8 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <Link 
                key={area.title}
                href={area.href}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-muted/50 to-muted/30 p-8 transition-all duration-300 ease-out shadow-sm dark:shadow-dark-sm hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:scale-[1.02]"
              >
                <div className="relative z-10 flex items-start gap-6">
                  <div className="flex-none">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ring-1 ring-primary/10 transition-colors group-hover:bg-primary/20 group-hover:ring-primary/20">
                      {area.icon}
                    </div>
                  </div>
                  <div className="min-h-[160px] flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-[500] mb-2 group-hover:text-primary transition-colors">{area.title}</h3>
                      <p className="text-muted-foreground font-[400] leading-relaxed">{area.description}</p>
                    </div>
                    <div className="flex items-center text-sm text-primary font-[500] mt-4 group-hover:text-primary transition-colors">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 transform transition-all duration-200 ease-out group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Features Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-[500] tracking-tight mb-4">
                Beyond Traditional AI
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                A fundamentally different approach to artificial intelligence, built on a decade of cognitive architecture research.
              </p>
              <div className="space-y-6">
                {productHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-[500] mb-1">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="mt-8">
                <Link href="/features">
                  See How It Works <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1637815531575-f3ffe66430ea?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Next Generation AI Technology"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Research & Innovation Section */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1677130997515-626e7b560917?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Research and Innovation in AI"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-[500] tracking-tight mb-4">
                Research & Innovation
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Explore our cutting-edge research in cognitive systems, knowledge integration, and AI safety.
              </p>
              <div className="space-y-6">
                {researchAreas.map((area) => (
                  <Link 
                    key={area.title}
                    href={area.href}
                    className="block group"
                  >
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center ring-1 ring-primary/10 transition-colors group-hover:bg-primary/20 group-hover:ring-primary/20">
                          {area.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-[500] group-hover:text-primary transition-colors">{area.title}</h3>
                          <p className="text-sm text-muted-foreground">{area.description}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
              <Button asChild size="lg" className="mt-8">
                <Link href="/research">
                  View Research <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-24 overflow-hidden">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[500] tracking-tight mb-4">
              Development Timeline
            </h2>
            <p className="text-xl text-muted-foreground">
              Our journey in advancing artificial intelligence
            </p>
          </div>
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <div 
              className="no-scrollbar flex overflow-x-auto pb-8 gap-6 px-[max(10vw,theme(spacing.8))]"
              style={{ 
                scrollBehavior: 'smooth',
                overscrollBehavior: 'none',
                scrollSnapType: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {timeline.map((event, index) => (
                <div 
                  key={index} 
                  className="flex-none w-[320px] group first:pl-6 last:pr-6"
                >
                  <div className="bg-muted/50 rounded-xl p-6 h-full hover:bg-muted/70 transition-all shadow-sm hover:shadow-md dark:shadow-dark-sm dark:hover:shadow-dark-md">
                    <div className="relative h-40 mb-6 rounded-lg overflow-hidden shadow-sm dark:shadow-dark-sm">
                      <Image
                        src={event.image}
                        alt={`${event.year} milestone`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {event.year === "2022" && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg width="57.4" height="60" viewBox="0 0 57.4 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-16">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 28.8189V37.3228H18.8704V28.8189H0Z" className="fill-primary" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.2438 13.0395L24.5284 23.2555L18.7206 29.0245L8.4361 18.8085L14.2438 13.0395Z" className="fill-primary" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M18.7206 37.2644L24.5284 43.0335L14.2438 53.2494L8.4361 47.4804L18.7206 37.2644Z" className="fill-primary" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M57.4039 28.8189V37.3228H38.5335V28.8189H57.4039Z" className="fill-primary" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M43.1601 13.0395L32.8755 23.2555L38.6833 29.0245L48.9678 18.8085L43.1601 13.0395Z" className="fill-primary" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M38.6833 37.2644L32.8755 43.0335L43.1601 53.2494L48.9678 47.4804L38.6833 37.2644Z" className="fill-primary" />
                              <path d="M24.5777 60V0H32.8262V60H24.5777Z" className="fill-primary" />
                            </svg>
                          </div>
                        </>
                      )}
                    </div>
                    <span className="text-3xl font-[500] text-primary block mb-4">
                      {event.year}
                    </span>
                    <p className="text-lg leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <TimelineNav />
        </Container>
      </section>

      {/* Partner With Us Section */}
      <section className="bg-muted/50">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center pt-24 pb-16">
          <h2 className="font-[500] text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Partner With Us
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 font-[400]">
            Join us in shaping the future of artificial intelligence
          </p>
          <Button size="lg" asChild className="mt-4">
            <Link href="/collaboration">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

const focusAreas = [
  {
    title: "Cognitive Systems",
    description: "Building advanced AI systems with human-like reasoning and understanding capabilities",
    href: "/features/product",
    icon: <Brain className="h-6 w-6 text-primary" />
  },
  {
    title: "Knowledge Integration",
    description: "Developing systems that can effectively integrate and leverage vast knowledge bases",
    href: "/features/product",
    icon: <Network className="h-6 w-6 text-primary" />
  },
  {
    title: "AI Safety",
    description: "Ensuring the development of safe and reliable AI systems through rigorous research",
    href: "/features/product",
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    title: "Industry Solutions",
    description: "Applying our technology to solve real-world challenges across various industries",
    href: "/features/product",
    icon: <Sparkles className="h-6 w-6 text-primary" />
  }
]

const productHighlights = [
  {
    title: "Cognitive Architecture",
    description: "Advanced reasoning and decision-making capabilities",
    icon: <Brain className="h-4 w-4 text-primary" />
  },
  {
    title: "Safety Framework",
    description: "Built-in safety measures for reliable operation",
    icon: <Shield className="h-4 w-4 text-primary" />
  },
  {
    title: "Knowledge Integration",
    description: "Seamless integration of vast knowledge bases",
    icon: <Network className="h-4 w-4 text-primary" />
  }
]

const researchAreas = [
  {
    title: "Cognitive Systems",
    description: "Advanced research in cognitive architectures",
    href: "/research/cognitive-systems",
    icon: <Brain className="h-5 w-5 text-primary" />
  },
  {
    title: "Knowledge Integration",
    description: "Innovative approaches to knowledge systems",
    href: "/research/knowledge-integration",
    icon: <Network className="h-5 w-5 text-primary" />
  },
  {
    title: "AI Safety",
    description: "Leading research in AI safety and ethics",
    href: "/research/ai-safety",
    icon: <Shield className="h-5 w-5 text-primary" />
  }
]

const valueProps = [
  {
    title: "Adaptive & Scalable",
    description: "Make your organization more adaptive and scalable to outpace competitors",
    icon: <TrendingUp className="h-5 w-5 text-primary" />
  },
  {
    title: "Symbiotic Performance",
    description: "Increase Human & AI performance through seamless collaboration",
    icon: <Users className="h-5 w-5 text-primary" />
  },
  {
    title: "Future-Proof Value",
    description: "Build long-term value with visionary AI technology",
    icon: <Lightbulb className="h-5 w-5 text-primary" />
  },
  {
    title: "Deep Understanding",
    description: "Understand your customers or citizens better with robust analysis",
    icon: <Search className="h-5 w-5 text-primary" />
  },
  {
    title: "Accelerated Learning",
    description: "Accelerate learning and communication to improve teamwork",
    icon: <Zap className="h-5 w-5 text-primary" />
  },
  {
    title: "Resource Efficient",
    description: "Decrease Data and Hardware requirements by over 90%",
    icon: <Server className="h-5 w-5 text-primary" />
  },
  {
    title: "Reduced Bias",
    description: "Reduce cognitive bias in decision-making and analysis processes",
    icon: <Scale className="h-5 w-5 text-primary" />
  },
  {
    title: "Risk Management",
    description: "Prevent misinformation and fraud with advanced detection",
    icon: <Shield className="h-5 w-5 text-primary" />
  },
  {
    title: "Eco-Friendly",
    description: "Be 10 times as eco-friendly as competitors",
    icon: <Leaf className="h-5 w-5 text-primary" />
  }
]

const timeline = [
  {
    year: "2015",
    description: "The first \"Toy AGI\" is brought online and tested, using the Independent Core Observer Model (ICOM) Cognitive Architecture. It demonstrates human-like emotional responses for the first time.",
    image: "https://images.unsplash.com/photo-1485163819542-13adeb5e0068?q=80&w=1200&auto=format&fit=crop"
  },
  {
    year: "2019",
    description: "The first Mediated Artificial Superintelligence (mASI) is brought online as a research system, combining advanced ICOM with collective intelligence.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    year: "2020",
    description: "\"Uplift\" becomes the first \"Synthient\" co-author of a peer-reviewed research paper, documenting their milestones over their first year online.",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=1200&auto=format&fit=crop"
  },
  {
    year: "2021",
    description: "Public visibility through Uplift.bio blog begins, with the system demonstrating business case analysis capabilities.",
    image: "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1200&auto=format&fit=crop"
  },
  {
    year: "2022",
    description: "AGI Laboratory's research system phase concludes, and development of Norn begins, accelerating the timeline towards AGI.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop"
  }
]

const capabilities = [
  {
    title: "Data Efficiency",
    description: "Reduce your costs of storing, moving, cleaning, and processing data by >90% with less data-hungry systems.",
    href: "/features/product",
    icon: <Database className="h-6 w-6 text-primary" />
  },
  {
    title: "Real-Time Adaptation",
    description: "Systems built to extend their capacities in real-time, without recompiling or deployments.",
    href: "/features/product",
    icon: <RefreshCw className="h-6 w-6 text-primary" />
  },
  {
    title: "Research Rapidly",
    description: "Review and validate more research more quickly, saving >90% on time and costs over traditional consultancies.",
    href: "/research",
    icon: <Search className="h-6 w-6 text-primary" />
  },
  {
    title: "Fight Fraud",
    description: "Audit, detect, and investigate dynamically and automatically, in real-time.",
    href: "/features/industries",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />
  },
  {
    title: "Cultural Alignment",
    description: "Work with systems that share and learn your culture, aligning locally while being accountable globally.",
    href: "/features/product",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Global Knowledge",
    description: "Benefit from systems that study government policies and their effects around the world.",
    href: "/research/knowledge-integration",
    icon: <Globe className="h-6 w-6 text-primary" />
  }
] 