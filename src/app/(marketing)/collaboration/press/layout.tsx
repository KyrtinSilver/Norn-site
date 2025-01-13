import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Press & Media | Norn.ai",
  description: "Access press resources and submit media inquiries about Norn.ai's AI technology and research.",
}

export default function PressLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 