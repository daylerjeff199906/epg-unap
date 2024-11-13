import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const statusOptions = [
  { value: 'all', label: 'Todos' },
  { value: 'TRUE', label: 'Activos' },
  { value: 'FALSE', label: 'Inactivos' },
]

export const StatusFilter = () => {
  return (
    <div>
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
    </div>
  )
}
