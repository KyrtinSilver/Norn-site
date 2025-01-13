import { Container } from "@/components/ui/container"

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <Container className={className}>
      {children}
    </Container>
  )
} 