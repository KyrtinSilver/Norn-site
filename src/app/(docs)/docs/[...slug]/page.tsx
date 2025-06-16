import { ComingSoon } from "@/components/coming-soon"
import { docsConfig } from "@/config/docs"
import { notFound } from "next/navigation"

interface DocsPageProps {
  params: {
    slug: string[]
  }
}

export function generateStaticParams() {
  const paths: { slug: string[] }[] = []
  
  // Add paths from sidebarNav
  docsConfig.sidebarNav.forEach((section) => {
    section.items.forEach((item) => {
      if (item.href && item.href !== '/docs') {
        // Remove /docs/ prefix and split into segments
        const slug = item.href.replace('/docs/', '').split('/')
        paths.push({ slug })
      }
    })
  })

  return paths
}

export default async function DocsPage({ params }: DocsPageProps) {
  const doc = docsConfig.sidebarNav
    .flatMap((section) => section.items)
    .find((item) => item.href === `/docs/${params.slug.join("/")}`)

  if (!doc) {
    return notFound()
  }

  return <ComingSoon />
} 