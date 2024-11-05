import { LayoutStudent } from '@/components/layouts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Matrículas',
  description: 'Historial de matrículas de EPG - UNAP',
}

export default function Page() {
  const date = new Date().toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <LayoutStudent
      title="Historial de matrículas realizadas"
      subtitle={`Lista de matrículas realizadas hasta la actualidad ${date}`}
    >
      <section></section>
    </LayoutStudent>
  )
}
