import { CircleX, Info, TriangleAlert, CircleCheck } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { cn } from '@/lib/utils'

interface IProps {
  type: 'success' | 'error' | 'warning' | 'info'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  variant?: 'border' | 'flat' | 'step'
  title: React.ReactNode
  message?: React.ReactNode
  showIcon?: boolean
}

const typeData = {
  success: {
    icon: <CircleCheck size={20} />,
    variant: {
      border: 'bg-green-50 border-green-400 text-green-700',
      flat: 'bg-green-50 border-none text-green-700',
      step: 'bg-green-50 border-l-8 border-green-500 text-green-700 border-r-none',
    },
  },
  error: {
    icon: <CircleX size={20} />,
    variant: {
      border: 'bg-red-50 border-red-400 text-red-700',
      flat: 'bg-red-50 border-none text-red-700',
      step: 'bg-red-50 text-red-700 border-l-8 border-red-500',
    },
  },
  warning: {
    icon: <TriangleAlert size={20} />,
    variant: {
      border: 'bg-yellow-50 border-yellow-400 text-yellow-700',
      flat: 'bg-yellow-50 border-none text-yellow-700',
      step: 'bg-yellow-50 border-l-8 border-yellow-500 text-yellow-700',
    },
  },
  info: {
    icon: <Info size={20} />,
    variant: {
      border: 'bg-blue-50 border-blue-400 text-blue-700',
      flat: 'bg-blue-50 border-none text-blue-700',
      step: 'bg-blue-50 border-l-8 border-blue-500 text-blue-700',
    },
  },
}

const radiusData = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

export const AlertCustom = (props: IProps) => {
  const {
    message,
    type = 'info',
    title,
    showIcon,
    radius = 'sm',
    variant = 'border',
  } = props

  const iconSelected = showIcon ? typeData[type].icon : null
  const colorSelected = typeData[type].variant[variant]
  const radiusSelected = radiusData[radius]

  return (
    <Alert
      className={cn(
        'w-full flex items-center gap-3',
        colorSelected,
        radiusSelected
      )}
    >
      <section className="p-4 shadow-lg rounded-md w-fit ">
        {iconSelected}
      </section>
      <main>
        <AlertTitle>{title || 'Heads up!'}</AlertTitle>
        <AlertDescription>
          {message || 'You can add components to your app using the cli.'}
        </AlertDescription>
      </main>
    </Alert>
  )
}
