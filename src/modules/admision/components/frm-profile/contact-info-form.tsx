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
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export function ContactInfoForm() {
  const [date, setDate] = useState<Date>()

  return (
    <form className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Contacto</h2>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Dirección *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Cod. Ubigeo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="160016">160016</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">&nbsp;</Label>
              <Input
                id="address"
                placeholder="Ingrese su dirección actual"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="Ingrese su email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Celular *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Ingrese su celular de contacto"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp *</Label>
            <Input
              id="whatsapp"
              placeholder="Ingrese su email"
            />
          </div>
          <div className="space-y-2">
            <Label>Estado civil</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione estado civil" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casado">Casado</SelectItem>
                <SelectItem value="soltero">Soltero</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Fecha de nacimiento *</Label>
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
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Lugar nacimiento</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Cod. Ubigeo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="160016">160016</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>País</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Perú" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="peru">Perú</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button variant="outline">Atrás</Button>
        <Button>Siguiente</Button>
      </div>
    </form>
  )
}
