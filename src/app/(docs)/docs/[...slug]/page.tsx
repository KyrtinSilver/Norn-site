import { ComingSoon } from "@/components/coming-soon"
import { docsConfig } from "@/config/docs"

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

export default function DocsPage({ params }: DocsPageProps) {
  // If it's the main docs page, return null (it will be handled by the root docs/page.tsx)
  if (params.slug.length === 0) {
    return null
  }

  return <ComingSoon />
} 