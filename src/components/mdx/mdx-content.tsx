'use client'

import { MDXRemote } from 'next-mdx-remote/rsc'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

type MDXContentProps = {
  content: MDXRemoteSerializeResult
}

export function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <MDXRemote source={content.compiledSource} />
    </div>
  )
}
