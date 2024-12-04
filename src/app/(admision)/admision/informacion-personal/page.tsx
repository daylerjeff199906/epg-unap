import { PersonalInfoForm } from '@/modules/admision'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Información Personal',
}

export default function Page() {
  return <PersonalInfoForm />
}
