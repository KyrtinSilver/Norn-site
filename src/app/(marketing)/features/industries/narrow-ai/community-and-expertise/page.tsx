import { Metadata } from "next"
import { FullWidthSection } from "@/components/full-width-section"

export const metadata: Metadata = {
  title: "Community & Expertise | Norn.ai",
  description: "Building a collaborative community of AI experts and practitioners",
}

export default function CommunityExpertisePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FullWidthSection background="heroGradient">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Community & Expertise
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Fostering collaboration and knowledge sharing in the AI community.
          </p>
        </div>
      </FullWidthSection>
      
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Community Building</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Knowledge Sharing</h3>
              <ul className="list-disc pl-6">
                <li>Expert forums</li>
                <li>Research collaboration</li>
                <li>Best practices</li>
                <li>Resource libraries</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Professional Development</h3>
              <ul className="list-disc pl-6">
                <li>Training programs</li>
                <li>Mentorship opportunities</li>
                <li>Skill development</li>
                <li>Career guidance</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Expertise Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
              <ul className="list-disc pl-6">
                <li>AI development</li>
                <li>Machine learning</li>
                <li>Data science</li>
                <li>System architecture</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Domain Knowledge</h3>
              <ul className="list-disc pl-6">
                <li>Industry expertise</li>
                <li>Use case analysis</li>
                <li>Implementation strategies</li>
                <li>Best practices</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
              <ul className="list-disc pl-6">
                <li>Communication</li>
                <li>Problem-solving</li>
                <li>Project management</li>
                <li>Team collaboration</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Community Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Events & Workshops</h3>
              <p>Regular community events, workshops, and conferences to facilitate learning and networking opportunities.</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Research Collaboration</h3>
              <p>Supporting collaborative research projects and knowledge sharing initiatives within the AI community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 