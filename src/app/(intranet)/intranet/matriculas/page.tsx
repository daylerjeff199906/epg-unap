import { LayoutStudent } from '@/components/layouts'
import { Metadata } from 'next'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Matrículas',
  description: 'Historial de matrículas de EPG - UNAP',
}

export default function Page() {
  const date = new Date().toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <LayoutStudent
      title="Historial de matrículas realizadas"
      subtitle={`Lista de matrículas realizadas hasta la actualidad ${date}`}
    >
      <article className="flex sm:flex-row gap-4">
        <aside className="w-full max-w-[420px] flex flex-col gap-3">
          <header className="w-full">
            <Select defaultValue="apple">
              <SelectTrigger className="w-full h-fit justify-between">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">
                    <section className="space-y-2">
                      <section className="flex flex-col gap-1 justify-start">
                        <p className="text-xs text-gray-500 text-start">
                          Programa
                        </p>
                        <h1 className="font-bold max-w-96 text-start">
                          Maestría en Ciencias en Gestión Ambiental
                        </h1>
                      </section>
                      <div className="flex justify-start">
                        <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-200">
                          Plan de Estudios: Plan - A - 2024 - II
                        </Badge>
                      </div>
                    </section>
                  </SelectItem>
                  <SelectItem value="banana">
                    <section className="space-y-2">
                      <section className="flex flex-col gap-1 justify-start">
                        <p className="text-xs text-gray-500 text-start">
                          Programa
                        </p>
                        <h1 className="font-bold max-w-80 text-start">
                          Maestría en Gestión de Recursos Naturales
                        </h1>
                      </section>
                      <div className="flex justify-start">
                        <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-200">
                          Plan de Estudios: Plan - B - 2023 - I
                        </Badge>
                      </div>
                    </section>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </header>
          <main>
            <Card>
              <CardContent className="py-3 flex flex-col gap-2">
                <header className="flex justify-between items-start">
                  <h1 className="font-bold">
                    <span className="text-primary-900 font-bold">
                      Matrícula:
                    </span>{' '}
                    Ciclo 2024 - II
                  </h1>
                  <span>
                    <p className="text-gray-500 text-sm">2024</p>
                  </span>
                </header>
                <section className="text-sm text-gray-500">
                  <p>
                    F. de matrícula: <span>20/10/2024 03:00:01</span>
                  </p>
                  <p>
                    Cursos matriculados: <span>5</span>
                  </p>
                </section>
              </CardContent>
            </Card>
          </main>
        </aside>
        <main></main>
      </article>
    </LayoutStudent>
  )
}
