'use client'

import { DatePicker } from "@/components/app/date-picker"
import { useFilterFromUrl } from "@/lib/filter-url"
import { CommandFilter, SearchFilter } from "@/modules/academic"

const status = [
    {value: 'active', label: 'Activo'},
    {value: 'inactive', label: 'Inactivo'},
    {value: 'pending', label: 'Pendiente'},
    {value: 'canceled', label: 'Cancelado'},
]

export const EnrollmentFilter = () => {

    const {getParams} = useFilterFromUrl()

    const newDate = getParams({key: 'date', value: ''})
    const newStatus = getParams({key: 'status', value: ''})
    const newType = getParams({key: 'type', value: ''})

    return (
        <main className="rounded-lg flex justify-between gap-4">
            <section className="flex gap-2">
                <DatePicker 
                    searchParam={{initialDate: newDate}}
                    className="w-[200px]"
                />
                <CommandFilter
                    filterKey='status'
                    label='Estado'
                    placeholder="Seleccionar estado"
                    data={status}
                    searchParam={{initialStatus: newStatus}}
                />
            </section>
            <section className="flex gap-2">
                <CommandFilter
                    filterKey='type'
                    label='Tipo'
                    placeholder="Seleccionar tipo"
                    data={status}
                    searchParam={{initialStatus: newType}}
                />
                <SearchFilter />
            </section>
        </main>
    )
}
