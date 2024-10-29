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
import { IMoreApp } from '@/types/more-apps'
import { cn } from '@/lib/utils'
import { GripIcon } from 'lucide-react'

interface NavBarCustomProps {
  app?: keyof typeof configApps
  moreApps?:Array<IMoreApp>;
}

const MoreAppsButton: Array<IMoreApp>=[
  {
    id: 1,
    title: 'EPG',
    icon: 'https://cdn-icons-png.flaticon.com/512/1804/1804486.png',
    url: 'https://epg.unap.edu.co',
  },
  {
    id: 2,
    title: 'EPG-UNAP',
    icon: 'https://cdn-icons-png.flaticon.com/512/1804/1804486.png',
    url: 'https://epg-unap.unap.edu.co',
  },
  {
    id: 3,
    title: 'EPG',
    icon: 'https://cdn-icons-png.flaticon.com/512/1804/1804486.png',
    url: 'https://epg.unap.edu.co',
  },
]

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
        `sticky top-0 z-50 w-full  shadow text-white dark:shadow-secondary`
      )}
      style={{
        backgroundColor: colorApp,
      }}
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
          {
            MoreAppsButton && MoreAppsButton.length > 0 && (
              <MoreApps apps={MoreAppsButton}>
                  <GripIcon />
              </MoreApps>
            )
          }
          <UserNav />
        </div>
      </div>
    </header>
  )
}
