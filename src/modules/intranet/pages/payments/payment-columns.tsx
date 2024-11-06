import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { Payment } from './payments-data'

export const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'date_payment',
    header: 'F. DE PAGO',
    cell: ({ row }) => <div>{String(row.original.date_payment)}</div>,
  },
  {
    accessorKey: 'code_payment',
    header: 'CÓDIGO DE PAGO',
  },
  {
    accessorKey: 'concept',
    header: 'CONCEPTO',
  },
  {
    accessorKey: 'status',
    header: 'ESTADO',
  },
  {
    accessorKey: 'actions',
    header: 'ACCIONES',
    enableHiding: false,
    cell: ({ row }) => {
      const { id } = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-full p-0"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <a href={`/rooms/${id}`}>Editar</a>
            </DropdownMenuItem>
            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
