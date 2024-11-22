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

export const ProgramListPage = () => {
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
      </div>
    </main>
  )
}
