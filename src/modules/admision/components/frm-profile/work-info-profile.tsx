'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { CalendarIcon, Plus } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export function WorkInfoForm() {
  const [date, setDate] = useState<Date>()

  return (
    <form className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Información Laboral</h2>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>
                Selecciona el sector al que pertenece la empresa en la que
                trabajaste *
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="publico">Público</SelectItem>
                  <SelectItem value="privado">Privado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">&nbsp;</Label>
              <Input
                id="company"
                placeholder="Nombre de la empresa"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">
              Indica el área o departamento en el que trabajaste *
            </Label>
            <Input
              id="department"
              placeholder="Por ejemplo, Recursos Humanos, Marketing, etc."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="position">
              Describe el puesto o cargo que ocupaste en la empresa *
            </Label>
            <Input
              id="position"
              placeholder="Escribe la ocupación"
            />
          </div>
          <div className="space-y-2">
            <Label>Periodo laboral *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? (
                    format(date, 'PPP')
                  ) : (
                    <span>Desde el 20/02/2018 al 20/03/2024</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button
            type="button"
            variant="outline"
            className="w-full"
          >
            <Plus className="mr-2 h-4 w-4" />
            Añadir nuevo
          </Button>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button variant="outline">Atrás</Button>
        <Button>Guardar datos</Button>
      </div>
    </form>
  )
}
