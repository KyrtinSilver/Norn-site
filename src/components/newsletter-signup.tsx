'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewsletterSignup() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')

    try {
      // In a real application, you would send this to your API
      console.log('Newsletter signup:', email)
      setStatus('success')
      setMessage('Thank you for subscribing to our newsletter!')
      event.currentTarget.reset()
    } catch (error) {
      setStatus('error')
      setMessage('An error occurred. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-4">
        <Input
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          disabled={status === 'submitting'}
          className="flex-1"
        />
        <Button
          type="submit"
          disabled={status === 'submitting'}
          className="whitespace-nowrap"
        >
          {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </div>

      {message && (
        <p className={`text-sm ${
          status === 'success' ? 'text-green-600' : 'text-red-600'
        }`}>
          {message}
        </p>
      )}
    </form>
  )
}
