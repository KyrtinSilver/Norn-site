import { NavigationMenu } from "@/components/navigation-menu"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* [ML-2] Navigation Header */}
      <NavigationMenu />

      {/* [ML-3] Main Content Area */}
      <main className="flex-1 pt-[--header-height] relative z-20">
        {children}
      </main>

      {/* [ML-4] Breadcrumb Navigation */}
      <BreadcrumbNav />

      {/* [ML-5] Footer */}
      <Footer />
    </div>
  )
} 