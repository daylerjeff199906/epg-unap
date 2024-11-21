export interface NavigationItem {
  title: string
  href: string
  description?: string
  children?: NavigationItem[]
}

export interface NavigationMenuDemoProps {
  menuItems: NavigationItem[]
}
