import { AcademicInfoForm } from '@/modules/admision'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Información Académica',
  description:
    'Completa tus datos académicos para continuar con el proceso de admisión.',
}

export default function Page() {
  return <AcademicInfoForm />
}
