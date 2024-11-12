'use client'
import { useState } from 'react'
import { ContentInput, HeaderFormSection } from '@/components/layouts'
import { Divider } from '@nextui-org/react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Check, ChevronsUpDown } from 'lucide-react'

const frameworks = [] as { label: string; value: string }[]

export const ProgramPlanSection = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div className="flex flex-col gap-6">
      <HeaderFormSection
        title="Programa y plan de estudio"
        description="Para la creación de los grupos es necesario que selecciones el programa y el plan de estudio a la que pertenecerá el grupo."
      />
      <ContentInput
        id="program"
        label="Programa"
        description="Selecciona el programa"
      >
        <Popover
          open={open}
          onOpenChange={setOpen}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : 'Seleccionar programa...'}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full lg:min-w-[680px] p-0">
            <Command>
              <CommandInput placeholder="Buscar programa ..." />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? '' : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          value === framework.value
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </ContentInput>
      <Divider />
      <ContentInput
        id="plan"
        label="Plan de estudio"
        description="Selecciona el plan de estudio"
        orientation="vertical"
      >
        asdads
        {/* <Input placeholder="Ejemplo: Federico villareal" /> */}
      </ContentInput>
    </div>
  )
}
