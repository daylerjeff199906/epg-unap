import { HeaderSection, TabSection, AlertDialogCustom } from '@/components/app'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alert Dialog Custom',
  description: 'Componente de alerta personalizado',
}

export default function Page() {
  return (
    <div>
      <HeaderSection
        title="Dialogo de alerta personalizado"
        description="Dialogo de alerta personalizado con botones de acción y cancelación."
        showAddButton={false}
        showRefreshButton={false}
        showExportButton={false}
      />

      <TabSection
        code={`import { MultiStepTimeline } from '@/components/app

             <MultiStepTimeline
            steps={[
              {
                id: '1',
                title: 'Paso 1',
                description: 'Descripción del paso 1',
              },
              {
                id: '2',
                title: 'Paso 2',
                description: 'Descripción del paso 2',
              },
              {
                id: '3',
                title: 'Paso 3',
                description: 'Descripción del paso 3',
              },
              
            ]}
          />

        '`}
      >
        <section className="max-w-lg shadow-lg p-6 rounded-md w-full flex flex-col">
          <AlertDialogCustom title="¿Estás seguro de que deseas eliminar este elemento?">
            Este es una prueba de alerta personalizada
          </AlertDialogCustom>
        </section>
      </TabSection>
    </div>
  )
}
