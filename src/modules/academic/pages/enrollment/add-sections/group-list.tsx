"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface CourseGroup {
  id: string
  name: string
  teacher: string
  schedule: string
  shift: string
  spots: {
    taken: number
    total: number
  }
  available: boolean
}

interface Course {
  id: string
  code: string
  name: string
  groups: CourseGroup[]
  selected?: boolean
}

export default function Component({
  courses = [
    {
      id: '1',
      code: 'C000256',
      name: 'NOMBRE DEL CURSO I',
      groups: [
        {
          id: 'a1',
          name: 'GRUPO A',
          teacher: 'PEPITO EL GRILLO MARADONA',
          schedule: 'LUNES - MIERCOLES - VIERNES',
          shift: 'NOCHE',
          spots: { taken: 10, total: 60 },
          available: true
        },
        {
          id: 'b1',
          name: 'GRUPO B',
          teacher: 'PEPITO EL GRILLO MARADONA',
          schedule: 'LUNES - MIERCOLES - VIERNES',
          shift: 'NOCHE',
          spots: { taken: 10, total: 60 },
          available: true
        }
      ]
    },
    {
      id: '2',
      code: 'C000256',
      name: 'NOMBRE DEL CURSO II',
      selected: true,
      groups: [
        {
          id: 'a2',
          name: 'GRUPO A',
          teacher: 'PEPITO EL GRILLO MARADONA',
          schedule: 'LUNES - MIERCOLES - VIERNES',
          shift: 'NOCHE',
          spots: { taken: 10, total: 60 },
          available: true
        }
      ]
    }
  ]
}: {
  courses?: Course[]
}) {
  const [selectedGroup, setSelectedGroup] = React.useState<string>("")

  return (
    <div className="w-full max-w-3xl">
      <h2 className="text-lg font-semibold mb-4">Grupos disponibles</h2>
      <Accordion type="single" collapsible className="space-y-2">
        {courses.map((course) => (
          <AccordionItem
            key={course.id}
            value={course.id}
            className={cn(
              "border rounded-sm",
              course.selected ? "bg-green-50" : "bg-gray-50"
            )}
          >
            <AccordionTrigger className="px-4 hover:no-underline [&[data-state=open]>div>svg]:rotate-180">
              <div className="flex items-center gap-4 w-full">
                <div className="text-sm text-muted-foreground">{course.code}</div>
                <div className="text-sm font-medium">{course.name}</div>
                <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <RadioGroup
                value={selectedGroup}
                onValueChange={setSelectedGroup}
                className="px-4 pb-4"
              >
                {course.groups.map((group) => (
                  <div
                    key={group.id}
                    className={cn(
                      "border rounded-sm p-4",
                      selectedGroup === group.id && "bg-blue-50"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <RadioGroupItem
                        value={group.id}
                        id={group.id}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-medium">
                            {course.name} - {group.name}
                          </div>
                          <div className="text-sm text-right">
                            <div className="text-muted-foreground">Plazas</div>
                            <div className="flex items-center gap-2">
                              <span>{group.spots.taken}/{group.spots.total}</span>
                              {group.available && (
                                <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                  Disponible
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <div>DOCENTE: {group.teacher}</div>
                          <div className="flex gap-8">
                            <span>HORARIO: {group.schedule}</span>
                            <span>TURNO: {group.shift}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}