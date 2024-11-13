'use client'
import { HeaderSection } from '@/components/app'
import { DataTable } from '@/components/tables'
import { usePathname } from 'next/navigation'
import {
  EnrollmentGroupsFiltersSection,
  groupsCourseColumn,
} from '@/modules/academic'

interface GroupsCourseListPageProps {
  slug: string
}
export const GroupsCourseListPage = (props: GroupsCourseListPageProps) => {
  const { slug } = props
  const pathname = usePathname()

  const name = slug.toUpperCase()
  const title = name.replace(/-/g, ' ')

  return (
    <>
      <HeaderSection
        title={`Grupos de Cursos - ${title}`}
        description="Gestión de grupos de matrículas. En esta sección se pueden visualizar los grupos de matrículas, así como agregar nuevos grupos."
        hrefAddLink={`${pathname}/agregar`}
      />
      <section className="pt-4">
        <DataTable
          columns={groupsCourseColumn}
          data={[]}
          hasSearch={true}
          childrenHeader={<EnrollmentGroupsFiltersSection />}
        />
      </section>
    </>
  )
}
