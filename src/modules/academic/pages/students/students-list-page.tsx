'use client'
import { HeaderSection } from '@/components/app'
import { DataTable } from '@/components/tables'
import { usePathname } from 'next/navigation'
import { studentslistcolumn } from '@/modules/academic'


export const StudentsListPage = () => {

  const pathname = usePathname()

  return (
    <>
      <HeaderSection
        title={`Lista de estudiantes`}
        description="Gestión de la lista de los estudiantes. En esta sección se pueden visualizar los estudiantes, así como agregar nuevos estudiantes."
        hrefAddLink={`${pathname}/agregar`}
      />
      <section>
        <DataTable
          columns={studentslistcolumn}
          data={[]}
        />
      </section>
    </>
  )
}
