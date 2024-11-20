import { HeaderSection } from '@/components/app'
import { DataTable } from '@/components/tables'
import {enrollmentPagesColumn} from '../components/payments/enrollment-pages-column'


export const EnrollmentPaymentsList = () => {
  return (
    <>
      <HeaderSection
        title="Gestión de Etapas de matrículas"
        description='Consulta y gestiona las etapas registradas en el sistema. Usa el botón "Añadir" para crear nuevas matrículas y actualiza la información existente según sea necesario.'
        hrefAddLink="/academic/etapas-matriculas/agregar"
      />
      <section className="flex flex-col gap-1 pt-3">
        <DataTable
          columns={enrollmentPagesColumn}
          data={[]}
        />
      </section>
    </>
  )
}
