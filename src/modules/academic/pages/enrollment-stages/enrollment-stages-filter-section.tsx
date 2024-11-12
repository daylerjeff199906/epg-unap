import { DatePickerCustom } from '@/components/app'
import { ProgramFilter, QueryFilter, StatusFilter } from '@/modules/academic'

export const EnrollmentStagesFilterSection = () => {
  return (
    <main className="flex flex-col sm:flex-row items-center gap-3 justify-between">
      <section className="flex flex-col sm:flex-row items-center gap-3">
        <DatePickerCustom />
        <StatusFilter />
        <ProgramFilter />
      </section>
      <QueryFilter />
    </main>
  )
}
