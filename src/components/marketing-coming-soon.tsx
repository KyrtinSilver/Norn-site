import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface MarketingComingSoonProps {
  title: string
  description: string
  backLink?: string
  backText?: string
}

export function MarketingComingSoon({ 
  title, 
  description,
  backLink = "/",
  backText = "Back to Home"
}: MarketingComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tighter mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-[600px]">
        {description}
      </p>
      <Button asChild variant="ghost" className="gap-2">
        <Link href={backLink}>
          <ArrowLeft className="h-4 w-4" />
          {backText}
        </Link>
      </Button>
    </div>
  )
} 