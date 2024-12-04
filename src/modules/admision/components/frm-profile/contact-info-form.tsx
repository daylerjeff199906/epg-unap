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
import { Switch } from '@/components/ui/switch'
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

export function AcademicInfoForm() {
  const [date, setDate] = useState<Date>()

  return (
    <form className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Información Académica</h2>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Selecciona el nivel educativo *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Bachiller" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bachiller">Bachiller</SelectItem>
                  <SelectItem value="maestria">Maestría</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="career">&nbsp;</Label>
              <Input
                id="career"
                placeholder="Panadería nuclear"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="institution">
              Nombre de la institución donde cursaste tus estudios *
            </Label>
            <Input
              id="institution"
              placeholder="Universidad Nacional Larco Herrera"
            />
          </div>
          <div className="space-y-2">
            <Label>Periodos de estudio *</Label>
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
          <div className="space-y-2">
            <Label>Fecha de entrega de diploma</Label>
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
                    <span>Seleccione una fecha</span>
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
          <div className="flex items-center space-x-2">
            <Switch id="graduated" />
            <Label htmlFor="graduated">Egresado</Label>
          </div>
          <Button
            type="button"
            variant="outline"
            className="w-full"
          >
            <Plus className="mr-2 h-4 w-4" />
            Agregar estudio
          </Button>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button variant="outline">Atrás</Button>
        <Button>Siguiente</Button>
      </div>
    </form>
  )
}
