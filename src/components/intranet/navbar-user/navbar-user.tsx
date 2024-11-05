import Link from 'next/link'
import { NavigationMenuDemo } from './menu-items'

export const NavbarUser = () => {
  return (
    <nav className="bg-primary-900 border-b border-white">
      <header className="container py-3 flex items-center justify-between gap-8">
        <section id="navbar">
          <Link
            href={'/intranet'}
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
        <NavigationMenuDemo />
        <section></section>
      </header>
    </nav>
  )
}