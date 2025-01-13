import { type ClassValue } from "clsx"

export interface BackgroundStyle {
  background: {
    light: string
    dark: string
  }
  text?: {
    light: string
    dark: string
  }
  className?: ClassValue
}

export const backgroundStyles = {
  // Gradients
  heroGradient: {
    background: {
      light: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%)",
      dark: "linear-gradient(135deg, hsl(217 52% 6%) 0%, hsl(217 52% 6%) 100%)",
    },
    text: {
      light: "text-primary-foreground",
      dark: "dark:text-primary-foreground",
    },
  },
  
  // Solid Colors
  feature: {
    background: {
      light: "hsl(var(--background))",
      dark: "hsl(217 38% 6%)",
    },
    text: {
      light: "text-foreground",
      dark: "dark:text-foreground",
    },
    className: "border border-border",
  },

  stats: {
    background: {
      light: "hsl(var(--muted))",
      dark: "hsl(var(--muted))",
    },
    text: {
      light: "text-muted-foreground",
      dark: "dark:text-muted-foreground",
    },
    className: "border-y border-border",
  },

  subtle: {
    background: {
      light: "hsl(var(--accent))",
      dark: "hsl(var(--accent))",
    },
    text: {
      light: "text-accent-foreground",
      dark: "dark:text-accent-foreground",
    },
  },

  // Special backgrounds
  glass: {
    background: {
      light: "bg-background/80 backdrop-blur-[12px] backdrop-saturate-150",
      dark: "dark:bg-[rgba(28,32,44,0.7)] backdrop-blur-[12px] backdrop-saturate-150",
    },
    text: {
      light: "text-foreground",
      dark: "dark:text-foreground",
    },
    className: "border border-[--header-border]",
  },

  // Card-like backgrounds
  card: {
    background: {
      light: "bg-card",
      dark: "dark:bg-card",
    },
    text: {
      light: "text-card-foreground",
      dark: "dark:text-card-foreground",
    },
    className: "rounded-lg border border-border shadow-sm",
  },

  cardHovered: {
    background: {
      light: "bg-card",
      dark: "dark:bg-card",
    },
    text: {
      light: "text-card-foreground",
      dark: "dark:text-card-foreground",
    },
    className: "rounded-lg border border-border shadow hover:shadow-md transition-shadow",
  },

  cardElevated: {
    background: {
      light: "bg-card",
      dark: "dark:bg-card",
    },
    text: {
      light: "text-card-foreground",
      dark: "dark:text-card-foreground",
    },
    className: "rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow",
  },

  // Accent backgrounds
  highlight: {
    background: {
      light: "hsl(var(--accent))",
      dark: "hsl(var(--accent))",
    },
    text: {
      light: "text-accent-foreground",
      dark: "dark:text-accent-foreground",
    },
    className: "border border-border",
  },

  // Documentation specific
  docsSidebar: {
    background: {
      light: "bg-background",
      dark: "dark:bg-background",
    },
    text: {
      light: "text-foreground",
      dark: "dark:text-foreground",
    },
    className: "border-r border-border",
  },

  docsSearch: {
    background: {
      light: "bg-background",
      dark: "dark:bg-accent",
    },
    text: {
      light: "text-muted-foreground",
      dark: "dark:text-accent-foreground",
    },
    className: "border border-border hover:border-accent-foreground/20 hover:bg-accent hover:text-accent-foreground transition-colors",
  },
} as const

export function getBackgroundStyle(styleName: keyof typeof backgroundStyles) {
  return backgroundStyles[styleName]
} 