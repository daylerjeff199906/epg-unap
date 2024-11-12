import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const statusOptions = [{ value: 'all', label: 'Todos' }]

export const ProgramFilter = () => {
  return (
    <div>
      <Select defaultValue="all">
        <SelectTrigger className="w-[220px]">
          <label className="text-muted-foreground">Programas</label>
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
