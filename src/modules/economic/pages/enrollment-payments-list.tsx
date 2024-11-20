import { HeaderSection } from '@/components/app'
import { DataTable } from '@/components/tables'
import {enrollmentPagesColumn} from '../components/payments/enrollment-pages-column'


export const EnrollmentPaymentsList = () => {
  return (
    <>
      <HeaderSection
        title="Lista de pagos"
        description='Consulta y gestiona los pagos en el sistema. Usa el botón "Añadir" para generar nuevos pagos y actualiza la información existente según sea necesario.'
        hrefAddLink="/economic"
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
