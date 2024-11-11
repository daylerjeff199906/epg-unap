import { ContentInput, HeaderFormSection } from '@/components/layouts'
import { Divider } from '@nextui-org/react'
import React from 'react'

export const StageStudyPlanSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <HeaderFormSection
        title="Selección de etapa y plan"
        description="Selecciona al periodo que pertenece a matrícula"
      />
      <ContentInput
        id="period"
        label="Periodo"
        description="Selecciona el periodo al que pertenece la etapa"
      >
        ASDASDAD
      </ContentInput>
      <Divider />
      <ContentInput
        id="study-plan"
        label="Plan de estudio"
        description="Selecciona el plan de estudios del programa, para la creación de la matrícula"
      >
        ASDADSASD
      </ContentInput>
    </div>
  )
}
