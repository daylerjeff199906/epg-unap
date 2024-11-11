import { HeaderSection } from '@/components/app'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Etapas de Matrículas ',
}

export default function Page() {
  return (
    <>
      <HeaderSection
        title="Gestión de Etapas de matrículas"
        description='Consulta y gestiona las etapas registradas en el sistema. Usa el botón "Añadir" para crear nuevas matrículas y actualiza la información existente según sea necesario.'
        hrefAddLink="/admin/usuarios/agregar"
      />
    </>
  )
}
