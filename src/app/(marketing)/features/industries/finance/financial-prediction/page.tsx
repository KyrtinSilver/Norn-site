import { Metadata } from "next"
import { FullWidthSection } from "@/components/full-width-section"

export const metadata: Metadata = {
  title: "Financial Prediction | Norn.ai",
  description: "Advanced AI solutions for financial forecasting and market prediction",
}

export default function FinancialPredictionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FullWidthSection background="heroGradient">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Financial Prediction
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Leveraging advanced AI for accurate financial forecasting and market analysis.
          </p>
        </div>
      </FullWidthSection>
      
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Predictive Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Market Analysis</h3>
              <ul className="list-disc pl-6">
                <li>Price movement forecasting</li>
                <li>Volatility prediction</li>
                <li>Trend identification</li>
                <li>Market sentiment analysis</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Risk Assessment</h3>
              <ul className="list-disc pl-6">
                <li>Portfolio risk modeling</li>
                <li>Default prediction</li>
                <li>Stress testing</li>
                <li>Exposure analysis</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Advanced Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Machine Learning</h3>
              <ul className="list-disc pl-6">
                <li>Deep neural networks</li>
                <li>Time series analysis</li>
                <li>Reinforcement learning</li>
                <li>Ensemble methods</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Data Processing</h3>
              <ul className="list-disc pl-6">
                <li>Real-time analysis</li>
                <li>Multi-source integration</li>
                <li>Alternative data</li>
                <li>News sentiment</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Model Infrastructure</h3>
              <ul className="list-disc pl-6">
                <li>High-frequency trading</li>
                <li>Low-latency systems</li>
                <li>Scalable architecture</li>
                <li>Model monitoring</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Trading Strategies</h3>
              <p>Development of sophisticated trading strategies using AI-powered market analysis and prediction models.</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Portfolio Management</h3>
              <p>Optimized portfolio allocation and risk management through advanced predictive analytics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 