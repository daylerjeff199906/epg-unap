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
        <aside className="w-full max-w-[420px]">
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
          <main></main>
        </aside>
        <main></main>
      </article>
    </LayoutStudent>
  )
}
