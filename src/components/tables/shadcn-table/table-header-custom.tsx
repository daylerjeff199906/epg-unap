'use client'

import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce';

interface TableHeaderProps {
  valueSearch?: string
  onValueSearch?: (value: string) => void
  hasSearch?: boolean
  placeholder?: string
}

export const TableHeaderCustom = (props: TableHeaderProps) => {
  const { hasSearch, placeholder } = props

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
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
              defaultValue={searchParams.get('query')?.toString()}
              className="w-[150px] lg:w-[250px] focus:outline-none"
            />
          </section>
        </main>
      )}
    </main>
  )
}
