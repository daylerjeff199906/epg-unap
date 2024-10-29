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

export const menuAdminData: Group[] = [
  {
    groupLabel: '',
    menus: [
      {
        href: '/admin',
        label: 'Inicio',
        icon: House,
        submenus: [],
        active: false,
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
            active: false,
          },
          {
            href: '/admin/usuarios/inactivos',
            label: 'Usuarios sin acceso',
            active: false,
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
            active: false,
          },
          {
            href: '/roles/new',
            label: 'Roles',
            active: false,
          },
          {
            href: '/units',
            label: 'Unidades organizativas',
            active: false,
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
            active: false,
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
        active: false,
      },
    ],
  },
]

export const menuAcademicosData: Group[] = []

export const menuDocsData: Group[] = []

export const menuTeacherData: Group[] = []

export const menuStudentData: Group[] = []
