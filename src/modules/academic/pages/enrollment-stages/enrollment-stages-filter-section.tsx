import { DatePicker, QueryFilter, StatusFilter } from '@/modules/academic'

export const EnrollmentStagesFilterSection = () => {
  return (
    <main className="flex flex-col sm:flex-row items-center gap-3 justify-between">
      <section className="flex flex-col sm:flex-row items-center gap-3">
        <DatePicker />
        <StatusFilter />
      </section>
      <QueryFilter />
    </main>
  )
}
