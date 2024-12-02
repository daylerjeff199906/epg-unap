import { IPrograms_Types } from '@/types/academic'
import { ProgramTypeCard } from '../../components'
import { fetchCore } from '@/api/core'

export const ProgramsTypesSection = async () => {
  let programsTypes: IPrograms_Types[] = []

  try {
    // Fetch programs types
    const response = await fetchCore('/api/programs-types.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const jsonRes: {
      data: IPrograms_Types[]
    } = await response.json()
    programsTypes = jsonRes.data
  } catch (error) {
    console.error('Error fetching programs types:', error)
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {programsTypes.map((programType) => (
        <div key={programType.id}>
          <ProgramTypeCard
            title={programType.name}
            url={`/admision/convocatorias/${programType.name.toLowerCase()}`}
          />
        </div>
      ))}
    </section>
  )
}
