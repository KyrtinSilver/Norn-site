import { Container } from "@/components/ui/container"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function ComingSoon() {
  return (
    <Container>
      <div className="py-24 text-center">
        <h1 className="text-4xl font-[500] tracking-tight mb-4">Coming Soon</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This documentation section is currently under development.
        </p>
        <Link 
          href="/docs" 
          className="inline-flex items-center text-primary hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Documentation
        </Link>
      </div>
    </Container>
  )
} 