import { CourseSelector } from "@/modules/academic/components"

const courses = [
  { id: '1', code: 'C000251', name: 'NOMBRE DEL CURSO I', credits: 20 },
  { id: '2', code: 'C000256', name: 'NOMBRE DEL CURSO II', credits: 20 },
  { id: '3', code: 'C000255', name: 'NOMBRE DEL CURSO III', credits: 5 }
]
export const CoursesList = () => {
  
  return (
    <section className="w-full">
      <h2 className="text-lg font-semibold mb-4">Cursos disponibles</h2>
      <div className="space-y-2">
        {courses.map((course) => (
          <CourseSelector key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}