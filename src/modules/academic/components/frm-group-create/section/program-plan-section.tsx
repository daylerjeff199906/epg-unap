import { ContentInput, HeaderFormSection } from '@/components/layouts'
import { Divider } from '@nextui-org/react'

export const ProgramPlanSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <HeaderFormSection
        title="Programa y plan de estudio"
        description="Para la creación de los grupos es necesario que selecciones el programa y el plan de estudio a la que pertenecerá el grupo."
      />
      <ContentInput
        id="program"
        label="Programa"
        description="Selecciona el programa"
      >
        adsasdda
        {/* <Input placeholder="Ejemplo: Federico villareal" /> */}
      </ContentInput>
      <Divider />
      <ContentInput
        id="plan"
        label="Plan de estudio"
        description="Selecciona el plan de estudio"
        orientation="vertical"
      >
        asdads
        {/* <Input placeholder="Ejemplo: Federico villareal" /> */}
      </ContentInput>
    </div>
  )
}
