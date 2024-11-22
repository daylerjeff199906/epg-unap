'use client'
import { CalendarDays } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useState } from 'react'
import Link from 'next/link'

interface ConvocatoriaCardProps {
  title: string
  period: string
  startDate: string
  endDate: string
  description: string
  imageUrl: string
  currentStage: number
  totalStages: number
}

export const ConvocatoriaCard = ({
  title,
  period,
  startDate,
  endDate,
  description,
  currentStage,
  totalStages,
}: ConvocatoriaCardProps) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <Card
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`overflow-hidden  ${
        isHover ? 'shadow-lg bg-gray-50 cursor-pointer' : 'shadow-sm'
      }`}
    >
      <div className="w-full">
        <CardHeader className="space-y-1 w-full">
          <div className="flex items-center justify-between">
            <Badge
              variant="outline"
              className="bg-blue-50 text-blue-500 hover:bg-blue-50"
            >
              {period}
            </Badge>
          </div>
          <Link
            href={`/admision/convocatorias/${title
              .toLowerCase()
              .replace(/\s/g, '-')}`}
            className={`text-lg font-semibold ${
              isHover ? 'text-primary-800 underline' : 'text-black'
            }`}
          >
            {title}
          </Link>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarDays className="mr-1 h-4 w-4" />
            <span>
              {startDate} - {endDate}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Etapa actual</span>
              <span>
                {currentStage} de {totalStages}
              </span>
            </div>
            {/* <Progress
              value={(currentStage / totalStages) * 100}
              className="w-full"
            /> */}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
