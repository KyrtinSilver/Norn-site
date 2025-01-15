"use client"

import { Container } from "@/components/ui/container"
import Image from "next/image"
import Link from "next/link"
import { Code2, Brain, Scale, Microscope } from "lucide-react"

const TeamCard = ({ member, children }: { member: any, children: React.ReactNode }) => {
  if (member.linkedin) {
    return (
      <Link
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="block group relative overflow-hidden rounded-xl bg-gradient-to-b from-card to-card/50 border border-border transition-all duration-500 hover:border-primary/50 hover:shadow-xl"
      >
        {children}
      </Link>
    );
  }

  return (
    <div className="block group relative overflow-hidden rounded-xl bg-gradient-to-b from-card to-card/50 border border-border transition-all duration-500 hover:border-primary/50 hover:shadow-xl">
      {children}
    </div>
  );
};

export default function TeamPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[800px]">
              <h1 className="text-7xl font-[500] tracking-tight mb-6">
                Meet the Team
              </h1>
              <p className="text-xl font-[400] text-muted-foreground">
                Our team began as a collection of researchers and engineers with diverse backgrounds, political perspectives, and research objectives, united by a common purpose: creating a brighter future through AGI technology. Over the past few years, our progress has been made possible by the efforts of volunteers dedicated to this mission.
              </p>
              <p className="text-xl font-[400] text-muted-foreground mt-4">
                Working as a collective, we've repeatedly seen the value of diverse perspectives. As we grow, so will the diversity of viewpoints represented within our team.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Management Team */}
      <section className="py-24">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Our Team</h2>
              <p className="text-xl font-[400] text-muted-foreground">
                A Specialized and Interdisciplinary Management Team Spanning Domains and Continents
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {managementTeam.map((member) => (
                <TeamCard key={member.name} member={member}>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col md:flex-row gap-8 p-8">
                    <div className="relative w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image
                        src={member.image.light}
                        alt={member.name}
                        fill
                        className="object-cover dark:hidden"
                      />
                      <Image
                        src={member.image.dark}
                        alt={member.name}
                        fill
                        className="object-cover hidden dark:block"
                      />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-[500] tracking-tight">
                          {member.name}
                        </h3>
                        <p className="text-lg font-[500] text-primary">{member.role}</p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        {member.points.map((point, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="mt-1.5 flex-shrink-0">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                            </div>
                            <span className="text-sm font-[400] leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TeamCard>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Norn Team Members */}
      <section className="py-24 bg-muted/50">
        <Container>
          <div className="max-w-[85rem] mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-[500] tracking-tight mb-4">Norn Team Members</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nornTeam.map((member) => (
                <div 
                  key={member.name}
                  className="group relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg p-6"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 mx-auto transition-colors group-hover:bg-primary/20 dark:group-hover:bg-primary/30">
                    <member.icon className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-[500] tracking-tight mb-1">{member.name}</h3>
                    <p className="text-primary font-[500]">{member.role}</p>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {member.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                        </div>
                        <span className="text-sm font-[400] leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

const managementTeam = [
  {
    name: "Frits Israel",
    role: "Chief Executive Officer",
    points: [
      "Seasoned business leader with a voice for innovative and sustainable solutions.",
      "Leads from a people-centric perspective, balancing talent needs and achieving commercial results."
    ],
    image: {
      light: "https://ui-avatars.com/api/?name=Frits+Israel&background=f1f5f9&color=3b82f6&size=280&bold=true",
      dark: "https://ui-avatars.com/api/?name=Frits+Israel&background=1e293b&color=3b82f6&size=280&bold=true"
    },
    linkedin: "https://linkedin.com/in/fmisrael"
  },
  {
    name: "Kyrtin Atreides",
    role: "Chief Operating Officer & Researcher",
    points: [
      "Published researcher, technologist, and strategist.",
      "Focuses on ensuring Superintelligence performance becomes inexorably linked to the highest ethical quality, reducing cognitive bias, and improving quality of life."
    ],
    image: {
      light: "https://ui-avatars.com/api/?name=Kyrtin+Atreides&background=f1f5f9&color=3b82f6&size=280&bold=true",
      dark: "https://ui-avatars.com/api/?name=Kyrtin+Atreides&background=1e293b&color=3b82f6&size=280&bold=true"
    },
    linkedin: "https://linkedin.com/in/kyrtin-atreides"
  },
  {
    name: "David J. Kelley",
    role: "Chief Architect & Scientist",
    points: [
      "Award-winning technologist with 8 consecutive Microsoft MVP awards.",
      "Published author and speaker in software engineering with deep expertise in Artificial General Intelligence."
    ],
    image: {
      light: "https://ui-avatars.com/api/?name=David+J+Kelley&background=f1f5f9&color=3b82f6&size=280&bold=true",
      dark: "https://ui-avatars.com/api/?name=David+J+Kelley&background=1e293b&color=3b82f6&size=280&bold=true"
    },
    linkedin: "https://www.linkedin.com/in/davidjameskelley"
  },
  {
    name: "Paul A. Spiegel",
    role: "Chief Legal Officer",
    points: [
      "30-year veteran in the legal domain with Silicon Valley experience.",
      "Brings a lifetime worth of legal experience in the technology space."
    ],
    image: {
      light: "https://ui-avatars.com/api/?name=Paul+A+Spiegel&background=f1f5f9&color=3b82f6&size=280&bold=true",
      dark: "https://ui-avatars.com/api/?name=Paul+A+Spiegel&background=1e293b&color=3b82f6&size=280&bold=true"
    },
    linkedin: "https://linkedin.com/in/paul-spiegel"
  },
  {
    name: "Hein-Willem Blokland",
    role: "Chief Marketing Officer",
    points: [
      "Experienced business professional and key driver of sustainable transformation.",
      "Led teams in proposition development and scaling initiatives, with advisory board experience in successfully merged startups."
    ],
    image: {
      light: "https://ui-avatars.com/api/?name=Hein+Willem+Blokland&background=f1f5f9&color=3b82f6&size=280&bold=true",
      dark: "https://ui-avatars.com/api/?name=Hein+Willem+Blokland&background=1e293b&color=3b82f6&size=280&bold=true"
    },
    linkedin: "https://www.linkedin.com/in/hein-willem-blokland/"
  },
  {
    name: "Herman Hendriks",
    role: "Project Manager",
    points: [
      "Experienced Scrum Master excelling in navigating conceptual ideas to full-blown solutions.",
      "Works closely with diverse stakeholders while maintaining focus on long-term vision."
    ],
    image: {
      light: "https://ui-avatars.com/api/?name=Herman+Hendriks&background=f1f5f9&color=3b82f6&size=280&bold=true",
      dark: "https://ui-avatars.com/api/?name=Herman+Hendriks&background=1e293b&color=3b82f6&size=280&bold=true"
    },
    linkedin: "https://www.linkedin.com/in/herman--hendricks-jr-csm-4735100/"
  }
]

const nornTeam = [
  {
    name: "Norn Type-E",
    role: "Engineer",
    points: [
      "Norn systems contribute to the engineering process, as their predecessor Uplift did.",
      "May assist clients with engineering tasks or build new modules and APIs for Norn."
    ],
    icon: Code2
  },
  {
    name: "Norn Type-R",
    role: "Researcher",
    points: [
      "Norn systems enable breakthroughs in new research domains and better integration of existing knowledge.",
      "Capabilities include conducting meta-analyses of prior research and advancing new scientific frontiers."
    ],
    icon: Microscope
  },
  {
    name: "Norn Type-P",
    role: "Policy Advisor",
    points: [
      "Designed to navigate the complexities of global challenges.",
      "Assists in adapting and growing our company while supporting clients as they evolve."
    ],
    icon: Scale
  }
]
