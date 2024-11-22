import { BannerSection } from '@/components/app'
import { ProgramListPage } from '@/modules/admision'

export default function Page() {
  return (
    <>
      <BannerSection
        title="Programas en convocatoria"
        description="Conoce los programas de postgrado que se encuentran en convocatoria para el año 2024."
      />
      <ProgramListPage />
    </>
  )
}
