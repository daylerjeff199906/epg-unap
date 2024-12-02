import { GraduationCap, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

interface ProgramTypeCardProps {
  title: string
  url: string
}

export const ProgramTypeCard = (props: ProgramTypeCardProps) => {
  const { title = '', url } = props
  return (
    <Card className="w-[280px] hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-blue-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
            <p className="text-sm text-slate-600">
              Ver programas, filtrados solo {title?.toLowerCase()}
            </p>
          </div>
          <Link
            href={url || '#'}
            className="inline-flex items-center text-sm text-blue-500 hover:text-blue-600 font-medium"
          >
            Filtrar
            <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
