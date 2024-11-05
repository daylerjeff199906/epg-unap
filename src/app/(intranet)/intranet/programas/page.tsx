import { LayoutStudent } from '@/components/layouts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mis programas',
  description: 'Panel de administración de EPG - UNAP',
}

export default function Page() {
  return (
    <LayoutStudent
      title="Programas Actuales"
      subtitle="Lista de programas matriculados hasta la actualidad"
    >
      <section></section>
    </LayoutStudent>
  )
}
