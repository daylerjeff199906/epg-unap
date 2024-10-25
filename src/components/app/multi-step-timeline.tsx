import { Check } from 'lucide-react'

interface Step {
  title: string
  description: string
  isCompleted: boolean
}

export const MultiStepTimeline = () => {
  const steps: Step[] = [
    {
      title: 'Información básica',
      description: 'Ingrese los datos principales',
      isCompleted: true,
    },
    {
      title: 'Asignación de roles',
      description: 'Defina los roles del usuario',
      isCompleted: false,
    },
    {
      title: 'Crear usuario y terminar',
      description: 'Finalice el proceso de creación',
      isCompleted: false,
    },
  ]
  
  return (
    <div className="max-w-md mx-auto mt-8">
      <ol className="relative space-y-12">
        {steps.map((step, index) => (
          <li
            key={index}
            className="flex items-start"
          >
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-full ${
                step.isCompleted ? 'bg-gray-400' : 'border-4 border-gray-400'
              }`}
            >
              {step.isCompleted && <Check className="w-8 h-8 text-white" />}
            </div>
            <div className="ml-6 pt-3">
              <h3
                className={`text-lg ${
                  step.isCompleted ? 'font-bold' : 'font-medium'
                } text-gray-900`}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="absolute left-8 top-16 w-0.5 h-20 bg-gray-300" />
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
