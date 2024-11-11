import { EnrollmentStagesListPage } from '@/modules/academic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Etapas de Matrículas ',
}

export default function Page() {
  return (
    <>
      <EnrollmentStagesListPage />
    </>
  )
}
