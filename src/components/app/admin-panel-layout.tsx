'use client'
import { useSidebar } from '@/hooks'
import { cn } from '@/lib/utils'
import { SideBar } from './side-bar'
import { BreadcrumbCustom } from './bread-crumb-custom'

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { getOpenState, settings } = useSidebar()
  //   const sidebar = useStore(useSidebar, (x) => x)

  //   if (!sidebar) return null
  //   const { getOpenState, settings } = sidebar

  return (
    <>
      <SideBar />
      <main
        className={cn(
          'min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300',
          !settings.disabled && (!getOpenState() ? 'lg:ml-[90px]' : 'lg:ml-72')
        )}
      >
        <section className="p-4 bg-gray-100">
          <BreadcrumbCustom />
        </section>
        {children}
      </main>
      <footer
        className={cn(
          'transition-[margin-left] ease-in-out duration-300',
          !settings.disabled && (!getOpenState() ? 'lg:ml-[90px]' : 'lg:ml-72')
        )}
      >
        {/* <Footer /> */}
      </footer>
    </>
  )
}
