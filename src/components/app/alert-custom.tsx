import { Terminal } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

interface IProps {
  type: 'success' | 'error' | 'warning' | 'info'
  title: React.ReactNode
  message?: React.ReactNode
  showIcon?: boolean
}

export const AlertCustom = (props: IProps) => {
  const { message, type, title, showIcon } = props

  //   const types = {
  //     success: 'bg-green-50 border-green-400 text-green-700',
  //     error: 'bg-red-50 border-red-400 text-red-700',
  //     warning: 'bg-yellow-50 border-yellow-400 text-yellow-700',
  //     info: 'bg-blue-50 border-blue-400 text-blue-700',
  //   }

  //   const icons = {
  //     success: <IconCircleCheck size={20} />,
  //     error: <IconXboxX size={20} />,
  //     warning: <IconExclamationCircle size={20} />,
  //     info: <IconInfoCircle size={20} />,
  //   }

  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}
