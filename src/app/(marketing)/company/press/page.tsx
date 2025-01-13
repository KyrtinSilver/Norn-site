import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Newspaper, Download, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Press | Norn.ai",
  description: "Press resources and media inquiries for Norn.ai - Leading the future of safe and ethical AI development.",
}

const pressResources = [
  {
    title: "Press Kit",
    description: "Download our press kit including logos, executive photos, and company fact sheet.",
    icon: <Download className="w-6 h-6 text-primary" />
  },
  {
    title: "Latest News",
    description: "Access our recent press releases and company announcements.",
    icon: <Newspaper className="w-6 h-6 text-primary" />
  },
  {
    title: "Events",
    description: "Information about upcoming conferences and speaking engagements.",
    icon: <Calendar className="w-6 h-6 text-primary" />
  }
]

export default function PressPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                Press & Media
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Get the latest news and resources about Norn.ai's innovations in AI technology and development.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Press Resources */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Press Resources</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                Access media resources and company information.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pressResources.map((resource) => (
                <div key={resource.title} className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-[500]">{resource.title}</h3>
                  </div>
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
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-[500]">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-[500]">Email</label>
                    <Input id="email" type="email" placeholder="you@organization.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="organization" className="text-sm font-[500]">Media Organization</label>
                  <Input id="organization" placeholder="Your media organization" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-[500]">Role</label>
                  <Input id="role" placeholder="e.g., Reporter, Editor" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="deadline" className="text-sm font-[500]">Deadline (if applicable)</label>
                  <Input id="deadline" type="date" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-[500]">Inquiry Details</label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your media inquiry, including any specific questions or interview requests."
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full md:w-auto">
                  Submit Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
} 