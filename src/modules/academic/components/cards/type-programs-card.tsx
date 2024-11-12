import { GraduationCap } from 'lucide-react'
import Link from 'next/link'

interface TypesProgramsCardProps {
  name?: string
  description?: string
  href?: string
}

export const TypesProgramsCard = (props: TypesProgramsCardProps) => {
  const { name, description, href } = props

  return (
    <Link
      className="flex flex-col gap-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-100"
      href={href || '#'}
    >
      <main className="p-8 flex flex-col gap-4">
        <div>
          <GraduationCap size={32} />
        </div>
        <section>
          <h1 className="text-lg font-bold">{name || 'Type program'}</h1>
          <p className="text-sm text-gray-500">
            {description || 'Description type program'}
          </p>
        </section>
      </main>
    </Link>
  )
}
