'use client'

import dynamic from 'next/dynamic'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

const ContactForm = dynamic(() => import('@/components/contact-form'), {
  ssr: false,
})

const Map = dynamic(() => import('@/components/map'), {
  ssr: false,
})

const components = {
  ContactForm,
  Map,
}

export default function MDXContent({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} components={components} />
} 