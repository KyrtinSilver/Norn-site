"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Mail, Globe, CheckCircle2, AlertCircle } from "lucide-react"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      
      if (result.success) {
        form.reset()
        // Show success toast
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
        
        // Wait for toast to be seen before redirecting
        await new Promise(resolve => setTimeout(resolve, 2000))
        router.push('/company/contact/?success=true')
      } else {
        toast.error(result.message || "Failed to send message. Please try again.", {
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
          duration: 5000,
        })
      }
    } catch {
      toast.error("An error occurred. Please try again.", {
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
        duration: 5000,
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
                      <a href="mailto:hello@norn.ai" className="text-muted-foreground hover:text-primary transition-colors">
                        hello@norn.ai
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 mt-1 text-primary" />
                    <div>
                      <p className="font-[500]">Locations</p>
                      <p className="text-muted-foreground">Netherlands • Vietnam • United States</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            {/* Right Column - Form */}
            <div className="bg-muted/50 rounded-lg p-8">
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''} />
                <input type="hidden" name="from_name" value="Contact Form" />
                <input type="hidden" name="subject" value="New Contact Form Submission" />
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-[500] mb-2">Name</label>
                    <Input 
                      id="name" 
                      name="name"
                      required
                      placeholder="Your name"
                      disabled={isSubmitting}
                      autoComplete="name"
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
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-[500] mb-2">Subject</label>
                    <Input 
                      id="subject" 
                      name="message_subject"
                      required
                      placeholder="How can we help?"
                      disabled={isSubmitting}
                      autoComplete="off"
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
                      autoComplete="off"
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