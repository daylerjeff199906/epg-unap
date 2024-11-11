import { HeaderSection } from '@/components/app'
import { EnrollmentStagesFilterSection } from './enrollment-stages-filter-section'

export const EnrollmentStagesListPage = () => {
  return (
    <main>
      <HeaderSection
        title="Gestión de Etapas de matrículas"
        description='Consulta y gestiona las etapas registradas en el sistema. Usa el botón "Añadir" para crear nuevas matrículas y actualiza la información existente según sea necesario.'
        hrefAddLink="/academic/etapas-matriculas/agregar"
      />
      <EnrollmentStagesFilterSection />
    </main>
  )
}
