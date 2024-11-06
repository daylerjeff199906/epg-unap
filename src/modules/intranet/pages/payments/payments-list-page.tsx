'use client'
import { DataTable } from '@/components/tables'
import { paymentColumns } from './payment-columns'
import { paymentsData } from './payments-data'

export const PaymentsListPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <section>
        <h2 className="font-bold text-lg">Lista de pagos realizados</h2>
      </section>
      <DataTable
        columns={paymentColumns}
        data={paymentsData}
      />
    </section>
  )
}
