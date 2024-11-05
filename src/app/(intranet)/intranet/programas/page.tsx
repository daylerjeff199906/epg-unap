import { LayoutStudent } from '@/components/layouts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mis programas',
  description: 'Panel de administración de EPG - UNAP',
}

export default async function Page() {
  let programs = []

  try {
    const response = await fetch('http://localhost:3000/api/programs.json', {
      method: 'GET',
    })
    programs = await response.json()
  } catch (error) {
    console.error(error)
  }

  return (
    <LayoutStudent
      title="Programas Actuales"
      subtitle="Lista de programas matriculados hasta la actualidad"
    >
      <section></section>
    </LayoutStudent>
  )
}
