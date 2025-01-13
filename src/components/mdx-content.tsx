import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('@/components/contact-form'), {
  ssr: false,
})

const Map = dynamic(() => import('@/components/map'), {
  ssr: false,
})

const NewsletterSignup = dynamic(() => import('@/components/newsletter-signup'), {
  ssr: false,
})

const components = {
  ContactForm,
  Map,
  NewsletterSignup,
}

export function MDXContent({ content }: { content: React.ReactNode }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {content}
    </div>
  )
} 