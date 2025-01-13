import { Metadata } from "next"
import { FullWidthSection } from "@/components/full-width-section"

export const metadata: Metadata = {
  title: "Ending Misinformation | Norn.ai",
  description: "Combating misinformation through advanced AI detection and verification systems",
}

export default function EndingMisinformationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FullWidthSection background="heroGradient">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Ending Misinformation
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Leveraging AI technology to detect, analyze, and combat the spread of misinformation.
          </p>
        </div>
      </FullWidthSection>
      
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Detection Systems</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Content Analysis</h3>
              <ul className="list-disc pl-6">
                <li>Pattern recognition</li>
                <li>Semantic analysis</li>
                <li>Source verification</li>
                <li>Context evaluation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Propagation Tracking</h3>
              <ul className="list-disc pl-6">
                <li>Network analysis</li>
                <li>Spread patterns</li>
                <li>Bot detection</li>
                <li>Influence mapping</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Prevention Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Early Warning</h3>
              <ul className="list-disc pl-6">
                <li>Real-time monitoring</li>
                <li>Trend analysis</li>
                <li>Risk assessment</li>
                <li>Alert systems</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Verification Tools</h3>
              <ul className="list-disc pl-6">
                <li>Fact-checking automation</li>
                <li>Source credibility</li>
                <li>Content authenticity</li>
                <li>Cross-referencing</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <ul className="list-disc pl-6">
                <li>Public awareness</li>
                <li>Digital literacy</li>
                <li>Critical thinking</li>
                <li>Best practices</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Impact Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Social Media</h3>
              <p>Implementing advanced detection systems to identify and prevent the spread of misinformation across social platforms.</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">News & Media</h3>
              <p>Supporting journalists and media organizations with AI-powered tools for fact-checking and content verification.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 