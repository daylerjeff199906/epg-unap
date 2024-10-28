import { HeaderSection } from '@/components/app'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Usuarios',
  description: 'Panel de administración de EPG - UNAP',
}

export default function Page() {
  return (
    <div>
      <HeaderSection description="Descripción de la sección" />
    </div>
  )
}
