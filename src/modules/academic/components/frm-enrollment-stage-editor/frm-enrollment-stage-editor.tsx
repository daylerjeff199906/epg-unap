'use client'
import { MultiStepTimeline } from '@/components/app'
import {
  AsideLayoutFormContent,
  HeaderFormSection,
  LayoutFormContent,
} from '@/components/layouts'
import { useState } from 'react'

export const FrmEnrollmentStageEditor = () => {
  const [selectedStep, setSelectedStep] = useState<string | null>(
    'periodo-plan'
  )

  return (
    <div>
      <LayoutFormContent
        title="Agregar etapa de matrícula"
        position="left"
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
          <HeaderFormSection
            title="Selección de etapa y plan"
            description="Selecciona al periodo que pertenece a matrícula"
          />
        </section>
      </LayoutFormContent>
    </div>
  )
}
