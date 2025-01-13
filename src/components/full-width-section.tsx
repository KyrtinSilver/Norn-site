import { cn } from "@/lib/utils"

interface FullWidthSectionProps {
  children: React.ReactNode
  className?: string
  background?: string
}

export function FullWidthSection({ children, className, background }: FullWidthSectionProps) {
  return (
    <section className={cn("w-full px-4 py-16 md:py-24", background && `bg-${background}`, className)}>
      <div className="mx-auto max-w-[--page-max-width]">
        {children}
      </div>
    </section>
  )
} 