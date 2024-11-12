import { HeaderFormSection } from '@/components/layouts'

export const ProgramPlanSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <HeaderFormSection
        title="Programa y plan de estudio"
        description="Para la creación de los grupos es necesario que selecciones el programa y el plan de estudio a la que pertenecerá el grupo."
      />
    </div>
  )
}
