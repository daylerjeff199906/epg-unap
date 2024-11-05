import { NavigationMenuDemo } from './menu-items'

export const NavbarUser = () => {
  return (
    <nav className="bg-primary-900 border-b border-white">
      <header className="container py-3 flex items-center justify-between gap-8">
        <section id="navbar">
          <div className="flex items-center gap-2 w-fit">
            <img
              src="/brands/escudo-epg.webp"
              alt="logo-epg"
              className="w-6 h-10"
            />
            <h1 className="w-32 min-w-32 font-semibold text-xs text-white">
              ESCUELA DE POSTGRADO UNAP
            </h1>
          </div>
        </section>
        <NavigationMenuDemo />
        <section></section>
      </header>
    </nav>
  )
}
