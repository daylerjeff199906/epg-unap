import { HeaderFormSection } from '@/components/layouts'

export const TeachersAssignedSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <HeaderFormSection
        title="Agregar lista de ambientes"
        description="Escriba hasta 20 ambientes a quienes puedes asignarles sus datos y estados"
      />
    </div>
  )
}
