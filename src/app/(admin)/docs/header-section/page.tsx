import { HeaderSection, TabSection } from '@/components/app'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Header Section',
  description: 'Componente de cabecera de sección',
}

export default function Page() {
  return (
    <div>
      <HeaderSection
        title="Header Section"
        description="Componente de cabecera de sección, con título y descripción."
        showAddButton={false}
        showRefreshButton={false}
        showExportButton={false}
      />

      <TabSection
        code={`import { MultiStepTimeline } from '@/components/app

            export default function Page() {
                return (
          <HeaderSection
            title="Header Section"
            description="Componente de cabecera de sección, con título y descripción."
            showAddButton={false}
            showRefreshButton={false}
            showExportButton={false}
          />
        )
          }
        '`}
      >
        <section className="w-full p-6 rounded-md">
          <HeaderSection
            title="Header Section"
            description="Componente de cabecera de sección, con título y descripción."
            disabledActions
          />
        </section>
      </TabSection>
    </div>
  )
}
