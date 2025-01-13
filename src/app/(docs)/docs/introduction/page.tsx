"use client"

import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Server, Shield } from "lucide-react"
import Link from "next/link"

export default function IntroductionPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-[85rem] mx-auto">
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl font-[500] tracking-tight mb-4">Technical Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Get started with Norn.ai's development platform. Learn about our API, SDKs, and implementation best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-[500] mb-2">API Reference</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive API documentation with detailed endpoint references and examples.
                  </p>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/docs/api-reference">
                      View API Docs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-[500] mb-2">Requirements</h3>
                  <p className="text-muted-foreground mb-4">
                    System requirements, dependencies, and environment setup guide.
                  </p>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/docs/requirements">
                      View Requirements <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-[500] mb-2">Architecture</h3>
                  <p className="text-muted-foreground mb-4">
                    Technical architecture, data flow, and system design documentation.
                  </p>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/docs/architecture">
                      View Architecture <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-[500] mb-2">Examples</h3>
                  <p className="text-muted-foreground mb-4">
                    Code examples, implementation patterns, and best practices.
                  </p>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/docs/examples">
                      View Examples <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button asChild>
              <Link href="/docs/installation">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
} 