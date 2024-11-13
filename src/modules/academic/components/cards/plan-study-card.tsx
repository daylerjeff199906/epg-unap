'use client'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { RadioGroupItem } from '@/components/ui/radio-group'

interface PlanStudyCardProps {
  id: string
  title: string
  code: string
  sede: string
}

export const PlanStudyCard: React.FC<PlanStudyCardProps> = ({
  id,
  title,
  code,
  sede,
}) => {
  return (
    <Card
    // className={`cursor-pointer transition-all ${
    //   isSelected ? 'ring-2 ring-primary' : ''
    // }`}
    // onClick={handleClick}
    >
      <CardContent className="pt-4 flex justify-between items-start">
        <header>
          <h2 className="font-semibold">{title}</h2>
          <h3 className="text-sm text-muted-foreground">Cod. {code}</h3>
        </header>

        {/* <CircleCheck
          className={`w-6 h-6 text-primary ${
            isSelected ? 'opacity-100' : 'opacity-0'
          }`}
        /> */}
        <RadioGroupItem
          value={id}
          id={id}
        />
      </CardContent>
      <CardFooter>
        <h3 className="text-sm text-muted-foreground">Sede: {sede}</h3>
      </CardFooter>
    </Card>
  )
}
