import { SwitchCustom } from '@/components/app'
import { ContentInput, HeaderFormSection } from '@/components/layouts'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Divider } from '@nextui-org/react'

export const BasicInformationSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <HeaderFormSection
        title="Información de etapa"
        description="Ingresa los datos sobre las etapas"
      />
      <ContentInput
        id="promotion-name"
        label="Promoción"
        description="Ingresa el nombre de la promoción"
      >
        <Input placeholder="Ejemplo: Federico villareal" />
      </ContentInput>
      <Divider />
      <ContentInput
        id="description"
        label="Descripción"
        description="Ingresa una descripción de la etapa"
      >
        <Textarea placeholder="Ejemplo: Etapa de matrícula para el ciclo 2022-1" />
      </ContentInput>
      <Divider />
      <ContentInput
        id="status"
        label="Estado"
        description="Selecciona el estado de la etapa. Por defecto, se encuentra activo"
      >
        <div className="bg-white">
          <SwitchCustom
            label="Activo"
            description="Activa o desactiva la etapa"
          />
        </div>
      </ContentInput>
    </div>
  )
}
