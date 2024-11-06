import { Card, CardContent } from '@/components/ui/card'

interface EnrolledCardProps {}

export const EnrolledCard = () => {
  return (
    <Card>
      <CardContent className="py-3 flex flex-col gap-2">
        <header className="flex justify-between items-start">
          <h1 className="font-bold">
            <span className="text-primary-900 font-bold">Matrícula:</span> Ciclo
            2024 - II
          </h1>
          <span>
            <p className="text-gray-500 text-sm">2024</p>
          </span>
        </header>
        <section className="text-sm text-gray-500">
          <p>
            F. de matrícula: <span>20/10/2024 03:00:01</span>
          </p>
          <p>
            Cursos matriculados: <span>5</span>
          </p>
        </section>
      </CardContent>
    </Card>
  )
}
