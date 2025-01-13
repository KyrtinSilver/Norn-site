import { FullWidthSection } from "@/components/ui/FullWidthSection"
import { backgroundStyles, getBackgroundStyle } from "@/styles/background-styles"

export default function BackgroundStylesPage() {
  return (
    <article className="py-12">
      <div className="mx-auto max-w-[65ch] px-4 md:px-6 mb-12">
        <h1 className="text-4xl font-bold mb-4">Background Styles</h1>
        <p className="text-lg text-muted-foreground">
          A showcase of available background styles with dark mode support.
        </p>
      </div>

      {/* Full Width Image Examples */}
      <section className="relative h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
          alt="Space and technology"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <code className="text-sm text-muted-foreground">Full Width Image + Gradient</code>
        </div>
      </section>

      <section className="relative h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=2000&q=80"
          alt="Abstract architecture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[12px] backdrop-saturate-150" />
        <div className="absolute inset-0 flex items-center justify-center">
          <code className="text-sm text-muted-foreground">Full Width Image + Glass</code>
        </div>
      </section>

      <section className="relative h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=2000&q=80"
          alt="Circuit patterns"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <code className="text-sm text-muted-foreground">Full Width Image + Solid Overlay</code>
        </div>
      </section>

      <section className="relative h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=2000&q=80"
          alt="Futuristic architectural skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <code className="text-sm text-muted-foreground">Full Width Image + Side Gradient</code>
        </div>
      </section>

      {/* Background Style Examples */}
      {Object.entries(backgroundStyles).map(([name, _]) => (
        <FullWidthSection
          key={name}
          background={getBackgroundStyle(name as keyof typeof backgroundStyles)}
          className="py-16"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <pre className="bg-black/10 dark:bg-white/10 p-4 rounded-lg overflow-x-auto">
              <code>{`<FullWidthSection background={getBackgroundStyle("${name}")}>
  {/* Your content */}
</FullWidthSection>`}</code>
            </pre>
          </div>
        </FullWidthSection>
      ))}
    </article>
  )
} 