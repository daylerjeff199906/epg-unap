import { HeaderSection, TabSection } from '@/components/app'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alert Messages',
  description: 'Cards with alert messages',
}

export default function Page() {
  return (
    <div>
      <HeaderSection
        title="Mensajes de alerta"
        description='Son tarjetas con mensajes de alerta, que pueden ser de tipo "success", "info", "warning" o "error".'
        showAddButton={false}
        showRefreshButton={false}
        showExportButton={false}
      />

      <TabSection
        code={`import { AlertMessage } from '@/components/app
import { Alert } from 'react-feather'
            '`}
        usage=""
      >
        asdasdasdasd
      </TabSection>
    </div>
  )
}
