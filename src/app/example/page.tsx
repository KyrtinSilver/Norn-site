import { FullWidthSection } from "@/components/ui/FullWidthSection"
import { getBackgroundStyle } from "@/styles/background-styles"

export const metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function ExamplePage() {
  return (
    <article>
      {/* Hero section with gradient background */}
      <FullWidthSection
        background={getBackgroundStyle("heroGradient")}
        minHeight="600px"
        className="py-20"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to Our Platform</h1>
          <p className="text-xl opacity-90">Discover the power of full-width sections</p>
        </div>
      </FullWidthSection>

      {/* Feature section with light background */}
      <FullWidthSection
        background={getBackgroundStyle("feature")}
        className="py-24"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <div className="grid gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Full Width Backgrounds</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create immersive experiences with edge-to-edge backgrounds while maintaining content width
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Flexible Content</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Maintain readable content width while having unlimited background options
              </p>
            </div>
          </div>
        </div>
      </FullWidthSection>

      {/* Image background section */}
      <FullWidthSection
        backgroundType="image"
        background="/images/hero.jpg"
        minHeight="500px"
        className="py-20"
      >
        <div className="text-white space-y-6">
          <h2 className="text-3xl font-bold">Image Backgrounds</h2>
          <p className="text-lg">
            Use full-width images while keeping your content readable
          </p>
        </div>
      </FullWidthSection>

      {/* Stats section with subtle background */}
      <FullWidthSection
        background={getBackgroundStyle("stats")}
        className="py-24"
      >
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">1M+</div>
              <div className="mt-2 text-gray-600">Users Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">5K+</div>
              <div className="mt-2 text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">99%</div>
              <div className="mt-2 text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </FullWidthSection>

      {/* CTA section with gradient */}
      <FullWidthSection
        background={getBackgroundStyle("heroGradient")}
        className="py-20"
      >
        <div className="text-center text-white space-y-6">
          <h2 className="text-3xl font-[500]">Ready to Get Started?</h2>
          <p className="text-lg opacity-90">Join thousands of satisfied users today</p>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-opacity">
            Sign Up Now
          </button>
        </div>
      </FullWidthSection>
    </article>
  )
} 