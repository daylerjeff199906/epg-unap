'use client'
import { Check } from 'lucide-react'

export interface Step {
  id: string
  title: string
  description?: string
}

interface MultiStepTimelineProps {
  steps: Step[]
  selectedStep?: number | null
  setSelectedStep?: (index: number) => void
}

export const MultiStepTimeline = (props: MultiStepTimelineProps) => {
  const { steps, selectedStep, setSelectedStep } = props
  // const [selectedStep, setSelectedStep] = useState<number | null>(null)

  return (
    <div className="max-w-md">
      <ol className="relative space-y-12">
        {steps?.length === 0 && (
          <>
            <main className="h-20 flex items-center justify-center text-gray-500">
              <h1 className="text-sm text-gray-500">Data not fund</h1>
            </main>
          </>
        )}
        {steps?.length > 0 && (
          <>
            {steps?.map((step, index) => (
              <li
                key={index}
                className="flex items-start cursor-pointer"
                onClick={() => setSelectedStep && setSelectedStep(index)}
              >
                <div
                  className={`relative flex items-center justify-center ${
                    step.description ? 'mt-4' : 'mt-2'
                  }`}
                >
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
                  {index < steps?.length - 1 && (
                    <div className="absolute w-0.5 h-20 bg-gray-300 left-1/2 transform -translate-x-1/2 top-8"></div>
                  )}
                </div>
                <div className="ml-6 pt-1">
                  <h3
                    className={`${
                      selectedStep === index
                        ? 'font-bold text-gray-900'
                        : 'font-medium text-gray-900'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </>
        )}
      </ol>
    </div>
  )
}
