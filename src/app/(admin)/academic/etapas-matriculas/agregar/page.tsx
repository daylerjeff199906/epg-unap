import { FrmEnrollmentStageEditor } from '@/modules/academic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crear etapa de matrícula',
}

export default function Page() {
  return <FrmEnrollmentStageEditor />
}
