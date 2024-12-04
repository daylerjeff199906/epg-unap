import { fetchCore } from '@/api/core'
import { BannerSection, PeriodPostCard } from '@/components/app'
import { ProgramListPage } from '@/modules/admision'
import { IProgram } from '@/types/admision'

type Params = Promise<{ slug: string }>

interface IProgramResponse {
  programs: IProgram[]
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params

  let programs: IProgramResponse = { programs: [] }

  try {
    const response = await fetchCore('/api/programs.json', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`)
    }

    programs = await response.json()
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching programs:', error.message)
    } else {
      console.error('Error fetching programs:', error)
    }
  }

  return (
    <>
      <BannerSection
        title={`Convocatorias ${slug}: Etapa I - 2024`}
        description="Selecciona un programa de la lista de convocatorias disponibles para comenzar tu aplicación."
        bottomContent={
          <PeriodPostCard />
        }
      />
      <ProgramListPage programs={programs.programs} />
    </>
  )
}
