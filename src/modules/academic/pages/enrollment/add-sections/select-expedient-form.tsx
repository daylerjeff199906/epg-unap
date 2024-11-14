'use client'

import { HeaderSection } from "@/components/app"
import { Button } from "@/components/ui/button"
import { useFilterFromUrl } from "@/lib/filter-url"
import { SearchFilter } from "@/modules/academic/components"
import { Divider } from "@nextui-org/react"
import { Filter, SearchIcon } from "lucide-react"
import { EnrollmentList } from "./enrollment-list"

export const SelectExpedientForm = () => {
  const { getParams, createFilter, updateFilter } = useFilterFromUrl()

  const initailType = getParams({ key: 'type', value: '' })

  const createTypeFilter = () => {
    if (initailType === 'advanced') {
      updateFilter({ key: 'type', value: 'simple' })
    } else {
      createFilter({ key: 'type', value: 'advanced' })
    }
  }

  const titlePlaceholder = initailType === 'advanced' ? 'por persona' : ''
  const subtitlePlaceholder = initailType === 'advanced' ? 'Realiza la búsqueda por N° de documento o N° de expediente' : 'Busca expedientes utilizando nombres o apellidos'
  const inputPLaceholder = initailType === 'advanced' ? 'N° de documento o N° de expediente' : 'Nombres o apellidos'
  const buttonLabel = initailType === 'advanced' ? 'Búsqueda Simple' : 'Búsqueda Avanzada'

  return (
    <>
      <HeaderSection
        title={`Búsqueda de expedientes ${titlePlaceholder}`}
        description={subtitlePlaceholder}
        disabledActions
      />
      <form action="" onSubmit={() => { }} className="flex flex-col gap-4">
        <section className="flex flex-col gap-2">
          <div className="flex gap-2 w-full">
            <SearchFilter placeholder={inputPLaceholder}/>
            <Button type="submit" variant='default'><SearchIcon /> Buscar</Button>
          </div>
          <div>
            <Button
              type="button"
              variant='link'
              onClick={createTypeFilter}
              className="text-primary-500 p-0"
            >
              <Filter /> {buttonLabel}
            </Button>
          </div>
        </section>
        <Divider />
        <div className='flex justify-between items-center'>
          <h2 className='font-semibold'>Resultados encontrados</h2>
          <Button className='bg-default-300 text-black' size={"sm"}>
            Limpiar busqueda
          </Button>
        </div>
        <EnrollmentList />
      </form>
    </>
  )
}
