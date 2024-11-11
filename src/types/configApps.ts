export const configApps = {
  'panel-admin': {
    name: 'Panel de administración de EPG - UNAP',
    color: '#002E62',
  },
  academic: {
    name: 'Académicos',
    color: '#27272A',
  },
  docs: {
    name: 'Documentación',
    color: '#2C2C2C',
  },
}

export type MenuConfigApps = keyof typeof configApps
