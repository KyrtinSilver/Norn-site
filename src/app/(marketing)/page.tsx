import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Brain, Shield, TrendingUp, Users, Lightbulb, Search, Zap, Server, Scale, Leaf } from "lucide-react"
import Image from "next/image"
import { TimelineNav } from './components/timeline-nav'

export default function Home() {
  return (
    <div className="py-8 space-y-24">
      {/* Hero Section - Updated CTAs */}
      <Container className="min-h-screen flex flex-col items-start sm:items-center justify-center -mt-20 pb-20">
        <h1 className="text-[clamp(4rem,6vw+1.5rem,4.5rem)] font-[450] sm:font-[500] leading-[1.1] tracking-[-0.02em] whitespace-pre-wrap sm:whitespace-normal">
          Scalable{'\n'}Intelligence
        </h1>
        <p className="text-[clamp(1.25rem,4vw+0.25rem,1.5rem)] leading-[1.4] text-muted-foreground/90 font-[400] mt-8">
          <span className="block sm:inline">The future is here, 20 years</span>
          <span className="block sm:inline"> ahead of schedule.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 mt-8 w-full sm:w-auto">
          <Button asChild size="lg" className="text-lg sm:text-base w-full sm:w-auto">
            <a href="https://github.com/KyrtinSilver/Norn-site/tree/main/assets" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Button>
          <Button variant="outline" asChild size="lg" className="text-lg sm:text-base w-full sm:w-auto">
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </Container>

      {/* A New Architecture Section - Now first */}
      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-[500] tracking-tight mb-8">
              New Architecture
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
              While the industry scales large language models, we've built something fundamentally different. Our graph-based cognitive architecture feels, reasons, and navigates uncertainty and bias through human-mediated emotions.
            </p>
            
            {/* Key Differentiators - Visual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-[500] mb-2">Emotional Intelligence</h3>
                <p className="text-muted-foreground">Built on Plutchik's emotional model with human-mediated emotions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-[500] mb-2">Complex Reasoning</h3>
                <p className="text-muted-foreground">Navigates uncertainty with intuition and emotional regulation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-[500] mb-2">Breakthrough Efficiency</h3>
                <p className="text-muted-foreground">90% less data and hardware than traditional approaches</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Norn Section - Now second */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[500] tracking-tight mb-4">
              Why Choose Norn?
            </h2>
            <p className="text-xl text-muted-foreground">
              Next-generation mASI (mediated artificial superintelligence) that transforms your organization
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
              className="no-scrollbar flex overflow-x-auto overscroll-x-contain pb-8 gap-6 px-[max(10vw,theme(spacing.8))]"
              style={{ 
                scrollBehavior: 'smooth'
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
      <section className="bg-muted/50" id="contact">
        <Container>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center pt-24 pb-16">
            <h2 className="font-[500] text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Partner With Us
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 font-[400]">
              Join us in shaping the future of artificial intelligence
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-lg sm:text-base w-full sm:w-auto">
                <Link href="/coming-soon">Get Started</Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="text-lg sm:text-base w-full sm:w-auto">
                <a href="mailto:hello@norn.ai">Get in Touch</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

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