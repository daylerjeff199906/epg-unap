import { Button } from '@/components/ui/button'
import { PlusCircle, RefreshCw, Download } from 'lucide-react'

export const HeaderSection = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Lista de sedes
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Consulta y gestiona las sedes registradas y disponibles. Use el botón
        Agregar para añadir una nueva sede o actualiza la información existente
        según sea necesario.
      </p>
      <div className="flex space-x-2">
        <Button
          variant="outline"
          className="bg-white"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Agregar sede
        </Button>
        <Button
          variant="outline"
          className="bg-white"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Actualizar
        </Button>
        <Button
          variant="outline"
          className="bg-white"
        >
          <Download className="mr-2 h-4 w-4" />
          Exportar
        </Button>
      </div>
    </div>
  )
}
