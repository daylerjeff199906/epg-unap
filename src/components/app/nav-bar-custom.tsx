'use client'
import Image from 'next/image'
import { UserNav } from './user-nav'
import { ModeToggle } from '../actions'
import { MoreApps } from './more-apps'
import { SidebarToggle } from './sidebar-toggle'
import { useStore } from 'zustand'
import { useSidebar } from '@/hooks'

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

  const sidebar = useStore(useSidebar, (x) => x)
  if (!sidebar) return null
  const { isOpen, toggleOpen } = sidebar

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-primary-800 dark:bg-blue-950  shadow text-white dark:shadow-secondary  `}
    >
      <div className="px-4 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0 gap-3">
          {/* <SheetMenu /> */}
          <SidebarToggle
            isOpen={isOpen}
            setIsOpen={toggleOpen}
          />
          {/* <hr className="h-6 w-0.5 bg-white dark:bg-gray-500" /> */}
          <div
            id="logo"
            className="flex items-center space-x-2"
          >
            <Image
              src="/brands/escudo-epg.webp"
              alt="Logo"
              width={18}
              height={18}
            />
            <h1 className="font-bold text-xs hidden sm:flex">{title}</h1>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <ModeToggle />
          <MoreApps />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
