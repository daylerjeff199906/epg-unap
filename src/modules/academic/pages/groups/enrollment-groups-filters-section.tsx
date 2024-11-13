import { DataTableFilter, DatePickerCustom } from '@/components/app'
import { IFiltersItems } from '@/components/app/data-table-filter'
import { StatusFilter } from '@/modules/academic'
import {
  CourseFilter,
  ProgramsFilter,
  TeacherFilter,
} from '../../components/groups-course-filters'

const filtersItems: IFiltersItems[] = [
  {
    label: 'Por docente',
    key: 'teacher',
    content: <TeacherFilter />,
  },
  {
    label: 'Por curso',
    key: 'course',
    content: <CourseFilter />,
  },
  {
    label: 'Por programa',
    key: 'program',
    content: <ProgramsFilter />,
  },
]

export const EnrollmentGroupsFiltersSection = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-3">
      <DatePickerCustom />
      <StatusFilter />
      <DataTableFilter
        title="Filtros"
        filtersItems={filtersItems}
      />
    </section>
  )
}
