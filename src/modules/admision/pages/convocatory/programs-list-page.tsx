'use client'
import { useState } from 'react'
import { ProgramCard } from '../../components'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { IProgram } from '@/types/admision'

interface IProps {
  programs: IProgram[]
}

export const ProgramListPage = (
  { programs }: IProps
) => {
  const [filter, setFilter] = useState('')
  const [periodFilter, setPeriodFilter] = useState('all')

  //   const filteredConvocatorias = convocatorias.filter(
  //     (conv) =>
  //       conv.title.toLowerCase().includes(filter.toLowerCase()) &&
  //       (periodFilter === 'all' || conv.period === periodFilter)
  //   )

  return (
    <main className="space-y-4 container">
      <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-4 pt-8">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <div className='flex gap-4'>
            <Input
              placeholder="Buscar programas..."
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
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 pb-8">
        {
          programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))
        }
      </div>
    </main>
  )
}
