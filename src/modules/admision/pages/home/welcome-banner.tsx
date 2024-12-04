import { Button } from '@/components/ui/button'

export const WelcomeBanner = () => {
  return (
    <div className="bg-blue-600 text-white rounded-lg p-6 w-full flex gap-6 relative">
      <section className="space-y-4 w-full">
        <h1 className="text-2xl font-semibold">¡Bienvenido, Pancracio!</h1>
        <p className="text-blue-100 text-sm sm:text-base">
          Estás a un paso de alcanzar tus metas profesionales. Explora nuestros
          programas y comienza tu desarrollo académico.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="secondary"
            className="bg-white hover:bg-gray-100 text-blue-600"
          >
            Etapas activas
          </Button>
          <Button variant="ghost">Mis postulaciones</Button>
        </div>
      </section>
      <img
        src="/svg/graduation-cap.svg"
        alt="image-default"
        className="w-72 h-72 absolute bottom-0 right-6"
      />
    </div>
  )
}
