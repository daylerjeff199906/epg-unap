import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

interface Course {
  id: string
  code: string
  name: string
  credits: number
  selected?: boolean
}

export const CourseSelector = ({ 
  courses = [
    { id: '1', code: 'C000256', name: 'NOMBRE DEL CURSO I', credits: 20, selected: true },
    { id: '2', code: 'C000256', name: 'NOMBRE DEL CURSO II', credits: 20 },
    { id: '3', code: 'C000256', name: 'NOMBRE DEL CURSO III', credits: 5 }
  ]
}: {
  courses?: Course[]
}) => {
  return (
    <div className="w-full max-w-3xl">
      <h2 className="text-lg font-semibold mb-4">Cursos disponibles</h2>
      <div className="space-y-1">
        {courses.map((course) => (
          <div
            key={course.id}
            className={cn(
              "flex items-center gap-4 p-4 rounded-sm",
              course.selected && "bg-blue-50"
            )}
          >
            <Checkbox 
              checked={course.selected} 
              className="h-5 w-5"
              aria-label={`Seleccionar ${course.name}`}
            />
            <div className="grid grid-cols-[1fr,2fr,1fr] flex-1 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground text-xs">Cod</div>
                <div>{course.code}</div>
              </div>
              <div>
                <div className="text-muted-foreground text-xs">Curso</div>
                <div>{course.name}</div>
              </div>
              <div>
                <div className="text-muted-foreground text-xs">Créditos</div>
                <div className="inline-flex items-center rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium">
                  {course.credits} cred.
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}