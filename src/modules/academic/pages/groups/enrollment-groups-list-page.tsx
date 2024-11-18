'use client'
import { usePathname } from 'next/navigation'
import { HeaderSection } from '@/components/app'
import { TypesProgramsCard } from '@/modules/academic'

export const EnrollmentGroupsListPage = () => {
  const pathname = usePathname()

  return (
    <>
      <HeaderSection
        title="Gestión de grupos de matrículas"
        description="Gestión de grupos de matrículas. En esta sección se pueden visualizar los grupos de matrículas, así como agregar nuevos grupos."
        disabledActions
      />
      <section className="flex flex-col gap-3">
        <HeaderSection
          title="Selecciona el tipo del programa"
          description="Para facilitar la busqueda de los grupas selecc.ora el tipo de programa"
          disabledActions
          size="sm"
          showDivider={false}
        />
        <section className="flex flex-col sm:flex-row gap-4">
          <TypesProgramsCard
            name="Maestría"
            description="Programas de maestría"
            href={`${pathname}/maestrias`}
          />
          <TypesProgramsCard
            name="Doctorado"
            description="Programas de doctorado"
            href={`${pathname}/doctorados`}
          />
          <TypesProgramsCard
            name="Formación continua"
            description="Programas como diplomados, cursos, talleres, etc."
            href={`${pathname}/formacion-continua`}
          />
        </section>
      </section>
    </>
  )
}
