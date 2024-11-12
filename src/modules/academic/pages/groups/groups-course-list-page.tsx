'use client'
import { HeaderSection } from '@/components/app'
import { usePathname } from 'next/navigation'

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
    </>
  )
}
