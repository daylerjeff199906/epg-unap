import Image from 'next/image'
import { UserNav } from './user-nav'
import { ModeToggle } from '../actions'
import  {MoreApps} from './more-apps'
import type { IMoreApp } from '@/types/index'
import { GripIcon } from 'lucide-react'

interface NavBarCustomProps {
  title: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  Apps?: Array<IMoreApp>;
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
// const colorsApp = {
//   primary: 'bg-primary-900 dark:bg-primary-800',
//   secondary: 'bg-secondary-500',
//   tertiary: 'bg-tertiary-500',
//   quaternary: 'bg-quaternary-500',
// }

export const NavBarCustom = (props: NavBarCustomProps) => {
  const { title} = props

  return (
    <header
      className={`sticky top-0 z-10 w-full bg-primary-800 dark:bg-blue-950  shadow text-white dark:shadow-secondary  `}
    >
      <div className="px-4 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          {/* <SheetMenu /> */}
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
            <h1 className="font-bold text-xs">{title}</h1>
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
