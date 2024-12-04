import { WorkInfoForm } from '@/modules/admision'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Información Laboral',
  description:
    'Completa tus datos laborales para continuar con el proceso de admisión.',
}

export default function Page() {
  return <WorkInfoForm />
}
