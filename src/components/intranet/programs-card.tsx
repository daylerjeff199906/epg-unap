import { IProgram } from '@/types/intranet/IPrograms'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'

interface IProgramsCardProps {
  data: IProgram
}
export const ProgramCard = (props: IProgramsCardProps) => {
  const { data } = props
  const { titulo } = data

  return (
    <Card className="flex flex-row gap-4 p-4 bg-white">
      <img
        src="https://blogs.ucontinental.edu.pe/wp-content/uploads/2022/09/carrera-de-administracio%CC%81n-y-gestio%CC%81n-pu%CC%81blica-800x450.jpg"
        alt={titulo}
        className="w-72 h-48 object-cover rounded-md"
      />
      <main className="w-full">
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-primary-900 font-bold">{titulo}</CardTitle>
          <Badge className="bg-warning-100 text-warning-600">En curso</Badge>
        </CardHeader>
        <hr />
        <CardContent className="text-gray-700 flex flex-row">
          <main>
            <p>Facultad: {data.facultad}</p>
            <p>Creditos: {data.creditos}</p>
            <p>Estado: {data.estado}</p>
          </main>
        </CardContent>
      </main>
    </Card>
  )
}
