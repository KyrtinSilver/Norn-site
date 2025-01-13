"use client"

import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface DocsSearchProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DocsSearch({ className, ...props }: DocsSearchProps) {
  return (
    <div
      className={cn(
        "relative flex h-9 w-full items-center justify-start rounded-md border border-input bg-background px-3 text-sm text-muted-foreground shadow-sm transition-colors hover:border-accent-foreground/20 hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      <Search className="mr-2 h-4 w-4" />
      <span>Search documentation...</span>
      <kbd className="pointer-events-none absolute right-3 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </div>
  )
} 