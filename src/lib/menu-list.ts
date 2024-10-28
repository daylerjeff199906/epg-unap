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
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/admin',
          label: 'Inicio',
          icon: House,
          submenus: [],
          active: pathname === '/admin',
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
              href: '/admin/usuarios',
              label: 'Lista de usuarios',
              active: pathname === '/admin/usuarios',
            },
            {
              href: '/admin/usuarios/inactivos',
              label: 'Usuarios sin acceso',
              active: pathname === '/admin/users/inactivos',
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
              active: pathname === '/roles',
            },
            {
              href: '/roles/new',
              label: 'Roles',
              active: pathname === '/roles/new',
            },
            {
              href: '/units',
              label: 'Unidades organizativas',
              active: pathname === '/units',
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
              active: pathname === '/autoridades',
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
          active: pathname === '/account',
        },
      ],
    },
  ]
}
