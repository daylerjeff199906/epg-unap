'use client'
import { MultiStepTimeline } from '@/components/app'
import { AsideLayoutFormContent, LayoutFormContent } from '@/components/layouts'
import { useState } from 'react'
import { BasicInformationSection, StageStudyPlanSection } from './sections'

export const FrmEnrollmentStageEditor = () => {
  const [selectedStep, setSelectedStep] = useState<string | null>(
    'periodo-plan'
  )

  return (
    <div>
      <LayoutFormContent
        title="Agregar etapa de matrícula"
        position="left"
        labelOnSubmit={
          selectedStep === 'info-basica' ? 'Terminar y guardar' : 'Siguiente'
        }
      >
        <AsideLayoutFormContent>
          <MultiStepTimeline
            selectedStep={selectedStep}
            setSelectedStep={setSelectedStep}
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
          {selectedStep === 'periodo-plan' && <StageStudyPlanSection />}
          {selectedStep === 'info-basica' && <BasicInformationSection />}
        </section>
      </LayoutFormContent>
    </div>
  )
}
