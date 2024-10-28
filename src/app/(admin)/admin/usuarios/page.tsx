import { HeaderSection } from '@/components/app'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Usuarios',
  description: 'Panel de administración de EPG - UNAP',
}

export default function Page() {
  return (
    <div>
      <HeaderSection
        title="Usuarios creados"
        description='Consulta y gestiona las matrículas registradas en el sistema. Usa el botón "Agregar" para crear nuevos usuarios y actualiza la información existente según sea necesario.'
        hrefAddLink="/admin/usuarios/crear"
      />
    </div>
  )
}
