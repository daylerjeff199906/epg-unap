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
    </section>
  )
}
