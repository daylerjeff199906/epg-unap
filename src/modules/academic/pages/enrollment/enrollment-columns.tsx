import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export interface IEnrollment {
    id: number;
    fecha_creacion: string;
    nombre_usuario: string;
    persona_asignada: string;
    roles: string[];
    permisos: string[];
}

export const enrollementColumns: ColumnDef<IEnrollment>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'fecha_creacion',
        header: 'F. DE CREACION',
    },
    {
        accessorKey: 'nombre_usuario',
        header: 'NOMBRE DE USUARIO',
        cell: ({ row }) => <div>{String(row.original.nombre_usuario)}</div>,
    },
    {
        accessorKey: 'persona_asignada',
        header: 'PERSONA ASIGNADA',
    },
    {
        accessorKey: 'roles',
        header: 'ROLES',
    },
    {
        accessorKey: 'permisos',
        header: 'PERMISOS',
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
                        <Button variant="ghost" className="h-8 w-full p-0">
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
