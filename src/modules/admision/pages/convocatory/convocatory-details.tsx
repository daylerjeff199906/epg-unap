import { Card } from '@/components/ui/card'
import { ProgramsTypesSection } from './programs-types-section'
import { IConvocatory } from '@/types/admision'

export interface schedules {
  call_stage_id: number
  events: {
    id: number
    name: string
    description: string
    date: string
  }[]
}

interface ConvocatoryDetailsProps {
  data?: schedules
  convocatorySelected?: IConvocatory
}

export const ConvocatoryDetails = (props: ConvocatoryDetailsProps) => {
  const { data, convocatorySelected } = props

  const eventsEmpty = data?.events?.length === 0

  const getMonth = (date: string) => {
    const d = new Date(date)
    const month = d.toLocaleString('default', { month: 'short' })
    return month
  }

  const getDateDay = (date: string) => {
    const d = new Date(date)
    return d.getDate()
  }

  return (
    <main className="flex flex-col gap-6">
      <section className="w-full">
        <h2 className="font-bold text-lg">Detalle de la convocatoria</h2>
        <p className="text-gray-500 text-sm">
          {`Desde el ${convocatorySelected?.start_date} hasta el ${convocatorySelected?.end_date}`}
        </p>
      </section>
      <section className="flex flex-col gap-5">
        <h2 className="font-bold text-lg">Cronograma</h2>

        {!eventsEmpty &&
          data?.events.map((event) => (
            <div
              key={event.id}
              className="flex gap-4 items-center w-full"
            >
              <div>
                <h2 className="font-semibold text-center">
                  {getMonth(event.date)}
                </h2>
                <hr className="border-slate-200 my-2 border-1 w-20" />
                <div className="text-2xl font-bold text-center">
                  {getDateDay(event.date)}
                </div>
              </div>
              <div className="relative pl-8 border-l-2 border-slate-200 w-full">
                <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-slate-200" />
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">{event.name}</h3>
                  <p className="text-sm text-slate-500 mb-2">
                    {event.description}
                  </p>
                  <button className="text-sm text-blue-600 hover:underline">
                    Ver detalles
                  </button>
                </Card>
              </div>
            </div>
          ))}
      </section>
      <section className="flex flex-col gap-6">
        <h2 className="font-bold text-lg">Programas en convocatoria</h2>
        <ProgramsTypesSection />
      </section>
    </main>
  )
}
