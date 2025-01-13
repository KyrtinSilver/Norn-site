import { Metadata } from "next"
import { MarketingComingSoon } from "@/components/marketing-coming-soon"
import { notFound } from "next/navigation"

interface RoleInfo {
  title: string
  description: string
}

const roles: Record<string, RoleInfo> = {
  "research-scientist": {
    title: "Research Scientist",
    description: "We're finalizing the details for this exciting research position. The role will focus on advancing our core AI capabilities while ensuring safety and ethical considerations are at the forefront."
  },
  "ai-safety-researcher": {
    title: "AI Safety Researcher",
    description: "We're preparing a comprehensive role focused on AI safety research. This position will contribute to developing robust and reliable AI systems."
  },
  "software-engineer": {
    title: "Software Engineer",
    description: "We're crafting an exciting software engineering role focused on building the next generation of AI infrastructure. Join us in developing scalable, reliable systems that power our AI technology."
  },
  "machine-learning-engineer": {
    title: "Machine Learning Engineer",
    description: "We're finalizing details for a machine learning engineering position that will bridge the gap between research and production. Help us implement and scale cutting-edge AI models."
  },
  "senior-ai-research-scientist": {
    title: "Senior AI Research Scientist",
    description: "We're preparing a senior research position focused on leading breakthrough AI initiatives. This role will drive innovation while maintaining our commitment to safety and ethics."
  }
}

interface PageProps {
  params: {
    role: string
  }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const roleInfo = roles[params.role]
  
  if (!roleInfo) {
    return {}
  }

  return {
    title: `Apply for ${roleInfo.title} | Norn.ai`,
    description: roleInfo.description
  }
}

export function generateStaticParams() {
  return Object.keys(roles).map(role => ({
    role
  }))
}

export default function ApplyPage({ params }: PageProps) {
  const roleInfo = roles[params.role]
  
  if (!roleInfo) {
    notFound()
  }

  return (
    <MarketingComingSoon
      title={`Apply for ${roleInfo.title}`}
      description={roleInfo.description}
      backLink="/company/careers"
      backText="Back to Careers"
    />
  )
} 