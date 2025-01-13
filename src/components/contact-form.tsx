'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      // In a real application, you would send this to your API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setMessage('Thank you for your message. We will get back to you soon.')
      event.currentTarget.reset()
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
      setMessage('An error occurred. Please try again or email us directly at contact@norn.ai')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Your name"
          disabled={status === 'submitting'}
          className="bg-background"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          disabled={status === 'submitting'}
          className="bg-background"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          required
          placeholder="Subject of your message"
          disabled={status === 'submitting'}
          className="bg-background"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Your message"
          rows={5}
          disabled={status === 'submitting'}
          className="bg-background resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>

      {message && (
        <p className={`mt-4 text-sm ${
          status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        }`}>
          {message}
        </p>
      )}
    </form>
  )
}
