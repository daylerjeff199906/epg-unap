import Link from 'next/link'
import { NavigationMenuDemo } from './menu-items'
import { NavigationMenuDemoProps } from './INavbarProps'
import { urlDataAdmision } from '@/modules/admision'

export const NavbarUser = ({ menuItems }: NavigationMenuDemoProps) => {
  return (
    <nav className="bg-primary-900 border-b border-white sticky top-0 right-0 left-0 z-40">
      <header className="container py-3 flex items-center justify-between gap-8">
        <section id="navbar">
          <Link
            href={urlDataAdmision.home.urls.base}
            className="flex items-center gap-2 w-fit hover:cursor-pointer"
          >
            <img
              src="/brands/escudo-epg.webp"
              alt="logo-epg"
              className="w-6 h-10"
            />
            <h1 className="w-32 min-w-32 font-semibold text-xs text-white">
              ESCUELA DE POSTGRADO UNAP
            </h1>
          </Link>
        </section>
        <NavigationMenuDemo menuItems={menuItems} />
        <section></section>
      </header>
    </nav>
  )
}
