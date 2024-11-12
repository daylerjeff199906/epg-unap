'use client'
import { useState } from 'react'
import { MultiStepTimeline } from '@/components/app'
import { AsideLayoutFormContent, LayoutFormContent } from '@/components/layouts'
import { useRouter, usePathname } from 'next/navigation'
import {
  CourseSection,
  ProgramPlanSection,
  TeachersAssignedSection,
} from './section'

export const FrmGroupCreate = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedStep, setSelectedStep] = useState<string | null>(
    'program-plan'
  )

  const labelOnSubmit =
    selectedStep === 'group-teacher' ? 'Siguiente' : 'Terminar y guardar'
  const labelOnCancel = selectedStep !== 'program-plan' ? 'Atrás' : 'Cancelar'

  //   const handleOnSubmit = () => {}

  const handleOnCancel = () => {
    if (selectedStep === 'program-plan') {
      router.push(`${pathname.replace('/agregar', '')}`)
    } else {
      setSelectedStep('program-plan')
    }
  }

  return (
    <div>
      <LayoutFormContent
        title="Agregar grupo"
        position="left"
        labelOnSubmit={labelOnSubmit}
        labelOnCancel={labelOnCancel}
        onCancel={handleOnCancel}
      >
        <AsideLayoutFormContent>
          <MultiStepTimeline
            selectedStep={selectedStep}
            setSelectedStep={setSelectedStep}
            steps={[
              {
                id: 'program-plan',
                title: 'Programa y plan de estudio',
              },
              {
                id: 'info-course',
                title: 'Información del curso',
              },
              {
                id: 'group-teacher',
                title: 'Asignar docentes',
              },
            ]}
          />
        </AsideLayoutFormContent>
        <section className="p-4">
          {selectedStep === 'program-plan' && <ProgramPlanSection />}
          {selectedStep === 'info-course' && <CourseSection />}
          {selectedStep === 'group-teacher ' && <TeachersAssignedSection />}
        </section>
      </LayoutFormContent>
    </div>
  )
}
