"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Lightbulb, TrendingUp, HeartHandshake, CheckCircle2, AlertCircle } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const partnershipBenefits = [
  {
    title: "Innovation Access",
    description: "Get early access to cutting-edge AI technologies and shape product development.",
    icon: <Lightbulb className="w-6 h-6 text-primary" />
  },
  {
    title: "Strategic Growth",
    description: "Accelerate your business growth with AI-powered solutions and expert support.",
    icon: <TrendingUp className="w-6 h-6 text-primary" />
  },
  {
    title: "Expert Support",
    description: "Work directly with our team of AI experts to optimize implementation and results.",
    icon: <HeartHandshake className="w-6 h-6 text-primary" />
  }
]

export default function PartnershipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      role: formData.get('role'),
      partnershipType: formData.get('partnership-type'),
      message: formData.get('message'),
      subject: 'Partnership Inquiry', // Pre-filled subject for partnership inquiries
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
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h1 className="text-4xl font-[500] tracking-tight mb-4">Partnership Opportunities</h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Join forces with Norn.ai to drive innovation and create transformative AI solutions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-[500]">{benefit.title}</h3>
                  <p className="text-muted-foreground font-[400]">{benefit.description}</p>
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
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Partner With Us</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Interested in exploring partnership opportunities? Let's discuss how we can work together.
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
                      placeholder="you@company.com" 
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-[500]">Company / Organization</label>
                  <Input 
                    id="company" 
                    name="company"
                    required
                    placeholder="Your company name" 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-[500]">Role</label>
                  <Input 
                    id="role" 
                    name="role"
                    required
                    placeholder="Your role" 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="partnership-type" className="text-sm font-[500]">Partnership Type</label>
                  <Input 
                    id="partnership-type" 
                    name="partnership-type"
                    required
                    placeholder="e.g., Technology Integration, Research Collaboration" 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-[500]">Message</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    required
                    placeholder="Tell us about your partnership interests and how we can collaborate."
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