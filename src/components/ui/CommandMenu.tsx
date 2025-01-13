'use client';

import { useEffect, useRef, useState } from 'react'
import { Command } from 'cmdk'
import { useRouter } from 'next/navigation'

interface DocPage {
  title: string
  href: string
  section: string
}

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [pages, setPages] = useState<DocPage[]>([])
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
      fetch('/api/docs/pages')
        .then(res => res.json())
        .then(data => setPages(data))
    }
  }, [open])

  const handleSelect = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Search documentation"
      className="fixed inset-0 z-50"
    >
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="fixed inset-x-4 top-8 sm:inset-x-auto sm:left-1/2 sm:w-full sm:max-w-2xl sm:-translate-x-1/2">
        <div className="relative overflow-hidden rounded-lg border bg-background shadow-xl">
          <Command.Input
            ref={inputRef}
            value={search}
            onValueChange={setSearch}
            placeholder="Search documentation..."
            className="w-full border-0 bg-transparent px-4 py-3 outline-none focus:ring-0"
          />
          <Command.List className="max-h-[60vh] overflow-y-auto p-2">
            {pages.length === 0 ? (
              <p className="p-4 text-center text-sm text-muted-foreground">
                No results found.
              </p>
            ) : (
              Object.entries(
                pages.reduce((acc, page) => {
                  if (!acc[page.section]) {
                    acc[page.section] = []
                  }
                  acc[page.section].push(page)
                  return acc
                }, {} as Record<string, DocPage[]>)
              ).map(([section, sectionPages]) => (
                <Command.Group key={section} heading={section} className="px-2 py-1.5">
                  {sectionPages.map((page) => (
                    <Command.Item
                      key={page.href}
                      onSelect={() => handleSelect(page.href)}
                      className="flex cursor-pointer items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent"
                    >
                      <div className="flex-1">
                        <div className="font-medium">{page.title}</div>
                        <div className="text-xs text-muted-foreground">{page.section}</div>
                      </div>
                    </Command.Item>
                  ))}
                </Command.Group>
              ))
            )}
          </Command.List>
        </div>
      </div>
    </Command.Dialog>
  )
} 