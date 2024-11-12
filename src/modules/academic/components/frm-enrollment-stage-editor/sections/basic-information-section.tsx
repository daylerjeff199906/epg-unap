'use client'
import { useState } from 'react'
import { SwitchCustom } from '@/components/app'
import { Divider } from '@nextui-org/react'
import { ContentInput, HeaderFormSection } from '@/components/layouts'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { CalendarIcon } from 'lucide-react'
import { addDays, format } from 'date-fns'
import { cn } from '@/lib/utils'

export const BasicInformationSection = () => {
  const [date, setDate] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: undefined,
    to: undefined,
  })

  const selectRange = (range: string) => {
    const today = new Date()
    switch (range) {
      case 'today':
        setDate({ from: today, to: today })
        break
      case 'yesterday':
        const yesterday = addDays(today, -1)
        setDate({ from: yesterday, to: yesterday })
        break
      case 'last7':
        setDate({ from: addDays(today, -6), to: today })
        break
      case 'last30':
        setDate({ from: addDays(today, -29), to: today })
        break
      default:
        setDate({ from: undefined, to: undefined })
    }
    // setIsOpen(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <HeaderFormSection
        title="Información de etapa"
        description="Ingresa los datos sobre las etapas"
      />
      <ContentInput
        id="promotion-name"
        label="Promoción"
        description="Ingresa el nombre de la promoción"
      >
        <Input placeholder="Ejemplo: Federico villareal" />
      </ContentInput>
      <Divider />
      <ContentInput
        id="description"
        label="Descripción"
        description="Ingresa una descripción de la etapa"
      >
        <Textarea placeholder="Ejemplo: Etapa de matrícula para el ciclo 2022-1" />
      </ContentInput>
      <Divider />
      <ContentInput
        id="status"
        label="Estado"
        description="Selecciona el estado de la etapa. Por defecto, se encuentra activo"
      >
        <div className="bg-white">
          <SwitchCustom
            label="Activo"
            description="Activa o desactiva la etapa"
          />
        </div>
      </ContentInput>
      <Divider />
      <ContentInput
        id="date-range"
        label="Rango activo"
        description="Selecciona el rango de fechas en el que la etapa estará activa. Por defecto, se encuentra activa"
      >
        <Popover
        // open={isOpen}
        // onOpenChange={setIsOpen}
        >
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={'outline'}
              className={cn(
                'w-[300px] justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'LLL dd, y')} -{' '}
                    {format(date.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0"
            align="start"
          >
            <Select onValueChange={selectRange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Quick select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="last7">Last 7 days</SelectItem>
                <SelectItem value="last30">Last 30 days</SelectItem>
              </SelectContent>
            </Select>
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={(range) => setDate({ from: range?.from, to: range?.to })}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </ContentInput>
    </div>
  )
}
