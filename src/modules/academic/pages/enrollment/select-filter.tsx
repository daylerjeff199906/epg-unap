'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useFilterFromUrl } from "@/lib/filter-url"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type IData = {
    value: string;
    label: string;
}

interface IProps {
    filterKey: string
    selectLabel?: string
    placeholder?: string
    data?: IData[]
    className?: string
}

export function SelectFilter(props: IProps) {
    const { filterKey, selectLabel, placeholder, data, className } = props

    const [value, setValue] = useState<string | undefined>("")
    const { createFilter, removeFilter } = useFilterFromUrl()


    useEffect(() => {
        if (value) {
            createFilter(filterKey, value)
        } else {
            removeFilter(filterKey)
        }
    }, [value, createFilter, removeFilter, filterKey])

    return (
        <Select
            onValueChange={
                (value) => {
                    setValue(value)
                }
            }
            value={value}
        >
            <SelectTrigger className={cn("w-[200px]", className)}>
                <div className="flex items-center justify-between w-full">
                     {/* SelectValue muestra siempre el placeholder */}
                     <SelectValue
                        placeholder={placeholder || "Seleccionar"}
                        className="text-muted-foreground text-left font-normal"
                    />
                    {/* span muestra el valor seleccionado */}
                    <span className="py-1.5 pl-8 pr-2 text-sm font-semibold">
                        {value || "Todos"}
                    </span>
                </div>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {selectLabel && (
                        <SelectLabel>
                            {selectLabel || "Todos"}
                        </SelectLabel>
                    )}

                    {data?.map((item) => (
                        <SelectItem
                            key={item.value}
                            value={item.value}
                            
                        >
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
