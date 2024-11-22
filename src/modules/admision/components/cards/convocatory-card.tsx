import { CalendarDays } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

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

export function ConvocatoriaCard({
  title,
  period,
  startDate,
  endDate,
  description,
  currentStage,
  totalStages,
}: ConvocatoriaCardProps) {
  return (
    <Card
      //   className={`overflow-hidden ${
      //     viewType === 'list' ? 'flex flex-row' : 'flex flex-col'
      //   }`}
      className="overflow-hidden "
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
          <h3 className="text-lg font-semibold">{title}</h3>
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
