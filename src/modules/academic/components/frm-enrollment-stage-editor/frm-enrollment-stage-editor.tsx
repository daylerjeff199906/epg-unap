import { MultiStepTimeline } from '@/components/app'
import { AsideLayoutFormContent, LayoutFormContent } from '@/components/layouts'

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
        asdadsasdadadasdad
      </LayoutFormContent>
    </div>
  )
}
