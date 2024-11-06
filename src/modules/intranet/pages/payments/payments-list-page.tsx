import { DataTable } from '@/components/tables'

export const PaymentsListPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <section>
        <h2 className="font-bold text-lg">Lista de pagos realizados</h2>
      </section>
      <DataTable
        columns={[]}
        data={[]}
      />
    </section>
  )
}
