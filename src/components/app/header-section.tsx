import { Button } from '@/components/ui/button'
import { Plus, RefreshCw, Download } from 'lucide-react'
import Link from 'next/link'

interface HeaderSectionProps {
  title?: string
  description?: string
  showDivider?: boolean
  disabledActions?: boolean
  children?: never
  showAddButton?: boolean
  showRefreshButton?: boolean
  showExportButton?: boolean
  hrefAddLink?: string
  onRefreshButtonClick?: () => void
  onExportButtonClick?: () => void
  size?: 'sm' | 'md' | 'lg'
}

const fontSize = {
  sm: {
    title: 'text-base',
    description: 'text-sm',
  },
  md: {
    title: 'text-xl',
    description: 'text-sm',
  },
  lg: {
    title: 'text-2xl',
    description: 'text-base',
  },
}

export const HeaderSection = (props: HeaderSectionProps) => {
  const {
    title,
    description,
    size = 'md',
    showDivider = true,
    showAddButton = true,
    showExportButton = true,
    showRefreshButton = true,
    hrefAddLink,
    onExportButtonClick,
    onRefreshButtonClick,
    disabledActions,
    children,
  } = props

  const fontSizeTitle = fontSize[size].title
  const fontSizeDescription = fontSize[size].description

  return (
    <main className="p-6 rounded-lg">
      <h2 className={`font-bold text-gray-800 mb-2 ${fontSizeTitle}`}>
        {title || 'Título de la sección'}
      </h2>
      {description && (
        <h2 className={`text-gray-600 mb-4 ${fontSizeDescription}`}>
          {description || 'Descripción de la sección'}
        </h2>
      )}
      {showDivider && <hr className="border-gray-200 my mb-4" />}
      {!disabledActions && (
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
      )}
      {children && <div className="mt-4">{children}</div>}
    </main>
  )
}
