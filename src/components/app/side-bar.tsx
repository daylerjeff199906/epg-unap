import { cn } from '@/lib/utils'
import React from 'react'
import { Menu } from './menu'

export const SideBar = () => {
  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-0 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 w-72 bg-primary-900 text-white'
        // !getOpenState() ? 'w-[90px]' : 'w-72',
        // settings.disabled && 'hidden'
      )}
    >
      {/* <SidebarToggle
        isOpen={isOpen}
        setIsOpen={toggleOpen}
      /> */}
      <div
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
        className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800"
      >
        {/* <Button
          className={cn(
            'transition-transform ease-in-out duration-300 mb-1',
            !getOpenState() ? 'translate-x-1' : 'translate-x-0'
          )}
          variant="link"
          asChild
        >
          <Link
            href="/dashboard"
            className="flex items-center gap-2"
          >
            <PanelsTopLeft className="w-6 h-6 mr-1" />
            <h1
              className={cn(
                'font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300',
                !getOpenState()
                  ? '-translate-x-96 opacity-0 hidden'
                  : 'translate-x-0 opacity-100'
              )}
            >
              Brand
            </h1>
          </Link>
        </Button>
         */}
        <Menu
          // isOpen={getOpenState()}
          isOpen={true}
        />
      </div>
    </aside>
  )
}