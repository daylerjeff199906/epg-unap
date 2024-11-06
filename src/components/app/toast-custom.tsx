
interface ToastProps{
 title: string;
 description: string;
 icon: React.ReactNode;
 variant?: string;
}


export const ToastCustom = ( props: ToastProps ) => {
  const { title, description, icon } = props

  return (
    <div className="fixed bottom-0 right-0 z-50 flex items-center justify-center w-full max-w-sm p-4 mb-6 text-white bg-gray-300 bg-opacity-50 rounded-lg shadow-lg pointer-events-auto md:p-6 lg:p-8">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="text-sm font-medium text-gray-900">
          {title} <span className="font-semibold">{description}</span>
        </div>
      </div>
    </div>
  )
}