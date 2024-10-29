import { Button } from '@/components/ui/button'
import { Plus, RefreshCw, Download } from 'lucide-react'
import Link from 'next/link'

interface HeaderSectionProps {
  title?: string
  description?: string
  showDivider?: boolean
  children?: never
  showAddButton?: boolean
  showRefreshButton?: boolean
  showExportButton?: boolean
  hrefAddLink?: string
  onRefreshButtonClick?: () => void
  onExportButtonClick?: () => void
}

export const HeaderSection = (props: HeaderSectionProps) => {
  const {
    title,
    description,
    showDivider = true,
    showAddButton = true,
    showExportButton = true,
    showRefreshButton = true,
    hrefAddLink,
    onExportButtonClick,
    onRefreshButtonClick,
    children,
  } = props

  return (
    <main className="p-6 rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {title || 'Título de la sección'}
      </h2>
      {description && (
        <h2 className="text-sm text-gray-600 mb-4">
          {description || 'Descripción de la sección'}
        </h2>
      )}
      {showDivider && <hr className="border-gray-200 my mb-4" />}
      <div className="flex space-x-2">
        {showAddButton && (
          <Button
            variant="outline"
            className="bg-white"
            asChild
          >
            <Link href={hrefAddLink || '#'}>
              <Plus className="mr-2 h-4 w-4" />
              Agregar nuevo
            </Link>
          </Button>
        )}
        {showRefreshButton && (
          <Button
            variant="outline"
            className="bg-white"
            onClick={onRefreshButtonClick}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Actualizar
          </Button>
        )}
        {showExportButton && (
          <Button
            variant="outline"
            className="bg-white"
            onClick={onExportButtonClick}
          >
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        )}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </main>
  )
}
