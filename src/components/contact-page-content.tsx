"use client"

import dynamic from 'next/dynamic'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

const ContactForm = dynamic(
  () => import('@/components/contact-form'),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse">
        <div className="h-[400px] bg-muted rounded-lg"></div>
      </div>
    )
  }
)

export function ContactPageContent() {
  return (
    <div className="mx-auto max-w-[--page-max-width] px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-[500] mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="w-full">
          <ContactForm />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-medium">Visit Us</h2>
            <div className="flex items-start space-x-3 text-muted-foreground">
              <MapPin className="w-5 h-5 mt-0.5" />
              <div className="text-sm">
                <p>123 AI Street</p>
                <p>San Francisco, CA 94105</p>
                <p>United States</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-medium">Business Hours</h2>
            <div className="flex items-start space-x-3 text-muted-foreground">
              <Clock className="w-5 h-5 mt-0.5" />
              <div className="text-sm">
                <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-medium">Get in Touch</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <p className="text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <p className="text-sm">contact@norn.ai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 