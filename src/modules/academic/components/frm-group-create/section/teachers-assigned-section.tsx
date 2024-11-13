import { HeaderFormSection } from '@/components/layouts'

export const TeachersAssignedSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <HeaderFormSection
        title="Agregar grupos y docentes"
        description="Selecciona el curso para asignar los grupos y docentes"
      />
    </div>
  )
}
