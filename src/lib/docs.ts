import fs from 'fs'
import path from 'path'

interface DocPage {
  title: string
  href: string
  section: string
}

const DOCS_DIR = path.join(process.cwd(), 'src/app/(docs)/docs')
const IGNORED_PATHS = ['[...slug]', 'layout.tsx', 'page.tsx']

export function getAllDocPages(): DocPage[] {
  const pages: DocPage[] = []
  const sections = fs.readdirSync(DOCS_DIR).filter(item => {
    const itemPath = path.join(DOCS_DIR, item)
    return fs.statSync(itemPath).isDirectory() && !IGNORED_PATHS.includes(item)
  })

  sections.forEach(section => {
    const sectionPath = path.join(DOCS_DIR, section)
    const sectionTitle = section.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')

    // Process section index
    pages.push({
      title: sectionTitle,
      href: `/docs/${section}`,
      section: sectionTitle
    })

    // Process nested pages
    const items = fs.readdirSync(sectionPath).filter(item => {
      const itemPath = path.join(sectionPath, item)
      return fs.statSync(itemPath).isDirectory() && !IGNORED_PATHS.includes(item)
    })

    items.forEach(item => {
      const itemTitle = item.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')

      pages.push({
        title: itemTitle,
        href: `/docs/${section}/${item}`,
        section: sectionTitle
      })
    })
  })

  return pages
} 