"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileIcon, NewspaperIcon, CalendarIcon, CheckCircle2, AlertCircle } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const pressResources = [
  {
    title: "Press Kit",
    description: "Download our press kit containing logos, brand assets, and company information.",
    icon: <FileIcon className="w-6 h-6 text-primary" />
  },
  {
    title: "Latest News",
    description: "Browse our recent announcements, research publications, and company updates.",
    icon: <NewspaperIcon className="w-6 h-6 text-primary" />
  },
  {
    title: "Events",
    description: "Find information about upcoming conferences, talks, and research presentations.",
    icon: <CalendarIcon className="w-6 h-6 text-primary" />
  }
]

export default function PressPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('subject', 'Press Inquiry')
    formData.append('from_name', 'Press Form')
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()

      if (result.success) {
        form.reset()
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
          duration: 2000,
        })
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Press form error:', error)
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
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h1 className="text-4xl font-[500] tracking-tight mb-4">Press & Media</h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Access press resources and connect with our communications team for media inquiries.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Press Resources */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {pressResources.map((resource, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-[500]">{resource.title}</h3>
                  <p className="text-muted-foreground font-[400]">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Media Inquiries</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                For press and media inquiries, please fill out the form below and our communications team will get back to you promptly.
              </p>
            </div>
            <div className="max-w-2xl bg-background rounded-lg shadow-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-[500]">Name</label>
                    <Input 
                      id="name" 
                      name="name"
                      required
                      placeholder="Your name" 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-[500]">Email</label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      required
                      placeholder="you@organization.com" 
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="organization" className="text-sm font-[500]">Media Organization</label>
                  <Input 
                    id="organization" 
                    name="organization"
                    required
                    placeholder="Your media organization" 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-[500]">Role</label>
                  <Input 
                    id="role" 
                    name="role"
                    required
                    placeholder="e.g., Reporter, Editor" 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="deadline" className="text-sm font-[500]">Deadline (if applicable)</label>
                  <Input 
                    id="deadline" 
                    name="deadline"
                    type="date" 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-[500]">Inquiry Details</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    required
                    placeholder="Please provide details about your media inquiry, including any specific questions or interview requests."
                    className="min-h-[150px]"
                    disabled={isSubmitting}
                  />
                </div>
                <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
} 