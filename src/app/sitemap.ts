import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: 'https://norn.ai',
      lastModified: new Date(),
    },
  ]

  // Add docs routes
  const docsDirectory = path.join(process.cwd(), 'src/app/(docs)/docs')
  const ignoredPaths = ['[...slug]', 'layout.tsx', 'page.tsx']
  
  function getRoutesFromDir(dir: string, basePath: string = ''): string[] {
    const entries = fs.readdirSync(dir)
    let routes: string[] = []
    
    for (const entry of entries) {
      if (ignoredPaths.includes(entry)) continue
      
      const fullPath = path.join(dir, entry)
      const relativePath = path.join(basePath, entry)
      const isDirectory = fs.statSync(fullPath).isDirectory()
      
      if (isDirectory) {
        // Add the directory index route
        routes.push(relativePath)
        
        // Add nested routes
        routes = routes.concat(getRoutesFromDir(fullPath, relativePath))
      }
    }
    
    return routes
  }

  const docRoutes = getRoutesFromDir(docsDirectory).map(route => ({
    url: `https://norn.ai/docs/${route}`,
    lastModified: new Date(),
  }))

  // Add marketing routes
  const marketingDirectory = path.join(process.cwd(), 'src/app/(marketing)')
  const marketingRoutes = getRoutesFromDir(marketingDirectory).map(route => ({
    url: `https://norn.ai/${route}`,
    lastModified: new Date(),
  }))

  return [...routes, ...docRoutes, ...marketingRoutes]
} 