import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, GraduationCap } from 'lucide-react'
import Image from "next/image"

interface IProgramCardProps {
  title: string
  description: string
  duration: string
  capacity: number
  credits: number
  modality: string
}

export const ProgramCard = () => {
  return (
    <Card className="max-w-md overflow-hidden border-none shadow-none rounded-sm">
      <div className="relative h-48">
        <Image
          src="/placeholder.svg"
          alt="Presentación del programa"
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-start gap-4">
            <h2 className="text-xl font-bold leading-tight">
              MAESTRÍA EN CIENCIAS EN GESTIÓN AMBIENTAL
            </h2>
            <Badge variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-50">
              Presencial
            </Badge>
          </div>

          {/* Description */}
          <p className="text-gray-600">
            Forma profesionales capaces de liderar la gestión y modernización del Estado
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-4 w-4 text-blue-600" />
              <span>2 años</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="h-4 w-4 text-blue-600" />
              <span>39 cupos</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BookOpen className="h-4 w-4 text-blue-600" />
              <span>72 créditos</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <GraduationCap className="h-4 w-4 text-blue-600" />
              <span>Grado académico</span>
            </div>
          </div>
          {/* CTA Button */}
          <div className="flex justify-end">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Postular ahora
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

