import { fetchCore } from '@/api/core'
import { BannerSection } from '@/components/app'
import { ProgramListPage } from '@/modules/admision'
import { IProgram } from '@/types/admision'

interface IProgramResponse {
  programs: IProgram[]
}

export default async function Page() {
  let programs: IProgramResponse = { programs: [] }

  try {
    const response = await fetchCore('/api/programs.json', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
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

  console.log('Programs', programs)

  return (
    <>
      <BannerSection
        title="Programas en convocatoria"
        description="Conoce los programas de postgrado que se encuentran en convocatoria para el año 2024."
      />
      <ProgramListPage programs={programs.programs} />
    </>
  )
}
