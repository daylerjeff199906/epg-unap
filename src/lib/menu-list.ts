import { menuAdminData } from '@/types/menusApp'
import { LucideIcon } from 'lucide-react'

type Submenu = {
  href: string
  label: string
  active?: boolean
}

type Menu = {
  href: string
  label: string
  active?: boolean
  icon: LucideIcon
  submenus?: Submenu[]
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

import { MenuConfigApps } from '@/types/configApps'

// Función para obtener el menú según el nombre de la aplicación y el pathname
export function getMenuList(
  appName: MenuConfigApps,
  pathname: string
): Group[] {
  let menuData: Group[]

  switch (appName) {
    case 'panel-admin':
      menuData = menuAdminData
      break
    // Puedes agregar más casos para diferentes aplicaciones
    default:
      menuData = [] // Retorna un menú vacío o muestra un error si el appName no coincide
  }

  // Actualizar el estado `active` según el `pathname`
  return menuData.map((group) => ({
    ...group,
    menus: group.menus.map((menu) => ({
      ...menu,
      active: pathname === menu.href,
      submenus: menu.submenus?.map((submenu) => ({
        ...submenu,
        active: pathname === submenu.href,
      })),
    })),
  }))
}
