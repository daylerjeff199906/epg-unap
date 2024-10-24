import {
  House,
  User,
  Users,
  Settings,
  LucideIcon,
  BookUser,
} from 'lucide-react'

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

export function getMenuList(pathname: string): Group[] {
  console.log(pathname)
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/',
          label: 'Inicio',
          icon: House,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Usuarios',
      menus: [
        {
          href: '',
          label: 'Usuarios',
          icon: User,
          submenus: [
            {
              href: '/posts',
              label: 'Lista de usuarios',
            },
            {
              href: '/posts/new',
              label: 'Usuarios sin acceso',
            },
          ],
        },
        {
          href: '',
          label: 'Roles',
          icon: Users,
          submenus: [
            {
              href: '/roles',
              label: 'Aplicaciones',
            },
            {
              href: '/roles/new',
              label: 'Roles',
            },
            {
              href: '/units',
              label: 'Unidades organizativas',
            },
          ],
        },
      ],
    },
    {
      groupLabel: 'Personal',
      menus: [
        {
          href: '',
          label: 'Gestión de personal',
          icon: BookUser,
          submenus: [
            {
              href: '/autoridades',
              label: 'Autoridades',
            },
          ],
        },
      ],
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/account',
          label: 'Account',
          icon: Settings,
        },
      ],
    },
  ]
}
