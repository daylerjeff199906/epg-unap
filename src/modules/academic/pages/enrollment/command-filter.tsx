'use client'

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useFilterFromUrl } from "@/lib/filter-url"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, Check } from "lucide-react"

type searchParams = {
    initialStatus?: string
  }
  

type Status = {
    value: string
    label: string
}

type IData = {
    value: string;
    label: string;
}

interface IProps {
    filterKey: string
    label?: string
    placeholder?: string
    className?: string 
    popclassName?: string 
    hasSearch?: boolean
    searchParam?: searchParams
    data?: IData[]
}

export function CommandFilter(props: IProps) {
    const { filterKey, label, placeholder, data, className, popclassName, hasSearch, searchParam } = props

    const { createFilter, removeFilter } = useFilterFromUrl()
    const [open, setOpen] = useState(false)
    // const [selectedStatus, setSelectedStatus] = useState<Status | null>(
    //     null
    // )
    const [selectedStatus, setSelectedStatus] = useState<Status | null>(
        searchParam?.initialStatus ? data?.find((item) => item.value === searchParam.initialStatus) || null : null
    )

    useEffect(() => {
        if (selectedStatus) {
            createFilter(filterKey, selectedStatus.value)
        } else {
            removeFilter(filterKey)
        }
    }, [selectedStatus, createFilter, removeFilter, filterKey])

    return (
        <div 
            className={cn("border border-input bg-background w-[230px] min-w-[190px] flex items-start justify-between rounded-md pl-4 sm:flex-row sm:items-center gap-1", className)}
        >
            <p className="text-sm text-muted-foreground">
                {label || "Select"}
            </p>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className={cn("w-[150px] justify-start border-none text-left font-normal", popclassName)}
                    >
                        {selectedStatus ? (
                            <>
                                <div className="flex items-center justify-between w-full text-sm font-semibold">
                                    {selectedStatus.label}
                                    <ChevronDown className="mr-2 h-4 w-4 shrink-0" />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center justify-between w-full text-sm font-semibold">
                                        {selectedStatus || "Todos"}
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </div>
                            </>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent 
                    className={cn("w-[150px] p-0", popclassName)} 
                    side="bottom" 
                    align="start"
                >
                    <Command>
                        {hasSearch && <CommandInput placeholder={placeholder || 'Seleccionar'} />}
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {data?.map((status) => (
                                    <CommandItem
                                        key={status.value}
                                        value={status.value}
                                        onSelect={(value) => {
                                            // Update selected status based on the clicked item or reset
                                            setSelectedStatus(
                                                selectedStatus?.value === value ? null : data?.find((item) => item.value === value) || null
                                            )
                                            setOpen(false)
                                        }}
                                    >
                                        {status.label}
                                        <Check 
                                            className={cn(
                                                "ml-auto",
                                                selectedStatus?.value === status.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
