import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Community | Norn.ai",
  description: "Join our growing community of developers, researchers, and AI enthusiasts.",
}

export default function CommunityPage() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] flex items-center">
      <Container>
        <div className="max-w-[85rem] mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-[500] tracking-tight mb-4">
              Community Hub Coming Soon
            </h1>
            <p className="text-xl font-[400] text-muted-foreground mb-8">
              We're building a vibrant community platform where you can connect with other Norn.ai users, share experiences, and get support. The community hub will launch soon with forums, discussion boards, and resources.
            </p>
            <Button asChild size="lg">
              <Link href="/collaboration">
                Back to Collaboration
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
} 