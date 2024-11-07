import { Metadata } from 'next'
import { LayoutStudent } from '@/components/layouts'

export const metadata: Metadata = {
  title: 'Matrículate',
  description: 'Realiza tu matrícula en los programas seleccionados',
}

export default function Page() {
  return (
    <LayoutStudent
      title="Matricúlate, Jhonatan Cervantes C."
      subtitle="Matrículas disponibles, selecciona un programa"
    >
      asdas
    </LayoutStudent>
  )
}
