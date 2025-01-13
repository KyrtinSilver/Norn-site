import type { Metadata } from "next"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Background Styles | Norn",
  description: "A showcase of available background styles with dark mode support.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function BackgroundStylesPage() {
  return (
    <>
      {/* [BG-1] Page Header */}
      <Container className="py-8">
        <h1 className="text-4xl font-bold">Background Styles</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A showcase of available background styles with dark mode support.
        </p>
      </Container>

      {/* [BG-2] Background Examples Container */}
      <div className="w-full space-y-8">
        {/* [BG-3] Full Width Image with Gradient */}
        <section className="relative h-[60vh] w-full">
          <div className="absolute inset-0 bg-[url('/images/backgrounds/hero.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-gradient-to-r from-background to-background/20" />
          </div>
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">Full Width Image with Gradient</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                A full-width background image with a gradient overlay that fades from solid to transparent.
              </p>
            </Container>
          </div>
        </section>

        {/* [BG-4] Full Width Image with Glass */}
        <section className="relative h-[60vh] w-full">
          <div className="absolute inset-0 bg-[url('/images/backgrounds/feature.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          </div>
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">Full Width Image with Glass</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                A full-width background image with a frosted glass effect overlay.
              </p>
            </Container>
          </div>
        </section>

        {/* [BG-5] Full Width Image with Solid Overlay */}
        <section className="relative h-[60vh] w-full">
          <div className="absolute inset-0 bg-[url('/images/backgrounds/stats.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-background/80" />
          </div>
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">Full Width Image with Solid Overlay</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                A full-width background image with a solid overlay.
              </p>
            </Container>
          </div>
        </section>

        {/* [BG-6] Full Width Image with Side Gradient */}
        <section className="relative h-[60vh] w-full">
          <div className="absolute inset-0 bg-[url('/images/backgrounds/subtle.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
          </div>
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">Full Width Image with Side Gradient</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                A full-width background image with a side gradient overlay.
              </p>
            </Container>
          </div>
        </section>

        {/* [BG-7] Hero Gradient */}
        <section className="relative h-[40vh] w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-background to-background/20" />
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">heroGradient</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                A gradient overlay that fades from solid to transparent.
              </p>
            </Container>
          </div>
        </section>

        {/* [BG-8] Feature */}
        <section className="relative h-[40vh] w-full">
          <div className="absolute inset-0 bg-muted" />
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">feature</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                A muted background color.
              </p>
            </Container>
          </div>
        </section>

        {/* [BG-9] Stats */}
        <section className="relative h-[40vh] w-full">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">stats</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                A primary background color with 5% opacity.
              </p>
            </Container>
          </div>
        </section>

        {/* [BG-10] Subtle */}
        <section className="relative h-[40vh] w-full">
          <div className="absolute inset-0 bg-secondary/10" />
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">subtle</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                A secondary background color with 10% opacity.
              </p>
            </Container>
          </div>
        </section>

        {/* [BG-11] Glass */}
        <section className="relative h-[40vh] w-full">
          <div className="absolute inset-0 bg-background/40 backdrop-blur-[12px] backdrop-saturate-150" />
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">glass</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                A frosted glass effect overlay.
              </p>
            </Container>
          </div>
        </section>

        {/* [BG-12] Card */}
        <section className="relative h-[40vh] w-full">
          <div className="absolute inset-0 bg-card">
            <div className="absolute inset-0 border-y border-border" />
          </div>
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">card</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                A card background color.
              </p>
            </Container>
          </div>
        </section>

        {/* [BG-13] Card Hovered */}
        <section className="relative h-[40vh] w-full">
          <div className="absolute inset-0 bg-card hover:bg-accent" />
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">cardHovered</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                A card background color when hovered.
              </p>
            </Container>
          </div>
        </section>

        {/* [BG-14] Card Elevated */}
        <section className="relative h-[40vh] w-full">
          <div className="absolute inset-0 bg-card shadow-lg dark:shadow-dark-lg" />
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">cardElevated</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                A card background color with a shadow.
              </p>
            </Container>
          </div>
        </section>

        {/* [BG-15] Highlight */}
        <section className="relative h-[40vh] w-full">
          <div className="absolute inset-0 bg-accent" />
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">highlight</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                An accent background color.
              </p>
            </Container>
          </div>
        </section>

        {/* [BG-16] Docs Sidebar */}
        <section className="relative h-[40vh] w-full">
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0 border-y border-border" />
          </div>
          <div className="relative flex h-full items-center">
            <Container>
              <h2 className="text-4xl font-bold">docsSidebar</h2>
              <p className="mt-4 max-w-[600px] text-lg text-muted-foreground">
                A background color for the docs sidebar.
              </p>
            </Container>
          </div>
        </section>
      </div>
    </>
  )
} 