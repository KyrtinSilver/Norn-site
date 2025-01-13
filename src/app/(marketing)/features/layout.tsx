import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: '%s | Norn.ai',
    default: 'Features | Norn.ai',
  },
  description: 'Explore the advanced features and capabilities of Norn.ai',
}

interface FeaturesLayoutProps {
  children: React.ReactNode
}

export default function FeaturesLayout({ children }: FeaturesLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  )
} 