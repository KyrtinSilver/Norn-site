"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Mail, Phone, Globe, CheckCircle2, AlertCircle } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
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

      const result = await response.json()

      if (result.success) {
        toast.success("Message sent successfully! We'll get back to you soon.", {
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
        })
        event.currentTarget.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        className: "group",
        style: {
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
        },
        icon: (
          <div className="text-destructive dark:text-destructive">
            <AlertCircle className="h-4 w-4" />
          </div>
        ),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-24">
      <Container>
        <div className="max-w-[85rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-[500] tracking-tight">Contact Us</h1>
                <p className="text-xl text-muted-foreground">
                  Get in touch with our team to learn more about Norn.ai's solutions and how we can help you.
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-[500]">Connect With Us</h2>
                <div className="grid gap-6">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 mt-1 text-primary" />
                    <div>
                      <p className="font-[500]">General Inquiries</p>
                      <p className="text-muted-foreground">For questions about our products, services, or company</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 text-primary" />
                    <div>
                      <p className="font-[500]">Email</p>
                      <a href="mailto:contact@norn.ai" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@norn.ai
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 mt-1 text-primary" />
                    <div>
                      <p className="font-[500]">Locations</p>
                      <p className="text-muted-foreground">San Francisco • New York • London</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-[500]">Looking for Something Specific?</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• For investment opportunities, visit our <a href="/company/investors" className="text-primary hover:underline">Investors page</a></li>
                  <li>• For partnership inquiries, check our <a href="/company/partnership" className="text-primary hover:underline">Partnership page</a></li>
                  <li>• For press & media, visit our <a href="/company/press" className="text-primary hover:underline">Press page</a></li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-muted/50 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-[500] mb-2">Name</label>
                    <Input 
                      id="name" 
                      name="name"
                      required
                      placeholder="Your name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-[500] mb-2">Email</label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-[500] mb-2">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject"
                      required
                      placeholder="How can we help?"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-[500] mb-2">Message</label>
                    <Textarea 
                      id="message" 
                      name="message"
                      required
                      placeholder="Tell us more about your needs..."
                      className="min-h-[150px]"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 