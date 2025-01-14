'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const formData = new FormData(event.currentTarget)
    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    console.log('Form submission data:', data)
    console.log('Web3Forms key:', process.env.NEXT_PUBLIC_WEB3FORMS_KEY)

    try {
      console.log('Attempting to submit to Web3Forms...')
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      })

      console.log('Response status:', response.status)
      const result = await response.json()
      console.log('Response data:', result)

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message')
      }

      setStatus('success')
      toast.success('Message Sent!', {
        description: 'Thank you for your message. We will get back to you soon.',
        icon: <CheckCircle2 className="h-4 w-4" />,
      })
      event.currentTarget.reset()
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
      toast.error('Error', {
        description: 'An error occurred. Please try again or email us directly at contact@norn.ai',
        icon: <AlertCircle className="h-4 w-4" />,
      })
    } finally {
      setStatus('idle')
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
    </form>
  )
}
