import { IProgram } from '@/types/intranet/IPrograms'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface IProgramsCardProps {
  data: IProgram
}
export const ProgramCard = (props: IProgramsCardProps) => {
  const { data } = props
  const { titulo } = data

  return (
    <Card>
      <CardHeader>
        <CardTitle>{titulo}</CardTitle>
      </CardHeader>
      <CardContent>asdasd</CardContent>
    </Card>
  )
}
