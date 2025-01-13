import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  className?: string
}

export function Container({
  as: Component = "div",
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto max-w-[--page-max-width] px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  )
} 