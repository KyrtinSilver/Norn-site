import { Metadata } from "next"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: {
    template: '%s | Norn.ai',
    default: 'Industries | Norn.ai',
  },
  description: 'Explore how Norn.ai adapts to different industries with specialized AI solutions',
}

interface IndustriesLayoutProps {
  children: React.ReactNode
}

export default function IndustriesLayout({ children }: IndustriesLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container>
          <div className="flex h-14 items-center">
            <div className="flex gap-6 text-sm">
              <a href="/industries" className="transition-colors hover:text-foreground/80">Overview</a>
              <a href="/industries/finance" className="transition-colors hover:text-foreground/80">Finance</a>
              <a href="/industries/healthcare" className="transition-colors hover:text-foreground/80">Healthcare</a>
              <a href="/industries/government" className="transition-colors hover:text-foreground/80">Government</a>
              <a href="/industries/corporate" className="transition-colors hover:text-foreground/80">Corporate</a>
              <a href="/industries/narrow-ai" className="transition-colors hover:text-foreground/80">Narrow AI</a>
            </div>
          </div>
        </Container>
      </nav>
      {children}
    </div>
  )
} 