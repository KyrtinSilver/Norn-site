import { Metadata } from "next"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Cognitive Bias Detection | Norn.ai",
  description: "Research on identifying and mitigating cognitive biases in AI systems",
}

export default function CognitiveBiasDetectionPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[800px]">
            <h1 className="text-7xl font-medium tracking-tight mb-6">
              Cognitive Bias Detection
            </h1>
            <p className="text-xl font-normal text-muted-foreground">
              Developing advanced systems to identify and mitigate cognitive biases in AI decision-making.
            </p>
          </div>
        </Container>
      </section>
      
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-medium mb-6">Research Focus</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <h3 className="text-2xl font-medium mb-4">Bias Detection</h3>
                  <ul className="list-disc pl-6">
                    <li>Pattern recognition</li>
                    <li>Statistical analysis</li>
                    <li>Data validation</li>
                    <li>Model evaluation</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <h3 className="text-2xl font-medium mb-4">Mitigation Strategies</h3>
                  <ul className="list-disc pl-6">
                    <li>Algorithmic fairness</li>
                    <li>Balanced training</li>
                    <li>Bias correction</li>
                    <li>Validation methods</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-medium mb-6">Types of Bias</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <h3 className="text-2xl font-medium mb-4">Data Bias</h3>
                  <ul className="list-disc pl-6">
                    <li>Selection bias</li>
                    <li>Sampling bias</li>
                    <li>Representation bias</li>
                    <li>Measurement bias</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <h3 className="text-2xl font-medium mb-4">Model Bias</h3>
                  <ul className="list-disc pl-6">
                    <li>Algorithm bias</li>
                    <li>Feature bias</li>
                    <li>Learning bias</li>
                    <li>Prediction bias</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <h3 className="text-2xl font-medium mb-4">Human Bias</h3>
                  <ul className="list-disc pl-6">
                    <li>Confirmation bias</li>
                    <li>Anchoring bias</li>
                    <li>Availability bias</li>
                    <li>Cultural bias</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-medium mt-16 mb-6">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <h3 className="text-2xl font-medium mb-4">Decision Systems</h3>
                  <p>Implementing bias detection and mitigation in AI-powered decision-making systems across various domains.</p>
                </div>
                
                <div className="bg-muted/50 rounded-lg shadow-sm p-6">
                  <h3 className="text-2xl font-medium mb-4">Quality Assurance</h3>
                  <p>Ensuring fairness and objectivity in AI systems through comprehensive bias detection and correction methods.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
} 