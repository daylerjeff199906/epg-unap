import { ContentInput, HeaderFormSection } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export const CourseSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <HeaderFormSection
        title="Curso de programa"
        description="Selecciona el curso para asignar IOS grupos, puedes facilitar tu búsqueda por ciclo"
      />
      <section>
        <Card className="w-full bg-gray-100">
          <CardHeader>
            <h1 className="text-lg font-bold">
              Plan Seleccionado: Plan de estudio de la carrera de Ingeniería de
              Sistemas
            </h1>
            <h2 className="text-gray-500 text-sm">Código del curso</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              El plan de estudio de la carrera de Ingeniería de Sistemas se
              encuentra dividido en ciclos, cada ciclo contiene los cursos
              correspondientes a ese periodo de estudio.
            </p>
          </CardContent>
        </Card>
      </section>
      <section>
        <ContentInput
          id="search-course"
          label="Buscar curso y seleccionar"
          description="Selecciona el curso, puedes facilitar tu búsqueda por ciclo"
          orientation="vertical"
        >
          <section className="flex items-center gap-4">
            <Input placeholder="Buscar curso..." />
            <Select>
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Seleccionar ciclo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Ciclo</SelectLabel>
                  <SelectItem value="1">Ciclo 1</SelectItem>
                  <SelectItem value="2">Ciclo 2</SelectItem>
                  <SelectItem value="3">Ciclo 3</SelectItem>
                  <SelectItem value="4">Ciclo 4</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button type="button">
              <Search />
              Buscar
            </Button>
          </section>
        </ContentInput>
      </section>
    </div>
  )
}
