import Image from 'next/image'
import { UserNav } from './UserNav'
import { ModeToggle } from '../actions'

interface NavBarCustomProps {
  title: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}

// const colorsApp = {
//   primary: 'bg-primary-900 dark:bg-primary-800',
//   secondary: 'bg-secondary-500',
//   tertiary: 'bg-tertiary-500',
//   quaternary: 'bg-quaternary-500',
// }

export const NavBarCustom = (props: NavBarCustomProps) => {
  const { title } = props

  return (
    <header
      className={`sticky top-0 z-10 w-full bg-blue-900 dark:bg-blue-950  shadow text-white dark:shadow-secondary  `}
    >
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          {/* <SheetMenu /> */}
          <div
            id="logo"
            className="flex items-center space-x-2"
          >
            <Image
              src="/brands/escudo-epg.webp"
              alt="Logo"
              width={24}
              height={24}
            />
            <h1 className="font-bold text-sm">{title}</h1>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
