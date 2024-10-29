'use client'
import Image from 'next/image'
import { UserNav } from './user-nav'
import { ModeToggle } from '../actions'
import { MoreApps } from './more-apps'
import { SidebarToggle } from './sidebar-toggle'
import { useStore } from 'zustand'
import { useSidebar } from '@/hooks'
import { SheetMenu } from './sheet-menu'
import { configApps } from '@/types/configApps'
import { cn } from '@/lib/utils'

interface NavBarCustomProps {
  app?: keyof typeof configApps
}

export const NavBarCustom = (props: NavBarCustomProps) => {
  const { app } = props

  const sidebar = useStore(useSidebar, (x) => x)
  if (!sidebar) return null
  const { isOpen, toggleOpen } = sidebar

  const appConfig = app ? configApps[app] : configApps['panel-admin']

  const colorApp = appConfig.color
  const nameApp = appConfig.name

  return (
    <header
      className={cn(
        `sticky top-0 z-50 w-full  shadow text-white dark:shadow-secondary`,
        colorApp
      )}
    >
      <div className="px-4 sm:px-6 md:px-7 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0 sm:gap-3">
          <SheetMenu title={nameApp} />
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
            <h1 className="font-bold text-xs hidden sm:flex">{nameApp}</h1>
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
