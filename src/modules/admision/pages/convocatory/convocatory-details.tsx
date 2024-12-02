import { Card } from '@/components/ui/card'

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
  data: schedules
}

export const ConvocatoryDetails = (props: ConvocatoryDetailsProps) => {
  const { data } = props

  const eventsEmpty = data?.events?.length === 0

  

  return (
    <main className="flex flex-col gap-6">
      <section className="w-full">
        <h2 className="font-bold text-lg">Detalle de la convocatoria</h2>
        <p className="text-gray-500 text-sm">
          Desde el 01/01/2022 hasta el 31/01/2022
        </p>
      </section>
      <section className="flex flex-col gap-5">
        <h2 className="font-bold text-lg">Cronograma</h2>

        {!eventsEmpty &&
          data.events.map((event) => (
            <div
              key={event.id}
              className="flex gap-4 items-center w-full"
            >
              <div>
                <h2 className="font-semibold text-center">ABR</h2>
                <hr className="border-slate-200 my-2 border-1 w-20" />
                <div className="text-2xl font-bold text-center">20</div>
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
      <section>
        <h2 className="font-bold text-lg">Programas en convocatoria</h2>
      </section>
    </main>
  )
}
