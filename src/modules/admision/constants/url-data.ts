export const URL_BASE = '/admision'
export const urlData = {
  home: {
    urls: {
      base: `${URL_BASE}/inicio`,
    },
    title: 'Inicio',
    description: 'Bienvenido a la plataforma de admisión de la UNAP',
  },
  convocation: {
    urls: {
      base: `${URL_BASE}/convocatorias`,
    },
    title: 'Convocatorias',
    description: 'Lista de convocatorias',
  },
  admision: {
    urls: {
      base: `${URL_BASE}/postulaciones`,
    },
    title: 'Postulaciones',
    description: 'Historial de postulaciones',
  },
  profile: {
    urls: {
      base: `${URL_BASE}/informacion-personal`,
      contact: `${URL_BASE}/informacion-personal/contacto`,
      academic: `${URL_BASE}/informacion-personal/academica`,
      personal: `${URL_BASE}/informacion-personal/personal`,
    },
    title: 'Perfil',
    description: 'Información personal',
  },
}
