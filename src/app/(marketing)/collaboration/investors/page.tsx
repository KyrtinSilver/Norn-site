"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BarChart3, Rocket, Target, CheckCircle2, AlertCircle } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const investmentHighlights = [
  {
    title: "Market Leadership",
    description: "Position yourself at the forefront of AI innovation with early access to breakthrough technologies.",
    icon: <BarChart3 className="w-6 h-6 text-primary" />
  },
  {
    title: "Strong Foundations",
    description: "Join a team with deep expertise in AI safety, cognitive systems, and knowledge integration.",
    icon: <Target className="w-6 h-6 text-primary" />
  },
  {
    title: "Strategic Vision",
    description: "Be part of our mission to develop safe and ethical AI that benefits humanity.",
    icon: <Rocket className="w-6 h-6 text-primary" />
  }
]

export default function InvestorsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      role: formData.get('role'),
      message: formData.get('message'),
      subject: 'Investment Inquiry',
      from_name: 'Investors Form'
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
        throw new Error(result.message || 'Failed to send message')
      }

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
    } catch (error) {
      console.error('Investors form error:', error)
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
              <h1 className="text-4xl font-[500] tracking-tight mb-4">Investment Opportunities</h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Join us in shaping the future of AI technology. Explore investment opportunities with Norn.ai.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Investment Highlights */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {investmentHighlights.map((highlight, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-[500]">{highlight.title}</h3>
                  <p className="text-muted-foreground font-[400]">{highlight.description}</p>
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
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Connect With Us</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Interested in learning more about investment opportunities? Get in touch with our team.
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
                  <label htmlFor="message" className="text-sm font-[500]">Message</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    required
                    placeholder="Tell us about your investment interests and any specific questions you have."
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