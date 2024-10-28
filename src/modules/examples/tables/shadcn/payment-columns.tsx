import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Payment } from "./payments-data";

export const paymentColumns: ColumnDef<Payment>[] = [
    {
        accessorKey: 'id',
        header: 'Id',
        cell: ({ row }) => <div>{row.original.id}</div>,
    },
    {
        accessorKey: 'email',
        header: 'Email',
        cell: ({ row }) => <div>{row.original.email}</div>,
    },
    {
        accessorKey: 'amount',
        header: 'Amount',
        cell: ({ row }) => <div>{String(row.original.amount)}</div>,
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => <div>{row.original.status}</div>,
    },
    {
        accessorKey: 'actions',
        header: 'Actions',
        enableHiding: false,
        cell: ({ row }) => {
            const { id } = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            asChild
                        >
                            <a href={`/rooms/${id}`}>
                                Editar
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    },
];
