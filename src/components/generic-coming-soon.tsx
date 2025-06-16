import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import Link from "next/link"

export function GenericComingSoon() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] flex items-center">
      <Container>
        <div className="max-w-[85rem] mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-[500] tracking-tight mb-4">
              Coming Soon
            </h1>
            <p className="text-xl font-[400] text-muted-foreground mb-8">
              This page is in active development. Stay tuned for updates.
            </p>
            <Button asChild size="lg">
              <Link href="/">
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
} 