import { fetchCore } from '@/api/core'
import { BannerSection } from '@/components/app'
import { ConvocatoryDetails, ConvocatoryListPage } from '@/modules/admision'
import { schedules } from '@/modules/admision/pages/convocatory/convocatory-details'
import { SearchParams } from '@/types'
import { IConvocatory } from '@/types/admision'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Convocatorias',
  description:
    'Convocatorias de admisión a la Escuela de Posgrado de la Universidad Nacional de la Amazonía Peruana.',
}

interface Props {
  searchParams: SearchParams
}

export default async function Page(props: Props) {
  const { searchParams } = props
  const { etapa } = searchParams

  let convocatorias: IConvocatory[] = []
  let scheduleList: {
    schedules: schedules[]
  } | null = null

  try {
    // Fetch convocatorias
    const response = await fetchCore('/api/convocatory.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    convocatorias = await response.json()
  } catch (error) {
    console.error('Error fetching convocatorias:', error)
  }

  try {
    // Fetch schedule
    const response = await fetchCore('/api/schedules.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    scheduleList = await response.json()
  } catch (error) {
    console.error('Error fetching shedule:', error)
  }

  const schedule = scheduleList?.schedules?.find(
    (item) => item.call_stage_id === Number(etapa)
  )

  return (
    <>
      <BannerSection
        title="Convocatorias abiertas"
        description="Convocatorias de admisión a la Escuela de Posgrado de la Universidad Nacional de la Amazonía Peruana."
        rightContent={
          <Image
            src="/svg/graduation-cap.svg"
            alt='Ilustración de una person  a con un megáfono y un cartel que dice "Convocatorias"'
            width={300}
            height={300}
            className="object-cover"
          />
        }
      />
      <main className="flex flex-col sm:flex-row gap-6 py-12 container justify-start">
        <aside className="w-full sm:w-1/3">
          <ConvocatoryListPage convocatorias={convocatorias} />
        </aside>
        <article
          className="w-full sm:w-2/3 bg-white border 
         rounded-md p-4 sm:p-6"
        >
          {!etapa && (
            <main className="flex flex-col gap-4 items-center justify-center h-full border border-dashed">
              <section className="w-full text-gray-600 h-fit">
                <h2 className="font-bold text-center">
                  Convocatorias disponibles
                </h2>
                <p className="text-sm text-center">
                  Seleccione una convocatoria para ver los detalles
                </p>
              </section>
            </main>
          )}

          {etapa && schedule && <ConvocatoryDetails data={schedule} />}
        </article>
      </main>
    </>
  )
}
