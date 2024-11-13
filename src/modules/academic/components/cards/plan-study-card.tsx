'use client'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroupItem } from '@/components/ui/radio-group'

interface PlanStudyCardProps {
  id: string
  value: string
  htmlFor: string
  title: string
  code: string
  description: string
}

export const PlanStudyCard: React.FC<PlanStudyCardProps> = ({
  id,
  value,
  htmlFor,
  title,
  description,
  code,
}) => {
  return (
    <Card className="relative rounded-md">
      <Label
        htmlFor={htmlFor}
        className="block cursor-pointer h-full [&:has(:checked)]:border-primary [&:has(:checked)]:border-2 rounded-lg"
      >
        <CardHeader>
          {/* <CardTitle className="text-base font-bold">Default</CardTitle> */}
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-gray-500 text-sm">{code}</p>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          <p className="line-clamp-2 text-gray-600 text-sm font-normal">
            {description}
          </p>
        </CardFooter>
        <RadioGroupItem
          value={value}
          id={id}
          className="absolute top-4 right-4"
        />
      </Label>
    </Card>
  )
}
