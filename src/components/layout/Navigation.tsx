interface NavigationItem {
  label: string;
  href?: string;
  items?: NavigationItem[];
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Styles",
    items: [
      {
        label: "Backgrounds",
        href: "/styles/backgrounds"
      }
    ]
  }
] 