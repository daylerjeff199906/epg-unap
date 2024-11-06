'use client'
import { DataTable } from '@/components/tables'
import { paymentColumns } from './payment-columns'
import { paymentsData } from './payments-data'
import { PaymentsFilters } from './payments-filters'

export const PaymentsListPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <section className="flex flex-row justify-between items-center gap-4">
        <h2 className="font-bold text-lg">Lista de pagos realizados</h2>
        <PaymentsFilters />
      </section>
      <DataTable
        columns={paymentColumns}
        data={paymentsData}
      />
      <section className="flex flex-row justify-between items-center gap-4 p-4 bg-white">
        <div></div>
        <div className="">
          <h2 className="text-sm">
            Pagos realizados: <span className="font-bold"> s/. 70,511.00</span>
          </h2>
        </div>
      </section>
    </section>
  )
}
