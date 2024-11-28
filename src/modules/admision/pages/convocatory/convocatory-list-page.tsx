'use client'

import { DatePickerCustom } from '@/components/app'
import { IConvocatory } from '@/types/admision'
import { ConvocatoriaCard } from '../../components'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Props {
  convocatorias?: IConvocatory[]
}

export const ConvocatoryListPage = (prop: Props) => {
  const { convocatorias = [] } = prop

  return (
    <main className="flex flex-col gap-3">
      <section className="w-full">
        <DatePickerCustom className="w-full" />
      </section>
      <article className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Convocatorias disponibles</h2>
        <ScrollArea className="space-y-4 h-[calc(100vh-460px)] pr-4">
          {convocatorias.map((conv) => (
            <div
              key={conv.id}
              className="mb-2"
            >
              <ConvocatoriaCard
                id={String(conv.id)}
                description={`Desde el ${conv.start_date} hasta el ${conv.end_date}`}
                title={`Convocatoria ${conv.start_date} - ${conv.id_period}`}
                status={conv.is_active ? 'active' : 'inactive'}
              />
            </div>
          ))}
        </ScrollArea>
      </article>
    </main>
  )
}
