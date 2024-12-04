export const URL_BASE = '/admision'
export const urlData = {
  home: {
    url: URL_BASE,
    title: 'Inicio',
    description: 'Bienvenido a la plataforma de admisión de la UNAP',
  },
  convocation: {
    url: `${URL_BASE}/convocatorias`,
    title: 'Convocatorias',
    description: 'Lista de convocatorias',
  },
  admision: {
    url: `${URL_BASE}/postulaciones`,
    title: 'Postulaciones',
    description: 'Historial de postulaciones',
  },
  profile: {
    url: `${URL_BASE}/informacion-personal`,
    title: 'Perfil',
    description: 'Información personal',
  },
}
