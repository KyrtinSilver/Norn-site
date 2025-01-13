interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  label?: string
}

interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

interface DocsConfig {
  mainNav: NavItem[]
  sidebarNav: NavItemWithChildren[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "API Reference",
      href: "/docs/api-reference",
    },
    {
      title: "GitHub",
      href: "https://github.com/cosmoinclab/norn.ai",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Requirements",
          href: "/docs/requirements",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Architecture",
          href: "/docs/architecture",
          items: [],
        },
        {
          title: "Examples",
          href: "/docs/examples",
          items: [],
        },
      ],
    },
    {
      title: "Development",
      items: [
        {
          title: "API Reference",
          href: "/docs/api-reference",
          items: [],
        },
        {
          title: "Configuration",
          href: "/docs/configuration",
          items: [],
        },
        {
          title: "Deployment",
          href: "/docs/deployment",
          items: [],
        },
      ],
    },
  ],
}
