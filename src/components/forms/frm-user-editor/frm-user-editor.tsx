'use client'
import { MultiStepTimeline } from '@/components/app'
import { UserInfoBasic, UserRolesData } from './sections'
import { Button } from '@/components/ui/button'

import { Step } from '@/components/app/multi-step-timeline'
import { useState } from 'react'

const steps: Step[] = [
  {
    id: 'user-info-basic',
    title: 'Información básica',
  },
  {
    id: 'user-roles-data',
    title: 'Roles de usuario',
  },
  {
    id: 'user-modules-data',
    title: 'Módulos de usuario',
  },
  {
    id: 'user-create-finish',
    title: 'Crear usuario y terminar',
  },
]

export const FrmUserEditor = () => {
  const [selectedStep, setSelectedStep] = useState<string>(steps[0].id)
  const [isStepValid, setIsStepValid] = useState<boolean>(false)

  const currentStepIndex = steps.findIndex((step) => step.id === selectedStep)
  const isLastStep = currentStepIndex === steps.length - 1

  const handleNext = () => {
    if (isStepValid) {
      setSelectedStep(steps[currentStepIndex + 1].id)
      setIsStepValid(false) // Reset validation for the next step
    } else {
      alert('Por favor, complete todos los campos requeridos.')
    }
  }

  const validateStep = (isValid: boolean) => {
    setIsStepValid(isValid)
  }

  return (
    <main className="py-4 relative h-screen max-h-[calc(100vh-104px)]">
      <header>
        <h1 className="font-bold text-xl">Agregar un usuario</h1>
      </header>
      <hr className="mt-4 border-t border-gray-300" />
      <main className="flex flex-col sm:flex-row">
        <aside className="sm:min-w-[320px] py-4">
          <MultiStepTimeline
            steps={steps}
            selectedStep={selectedStep}
            setSelectedStep={setSelectedStep}
          />
        </aside>
        <div className="hidden sm:block mx-4 border-l border-gray-300 min-h-full"></div>
        {selectedStep === 'user-info-basic' && <UserInfoBasic />}
        {selectedStep === 'user-roles-data' && <UserRolesData />}
      </main>
      <footer className="mt-4 border-t absolute left-0 right-0 bottom-0">
        <main className="flex justify-end w-full py-5">
          <Button variant="ghost">Cancelar</Button>
          <Button onClick={handleNext}>
            {isLastStep ? 'Finalizar' : 'Siguiente'}
          </Button>
        </main>
      </footer>
    </main>
  )
}
