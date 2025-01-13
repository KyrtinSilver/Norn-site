import { Metadata } from "next"
import { FullWidthSection } from "@/components/full-width-section"

export const metadata: Metadata = {
  title: "Circular Design Solutions | Norn.ai",
  description: "Implementing circular economy principles in AI development and corporate solutions",
}

export default function CircularDesignPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FullWidthSection background="heroGradient">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Circular Design Solutions
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Revolutionizing corporate sustainability through circular economy principles and AI innovation.
          </p>
        </div>
      </FullWidthSection>
      
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Circular Economy Integration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Design Principles</h3>
              <ul className="list-disc pl-6">
                <li>Regenerative system design</li>
                <li>Zero-waste architecture</li>
                <li>Resource optimization</li>
                <li>Lifecycle management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Implementation Strategy</h3>
              <ul className="list-disc pl-6">
                <li>Sustainable development practices</li>
                <li>Circular supply chains</li>
                <li>Waste elimination</li>
                <li>Resource recovery systems</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">AI-Driven Sustainability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Resource Optimization</h3>
              <p>Our AI systems continuously analyze and optimize resource usage, identifying opportunities for reuse and recycling while minimizing waste throughout the value chain.</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Impact Assessment</h3>
              <p>Advanced analytics provide real-time monitoring of environmental impact, enabling data-driven decisions for sustainable business practices.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Business Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Cost Reduction</h3>
              <ul className="list-disc pl-6">
                <li>Optimized resource use</li>
                <li>Reduced waste management</li>
                <li>Improved efficiency</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <ul className="list-disc pl-6">
                <li>New business models</li>
                <li>Product innovation</li>
                <li>Process improvement</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Competitive Edge</h3>
              <ul className="list-disc pl-6">
                <li>Market differentiation</li>
                <li>Brand enhancement</li>
                <li>Customer loyalty</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 