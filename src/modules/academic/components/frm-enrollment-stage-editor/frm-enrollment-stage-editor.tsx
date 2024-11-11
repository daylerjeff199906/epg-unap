import { MultiStepTimeline } from '@/components/app'
import {
  AsideLayoutFormContent,
  HeaderFormSection,
  LayoutFormContent,
} from '@/components/layouts'

export const FrmEnrollmentStageEditor = () => {
  return (
    <div>
      <LayoutFormContent
        title="Agregar etapa de matrícula"
        position="left"
      >
        <AsideLayoutFormContent>
          <MultiStepTimeline
            steps={[
              {
                id: 'periodo-plan',
                title: 'Periodo y plan de estudio',
              },
              {
                id: 'info-basica',
                title: 'Información básica',
              },
            ]}
          />
        </AsideLayoutFormContent>
        <section className="p-4">
          <HeaderFormSection
            title="Selección de etapa y plan"
            description="Selecciona al periodo que pertenece a matrícula"
          />
        </section>
      </LayoutFormContent>
    </div>
  )
}
