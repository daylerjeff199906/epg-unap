import { LayoutStudent } from '@/components/layouts'
import { Metadata } from 'next'

import { IProgram } from '@/types/intranet/IPrograms'
import { ProgramCard } from '@/components/intranet/programs-card'

export const metadata: Metadata = {
  title: 'Mis programas',
  description: 'Panel de administración de EPG - UNAP',
}

export default async function Page() {
  let programs: { data: IProgram[] } = { data: [] }

  try {
    const response = await fetch('http://localhost:3000/api/programs.json', {
      method: 'GET',
    })

    if (response.ok) {
      const data = await response.json()
      programs = data
    }
  } catch (error) {
    console.error(error)
  }

  return (
    <LayoutStudent
      title="Programas Actuales"
      subtitle="Lista de programas matriculados hasta la actualidad"
    >
      <section className="flex flex-col gap-5">
        {programs?.data.map((program) => (
          <ProgramCard
            key={program.id}
            data={program}
          />
        ))}
      </section>
    </LayoutStudent>
  )
}
