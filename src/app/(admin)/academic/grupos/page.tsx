import { EnrollmentGroupsListPage } from '@/modules/academic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grupos de Cursos',
}

export default function Page() {
  return <EnrollmentGroupsListPage />
}
