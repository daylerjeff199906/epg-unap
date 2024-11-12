import { HeaderSection } from '@/components/app'

export const EnrollmentGroupsListPage = () => {
  return (
    <>
      <HeaderSection
        title="Gestión de grupos de matrículas"
        description="Gestión de grupos de matrículas. En esta sección se pueden visualizar los grupos de matrículas, así como agregar nuevos grupos."
        hrefAddLink="/academic/grupos/agregar"
      />
      <section className="flex flex-col gap-1 pt-3">
        {/* <EnrollmentStagesFilterSection /> */}
      </section>
    </>
  )
}
