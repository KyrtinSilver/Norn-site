"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function DemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('subject', 'Demo Request')
    formData.append('from_name', 'Demo Request Form')
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '')
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      
      if (result.success) {
        form.reset()
        toast.success("Demo request received! We'll contact you shortly to schedule.", {
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
        
        await new Promise(resolve => setTimeout(resolve, 2000))
        router.push('/company/demo/?success=true')
      } else {
        throw new Error(result.message || 'Failed to send request')
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
            <div className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl font-[500] leading-tight tracking-tighter sm:text-5xl md:text-6xl">
                  Request a Demo
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-[42rem]">
                  Experience the first AI system with independent motivation and emotional intelligence.
                </p>
              </div>

              <div className="space-y-10">
                <div className="space-y-6">
                  <h2 className="text-2xl font-[500] tracking-tight">Core Capabilities</h2>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-muted-foreground">
                    <div className="space-y-3">
                      <p className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>Emotional Intelligence</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>Dynamic Knowledge Graph</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>Policy Advisory</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>E-Governance Solutions</span>
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>Debiasing & Auditing</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>Sustainable Development</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>Advanced Analysis</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>Strategic Consulting</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-[500] tracking-tight">Demo Overview</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>SaaS platform demonstration with your use cases</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>Emotional intelligence and memory capabilities</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>Implementation strategy and integration paths</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>ROI analysis and scaling roadmap</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-muted/50 rounded-lg p-8 border border-border/50">
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="space-y-6">
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
                    <label htmlFor="email" className="block text-sm font-[500] mb-2">Work Email</label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      disabled={isSubmitting}
                      autoComplete="email"
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
                      autoComplete="organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-[500] mb-2">Role</label>
                    <Input 
                      id="role" 
                      name="role"
                      required
                      placeholder="Your role"
                      disabled={isSubmitting}
                      autoComplete="organization-title"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-[500] mb-2">Primary Interest</label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      <option value="">Select your primary interest</option>
                      <option value="Intelligence Platform">Intelligence as a Platform</option>
                      <option value="Policy & E-Governance">Policy & E-Governance</option>
                      <option value="Debiasing & Auditing">Debiasing & Noise Auditing</option>
                      <option value="Research & Development">Research & Development</option>
                      <option value="Sustainable Development">Sustainable Development Goals</option>
                      <option value="Analysis & Consulting">Analysis & Consulting</option>
                      <option value="AGI Development">AGI Development</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-[500] mb-2">Use Case Description</label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Describe your specific use case and requirements..."
                      className="min-h-[120px] resize-none"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Request Demo"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 