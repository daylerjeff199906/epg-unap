'use client'

import { DatePicker } from "@/components/app"
import { CommandFilter } from "./command-filter"
import { useFilterFromUrl } from "@/lib/filter-url"
import SearchFilter from "./search-filter"

const fruits = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" },
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
                    data={fruits}
                    searchParam={{initialStatus: newStatus}}
                />
            </section>
            <section className="flex gap-2">
                <CommandFilter
                    filterKey='type'
                    label='Tipo'
                    placeholder="Seleccionar tipo"
                    data={fruits}
                    searchParam={{initialStatus: newType}}
                />
                <SearchFilter />
            </section>
        </main>
    )
}
