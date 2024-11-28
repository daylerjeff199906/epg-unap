'use client'

import { DatePickerCustom } from '@/components/app'
import { IConvocatory } from '@/types/admision'
import { ConvocatoriaCard } from '../../components'

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
        <section className="grid grid-cols-1 gap-4">
          {convocatorias.map((conv) => (
            <ConvocatoriaCard
              key={conv.id}
              id={String(conv.id)}
              description={`Desde el ${conv.start_date} hasta el ${conv.end_date}`}
              title={`Convocatoria ${conv.start_date} - ${conv.id_period}`}
              status={conv.is_active ? 'active' : 'inactive'}
            />
          ))}
        </section>
      </article>
    </main>
  )
}
