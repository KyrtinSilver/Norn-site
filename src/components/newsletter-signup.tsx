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

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('subject', 'Newsletter Signup')
    formData.append('from_name', 'Newsletter Form')
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()

      if (result.success) {
        form.reset()
        toast.success("Thanks for subscribing!", {
          className: "group",
          style: {
            backgroundColor: "hsl(var(--background))",
            color: "hsl(var(--foreground))",
            border: "1px solid hsl(var(--border))",
          },
          icon: (
            <div className="text-primary dark:text-primary">
              <CheckCircle2 className="h-4 w-4" />
            </div>
          ),
          duration: 2000,
        })
      } else {
        throw new Error(result.message || 'Failed to subscribe')
      }
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
