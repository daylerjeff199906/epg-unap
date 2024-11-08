import { LayoutStudent } from '@/components/layouts'
import { PaymentsListPage } from '@/modules/intranet'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mis pagos',
  description: 'Historial de pagos de EPG - UNAP',
}

export default function Page() {
  return (
    <LayoutStudent
      title="Historial de pagos realizados"
      subtitle="Lista de pagos realizados hasta la actualidad"
    >
      <PaymentsListPage />
    </LayoutStudent>
  )
}
