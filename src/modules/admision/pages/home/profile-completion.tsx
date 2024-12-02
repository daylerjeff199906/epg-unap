import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

export const ProfileCompletion = () => {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 bg-blue-600 rounded-full" />
        <h2 className="font-semibold">Complete su perfil</h2>
      </div>
      <p className="text-sm text-gray-600">
        Para brindarte una mejor experiencia, necesitamos algunos datos
        adicionales.
      </p>
      <Progress
        value={33}
        className="h-2 bg-blue-100"
      />
      <div className="flex gap-2">
        <span className="text-sm text-blue-600">Teléfono</span>
        <span className="text-sm text-gray-400">Teléfono</span>
        <span className="text-sm text-gray-400">Teléfono</span>
      </div>
      <Button
        variant="link"
        className="text-blue-600 p-0"
      >
        Completar perfil →
      </Button>
    </div>
  )
}
