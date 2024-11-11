import { HeaderSection } from '@/components/app'
import { EnrollmentStagesFilterSection } from './enrollment-stages-filter-section'
import { DataTable } from '@/components/tables'

export const EnrollmentStagesListPage = () => {
  return (
    <>
      <HeaderSection
        title="Gestión de Etapas de matrículas"
        description='Consulta y gestiona las etapas registradas en el sistema. Usa el botón "Añadir" para crear nuevas matrículas y actualiza la información existente según sea necesario.'
        hrefAddLink="/academic/etapas-matriculas/agregar"
      />
      <section className="flex flex-col gap-5">
        <EnrollmentStagesFilterSection />
        <DataTable
          columns={[]}
          data={[]}
        />
      </section>
    </>
  )
}
