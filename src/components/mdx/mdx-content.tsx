'use client'

import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('@/components/contact-form'), {
  ssr: false,
  loading: () => <div>Loading form...</div>
})

const Map = dynamic(() => import('@/components/map'), {
  ssr: false,
  loading: () => <div>Loading map...</div>
})

const NewsletterSignup = dynamic(() => import('@/components/newsletter-signup'), {
  ssr: false,
  loading: () => <div>Loading signup form...</div>
})

const components = {
  ContactForm,
  Map,
  NewsletterSignup,
}

export function MDXContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {children}
    </div>
  )
} 