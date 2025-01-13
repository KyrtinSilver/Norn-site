import { Metadata } from "next"
import { FullWidthSection } from "@/components/full-width-section"

export const metadata: Metadata = {
  title: "Enhancing Narrow AI | Norn.ai",
  description: "Advancing specialized AI systems through innovative research and development",
}

export default function EnhancingNarrowAIPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FullWidthSection background="heroGradient">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Enhancing Narrow AI
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Pushing the boundaries of specialized AI systems while maintaining safety and reliability.
          </p>
        </div>
      </FullWidthSection>
      
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Enhancement Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Performance Optimization</h3>
              <ul className="list-disc pl-6">
                <li>Model efficiency improvements</li>
                <li>Resource utilization</li>
                <li>Response time optimization</li>
                <li>Accuracy enhancement</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Specialization</h3>
              <ul className="list-disc pl-6">
                <li>Domain-specific training</li>
                <li>Task optimization</li>
                <li>Context awareness</li>
                <li>Expert knowledge integration</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Research Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Architecture Innovation</h3>
              <ul className="list-disc pl-6">
                <li>Neural network design</li>
                <li>Model compression</li>
                <li>Transfer learning</li>
                <li>Hybrid systems</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Safety & Reliability</h3>
              <ul className="list-disc pl-6">
                <li>Robustness testing</li>
                <li>Error handling</li>
                <li>Uncertainty quantification</li>
                <li>Validation methods</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Integration</h3>
              <ul className="list-disc pl-6">
                <li>System interoperability</li>
                <li>API development</li>
                <li>Data pipeline optimization</li>
                <li>Deployment strategies</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Future Directions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Emerging Technologies</h3>
              <p>Exploring new architectures and methodologies to push the boundaries of what specialized AI systems can achieve.</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Industry Applications</h3>
              <p>Developing targeted solutions for specific industries while maintaining high standards of safety and reliability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 