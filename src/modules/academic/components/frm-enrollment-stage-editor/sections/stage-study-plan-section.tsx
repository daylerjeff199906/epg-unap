import React from 'react'
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

export const StageStudyPlanSection = () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <div className="flex flex-col gap-6">
      <HeaderFormSection
        title="Selección de etapa y plan"
        description="Selecciona al periodo que pertenece a matrícula"
      />
      <ContentInput
        id="period"
        label="Periodo"
        description="Selecciona el periodo al que pertenece la etapa"
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
                : 'Select framework...'}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
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
        id="study-plan"
        label="Plan de estudio"
        description="Selecciona el plan de estudios del programa, para la creación de la matrícula"
      >
        ASDADSASD
      </ContentInput>
    </div>
  )
}
