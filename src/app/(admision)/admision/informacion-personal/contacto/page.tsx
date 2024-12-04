import { ContactInfoForm } from '@/modules/admision'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Información de contacto',
  description:
    'Completa tus datos de contacto para continuar con el proceso de admisión.',
}

export default function Page() {
  return <ContactInfoForm />
}
