import { DatePickerCustom } from '@/components/app'
import { StatusFilter } from '@/modules/academic'
import { Filter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const EnrollmentGroupsFiltersSection = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-3">
      <DatePickerCustom />
      <StatusFilter />
      {/* componetizar esta seccion */}
      <section>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="border-dashed"
            >
              <Filter size={16} />
              Filtros
              <Badge className="ml-2 rounded-full flex items-center justify-center bg-primary-700 w-2">
                3
              </Badge>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-[320px] p-0"
            align="start"
          >
            <main>
              <header className=" flex justify-between items-center py-4 px-6 border-b">
                <h1 className="text-lg font-bold">Filtros</h1>
                <div className="text-sm text-gray-500">Save Filter</div>
              </header>
              <Accordion
                type="single"
                collapsible
                className="p-2 px-6"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Por docente</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Por curso</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Por programa</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </main>
          </PopoverContent>
        </Popover>
      </section>
    </section>
  )
}
