import { CircleX, Info, TriangleAlert, CircleCheck } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

interface IProps {
  type: 'success' | 'error' | 'warning' | 'info'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  title: React.ReactNode
  message?: React.ReactNode
  showIcon?: boolean
}

const typeData = {
  success: {
    color: 'bg-green-50 border-green-400 text-green-700',
    icon: <CircleCheck size={20} />,
  },
  error: {
    color: 'bg-red-50 border-red-400 text-red-700',
    icon: <CircleX size={20} />,
  },
  warning: {
    color: 'bg-yellow-50 border-yellow-400 text-yellow-700',
    icon: <TriangleAlert size={20} />,
  },
  info: {
    color: 'bg-blue-50 border-blue-400 text-blue-700',
    icon: <Info size={20} />,
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
  const { message, type = 'info', title, showIcon, radius = 'sm' } = props

  const iconSelected = showIcon ? typeData[type].icon : null
  const colorSelected = typeData[type].color
  const radiusSelected = radiusData[radius]
  return (
    <Alert
      className={`w-full flex items-center gap-3 ${colorSelected} ${radiusSelected}`}
    >
      <section className="p-4 shadow-lg rounded-md w-fit">
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
