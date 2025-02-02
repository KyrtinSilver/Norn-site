import { cn } from "@/lib/utils"
import React from "react"
import { type BackgroundStyle } from "@/styles/background-styles"

interface FullWidthSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  background?: string | BackgroundStyle
  minHeight?: string | number
  id?: string
  className?: string
  contentClassName?: string
}

export function FullWidthSection({
  children,
  background,
  minHeight = "auto",
  id,
  className,
  contentClassName,
  ...props
}: FullWidthSectionProps) {
  const getBackgroundStyles = () => {
    if (typeof background === 'string') {
      return { backgroundColor: background }
    }
    
    if (background && 'background' in background) {
      return {
        '--bg-light': background.background.light,
        '--bg-dark': background.background.dark,
        background: 'var(--bg-light)',
      } as React.CSSProperties
    }

    return {}
  }

  return (
    <div className="relative w-[100vw] left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]" style={{ minHeight }}>
      <div
        className={cn(
          "absolute inset-0 w-full transition-colors duration-300",
          "dark:[background:var(--bg-dark)]",
          typeof background !== 'string' && background?.className,
          className
        )}
        style={getBackgroundStyles()}
      />
      
      <div 
        id={id}
        className={cn(
          "relative mx-auto max-w-[65ch] px-4 md:px-6 h-full",
          typeof background !== 'string' && background?.text && [
            background.text.light,
            `dark:${background.text.dark}`
          ],
          contentClassName
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

// Optional: Animation backgrounds component
export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="animate-gradient-flow absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
    </div>
  )
} 