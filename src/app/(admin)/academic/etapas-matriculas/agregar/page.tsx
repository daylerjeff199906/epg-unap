import { FrmEnrollmentStageEditor } from '@/modules/academic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Matricular estudiante',
}

export default function Page() {
  return <FrmEnrollmentStageEditor />
}
