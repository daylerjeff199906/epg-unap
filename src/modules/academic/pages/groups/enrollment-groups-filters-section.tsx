import { DatePickerCustom } from '@/components/app'
import { StatusFilter } from '@/modules/academic'

export const EnrollmentGroupsFiltersSection = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-3">
      <DatePickerCustom />
      <StatusFilter />
    </section>
  )
}
