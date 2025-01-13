import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Introduction | Norn.ai",
  description: "Technical introduction to Norn.ai's development platform and API",
}

export default function IntroductionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 