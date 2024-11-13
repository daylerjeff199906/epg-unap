'use client'

import { useFilterFromUrl } from '@/lib/filter-url';
import { Search } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce';

interface TableHeaderProps {
  valueSearch?: string
  onValueSearch?: (value: string) => void
  hasSearch?: boolean
  placeholder?: string
}

export const TableHeaderCustom = (props: TableHeaderProps) => {
  const { hasSearch, placeholder } = props
  const {getParams, createFilter, removeFilter} = useFilterFromUrl() 

  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);

    if (term) {
      createFilter({ key: 'query', value: term });
    } else {
      removeFilter({ key: 'query' });
    }
    replace(`${pathname}?${getParams({ key: 'query', value: term })}`);
  }, 300);

  return (
    <main>
      {hasSearch && (
        <main>
          <section className="flex items-center space-x-2 border rounded-md border-gray-200 p-2 px-3 max-w-sm">
            <div>
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder={placeholder || 'Buscar...'}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              defaultValue={props.valueSearch }
              className="w-[150px] lg:w-[250px] focus:outline-none"
            />
          </section>
        </main>
      )}
    </main>
  )
}
