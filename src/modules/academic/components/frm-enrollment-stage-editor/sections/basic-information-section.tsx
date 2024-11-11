import { ContentInput, HeaderFormSection } from '@/components/layouts'
import { Input } from '@/components/ui/input'

export const BasicInformationSection = () => {
  return (
    <div>
      <HeaderFormSection
        title="Información de etapa"
        description="Ingresa los datos sobre las etapas"
      />
      <ContentInput
        id="nro-documento"
        label="N° Documento"
        description="Ingrese el documento de la persona"
      >
        <Input placeholder="N° Documento: 784542" />
      </ContentInput>
    </div>
  )
}
