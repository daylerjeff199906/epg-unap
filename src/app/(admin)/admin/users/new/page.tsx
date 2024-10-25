import { MultiStepTimeline } from '@/components/app'

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 container">
      <aside>
        <MultiStepTimeline />
      </aside>
      <main>
        <h1>Formulario de creación de usuario</h1>
        <p>
          Este formulario le permitirá crear un nuevo usuario en el sistema.
        </p>
      </main>
    </div>
  )
}
