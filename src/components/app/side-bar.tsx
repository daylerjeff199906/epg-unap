import { cn } from '@/lib/utils'
import React from 'react'
import { Menu } from './menu'
import { useSidebar } from '@/hooks/use-sidebar'
import { useStore } from '@/hooks/use-store'
import { SidebarToggle } from './sidebar-toggle'

export const SideBar = () => {
  const sidebar = useStore(useSidebar, (x) => x)
  if (!sidebar) return null
  const { isOpen, toggleOpen, getOpenState, setIsHover, settings } = sidebar

  return (
    <aside
      className={cn(
        `fixed top-0 left-0 z-0 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 w-72 bg-primary-900 text-white`,
        !getOpenState() ? 'w-[90px]' : 'w-72',
        settings.disabled && 'hidden'
      )}
    >
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800"
      >
        <header className="px-4 pt-14 pb-2">
          <SidebarToggle
            isOpen={isOpen}
            setIsOpen={toggleOpen}
          />
        </header>
        <Menu isOpen={getOpenState()} />
      </div>
    </aside>
  )
}
