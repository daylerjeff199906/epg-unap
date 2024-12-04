import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, GraduationCap } from 'lucide-react'
import Image from "next/image"
import { IProgram } from "@/types/admision"

interface IProps {
  program: IProgram
}

export const ProgramCard = (props: IProps) => {
  const { program } = props
  const { name, description, duration, slots, credits, type, image } = program

  return (
    <Card className="overflow-hidden border-none shadow-none rounded-sm">
      <div className="relative h-48">
        <Image
          src={image}
          alt="Presentación del programa"
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-start gap-4">
            <h2 className="text-xl font-bold leading-tight uppercase">
              {name}
            </h2>
            <Badge variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-50">
              {program.modality}
            </Badge>
          </div>

          <p className="text-gray-600">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-4 w-4 text-blue-600" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="h-4 w-4 text-blue-600" />
              <span>{slots} cupos</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BookOpen className="h-4 w-4 text-blue-600" />
              <span>{credits} créditos</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <GraduationCap className="h-4 w-4 text-blue-600" />
              <span>{type}</span>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Inscribete ahora
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

