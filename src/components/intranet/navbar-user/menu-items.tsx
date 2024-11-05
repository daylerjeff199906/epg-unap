'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { usePathname } from 'next/navigation'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

export function NavigationMenuDemo() {
  const pathname = usePathname()

  function isPathnameStartingWith(path: string) {
    return pathname.startsWith(path)
  }

  return (
    <section className="w-full hidden sm:flex justify-start">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href="/intranet/programas"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={`bg-transparent  hover:bg-transparent hover:text-gray-300 focus:text-gray-400 focus:bg-transparent ${navigationMenuTriggerStyle()} ${
                  pathname === '/intranet/programas'
                    ? 'font-extrabold text-white'
                    : 'font-normal text-gray-200'
                }`}
              >
                Mis programas
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/intranet/matriculas"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={`bg-transparent  hover:bg-transparent hover:text-gray-300 focus:text-gray-400 focus:bg-transparent ${navigationMenuTriggerStyle()} ${
                  pathname === '/intranet/matriculas'
                    ? 'font-extrabold text-white'
                    : 'font-normal text-gray-200'
                }`}
              >
                Matrículas
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/intranet/pagos"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={`bg-transparent  hover:bg-transparent hover:text-gray-300 focus:text-gray-400 focus:bg-transparent ${navigationMenuTriggerStyle()} ${
                  pathname === '/intranet/pagos'
                    ? 'font-extrabold text-white'
                    : 'font-normal text-gray-200'
                }`}
              >
                Mis pagos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`bg-transparent text-white hover:bg-transparent hover:text-gray-300 ${
                isPathnameStartingWith('/intranet/servicios')
                  ? 'font-extrabold text-white'
                  : 'font-normal text-gray-200'
              }`}
            >
              Servicios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
