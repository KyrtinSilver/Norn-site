import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: '%s | Norn.ai',
    default: 'Resources | Norn.ai',
  },
  description: 'Resources and documentation for Norn.ai',
}

interface ResourcesLayoutProps {
  children: React.ReactNode
}

export default function ResourcesLayout({ children }: ResourcesLayoutProps) {
  return children
} 