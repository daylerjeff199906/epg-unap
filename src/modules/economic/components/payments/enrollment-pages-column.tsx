// import { Button } from '@/components/ui/button'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
import type { ColumnDef } from '@tanstack/react-table'
// import { MoreHorizontal } from 'lucide-react'
// import { Payment } from './payments-data'

export const enrollmentPagesColumn: ColumnDef<Record<string, unknown>>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'created-at',
    header: 'F. de creado',
  },
  {
    accessorKey: 'code',
    header: 'Codigo',
  },
  {
    accessorKey: 'concept',
    header: 'Concepto',
  },
  {
    accessorKey: 'person',
    header: 'Persona',
  },
  {
    accessorKey: 'estado',
    header: 'Estado',
  },
  {
    accessorKey: 'valided',
    header: 'Validado',
  },
  {
    accessorKey: 'import_payments',
    header: 'Importe',
  },
  {
    accessorKey: 'actions',
    header: 'ACCIONES',
    enableHiding: false,
    // cell: ({ row }) => {
    //   const { id } = row.original

    //   return (
    //     <DropdownMenu>
    //       <DropdownMenuTrigger asChild>
    //         <Button
    //           variant="ghost"
    //           className="h-8 w-full p-0"
    //         >
    //           <span className="sr-only">Open menu</span>
    //           <MoreHorizontal className="h-4 w-4" />
    //         </Button>
    //       </DropdownMenuTrigger>
    //       <DropdownMenuContent align="end">
    //         <DropdownMenuItem asChild>
    //           <a href={`/rooms/${id}`}>Editar</a>
    //         </DropdownMenuItem>
    //         <DropdownMenuItem>Ver detalles</DropdownMenuItem>
    //       </DropdownMenuContent>
    //     </DropdownMenu>
    //   )
    // },
  },
]
