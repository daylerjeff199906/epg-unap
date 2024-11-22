import { HeaderSection } from "@/components/app"
import { CardStudents } from "../../students/components"
import { courses } from "@/modules/examples/tables/course-data"
import { CourseGroupCard } from "./course-group-card"


const expedientData = [
  {
    id: 1,
    title: 'Programa de Ingenieria',
    title_plan: 'Plan de estudio 2021',
    title_state: 'En curso',
    nombre_usuario: 'Juan Perez',
    persona_asignada: 'Maria Lopez',
  }
]

export const ResumeStep = () => {
  return (
    <>
      <HeaderSection
        title='Resumen de matrícula'
        description='Revisa los datos de la matrícula antes de finalizar'
        disabledActions
      />
      <CardStudents
        expedient={expedientData[0]}
        className="border-none rounded-none bg-transparent"
      />
      <section>
        <h2 className="text-lg font-semibold mb-4">Detalles de matricula</h2>
        {
          courses.map((course) => (
            <CourseGroupCard
              key={course.id}
              course={course}
              selectedGroups={{}}
              handleGroupSelection={() => { }}
              hasRadioGroup={false}
              hasPlazas={false}
            />
          ))
        }
      </section>
    </>
  )
}
