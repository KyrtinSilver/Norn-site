'use client'

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function TimelineNav() {
  const scrollAmount = 320 + 24 // card width + gap

  const scroll = (direction: 'left' | 'right') => {
    const container = document.querySelector('.no-scrollbar')
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={() => scroll('left')}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Scroll left</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={() => scroll('right')}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Scroll right</span>
      </Button>
    </div>
  )
} 