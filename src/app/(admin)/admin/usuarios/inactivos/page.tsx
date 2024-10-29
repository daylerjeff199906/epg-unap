import { HeaderSection } from '@/components/app'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Usuarios sin acceso',
  description: 'Panel de administración de EPG - UNAP',
}

export default function Page() {
  return (
    <div>
      <HeaderSection
        title="Usuarios sin acceso"
        description="Lista de usuarios dados de baja del sistema, no pueden acceder a ninguna plataforma"
        showAddButton={false}
      />
    </div>
  )
}
