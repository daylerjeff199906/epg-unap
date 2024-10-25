'use client'
import { useState } from 'react'
import { Check } from 'lucide-react'

interface Step {
  title: string
  description: string
  href?: string
}

export const MultiStepTimeline = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null)

  const steps: Step[] = [
    {
      title: 'Información básica',
      description: 'Ingrese los datos principales',
      href: '#',
    },
    {
      title: 'Asignación de roles',
      description: 'Defina los roles del usuario',
      href: '#',
    },
    {
      title: 'Crear usuario y terminar',
      description: 'Finalice el proceso de creación',
      href: '#',
    },
  ]

  return (
    <div className="max-w-md mt-8">
      <ol className="relative space-y-12">
        {steps.map((step, index) => (
          <li
            key={index}
            className="flex items-start cursor-pointer"
            onClick={() => setSelectedStep(index)}
          >
            <div className="relative flex items-center justify-center pt-3">
              <div
                className={`w-5 h-5 flex items-center justify-center rounded-full ${
                  selectedStep === index
                    ? 'bg-gray-400 text-white'
                    : 'border-2 border-gray-400'
                }`}
              >
                {selectedStep === index && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
              {index < steps.length - 1 && (
                <div className="absolute w-0.5 h-20 bg-gray-300 left-1/2 transform -translate-x-1/2 top-8"></div>
              )}
            </div>
            <div className="ml-6 pt-1">
              <h3
                className={`text-lg ${
                  selectedStep === index
                    ? 'font-bold text-gray-900'
                    : 'font-medium text-gray-900'
                }`}
              >
                {step.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
