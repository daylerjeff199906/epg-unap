'use client'
import { useState } from 'react'
import { ConvocatoriaCard } from '../../components'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Grid, List } from 'lucide-react'

const convocatorias = [
  {
    id: 1,
    title: 'Convocatoria I 2024',
    period: '2024-I',
    startDate: '20/11/2023',
    endDate: '15/01/2024',
    description:
      'Primera convocatoria del año 2024 para todos los programas de postgrado.',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/convocatoria-2024-I-7XwR9kpP3Y9L3k8NXwJxhGttnISxhb.jpg',
    currentStage: 2,
    totalStages: 4,
  },
  {
    id: 2,
    title: 'Convocatoria II 2024',
    period: '2024-II',
    startDate: '01/03/2024',
    endDate: '30/04/2024',
    description:
      'Segunda convocatoria del año 2024 con énfasis en programas de ciencias e ingeniería.',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/convocatoria-2024-II-gQxhkVQWxcyeEXMxZcyFMGt8Hy3Ywx.jpg',
    currentStage: 1,
    totalStages: 3,
  },
  {
    id: 3,
    title: 'Convocatoria Especial Verano 2024',
    period: '2024-Verano',
    startDate: '15/05/2024',
    endDate: '30/06/2024',
    description:
      'Convocatoria especial para programas intensivos de verano en todas las áreas.',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/convocatoria-verano-2024-hhOkVxeIcEEXBxRJJCxouMxRHhRGAE.jpg',
    currentStage: 3,
    totalStages: 4,
  },
  {
    id: 4,
    title: 'Convocatoria III 2024',
    period: '2024-III',
    startDate: '01/08/2024',
    endDate: '30/09/2024',
    description:
      'Tercera convocatoria del año 2024, abierta a todos los programas de postgrado.',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/convocatoria-2024-III-hhOkVxeIcEEXBxRJJCxouMxRHhRGAE.jpg',
    currentStage: 2,
    totalStages: 5,
  },
]

export const ConvocatoryListPage = () => {
  const [filter, setFilter] = useState('')
  const [periodFilter, setPeriodFilter] = useState('all')
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid')

  const filteredConvocatorias = convocatorias.filter(
    (conv) =>
      conv.title.toLowerCase().includes(filter.toLowerCase()) &&
      (periodFilter === 'all' || conv.period === periodFilter)
  )

  return (
    <main className="space-y-4 container">
      <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Input
            placeholder="Buscar convocatorias..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="max-w-sm"
          />
          <Select
            value={periodFilter}
            onValueChange={setPeriodFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Periodo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="2024-I">2024-I</SelectItem>
              <SelectItem value="2024-II">2024-II</SelectItem>
              <SelectItem value="2024-Verano">2024-Verano</SelectItem>
              <SelectItem value="2024-III">2024-III</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={viewType === 'grid' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewType('grid')}
            aria-label="Vista de cuadrícula"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewType === 'list' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewType('list')}
            aria-label="Vista de lista"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div
        className={
          viewType === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-6'
        }
      >
        {filteredConvocatorias.map((conv) => (
          <ConvocatoriaCard
            key={conv.id}
            {...conv}
            viewType={viewType}
          />
        ))}
      </div>
    </main>
  )
}
