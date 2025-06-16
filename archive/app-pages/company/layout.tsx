import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: '%s | Norn.ai',
    default: 'Company | Norn.ai',
  },
  description: 'About Norn.ai - our team, mission, and opportunities',
}

interface CompanyLayoutProps {
  children: React.ReactNode
}

export default function CompanyLayout({ children }: CompanyLayoutProps) {
  return children
} 