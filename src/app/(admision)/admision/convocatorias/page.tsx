import { ConvocatoryListPage } from '@/modules/admision'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Convocatorias',
  description:
    'Convocatorias de admisión a la Escuela de Posgrado de la Universidad Nacional de la Amazonía Peruana.',
}

export default function page() {
  return <ConvocatoryListPage />
}
