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
const studyPlans = [] as { label: string; value: string }[]

export const StageStudyPlanSection = () => {
  const [open, setOpen] = React.useState(false)
  const [openStudyPlan, setOpenStudyPlan] = React.useState(false)

  const [value, setValue] = React.useState('')
  const [valueStudyPlan, setValueStudyPlan] = React.useState('')

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
                : 'Seleccionar periodo...'}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full lg:min-w-[680px] p-0">
            <Command>
              <CommandInput placeholder="Buscar periodo ..." />
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
        <Popover
          open={openStudyPlan}
          onOpenChange={setOpenStudyPlan}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openStudyPlan}
              className="w-full justify-between"
            >
              {valueStudyPlan
                ? studyPlans.find(
                    (studyPlan) => studyPlan.value === valueStudyPlan
                  )?.label
                : 'Seleccionar plan de estudio...'}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full lg:min-w-[680px] p-0">
            <Command>
              <CommandInput placeholder="Buscar plan de estudio ..." />
              <CommandList>
                <CommandEmpty>No study plan found.</CommandEmpty>
                <CommandGroup>
                  {studyPlans.map((studyPlan) => (
                    <CommandItem
                      key={studyPlan.value}
                      value={studyPlan.value}
                      onSelect={(currentValue) => {
                        setValueStudyPlan(
                          currentValue === valueStudyPlan ? '' : currentValue
                        )
                        setOpenStudyPlan(false)
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          valueStudyPlan === studyPlan.value
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                      {studyPlan.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </ContentInput>
    </div>
  )
}
