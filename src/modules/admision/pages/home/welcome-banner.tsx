import { Button } from '@/components/ui/button'

export const WelcomeBanner = () => {
  return (
    <div className="bg-blue-600 text-white rounded-lg p-6 space-y-4">
      <h1 className="text-2xl font-semibold">¡Bienvenido, Pancracio!</h1>
      <p className="text-blue-100">
        Estás a un paso de alcanzar tus metas profesionales. Explora nuestros
        programas y comienza tu desarrollo académico.
      </p>
      <div className="flex gap-2">
        <Button
          variant="secondary"
          className="bg-white hover:bg-gray-100 text-blue-600"
        >
          Etapas activas
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:bg-blue-500"
        >
          Mis postulaciones
        </Button>
      </div>
    </div>
  )
}
