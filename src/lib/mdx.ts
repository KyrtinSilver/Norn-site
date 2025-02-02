import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface Frontmatter {
  title?: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
  image?: string;
  published?: boolean;
  [key: string]: string | string[] | boolean | undefined;
}

export interface Page {
  frontmatter: Frontmatter;
  source: string;
  slug: string;
}

function getAllFilesRecursively(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      getAllFilesRecursively(filePath, fileList)
    } else if (file.endsWith('.mdx')) {
      fileList.push(filePath)
    }
  })

  return fileList
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    // Clean up the slug
    const cleanSlug = slug.replace(/^\/+|\/+$/g, '') // Remove leading/trailing slashes
    
    // Try to find the MDX file
    const mdxPath = path.join(contentDirectory, `${cleanSlug}.mdx`)
    
    console.log('Looking for MDX file:', {
      slug,
      cleanSlug,
      mdxPath,
      exists: fs.existsSync(mdxPath)
    })

    if (!fs.existsSync(mdxPath)) {
      console.warn(`MDX file not found: ${mdxPath}`)
      return null
    }

    const source = await fs.promises.readFile(mdxPath, 'utf-8')
    console.log('Read MDX file, length:', source.length)

    // Extract frontmatter using regex
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/
    const match = source.match(frontmatterRegex)
    const frontmatter = match ? parseYaml(match[1]) : {}
    console.log('Extracted frontmatter:', frontmatter)

    return {
      frontmatter,
      source,
      slug: cleanSlug
    };
  } catch (error) {
    console.error('Error reading MDX file:', error)
    return null
  }
}

function parseYaml(yaml: string): Frontmatter {
  const frontmatter: Frontmatter = {}
  const lines = yaml.split('\n')
  
  for (const line of lines) {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim()
      // Remove quotes if they exist
      frontmatter[key.trim()] = value.replace(/^"(.*)"$/, '$1')
    }
  }
  
  return frontmatter
}

export async function getAllPages(): Promise<Page[]> {
  try {
    const files = getAllFilesRecursively(contentDirectory)
    const mdxFiles = files.filter(file => file.endsWith('.mdx'));

    const pages = await Promise.all(
      mdxFiles.map(async file => {
        const relativePath = path.relative(contentDirectory, file)
        const slug = relativePath.replace(/\.mdx$/, '').replace(/\\/g, '/')
        return await getPageBySlug(slug);
      })
    );

    // Filter out null values and cast to Page[]
    return pages.filter((page): page is Page => page !== null);
  } catch (error) {
    console.error('Error loading pages:', error);
    return [];
  }
}
