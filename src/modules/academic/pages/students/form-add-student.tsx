'use client'
import { MultiStepTimeline } from '@/components/app'
import { AsideLayoutFormContent, LayoutFormContent } from '@/components/layouts'
import { useState } from 'react'
import { InformationStudents } from './form-info-students'
import { useRouter } from 'next/navigation'
import { InformationContactStudents } from './form-info-contact'

export const FrmStudentStageEditor = () => {
  const router = useRouter()
  const [selectedStep, setSelectedStep] = useState<string | null>(
    'info-personal'
  )

  const labelOnSubmit =
    selectedStep === 'info-contact' ? 'Terminar y guardar' : 'Siguiente'
  const labelOnCancel = selectedStep !== 'info-personal' ? 'Atrás' : 'Cancelar'

  //   const handleOnSubmit = () => {}

  const handleOnCancel = () => {
    if (selectedStep === 'info-personal') {
      router.push('/academic/estudiantes')
    } else {
      setSelectedStep('info-personal')
    }
  }

  return (
    <div>
      <LayoutFormContent
        title="Agregar nuevo estudiante"
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
                id: 'info-personal',
                title: 'Información personal',
              },
              {
                id: 'info-contact',
                title: 'Información de contacto',
              },
              {
                id: 'select-program',
                title: 'Seleccionar programa y finalizar',
              },
            ]}
          />
        </AsideLayoutFormContent>
        <section className="p-4">
          {selectedStep === 'info-personal' && <InformationStudents />}
          {selectedStep === 'info-contact' && <InformationContactStudents />}
        </section>
      </LayoutFormContent>
    </div>
  )
}
