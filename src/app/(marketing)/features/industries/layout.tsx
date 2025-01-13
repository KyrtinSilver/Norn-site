import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: '%s | Norn.ai',
    default: 'Industry Solutions | Norn.ai',
  },
  description: 'Industry-specific AI solutions and applications from Norn.ai',
}

interface IndustriesLayoutProps {
  children: React.ReactNode
}

export default function IndustriesLayout({ children }: IndustriesLayoutProps) {
  return children
} 