import { Metadata } from "next"
import { FullWidthSection } from "@/components/full-width-section"

export const metadata: Metadata = {
  title: "Medical Research | Norn.ai",
  description: "Advanced AI solutions for medical research and healthcare innovation",
}

export default function MedicalResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FullWidthSection background="heroGradient">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Medical Research
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Accelerating medical discoveries through AI-powered research and analysis.
          </p>
        </div>
      </FullWidthSection>
      
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Research Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Clinical Research</h3>
              <ul className="list-disc pl-6">
                <li>Trial design optimization</li>
                <li>Patient cohort analysis</li>
                <li>Outcome prediction</li>
                <li>Data pattern recognition</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Drug Development</h3>
              <ul className="list-disc pl-6">
                <li>Molecular modeling</li>
                <li>Drug-target interaction</li>
                <li>Side effect prediction</li>
                <li>Compound screening</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Advanced Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">AI Models</h3>
              <ul className="list-disc pl-6">
                <li>Deep learning networks</li>
                <li>Predictive analytics</li>
                <li>Natural language processing</li>
                <li>Computer vision</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Data Integration</h3>
              <ul className="list-disc pl-6">
                <li>Multi-omics analysis</li>
                <li>Clinical data processing</li>
                <li>Research literature mining</li>
                <li>Real-world evidence</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Research Tools</h3>
              <ul className="list-disc pl-6">
                <li>Automated analysis</li>
                <li>Visualization tools</li>
                <li>Collaboration platforms</li>
                <li>Knowledge graphs</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Impact Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Disease Understanding</h3>
              <p>Advanced AI analysis helps researchers uncover new insights into disease mechanisms, progression, and potential therapeutic targets.</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Treatment Development</h3>
              <p>Accelerated discovery and validation of new treatments through AI-powered analysis of biological data and clinical outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 