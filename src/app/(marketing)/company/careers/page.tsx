import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Careers | Norn.ai",
  description: "Join our team and help build the future of artificial intelligence.",
}

export default function CareersPage() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] flex items-center">
      <Container>
        <div className="max-w-[85rem] mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Briefcase className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-[500] tracking-tight mb-4">
              Careers Coming Soon
            </h1>
            <p className="text-xl font-[400] text-muted-foreground mb-8">
              We're building an exciting careers platform where you can explore opportunities to join our team and help shape the future of AI. Check back soon to see our open positions across engineering, research, and operations.
            </p>
            <Button asChild size="lg">
              <Link href="/company">
                Back to Company
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
} 