'use client'
import { HeaderFormSection } from '@/components/layouts'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Plus, Minus } from 'lucide-react'

interface EnvironmentRow {
  id: number
  group: string
  teacher: string
  capacity: string
  status: string
}
export const TeachersAssignedSection = () => {
  const [rows, setRows] = useState<EnvironmentRow[]>([
    { id: 1, group: '', teacher: '', capacity: '', status: 'active' },
  ])

  const addRow = () => {
    if (rows.length < 20) {
      setRows([
        ...rows,
        {
          id: rows.length + 1,
          group: '',
          teacher: '',
          capacity: '',
          status: 'active',
        },
      ])
    }
  }

  const removeRow = () => {
    if (rows.length > 1) {
      setRows(rows.slice(0, -1))
    }
  }
  return (
    <div className="flex flex-col gap-5">
      <HeaderFormSection
        title="Agregar grupos y docentes"
        description="Selecciona el curso para asignar los grupos y docentes"
      />
      <main className="">
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button
              onClick={addRow}
              variant="outline"
              size="sm"
              type="button"
            >
              <Plus className="h-4 w-4 mr-1" />
              Agregar fila
            </Button>
            <Button
              onClick={removeRow}
              variant="outline"
              size="sm"
              type="button"
            >
              <Minus className="h-4 w-4 mr-1" />
              Quitar fila
            </Button>
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="font-medium text-sm">Grupo</div>
              <div className="font-medium text-sm">Docente</div>
              <div className="font-medium text-sm">Capacidad Máxima</div>
              <div className="font-medium text-sm">Estado</div>
            </div>

            {rows.map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-4 gap-4"
              >
                <Input
                  placeholder="Cod. Grupo (Indentificador)"
                  value={row.group}
                  onChange={(e) => {
                    const newRows = rows.map((r) =>
                      r.id === row.id ? { ...r, group: e.target.value } : r
                    )
                    setRows(newRows)
                  }}
                />
                <Select
                  value={row.teacher}
                  onValueChange={(value) => {
                    const newRows = rows.map((r) =>
                      r.id === row.id ? { ...r, teacher: value } : r
                    )
                    setRows(newRows)
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar Docente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teacher1">Docente 1</SelectItem>
                    <SelectItem value="teacher2">Docente 2</SelectItem>
                    <SelectItem value="teacher3">Docente 3</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Capacidad"
                  value={row.capacity}
                  onChange={(e) => {
                    const newRows = rows.map((r) =>
                      r.id === row.id ? { ...r, capacity: e.target.value } : r
                    )
                    setRows(newRows)
                  }}
                />
                <Select
                  value={row.status}
                  onValueChange={(value) => {
                    const newRows = rows.map((r) =>
                      r.id === row.id ? { ...r, status: value } : r
                    )
                    setRows(newRows)
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Activo</SelectItem>
                    <SelectItem value="inactive">Inactivo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
