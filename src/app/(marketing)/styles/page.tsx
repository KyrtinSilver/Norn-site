import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ModeToggle } from '@/components/mode-toggle'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Carousel } from '@/components/ui/Carousel'
import { CommandMenu } from '@/components/ui/CommandMenu'
import { StaffCard } from '@/components/ui/StaffCard'
import { LinkCard } from '@/components/ui/LinkCard'
import { ToastDemo } from '@/components/ui/toast-demo'
import Link from 'next/link'
import Image from 'next/image'
import { Sun, Moon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Style Guide | Norn',
  description: 'A comprehensive showcase of Norn\'s design system and components.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function StylesPage() {
  return (
    <div className="space-y-12">
      {/* Full Width Background Example */}
      <section className="w-full">
        <div className="relative aspect-[21/9] w-full">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
            alt="Space and technology"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20 backdrop-blur-[2px]" />
          <div className="relative z-10 h-full flex items-center">
            <div className="layout-content">
              <h2 className="text-4xl font-bold text-foreground">Full Width Hero</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                This section spans the full width of the viewport with a gradient overlay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Constrained Content */}
      <div className="layout-content space-y-12">
        {/* Background Styles */}
        <section>
          <h2 className="text-2xl font-medium mb-6">Background Styles</h2>
          <div className="space-y-8">
            {/* Constrained Image */}
            <div>
              <h4 className="text-sm font-medium mb-4">Constrained Image (16:9)</h4>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=2000&q=80"
                  alt="Circuit patterns"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/90" />
                <div className="relative z-10 p-8">
                  <h3 className="text-xl font-bold text-foreground">Constrained Width</h3>
                  <p className="text-muted-foreground">This image respects layout margins</p>
                </div>
              </div>
            </div>

            {/* Glass Effect */}
            <div>
              <h4 className="text-sm font-medium mb-4">Glass Effect</h4>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=2000&q=80"
                  alt="Abstract architecture"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/40 backdrop-blur-[12px] backdrop-saturate-150" />
                <div className="relative z-10 p-8">
                  <h3 className="text-xl font-[500] text-foreground">Glass Morphism</h3>
                  <p className="text-muted-foreground">With blur and saturation effects</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections with proper margin constraints */}
        <section>
          <h2 className="text-2xl font-medium mb-6">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-20 bg-background border border-border rounded-lg"></div>
              <p className="text-sm font-medium">Background</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-foreground rounded-lg"></div>
              <p className="text-sm font-medium">Foreground</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-primary rounded-lg"></div>
              <p className="text-sm font-medium">Primary</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-secondary rounded-lg"></div>
              <p className="text-sm font-medium">Secondary</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-muted rounded-lg"></div>
              <p className="text-sm font-medium">Muted</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-accent rounded-lg"></div>
              <p className="text-sm font-medium">Accent</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 border border-border rounded-lg"></div>
              <p className="text-sm font-medium">Border</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 border border-ring rounded-lg"></div>
              <p className="text-sm font-medium">Ring</p>
            </div>
          </div>
        </section>

        {/* Chart Colors */}
        <section>
          <h2 className="text-2xl font-medium mb-6">Chart Colors</h2>
          
          <div className="grid grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="h-20 bg-[hsl(12_76%_61%)] dark:bg-[hsl(220_70%_50%)] rounded-lg"></div>
              <p className="text-sm font-medium">Chart 1</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-[hsl(173_58%_39%)] dark:bg-[hsl(160_60%_45%)] rounded-lg"></div>
              <p className="text-sm font-medium">Chart 2</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-[hsl(197_37%_24%)] dark:bg-[hsl(30_80%_55%)] rounded-lg"></div>
              <p className="text-sm font-medium">Chart 3</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-[hsl(43_74%_66%)] dark:bg-[hsl(280_65%_60%)] rounded-lg"></div>
              <p className="text-sm font-medium">Chart 4</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-[hsl(27_87%_67%)] dark:bg-[hsl(340_75%_55%)] rounded-lg"></div>
              <p className="text-sm font-medium">Chart 5</p>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section>
          <h2 className="text-2xl font-medium mb-6">Shadows</h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="h-20 bg-background border border-border rounded-lg shadow-sm dark:shadow-dark-sm dark:border-border"></div>
              <p className="text-sm font-medium">Low</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-background border border-border rounded-lg shadow-md dark:shadow-dark-md dark:border-border"></div>
              <p className="text-sm font-medium">Medium</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-background border border-border rounded-lg shadow-lg dark:shadow-dark-lg dark:border-border"></div>
              <p className="text-sm font-medium">High</p>
            </div>
          </div>
        </section>

        {/* Code Block Background */}
        <section>
          <h2 className="text-2xl font-medium mb-6">Code Block Background</h2>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <pre className="p-4 bg-muted rounded-lg border border-border overflow-x-auto">
                <code className="text-sm font-mono text-foreground">{`// Light mode code block
function example() {
  return "Hello World";
}

// Comment example
const x = 42;        // Number
const y = "string";  // String`}</code>
              </pre>
              <p className="text-sm font-medium">Light Mode</p>
            </div>
            <div className="space-y-2">
              <pre className="p-4 bg-muted rounded-lg border border-border overflow-x-auto">
                <code className="text-sm font-mono text-foreground">{`// Light mode code block
function example() {
  return "Hello World";
}

// Comment example
const x = 42;        // Number
const y = "string";  // String`}</code>
              </pre>
              <p className="text-sm font-medium">Dark Mode</p>
            </div>
          </div>
        </section>

        {/* Separators */}
        <section>
          <h2 className="text-2xl font-medium mb-6">Separators</h2>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="p-4 border-t border-border">
                <p className="text-sm font-medium">Horizontal Top</p>
              </div>
              <div className="p-4 border-b border-border">
                <p className="text-sm font-medium">Horizontal Bottom</p>
              </div>
              <div className="p-4 border-y border-border">
                <p className="text-sm font-medium">Horizontal Both</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="p-4 flex gap-4">
                <div className="p-4 border-r border-border">
                  <p className="text-sm font-medium">Vertical Right</p>
                </div>
                <div className="p-4 border-l border-border">
                  <p className="text-sm font-medium">Vertical Left</p>
                </div>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <p className="text-sm font-medium">Full Border</p>
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section>
          <h2 className="text-2xl font-medium mb-6">Components</h2>
          
          <div className="space-y-8">
            {/* Buttons */}
            <div>
              <h3 className="text-xl font-medium mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="destructive">Destructive Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="link">Link Button</Button>
                <Button 
                  className="border border-[--header-border] bg-background dark:bg-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Navbar Style
                </Button>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-xl font-medium mb-4">Cards</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Default Cards (Monochrome)</h4>
                  <LinkCard
                    href="#"
                    title="Careers at Norn"
                    description="Join our team and help shape the future of AI. We're always looking for talented individuals."
                  />
                  <LinkCard
                    href="#"
                    title="Latest Research"
                    description="Explore our latest breakthroughs in AI technology and research findings."
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Primary Color Cards</h4>
                  <LinkCard
                    href="#"
                    title="Documentation"
                    description="Comprehensive guides and API references for Norn's technology stack."
                    variant="primary"
                  />
                  <LinkCard
                    href="#"
                    title="Getting Started"
                    description="Quick start guides to help you integrate with our platform."
                    variant="primary"
                  />
                </div>
              </div>
            </div>

            {/* Form Elements */}
            <div>
              <h3 className="text-xl font-medium mb-4">Form Elements</h3>
              <div className="max-w-md space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" />
                </div>
              </div>
            </div>

            {/* Command Menu */}
            <div>
              <h3 className="text-xl font-medium mb-4">Command Menu</h3>
              <div className="max-w-md">
                <CommandMenu />
              </div>
            </div>

            {/* Theme Toggle */}
            <div>
              <h3 className="text-xl font-medium mb-4">Theme Toggle</h3>
              <ModeToggle />
            </div>

            {/* Images */}
            <div>
              <h3 className="text-xl font-medium mb-4">Images</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium mb-4">Full Width (21:9)</h4>
                </div>
              </div>
            </div>

            {/* Carousel */}
            <div>
              <h3 className="text-xl font-medium mb-4">Carousel</h3>
              <Carousel className="w-full">
                <Card className="p-6 min-w-[300px]">
                  <h4 className="text-lg font-semibold mb-2">Card 1</h4>
                  <p className="text-muted-foreground">Scroll through multiple cards.</p>
                </Card>
                <Card className="p-6 min-w-[300px]">
                  <h4 className="text-lg font-semibold mb-2">Card 2</h4>
                  <p className="text-muted-foreground">Each card has a minimum width.</p>
                </Card>
                <Card className="p-6 min-w-[300px]">
                  <h4 className="text-lg font-semibold mb-2">Card 3</h4>
                  <p className="text-muted-foreground">Use the arrows to navigate.</p>
                </Card>
                <Card className="p-6 min-w-[300px]">
                  <h4 className="text-lg font-semibold mb-2">Card 4</h4>
                  <p className="text-muted-foreground">Smooth scrolling behavior.</p>
                </Card>
              </Carousel>
            </div>

            {/* Staff Cards */}
            <div>
              <h3 className="text-xl font-medium mb-4">Staff Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StaffCard
                  name="Dr. Sarah Chen"
                  role="Lead AI Researcher"
                  description="Specializing in neural networks and deep learning architectures with over 10 years of research experience."
                  icon="brain"
                />
                <StaffCard
                  name="Michael Rodriguez"
                  role="Senior Engineer"
                  description="Expert in distributed systems and scalable AI infrastructure development."
                  icon="code"
                />
                <StaffCard
                  name="Dr. Emily Thompson"
                  role="Research Director"
                  description="Leading breakthrough research in natural language processing and cognitive computing."
                  icon="cpu"
                />
                <StaffCard
                  name="James Wilson"
                  role="AI Ethics Officer"
                  description="Ensuring responsible AI development and implementation across all projects."
                  icon="shield"
                />
                <StaffCard
                  name="Dr. Aisha Patel"
                  role="Machine Learning Lead"
                  description="Pioneering new approaches in reinforcement learning and autonomous systems."
                  icon="network"
                />
                <StaffCard
                  name="David Kim"
                  role="Technical Architect"
                  description="Designing robust and scalable AI systems for enterprise applications."
                  icon="database"
                />
              </div>
            </div>

            {/* Toast Notifications */}
            <ToastDemo />
          </div>
        </section>

        {/* Hover Transitions */}
        <section>
          <h2 className="text-2xl font-medium mb-6">Hover Transitions</h2>
          <div className="space-y-8">
            {/* Standard Navigation Link */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Standard Navigation Link (0.3s ease)</h4>
              <div className="flex gap-4">
                <Link 
                  href="#" 
                  className="text-sm opacity-60 hover:opacity-100 transition-all duration-300 ease"
                >
                  Navigation Link
                </Link>
              </div>
            </div>

            {/* Mode Toggle */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Mode Toggle (0.3s ease)</h4>
              <div className="flex gap-4">
                <button
                  className="relative rounded-md p-2 opacity-60 hover:opacity-100 transition-all duration-300 ease"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-300 ease dark:-rotate-90 dark:scale-0 fill-current" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-300 ease dark:rotate-0 dark:scale-100 top-2 left-2 fill-current" />
                </button>
              </div>
            </div>

            {/* Docs Button */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Docs Button (Immediate background, 0.3s opacity)</h4>
              <div className="flex gap-4">
                <Link 
                  href="#" 
                  className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[--header-border] bg-background dark:bg-accent/20 hover:bg-accent/10 dark:hover:bg-accent/60 hover:text-accent-foreground h-9 px-4 rounded-md opacity-60 hover:opacity-100 transition-[opacity] duration-300 ease"
                >
                  Docs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Command Modal */}
        <div className="space-y-4">
          <h2 className="text-2xl font-[500]">Command Modal</h2>
          <div className="space-y-2">
            <h3 className="text-lg font-[500]">Dark Mode Styling</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Background: Uses theme background color <code>dark:bg-background</code></li>
              <li>Border: Subtle with 40% opacity <code>border-border/40</code></li>
              <li>Input wrapper: Border bottom only <code>border-b border-border</code></li>
              <li>Dialog content: No padding, overflow hidden <code>overflow-hidden p-0</code></li>
              <li>Shadow: Large shadow for depth <code>shadow-lg</code></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-[500]">Component Structure</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>CommandDialog: Main wrapper with DialogContent</li>
              <li>Command: Flex container with rounded corners</li>
              <li>CommandInput: Search input with icon</li>
              <li>CommandList: Scrollable list with max height</li>
              <li>CommandGroup: Groups of items with headings</li>
              <li>CommandItem: Individual items with hover states</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Another Full Width Example */}
      <section className="w-full bg-muted py-16">
        <div className="layout-content">
          <h2 className="text-2xl font-medium mb-6">Full Width Section</h2>
          <p className="text-muted-foreground">
            This section has a full-width background but constrained content.
          </p>
        </div>
      </section>

      {/* Back to Constrained Content */}
      <div className="layout-content">
        <section>
          <h2 className="text-2xl font-medium mb-6">Hover Transitions</h2>
          <div className="space-y-8">
            {/* ... existing hover transitions ... */}
          </div>
        </section>
      </div>
    </div>
  )
} 