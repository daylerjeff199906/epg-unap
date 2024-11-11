import { InputSearch } from '@/components/app'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const statusOptions = [{ value: 'all', label: 'Todos' }]

export const QueryFilter = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-3">
      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <label className="text-muted-foreground">Estado</label>
          <SelectValue placeholder="Selecciona..." />
        </SelectTrigger>
        <SelectContent>
          {statusOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <InputSearch />
    </section>
  )
}
