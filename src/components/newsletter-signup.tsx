'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function NewsletterSignup() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const formData = new FormData(event.currentTarget)
    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      email: formData.get('email'),
      subject: 'Newsletter Signup',
      from_name: 'Newsletter Form',
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to subscribe')
      }

      setStatus('success')
      toast.success('Subscribed!', {
        description: 'Thank you for subscribing to our newsletter.',
        icon: <CheckCircle2 className="h-4 w-4" />,
      })
      event.currentTarget.reset()
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setStatus('error')
      toast.error('Error', {
        description: 'Failed to subscribe. Please try again.',
        icon: <AlertCircle className="h-4 w-4" />,
      })
    } finally {
      setStatus('idle')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <Input
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        disabled={status === 'submitting'}
        className="bg-background"
      />
      <Button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  )
}
