import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Norn.ai",
  description: "Get in touch with the Norn.ai team to learn more about our AI solutions and research initiatives."
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 