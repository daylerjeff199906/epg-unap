import { DatePicker, StatusFilter } from '@/modules/academic'

export const EnrollmentStagesFilterSection = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-3">
      <DatePicker />
      <StatusFilter />
    </section>
  )
}
