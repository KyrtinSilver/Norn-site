"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileIcon, CheckCircle2, AlertCircle } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function WhitepaperPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('subject', 'Whitepaper Request')
    formData.append('from_name', 'Whitepaper Form')
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()

      if (result.success) {
        form.reset()
        toast.success("Request sent successfully! We'll get back to you soon.", {
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
        throw new Error(result.message || 'Failed to send request')
      }
    } catch (error) {
      console.error('Whitepaper form error:', error)
      toast.error("Failed to send request. Please try again.", {
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
                <h1 className="text-4xl font-[500] tracking-tight">Technical Whitepaper</h1>
                <p className="text-xl font-[400] text-muted-foreground">
                  Learn about Norn.ai's groundbreaking approach to artificial intelligence.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-[500]">What's Inside</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FileIcon className="w-5 h-5 mt-1 text-primary" />
                    <div>
                      <p className="font-[500]">Technical Architecture</p>
                      <p className="text-muted-foreground">Detailed overview of our AI system architecture</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileIcon className="w-5 h-5 mt-1 text-primary" />
                    <div>
                      <p className="font-[500]">Research Foundations</p>
                      <p className="text-muted-foreground">Core research and methodologies</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileIcon className="w-5 h-5 mt-1 text-primary" />
                    <div>
                      <p className="font-[500]">Implementation Details</p>
                      <p className="text-muted-foreground">Technical specifications and deployment strategies</p>
                    </div>
                  </li>
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
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-[500] mb-2">Work Email</label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-[500] mb-2">Company</label>
                    <Input 
                      id="company" 
                      name="company"
                      required
                      placeholder="Your company name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-[500] mb-2">Job Title</label>
                    <Input 
                      id="role" 
                      name="role"
                      required
                      placeholder="Your role"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-[500] mb-2">How do you plan to use Norn.ai?</label>
                    <Textarea 
                      id="message" 
                      name="message"
                      required
                      placeholder="Please briefly describe your intended use case"
                      className="min-h-[100px]"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Request Whitepaper"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 